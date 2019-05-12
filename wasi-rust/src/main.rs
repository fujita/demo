use std::env;
use std::io::prelude::*;
use std::io::BufReader;
use std::net::TcpStream;

fn main() {
    let args: Vec<String> = env::args().collect();
    let port = 22;
    let mut host = "127.0.0.1".to_owned();

    if args.len() > 1 {
        host = args[1].to_owned()
    }
    host = host + ":" + &format!("{}", port);

    match TcpStream::connect(host) {
        Ok(stream) => {
            println!("Connected to {}", stream.peer_addr().unwrap());
            let stream = BufReader::new(stream);
            for line in stream.lines() {
                println!("{}", line.unwrap())
            }
        }
        Err(e) => panic!("Failed to connect: {}", e),
    }
}
