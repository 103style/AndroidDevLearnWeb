[TOC]

### 参考链接
* [https://www.runoob.com/nodejs/nodejs-tutorial.html](https://www.runoob.com/nodejs/nodejs-tutorial.html)

* [https://www.w3schools.com/nodejs/default.asp](https://www.w3schools.com/nodejs/default.asp)

---

# Node.js 笔记

* [安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)

  [firstApplication.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/firstApplication.js)

* [NPM 使用介绍](https://www.runoob.com/nodejs/nodejs-npm.html)
  * `npm install 库名称`  -  安装在当前文件夹
  * `npm install -g 库名称`  -  全局安装 
  * `npm config set proxy null`  -  取消代理
  * `npm list` or `npm list -g`  -  查看当前 或 全局安装信息
  * `npm uninstall 库名称`  -  卸载库
  * `npm update 库名称`  -  更新
  * `npm search 库名称`  -  搜索
  * `npm init`  -  创建模块
  * `npm publish`  -  发布模块

可以参考 [run the first project](https://github.com/103style/AndroidDevLearnWeb/blob/master/WebTest)

NPM 常用命令
* NPM提供了很多命令，例如 `install` 和 `publish`，使用 `npm help` 可查看所有命令。

* 使用 `npm help <command>` 可查看某条命令的详细帮助，例如 `npm help install`。
  
* 在 `package.json` 所在目录下使用 `npm install . -g` 可先在本地安装当前命令行程序，可用于发布前的本地测试。
  
* 使用 `npm update <package>` 可以把当前目录下 `node_modules` 子目录里边的对应模块更新至最新版本。
  
* 使用 `npm update <package> -g` 可以把全局安装的对应命令行程序更新至最新版。
  
* 使用 `npm cache clear` 可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
  
* 使用 `npm unpublish <package>@<version>` 可以撤销发布自己发布过的某个版本代码。


使用淘宝 NPM 镜像
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

---


## REPL
Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

Node 自带了交互式解释器，可以执行以下任务：
* **读取** - 读取用户输入，解析输入的 Javascript 数据结构并存储在内存中。
* **执行** - 执行输入的数据结构
* **打印** - 输出结果
* **循环** - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

Node 的交互式解释器可以很好的调试 Javascript 代码。

```
$ node
> 1 +4
5
> 5 / 2
2.5
> 3 * 6
18
> 4 - 1
3
> 1 + ( 2 * 3 ) - 4
3
>

//使用变量
> x = 10
10
> var y = 10
undefined
> x + y
20

//多行表达式
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined


//下划线(_)变量 获取上一个表达式的结果
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
>
```

REPL 命令
* `ctrl + c` - 退出当前终端。
  
* `ctrl + c` 按下两次 - 退出 Node REPL。
  
* `ctrl + d` - 退出 Node REPL.
  
* `向上/向下 键` - 查看输入的历史命令
  
* `tab 键` - 列出当前命令
  
* `.help` - 列出使用命令
  
* `.break` - 退出多行表达式
  
* `.clear` - 退出多行表达式
  
* `.save filename` - 保存当前的 Node REPL 会话到指定文件
  
* `.load filename` - 载入当前 Node REPL 会话的文件内容。


---


## 回调函数
```
function foo1(name, age, callback) { }

function foo2(value, callback1, callback2) { }
```

阻塞代码实例
```
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
```

非阻塞代码实例
```
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
```

示例 [syncAndAsync.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/syncAndAsync.js)


---


## 事件循环
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

![事件驱动流程](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/img/event_loop.jpg)

Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为 webserver 一直接受请求而不等待任何读写操作。（这也称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。


Node.js 有多个内置的事件，我们可以通过引入 events 模块
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);

// 触发事件
eventEmitter.emit('eventName');
```

示例 [eventdemo.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/eventdemo.js)


---


## EventEmitter
`events` 模块只提供了一个对象：`events.EventEmitter`。

EventEmitter 的核心就是事件触发与事件监听器功能的封装。

类似Android的 EventBus。

你可以通过 `require("events");` 来访问该模块。

```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

```
//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 


//$ node event.js 
//listener1 arg1 参数 arg2 参数
//listener2 arg1 参数 arg2 参数
```


* `addListener(event, listener)`  --  为指定事件添加一个监听器到监听器数组的尾部。

* `on(event, listener)`  --  为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
  ```
  server.on('connection', function (stream) {
    console.log('someone connected!');
  });
  ```

* `once(event, listener)`  --  为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
  
* `removeListener(event, listener)` -- 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。

* `removeAllListeners([event])` -- 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

* `setMaxListeners(n)` --  默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

* `listeners(event)` -- 返回指定事件的监听器数组。

* `emit(event, [arg1], [arg2], [...])` --  按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

示例： [eventemitter.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/eventemitter.js)



大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

---

## Buffer(缓冲区)
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

### Buffer 与字符编码

Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。
* `ascii` - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
 
* `utf8` - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

* `utf16le` - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U* +10FFFF）。
* `ucs2` - utf16le 的别名。

* `base64` - Base64 编码。

* `latin1` - 一种把 Buffer 编码成一字节编码的字符串的方式。

* `binary` - latin1 的别名。

* `hex` - 将每个字节编码为两个十六进制字符。

---

### 创建 Buffer 类
* `Buffer.alloc(size[, fill[, encoding]])`： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

  ```
  // 创建一个长度为 10、且用 0 填充的 Buffer。
  const buf1 = Buffer.alloc(10);
  
  // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
  const buf2 = Buffer.alloc(10, 1);
  ```

* `Buffer.allocUnsafe(size)`： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

  ```
  // 创建一个长度为 10、且未初始化的 Buffer。
  // 这个方法比调用 Buffer.alloc() 更快，
  // 但返回的 Buffer 实例可能包含旧数据，
  // 因此需要使用 fill() 或 write() 重写。
  const buf3 = Buffer.allocUnsafe(10);
  ```

* `Buffer.allocUnsafeSlow(size)`

* `Buffer.from(array`)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

  ```
  // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
  const buf4 = Buffer.from([1, 2, 3]);
  ```

* `Buffer.from(arrayBuffer[, byteOffset[, length]])`： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。


* `Buffer.from(buffer)`： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例

* `Buffer.from(string[, encoding])`： 返回一个被 string 的值初始化的新的 Buffer 实例

  ```
  // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
  const buf5 = Buffer.from('tést');
  
  // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
  const buf6 = Buffer.from('tést', 'latin1');
  ```

---

### 写入缓冲区
语法：`buf.write(string[, offset[, length]][, encoding])`，返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
* `string` - 写入缓冲区的字符串。
* `offset` - 缓冲区开始写入的索引值，默认为 0 。
* `length` - 写入的字节数，默认为 buffer.length
* `encoding` - 使用的编码。默认为 'utf8' 。

---

### 从缓冲区读取数据
语法：`buf.toString([encoding[, start[, end]]])`，返回值为 解码缓冲区数据并使用指定的编码返回字符串。
* `encoding` - 使用的编码。默认为 'utf8' 。
* `start` - 指定开始读取的索引位置，默认为 0。
* `end` - 结束位置，默认为缓冲区的末尾。

---

### 将 Buffer 转换为 JSON 对象
语法 `buf.toJSON()`，返回 JSON 对象。

`JSON.stringify(buf)` 将 buffer 转为 json 字符串

```
//buffer 转 json
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

//json 转 buffer
const copybuf = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});
```

---

### 缓冲区合并
语法：`Buffer.concat(list[, totalLength])`，返回一个多个成员合并的新 Buffer 对象。
* `list` - 用于合并的 Buffer 对象数组列表。
* `totalLength` - 指定合并后Buffer对象的总长度。

---

### 缓冲区比较
语法 `buf.compare(otherBuffer);`，返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
* `otherBuffer` - 与 buf 对象比较的另外一个 Buffer 对象。

---

### 拷贝缓冲区
语法：`buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])`，无返回值。
* `targetBuffer` - 要拷贝的 Buffer 对象。
* `targetStart` - 数字, 可选, 默认: 0
* `sourceStart` - 数字, 可选, 默认: 0
* `sourceEnd` - 数字, 可选, 默认: buffer.length

---

### 缓冲区裁剪
语法：`buf.slice([start[, end]])`
* `start` - 数字, 可选, 默认: 0
* `end` - 数字, 可选, 默认: buffer.length

---

[更多方法参考](https://www.runoob.com/nodejs/nodejs-buffer.html)

---

### buffer方法示例
[buffer.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/buffer.js)

---


## Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。

Node.js，Stream 有四种流类型：
* `Readable` - 可读操作。

* `Writable` - 可写操作。

* `Duplex` - 可读可写操作.

* `Transform` - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
* `data` - 当有数据可读时触发。

* `end` - 没有更多的数据可读时触发。

* `error` - 在接收和写入过程中发生错误时触发。

* `finish` - 所有数据已被写入到底层系统时触发。


从流中读取、写入数据 示例 : [stream.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/stream.js)

---

### 管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
```
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
```

---


### 链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
```
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```

示例 : [stream.js  `function chainStream()`](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/stream.js)

---


## 模块系统
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
```
//表示引入当前目录下的 hello 模块
var hello = require('./hello');
hello.world();

//or
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
```

示例 : [moduletest.js  ](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/moduletest.js)

---

### 服务端的模块放在哪里
[firstApplication.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/firstApplication.js) 中我们有用到 `var http = require("http");`

Node.js 中自带了一个叫做 `http` 的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。

Node.js 的 require 方法中的文件查找策略如下图所示：

![nodejs-require.jpg](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/img/nodejs-require.jpg)


* 从文件模块缓存中加载
  
  尽管原生模块与文件模块的优先级不同，但是都会优先从文件模块的缓存中加载已经存在的模块。

* 从原生模块加载

  原生模块的优先级仅次于文件模块缓存的优先级。require 方法在解析文件名之后，优先检查模块是否在原生模块列表中。以http模块为例，尽管在目录下存在一个 http/http.js/http.node/http.json 文件，require("http") 都不会从这些文件中加载，而是从原生模块中加载。

* 从文件加载

  当文件模块缓存中不存在，而且不是原生模块的时候，Node.js 会解析 require 方法传入的参数，并从文件系统中加载实际的文件。 加载过程中的包装和编译细节`开头的npm使用介绍` 中有介绍。


require方法接受以下几种参数的传递：
* `http`、`fs`、`path`等原生模块。
* `./mod` 或 `../mod`  --  相对路径的文件模块。
* `/pathtomodule/mod`  --  绝对路径的文件模块。
* `mod`  --  非原生模块的文件模块。

---

> **exports 和 module.exports 的使用**
>
> 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。

> **不建议同时使用 exports 和 module.exports。**
> 
> 如果先使用 exports 对外暴露属性或方法，再使用 module.exports 暴露对象，会使得 exports 上暴露的属性或者方法失效。
>
> 原因在于，exports 仅仅是 module.exports 的一个引用

--- 


## 函数

在 JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

Node.js 中函数的使用与 JavaScript 类似。

```
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello");
```

匿名函数
```
function execute(someFunction, value) {
  someFunction(value);
}
execute(function(word){ console.log(word) }, "Hello");
```


```
//提取匿名函数
var http = require("http");
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequest).listen(8888);
```

---

## 路由
我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。

主要是隔离 请求逻辑 和  请求参数。

```
//server.js
var http = require("http");
var url = require("url");
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
 
    route(pathname);
 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;
```

```
//router.js
function route(pathname) {
  console.log("About to route a request for " + pathname);
}
 
exports.route = route;
```


```
// index.js
var server = require("./server");
var router = require("./router");
 
server.start(router.route);
```

---

## 全局对象

* `__filename`  --  表示当前正在执行的脚本的文件名。

* `__dirname`  -- 表示当前执行脚本所在的目录。

* `setTimeout(cb, ms)`  --  在指定的毫秒(ms)数后执行指定函数(cb)，只执行一次指定函数。[京东的学习项目有用过]((https://github.com/103style/AndroidDevLearnWeb/blob/master/jd))

* `clearTimeout(t)` -- 用于停止一个之前通过 setTimeout() 创建的定时器。[京东的学习项目的 slider.js 有用过]((https://github.com/103style/AndroidDevLearnWeb/blob/master/jd))

* `setInterval(cb, ms)` -- 在指定的毫秒(ms)数后执行指定函数(cb)， 会一直执行。[京东的学习项目的 slider.js 有用过]((https://github.com/103style/AndroidDevLearnWeb/blob/master/jd))

* `clearInterval()`  --  停止 `setInterval(cb, ms)` 指定的任务。[京东的学习项目的 slider.js 有用过]((https://github.com/103style/AndroidDevLearnWeb/blob/master/jd))
  ```
  var auto = setInterval(() => cb, 2000);
  clearInterval(auto);
  ```

* `console` -- 提供控制台标准输出
  * `console.log([data][, ...])`  --  向标准输出流打印字符并以换行符结束。
  * `console.info([data][, ...])`  --  该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。
  * `console.error([data][, ...])`  --  输出错误消息的。控制台在出现错误时会显示是红色的叉子。
  * `console.warn([data][, ...])`  --  输出警告消息。控制台出现有黄色的惊叹号。
  * `console.dir(obj[, options])`  --  用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
  * `console.time(label)`  --  输出时间，表示计时开始。
  * `console.timeEnd(label)`  --  结束时间，表示计时结束。
  * `console.trace(message[, ...])`  --  当前执行的代码在堆栈中的调用路径
  * `console.assert(value[, message][, ...])`  --  用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。



* `process`  --  process 是一个全局变量，它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。 [方法参考手册](https://www.runoob.com/nodejs/nodejs-global-object.html).
  * `exit` -- 当进程准备退出时触发。
  * `beforeExit`  --  当 node 清空事件循环，并且没有其他安排时触发这个事件。
  * `uncaughtException`  --  当一个异常冒泡回到事件循环，触发这个事件。
  * `Signal 事件`  --  当进程接收到信号时就触发。
```
process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");
```

---

## Process 方法参考手册
* `abort()` -- 这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。

* `chdir(directory)` -- 改变当前工作进程的目录，如果操作失败抛出异常。
* `cwd()` -- 返回当前进程的工作目录
* `exit([code])` -- 使用指定的 code 结束进程。如果忽略，将会使用 code 0。
* `getgid()`  -- 获取进程的群组标识（参见 getgid(2)）。获取到得时群组的数字 id，而不是名字。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `setgid(id)` -- 设置进程的群组标识（参见 setgid(2)）。可以接收数字 ID 或者群组名。如果指定了群组名，会阻塞等待解析为数字 ID 。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `getuid()` -- 获取进程的用户标识(参见 getuid(2))。这是数字的用户 id，不是用户名。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `setuid(id)` -- 设置进程的用户标识（参见setuid(2)）。接收数字 ID或字符串名字。果指定了群组名，会阻塞等待解析为数字 ID 。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `getgroups()` -- 返回进程的群组 iD 数组。POSIX 系统没有保证一定有，但是 node.js 保证有。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `setgroups(groups)` -- 设置进程的群组 ID。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `initgroups(user, extra_group)` -- 读取 /etc/group ，并初始化群组访问列表，使用成员所在的所有群组。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。
* `kill(pid[, signal])` -- 发送信号给进程. pid 是进程id，并且 signal 是发送的信号的字符串描述。信号名是字符串，比如 'SIGINT' 或 'SIGHUP'。如果忽略，信号会是 'SIGTERM'。
* `memoryUsage()` -- 返回一个对象，描述了 Node 进程所用的内存状况，单位为字节。
* `nextTick(callback)` -- 一旦当前事件循环结束，调用回调函数。
* `umask([mask])` -- 设置或读取进程文件的掩码。子进程从父进程继承掩码。如果mask 参数有效，返回旧的掩码。否则，返回当前掩码。
* `uptime()` -- 返回 Node 已经运行的秒数。
  
* `hrtime()` -- 返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组。它是相对于过去的任意事件。该值与日期无关，因此不受时钟漂移的影响。主要用途是可以通过精确的时间间隔，来衡量程序的性能。你可以将之前的结果传递给当前的 process.hrtime() ，会返回两者间的时间差，用来基准和测量时间间隔。



示例 : [process.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/nodejs/js/process.js)

---


## 常用工具

### util
util 是一个Node.js 核心模块。 `const util = require('util');`

* `util.callbackify(original)` 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。

  ```
  const util = require('util');
  
  async function fn() {
    return 'hello world';
  }
  const callbackFunction = util.callbackify(fn);
  
  callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });
  ```

  回调函数是异步执行的，并且有异常堆栈错误追踪。 如果回调函数抛出一个异常，进程会触发一个 'uncaughtException' 异常，如果没有被捕获，进程将会退出。


* `util.inherits(constructor, superConstructor)` 是一个实现对象间原型继承的函数。

---