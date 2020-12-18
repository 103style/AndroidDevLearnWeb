[TOC]

# JavaScript

> [参考链接: https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)

> [参考链接: https://www.runoob.com/js/js-tutorial.html](https://www.runoob.com/js/js-tutorial.html)

语法和Java差不多，大致浏览一遍上面的链接的内容就行。

`==`  是 值相等 

`===` 是 值相等 并且 类型相等


> [JavaScript 实例 https://www.runoob.com/js/js-examples.html](https://www.runoob.com/js/js-examples.html)

---


* 变量声明
  
  声明变量的区别就是将变量名前面的类型改成了 `var`。
   
  `const` 和 `let`:
  * `let` 声明的变量只在 `let` 命令所在的代码块内有效。
  * `const` 声明一个只读的常量，一旦声明，常量的值就不能改变。

  注意，**类似 `var x;` 这样未复制的变量会被 [变量提升](https://www.runoob.com/js/js-hoisting.html)， 就是说 这样的变量声明最后会移动到代码最前面。**
  ```
  var x1;        
  var x2 = 5;          
  var x3 = "John";  
  var x4 = 123e5; 
  var x5 = true;
  
  //当您声明新变量时，可以使用关键词 "new" 来声明其类型：
  var a = new String;
  var b = new Number;
  var c = new Boolean;
  var d = new Array;
  var e = new Object;
  ```

* 数组 Array
  ```
  var cars = new Array();
  cars[0]="Saab";
  cars[1]="Volvo";
  cars[2]="BMW";
  ```

* 对象
  ```
  var person={firstname:"John", lastname:"Doe", id:5566};
  ```

---

## 异步
* `setTimeout(fuction, millisecond)`
  ```
  //三秒钟之后输出 Hello world!
  setTimeout(fuction(){
      console.log("Hello world!")
  }, 3000);
  ```
  
  ```
  //3秒之后将 id 为 demo 的元素的内容改成  Hello world!
  function print() {
      document.getElementById("demo").innerHTML="Hello world!";
  }
  setTimeout(print, 3000);
  ```

---


## Promise  
`Promise` 是一个 `ECMAScript 6` 提供的类，目的是更加优雅地书写复杂的异步任务。

由于 `Promise` 是 `ES6` 新增加的，所以一些旧的浏览器并不支持，苹果的 `Safari 10` 和 `Windows` 的 `Edge 14` 版本以上浏览器才开始支持 `ES6` 特性。

类似 `RxJava` 的链式调用， 解决嵌套调用。
```
//分三次输出字符串，第一次间隔 1 秒，第二次间隔 4 秒，第三次间隔 3 秒
setTimeout(function () {
console.log("First");
setTimeout(function () {
    console.log("Second");
    setTimeout(function () {
        console.log("Third");
    }, 3000);
}, 4000);
}, 1000);


//Promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});
```

`Promise` 构造函数 `Promise(function(resovle, reject){})` 只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。

`resolve` 和 `reject` 都是函数，调用 `resolve` 会执行下一个 `then`，出现异常时我们调用 `reject`，然后就会走到 `catch`，然后再走 `final`。

> `Promise` 类有 `.then()` `.catch()` 和 `.finally()` 三个方法，这三个方法的参数都是一个函数。
> * `.then()` 可以将参数中的函数添加到当前 `Promise` 的正常执行序列。 `.then()` 传入的函数会按顺序依次执行，有任何异常都会直接跳到 `catch` 序列。
> * `.catch()` 则是设定 `Promise` 的异常处理序列。
> * `.finally()` 是在 `Promise` 执行的最后一定会执行的序列。 
>
> `resolve()` 中可以放置一个参数用于向下一个 `then` 传递一个值，`then` 中的函数也可以返回一个值传递给 `then`。但是，如果 `then` 中返回的是一个 Promise 对象，那么下一个 `then` 将相当于对这个返回的 `Promise` 进行操作，这一点从刚才的计时器的例子中可以看出来。
>
> `reject()` 参数中一般会传递一个异常给之后的 `catch` 函数用于处理异常。
>
> 但是请注意以下两点：
> * **`resolve` 和 `reject` 的作用域只有起始函数，不包括 `then` 以及其他序列**；
> * **`resolve` 和 `reject` 并不能够使起始函数停止运行，别忘了 `return`**。

```
new Promise(function (resolve, reject) {
    console.log(1111);
    resolve(2222);
}).then(function (value) {
    console.log(value);
    return 3333;
}).then(function (value) {
    console.log(value);
    throw "An error";
}).catch(function (err) {
    console.log(err);
});
//输出：
//1111
//2222
//3333
//An error
```
```
new Promise(function(resolve, reject){
	console.log("1");
	resolve(2);
}).then(function(value){
	console.log("next = " + value);
	return new Promise(function(resolve,reject){
		reject("an error!")
	});
}).then(function(){
	console.log("3");
}).catch(function(err){
	console.log(err);
}).finally(function(){
	console.log("last!");
});
//输出：
//1
//t = 2
//an error!
//last!
```

---

## Promise 函数
通过 Promise函数 修改上面的任务: 分三次输出字符串，第一次间隔 1 秒，第二次间隔 4 秒，第三次间隔 3 秒
```
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
```

---

## 异步函数
异步函数（async function）是 `ECMAScript 2017` (ECMA-262) 标准的规范，几乎被所有浏览器所支持，除了 Internet Explorer。

对于上面的 分三次输出字符串的任务，我们可以这样写:
```
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();
```

**异步函数 `async function` 中可以使用 `await` 指令，`await` 指令后必须跟着一个 `Promise`，异步函数会在这个 `Promise` 运行中暂停，直到其运行结束再继续运行。**

处理异常的示例：
```
async function asyncFunc() {
    try {
        await new Promise(function (resolve, reject) {
            throw "Some error"; 
            //or
            //reject("Some error")
        });
    } catch (err) {
        console.log(err);
    }
}
asyncFunc();
```

---


### 函数表达式
```
//函数格式
function myFunction(a, b) {
    return a * b;
}
```

```
//函数表达式
var x = function (a, b) {return a * b};
var z = x(4, 3);
```

---

## Function() 构造函数
```
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
```

---

## 函数提升（Hoisting）
类似 [变量提升](https://www.runoob.com/js/js-hoisting.html)。

函数可以在声明之前调用：
```
myFunction(5);

function myFunction(y) {
    return y * y;
}
```

---

## 箭头函数
ES6 新增了箭头函数。 

类似 `Lambda` 表达式， 只不过 `->` 变成了 `=>`
```
(参数1, 参数2, …, 参数N) => { 函数声明 }

(参数1, 参数2, …, 参数N) => 表达式(单一)
// 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }


// ES5
var x = function(x, y) {
     return x * y;
}
 
// ES6
const x = (x, y) => x * y;
```

---


## [HMTL DOM](https://github.com/103style/AndroidDevLearnWeb/blob/master/JavaScript/HTML_DOM.md)


---

## [JavaScript对象](https://github.com/103style/AndroidDevLearnWeb/blob/master/JavaScript/Object.md)

---

## [浏览器对象模型 -- Browser Object Model (BOM)](https://github.com/103style/AndroidDevLearnWeb/blob/master/JavaScript/BrowserObjectModel.md)

---