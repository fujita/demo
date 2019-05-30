(module
  (import "wasi_unstable" "fd_hoge" (func $__wasi_hoge (param i32 i32 i32 i32) (result i32)))
  (func $_start
    i32.const 1
    i32.const 0
    i32.const 1
    i32.const 24
    call $__wasi_hoge
    drop)
  (memory 1)
  (data (i32.const 0) "\08\00\00\00\0e\00\00\00Hello, world!\0A")
  (export "_start" (func $_start)))
