// SPDX-License-Identifier: GPL-2.0

use kernel::io_buffer::{IoBufferReader, IoBufferWriter};
use kernel::prelude::*;
use kernel::sync::Mutex;
use kernel::{chrdev, file, init_static_sync};

module! {
    type: HelloChrdev,
    name: b"hello_chrdev",
    author: b"FUJITA Tomonori",
    description: b"Rust character device",
    license: b"GPL v2",
}

const BUFSIZE: usize = 64;

init_static_sync! {
    static BUF: Mutex<[u8;BUFSIZE]> = [0u8;BUFSIZE];
}

struct HelloChrdevFile;

#[vtable]
impl file::Operations for HelloChrdevFile {
    fn open(_this: &(), _file: &file::File) -> Result {
        Ok(())
    }

    fn read(
        _this: (),
        _file: &file::File,
        data: &mut impl IoBufferWriter,
        offset: u64,
    ) -> Result<usize> {
        if data.is_empty() || offset != 0 {
            return Ok(0);
        }

        let buf = BUF.lock();
        let len = if data.len() > buf.len() {
            buf.len()
        } else {
            data.len()
        };

        data.write_slice(&(*buf)[..len])?;
        Ok(len)
    }

    fn write(
        _this: (),
        _file: &file::File,
        input: &mut impl IoBufferReader,
        offset: u64,
    ) -> Result<usize> {
        let mut buf = BUF.lock();
        let input = input.read_all()?;

        buf.clone_from_slice(&[0u8; BUFSIZE]);
        let input_len = input.len() - offset as usize;

        let len = if buf.len() > input_len {
            input_len
        } else {
            buf.len()
        };

        for i in 0..len {
            buf[i] = input[i + offset as usize];
        }
        Ok(len)
    }
}

struct HelloChrdev {
    _dev: Pin<Box<chrdev::Registration<1>>>,
}

impl kernel::Module for HelloChrdev {
    fn init(name: &'static CStr, module: &'static ThisModule) -> Result<Self> {
        let mut reg = chrdev::Registration::new_pinned(name, 0, module)?;
        reg.as_mut().register::<HelloChrdevFile>()?;

        Ok(HelloChrdev { _dev: reg })
    }
}
