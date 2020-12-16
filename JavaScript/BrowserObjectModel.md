[TOC]

# 浏览器对象模型 (BOM)

## 参考链接
[浏览器对象模型: https://www.runoob.com/js/js-window.html](https://www.runoob.com/js/js-window.html)

---


## [Window对象](https://www.w3schools.com/jsref/obj_window.asp)

> api参考链接 [https://www.w3schools.com/jsref/obj_window.asp](https://www.w3schools.com/jsref/obj_window.asp)

所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。


`Window 尺寸`：
```
//Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)


//Internet Explorer 8、7、6、5：
document.documentElement.clientHeight //窗口内容区域的高度 包括空白部分
document.documentElement.clientWidth //窗口内容区域的宽度 包括空白部分
```

or

```
document.body.clientHeight // 内容的高度
document.body.clientWidth // 内容的宽度
```

```
<!DOCTYPE html>
<html>

<body>
    <h1 id="title">Click me!</h1>
    <script>
        document.getElementById("title").onclick = function() {
            console.log("window.innerHeight = " + window.innerHeight)
            console.log("window.innerWidth = " + window.innerWidth)

            console.log("document.body.clientHeight = " + document.body.clientHeight)
            console.log("document.body.clientWidth = " + document.body.clientWidth)
        };
    </script>
</body>

</html>

//输出：
//window.innerHeight = 284
//test.html:9 window.innerWidth = 875
//test.html:11 document.body.clientHeight = 42
//test.html:12 document.body.clientWidth = 859
```



* [window.open()](https://www.w3schools.com/jsref/met_win_open.asp) - 打开新窗口
* [window.close()](https://www.w3schools.com/jsref/met_win_close.asp) - 关闭当前窗口
  ```
  <!DOCTYPE html>
  <html>
  <body>
      <h1 id="title">Click me!</h1>
      <script>
          document.getElementById("title").onclick = function() {
              console.log("window.close()")
              window.close()
          };
      </script>
  </body>
  </html>
  ```
* [window.moveTo()](https://www.w3schools.com/jsref/met_win_moveto.asp) - 移动当前窗口 
* [window.resizeTo()](https://www.w3schools.com/jsref/met_win_resizeto.asp) - 调整当前窗口的尺寸

---

## [Window Screen](https://www.w3schools.com/jsref/obj_screen.asp)
* `screen.availWidth` - 可用的屏幕宽度
* `screen.availHeight` - 可用的屏幕高度

---

## [Window Location](https://www.w3schools.com/jsref/obj_location.asp)
window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

* `location.hostname` - 返回 web 主机的域名
* `location.pathname` - 返回当前页面的路径和文件名
* `location.port` - 返回 web 主机的端口 （80 或 443）
* `location.protocol` - 返回所使用的 web 协议（http: 或 https:）
* `location.href` - 返回（当前页面的）整个 URL
* `location.assign("url")` - 方法加载新的文档。

[更多](https://www.w3schools.com/jsref/obj_location.asp)

---

## [Window History](https://www.w3schools.com/jsref/obj_history.asp)
window.history 对象包含浏览器的历史。

* `history.back()` - 与在浏览器点击后退按钮相同
* `history.forward()` - 与在浏览器中点击向前按钮相同

[更多](https://www.w3schools.com/jsref/obj_history.asp)


---

## [Window Navigator](https://www.w3schools.com/jsref/obj_navigator.asp)
window.navigator 对象包含有关访问者浏览器的信息。
```
<script>
    txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
    txt += "<p>浏览器名称: " + navigator.appName + "</p>";
    txt += "<p>浏览器版本: " + navigator.appVersion + "</p>";
    txt += "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
    txt += "<p>硬件平台: " + navigator.platform + "</p>";
    txt += "<p>用户代理: " + navigator.userAgent + "</p>";
    txt += "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
    document.getElementById("example").innerHTML = txt;
</script>
```

**注意！！！** 来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
* navigator 数据可被浏览器使用者更改
* 一些浏览器对测试站点会识别错误
* 浏览器无法报告晚于浏览器发布的新操作系统

[更多](https://www.w3schools.com/jsref/obj_navigator.asp)

---

## [JavaScript 弹窗](https://www.w3schools.com/js/js_popup.asp)

可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。

警告框
```
window.alert("sometext");
```


确认框
```
window.confirm("sometext");
```

提示框
```
window.prompt("sometext","defaultvalue");
```

使用 `\n` 换行
```
alert("Hello\nHow are you?");
```

[更多](https://www.w3schools.com/js/js_popup.asp)

---

## [计时事件](https://www.w3schools.com/js/js_timing.asp)
通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。

* `setInterval(` - 间隔指定的毫秒数不停地执行指定的代码。
  ```
  // window.setInterval("javascript function",milliseconds);
  setInterval(function(){alert("Hello")},3000);
  ```
* `clearInterval()` - 清除不停地执行指定的任务
* `setTimeout()` - 在指定的毫秒数后执行指定代码。
  ```
  //myVar= window.setTimeout("javascript function", milliseconds);
  setTimeout(function(){alert("Hello")},3000);
  ```
* `clearTimeout() ` - 清除执行指定的任务

[更多](https://www.w3schools.com/js/js_timing.asp)

---

## [Cookie](https://www.w3schools.com/js/js_cookies.asp)
Cookie 用于存储 web 页面的用户信息。

Cookie 是一些数据, 存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。

* 创建或者修改Cookie
  ```
  document.cookie="username=John Doe";

  //添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：
  document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";

  //可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。
  document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT;   path=/";

  ```

* 读取Cookie
  ```
  var x = document.cookie;
  ```

* 使用 JavaScript 删除 Cookie
  ```
  //您只需要设置 expires 参数为以前的时间即可
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  ```

* Cookie 字符串

  document.cookie 属性看起来像一个普通的文本字符串，其实它不是。

  cookie 信息是以名/值对的形式展示的。"`cookie1=value; cookie2=value;`"

---

示例： 
```
//创建或者修改Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//读取
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


//检测 cookie 值的函数
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
```


[更多](https://www.w3schools.com/js/js_cookies.asp)

---