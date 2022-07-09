# Rust out-of-tree Linux kernel module

A simple character device driver is used to write an article about Rust support in Linux kernel.

This is tested with [Rust-for-Linux tree](https://github.com/Rust-for-Linux/linux) ([d6657ee](https://github.com/Rust-for-Linux/linux/commit/d6657eea5c1e8c9c730f8ea27d997157d0744f17)), with `CONFIG_RUST` option enabled.

```bash
$ make KDIR=~/git/linux LLVM=1
```
