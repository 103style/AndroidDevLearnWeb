[TOC]

# 参考链接
* [https://www.w3schools.com/js/js_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)
* [JavaScript HTML DOM: https://www.runoob.com/js/js-htmldom.html](https://www.runoob.com/js/js-htmldom.html)

---

# JavaScript HTML DOM

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

DOM(Document Object Model).

HTML DOM 模型被构造为对象的树：
![HTML DOM 模型被构造为对象的树](https://www.runoob.com/images/pic_htmltree.gif)

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应


---


## 查找 HTML 元素
可以通过 `id` / `类名` / `标签名` 来查找元素。
* `var x = document.getElementById("id");`
* `var y = x.getElementsByTagName("p");`
* `var z = document.getElementsByClassName("classname");`

---

## 改变 HTML 输出流
**绝对不要在文档(DOM)加载完成之后使用 document.write()，这会覆盖该文档！**

* 修改 `body`的内容为 `Date()`
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <script>
          document.write(new Date())
      </script>
  </body>
  </html>
  ```

* 改变 HTML 内容: “`document.getElementById(id).innerHTML = 新的 HTML`”。
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <p id="p1">Hello World!</p>
      <p class="classdemo">Hello World!</p>
      <script>
          document.getElementById("p1").innerHTML = "新文本!";
  
          //通过类名获取到一个类名为 classdemo 的元素集合
          document.getElementsByClassName("classdemo")[0].innerHTML = "Hello getElementByClassName.";
      </script>
  </body>
  </html>
  ```

* 改变 HTML 属性: “`document.getElementById(id).attribute = 新属性值`”。
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <img id="image" src="smiley.gif">
      <script>
          document.getElementById("image").src = "landscape.jpg";
      </script>
  </body>
  </html>
  ```

---


## 改变CSS
语法：“`document.getElementById(id).style.property = 新样式`”
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
</head>
<body>
    <p id="p1">Hello World!</p>
    <p id="p2">Hello World!</p>
    <script>
        document.getElementById("p2").style.color = "blue";
        document.getElementById("p2").style.fontFamily = "Arial";
        document.getElementById("p2").style.fontSize = "larger";
    </script>
</body>
</html>
```

---


## 使用事件
使用点击事件示例：
```
<!DOCTYPE html>
<html>
<body>
    <h1 id="id1">我的标题 1</h1>
    <button type="button" onclick="document.getElementById('id1').style.color='red'">点我!</button>
</body>
</html>
```

使用 JavaScript 来向 HTML 元素分配事件：
```
<script>
    document.getElementById("id1").onclick = function() {
        displayDate()
    };
</script>
```

---

## [JavaScript HTML DOM 事件](https://www.w3schools.com/js/js_htmldom_events.asp)
* `onload` 、`onunload` 事件：会在用户进入或离开页面时被触发。

  `onload` 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

  `onload` 和 `onunload` 事件可用于处理 cookie。

* `onchange` 事件：常结合对输入字段的验证来使用。
  ```
  <input type="text" id="fname" onchange="upperCase()">
  ```
  类似 Android 中 `EditText` 设置了 `TextWatcher` 中的 `afterTextChanged` 方法。

* `onmouseover` 和 `onmouseout` 事件：可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <div onmouseover="mOver(this)" onmouseout="mOut(this)">Mouse Over Me</div>
      <script>
          function mOver(obj) {
              obj.innerHTML = "Thank You"
          }
          function mOut(obj) {
              obj.innerHTML = "Mouse Over Me"
          }
      </script>
  </body>
  </html>
  ```

* `onmousedown`、`onmouseup` 以及 `onclick` 事件：构成了鼠标点击事件的所有部分。

  首先当点击鼠标按钮时，会触发 `onmousedown` 事件，当释放鼠标按钮时，会触发 `onmouseup` 事件，最后，当完成鼠标点击时，会触发 `onclick` 事件。


[更多](https://www.w3schools.com/js/js_htmldom_events.asp)

---


## [JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* [https://www.runoob.com/js/js-htmldom-eventlistener.html](https://www.runoob.com/js/js-htmldom-eventlistener.html)

语法："`element.addEventListener(event, function, useCapture);`"
* `event` 是事件的类型 (如 "click" 或 "mousedown").
* `function` 是事件触发后调用的函数。
* `useCapture` 是个布尔值用于描述事件是冒泡还是捕获。默认 `false`，该参数是可选的。 参考 "事件冒泡或事件捕获"
  * `true` 是外层元素先触发事件
  * `false` 是内层先触发点击。

```
<script>
    document.getElementById("id").addEventListener("click", function() {
        alert("Hello World!");
    });
</script>
```

`addEventListener()` 方法用于向指定元素添加事件句柄。

`addEventListener()` 方法添加的事件句柄不会覆盖已存在的事件句柄。

你可以向一个元素添加多个事件句柄。

你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。

你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。

`addEventListener()` 方法可以更简单的控制事件（冒泡与捕获）。

当你使用 `addEventListener()` 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。

你可以使用 `removeEventListener()` 方法来移除事件的监听。


[更多](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

---

## 事件冒泡或事件捕获

事件传递有两种方式：**冒泡** 与 **捕获**。

事件传递定义了元素事件触发的顺序。 如果你将 `<p>` 元素插入到 `<div>` 元素中，用户点击 `<p>` 元素, 哪个元素的 `"click"`事件先被触发呢？

在 **冒泡** 中，内部元素的事件会先被触发，然后再触发外部元素，即： `<p>` 元素的点击事件先触发，然后会触发 `<div>` 元素的点击事件。

在 **捕获** 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： `<div>` 元素的点击事件先触发 ，然后再触发 `<p>` 元素的点击事件。

`addEventListener()` 方法可以指定 "`useCapture`" 参数来设置传递类型：

---


## [JavaScript HTML DOM 元素 (节点)](https://www.runoob.com/js/js-htmldom-elements.html)
向文档中添加和移除元素(节点)。

* `appendChild()`：添加新元素到尾部
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <div id="div1">
          <p id="p1">这是一个段落。</p>
          <p id="p2">这是另外一个段落。</p>
      </div>
      <script>
          //创建 p 元素
          var para = document.createElement("p");
          //创建文本节点
          var node = document.createTextNode("这是一个新的段落。");
          //将文本节点添加到p元素中
          para.appendChild(node);
          //将 p元素添加到 id 为 div1 的元素中
          var element = document.getElementById("div1");
          element.appendChild(para);
      </script>
  </body>
  </html>
  ```

* `insertBefore()`：将新元素添加到开始位置

* `removeChild` 移除已存在的元素
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <div id="div1">
          <p id="p1">这是一个段落。</p>
          <p id="p2">这是另外一个段落。</p>
      </div>
      <script>
          var parent = document.getElementById("div1");
          var child = document.getElementById("p1");
          parent.removeChild(child);
      </script>
  </body>
  </html>
  ```

* `replaceChild()`：替换 HTML 元素
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <div id="div1">
          <p id="p1">这是一个段落。</p>
          <p id="p2">这是另外一个段落。</p>
      </div>
  
      <script>
          var para = document.createElement("p");
          var node = document.createTextNode("这是一个新的段落。");
          para.appendChild(node);
  
          var parent = document.getElementById("div1");
          var child = document.getElementById("p1");
          parent.replaceChild(para, child);
      </script>
  </body>
  </html>
  ```

---


## [JavaScript HTML DOM 集合 -- HTMLCollection](https://www.runoob.com/js/js-htmldom-collections.html)

`getElementsByTagName()` 和 `getElementsByClassName()` 都是返回 `HTMLCollection` 对象。

`HTMLCollection` 对象类似包含 HTML 元素的一个数组。


**注意： HTMLCollection 不是一个数组！**

HTMLCollection 看起来可能是一个数组，但其实不是。

你可以像数组一样，使用索引来获取元素。

HTMLCollection 无法使用数组的方法： `valueOf()`, `pop()`, `push()`, 或 `join()`。

```
var x = document.getElementsByTagName("p");

y = x[1];
```

---


## [JavaScript HTML DOM 节点列表 -- NodeList](https://www.runoob.com/js/js-htmldom-nodelist.html)

**节点列表不是一个数组！**

`NodeList` 对象是一个从文档中获取的节点列表 (集合) 。

一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。

所有浏览器的 `childNodes` 属性返回的是 `NodeList` 对象。

大部分浏览器的 `querySelectorAll()` 返回 `NodeList` 对象。

```
<!DOCTYPE html>
<html>
<body>
    <h2>JavaScript HTML DOM!</h2>
    <p>Hello World!</p>
    <p>Hello Runoob!</p>
    <p id="demo"></p>
    <script>
        var myNodelist = document.querySelectorAll("p");
        document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myNodelist[1].innerHTML + '</span>';
    </script>
</body>
</html>
```

**length 属性**
```
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;

var myNodelist = document.querySelectorAll("p");
for (var i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "red";
}
```

---

## HTMLCollection 与 NodeList 的区别
相同点：
* 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。
* 都有 length 属性。
* 都不是一个数组！ 

不同点：
* `HTMLCollection` 是 HTML 元素的集合。
* `NodeList` 是一个文档节点的集合。
* `HTMLCollection` 元素可以通过 name，id 或索引来获取。
* `NodeList` 只能通过索引来获取。
* 只有 `NodeList` 对象有包含属性节点和文本节点。

---