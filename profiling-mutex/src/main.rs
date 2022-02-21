use chrono::prelude::*;
use std::sync::Arc;
use tokio::sync::Mutex;
use tracing::field::{Field, Visit};
use tracing::{span, Event};
use tracing_subscriber::layer::Context;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::{prelude::*, EnvFilter};

struct MyLayer {}

impl MyLayer {
    fn new() -> Self {
        MyLayer {}
    }
}

struct MyVisitor {
    locked: Option<bool>,
}

impl Visit for MyVisitor {
    fn record_debug(&mut self, _field: &Field, _value: &dyn std::fmt::Debug) {}

    fn record_bool(&mut self, field: &Field, value: bool) {
        if field.name() == "locked" {
            self.locked = Some(value);
        }
    }
}

struct LocVisitor {
    file: Option<String>,
    line: u64,
}

impl Visit for LocVisitor {
    fn record_debug(&mut self, field: &Field, value: &dyn std::fmt::Debug) {
        let _ = (field, value);
    }

    fn record_u64(&mut self, field: &Field, value: u64) {
        if field.name() == "loc.line" {
            self.line = value;
        }
    }

    fn record_str(&mut self, field: &Field, value: &str) {
        if field.name() == "loc.file" {
            self.file = Some(value.to_string());
        }
    }
}

impl<S> tracing_subscriber::Layer<S> for MyLayer
where
    S: tracing::Subscriber + for<'a> tracing_subscriber::registry::LookupSpan<'a>,
{
    fn on_new_span(&self, attrs: &span::Attributes<'_>, id: &span::Id, ctx: Context<'_, S>) {
        let span = ctx.span(id).expect("Span not found, this is a bug");
        let mut extensions = span.extensions_mut();

        let mut v = LocVisitor {
            file: None,
            line: 0,
        };
        attrs.record(&mut v);
        if let Some(file) = v.file {
            if extensions.get_mut::<String>().is_none() {
                extensions.insert(format!("file=\"{}\" line={}", file, v.line));
            }
        }
    }

    fn on_event(&self, event: &Event<'_>, ctx: Context<'_, S>) {
        if event.metadata().module_path() == Some("tokio::sync::mutex") {
            if let Some(m) = ctx
                .span(ctx.current_span().id().unwrap())
                .unwrap()
                .extensions()
                .get::<String>()
            {
                let mut v = MyVisitor { locked: None };
                event.record(&mut v);

                let locked = if v.locked.unwrap() {
                    "Locked"
                } else {
                    "Released"
                };
                println!(
                    "{}: Mutex ({}) {}",
                    Utc::now().format("%H:%M:%S%.f"),
                    m,
                    locked
                );
            }
        }
    }
}

#[tokio::main]
async fn main() {
    let filter_layer = EnvFilter::try_from_default_env()
        .or_else(|_| EnvFilter::try_new("trace"))
        .unwrap();

    tracing_subscriber::registry()
        .with(filter_layer)
        .with(MyLayer::new())
        .init();

    let count = Arc::new(Mutex::new(0));
    let mut handlers = Vec::new();

    let my_count = Arc::clone(&count);
    let h = tokio::spawn(async move {
        loop {
            let mut lock = my_count.lock().await;
            *lock += 1;
            tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;
            drop(lock);
        }
    });
    handlers.push(h);

    let my_count = Arc::clone(&count);
    let h = tokio::spawn(async move {
        loop {
            let mut lock = my_count.lock().await;
            *lock += 1;
            tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
            drop(lock);
        }
    });
    handlers.push(h);

    for h in handlers {
        let _ = h.await;
    }
}
