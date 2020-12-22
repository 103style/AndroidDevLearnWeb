[TOC]

# AJAX学习记录

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

[参考链接：https://www.runoob.com/ajax/ajax-tutorial.html](https://www.runoob.com/ajax/ajax-tutorial.html)


示例：
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script>
        function loadXMLDoc() {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp = new XMLHttpRequest();
            } else {
                // IE6, IE5 浏览器执行代码
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET", "/try/ajax/ajax_info.txt", true);
            xmlhttp.send();
        }
    </script>
</head>
<body>

    <div id="myDiv">
        <h2>使用 AJAX 修改该文本内容</h2>
    </div>
    <button type="button" onclick="loadXMLDoc()">修改内容</button>
</body>
</html>
```


---

## 创建 XMLHttpRequest 对象
所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
```
var xmlhttp;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

---

## 向服务器发送请求请求
XMLHttpRequest 对象用于和服务器交换数据。

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 `open()` 和 `send()` 方法：
```
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

* `open(method,url,async)` - 规定请求的类型、URL 以及是否异步处理请求。
  * `method`：请求的类型；GET 或 POST
  * `url`：文件在服务器上的位置
  * `async`：true（异步）或 false（同步）
  
* `send(string)` - 将请求发送到服务器。
  * string：仅用于 POST 请求


GET 请求
```
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();
```

POST 请求
```
//1
xmlhttp.open("POST","/try/ajax/demo_post.php",true);
xmlhttp.send();

//2
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
```
* setRequestHeader(header,value) - 向请求添加 HTTP 头。
  * `header`: 规定头的名称
  * `value`: 规定头的值


当使用 `async = true` 时，请规定在响应处于 `onreadystatechange` 事件中的就绪状态时执行的函数：
```
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    }
}
```

如需使用 `async = false`，请将 open() 方法中的第三个参数改为 false：

注意： 当您使用 `async = false` 时，请不要编写 `onreadystatechange` 函数 - 把代码放到 `send()` 语句 **后面** 即可：


---

## 服务器 响应
如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
* `responseText` - 获得字符串形式的响应数据。

  `document.getElementById("myDiv").innerHTML=xmlhttp.responseText;`

* `responseXML` - 获得 XML 形式的响应数据。
  ```
  xmlDoc = xmlhttp.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("ARTIST");
  for (i = 0; i < x.length; i++) {
      txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("myDiv").innerHTML = txt;
  ```

---

## onreadystatechange 事件
当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

* `readyState` - 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
  * `0`: 请求未初始化
  * `1`: 服务器连接已建立
  * `2`: 请求已接收
  * `3`: 请求处理中
  * `4`: 请求已完成，且响应已就绪


* `status`	
  * `200`: "OK"
  * `404`: 未找到页面


```
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    }
}
```

使用回调函数

回调函数是一种以参数形式传递给另一个函数的函数。

如果您的网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数。
```
var xmlhttp;
function loadXMLDoc(url, cfunc) {
    if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari 代码
        xmlhttp = new XMLHttpRequest();
    } else { // IE6, IE5 代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function myFunction() {
    loadXMLDoc("/try/ajax/ajax_info.txt", function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    });
}
```

---

## ASP/PHP 实例
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script>
        function showHint(str) {
            var xmlhttp;
            if (str.length == 0) {
                document.getElementById("txtHint").innerHTML = "";
                return;
            }
            if (window.XMLHttpRequest) {
                // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp = new XMLHttpRequest();
            } else {
                // IE6, IE5 浏览器执行代码
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET", "/try/ajax/gethint.php?q=" + str, true);
            xmlhttp.send();
        }
    </script>
</head>
<body>
    <h3>在输入框中尝试输入字母 a:</h3>
    <form action="">
        输入姓名: <input type="text" id="txt1" onkeyup="showHint(this.value)" />
    </form>
    <p>提示信息: <span id="txtHint"></span></p>
</body>
</html>
```

form 表单中每次当按键弹起的时候调用 showHint(this.value) 方法。

如果输入框为空 `str.length == 0`，则该函数清空 txtHint 占位符的内容，并退出函数。


ASP 文件代码
```
<%
response.expires=-1
dim a(30)
'Fill up array with names
a(1)="Anna"
a(2)="Brittany"
a(3)="Cinderella"
a(4)="Diana"
a(5)="Eva"
a(6)="Fiona"
a(7)="Gunda"
a(8)="Hege"
a(9)="Inga"
a(10)="Johanna"
a(11)="Kitty"
a(12)="Linda"
a(13)="Nina"
a(14)="Ophelia"
a(15)="Petunia"
a(16)="Amanda"
a(17)="Raquel"
a(18)="Cindy"
a(19)="Doris"
a(20)="Eve"
a(21)="Evita"
a(22)="Sunniva"
a(23)="Tove"
a(24)="Unni"
a(25)="Violet"
a(26)="Liza"
a(27)="Elizabeth"
a(28)="Ellen"
a(29)="Wenche"
a(30)="Vicky"

'get the q parameter from URL
q=ucase(request.querystring("q"))

'lookup all hints from array if length of q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Output "no suggestion" if no hint were found
'or output the correct values
if hint="" then
  response.write("no suggestion")
else
  response.write(hint)
end if
%>
```

PHP文件代码
```
<?php
// Fill up array with names
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";

//get the q parameter from URL
$q=$_GET["q"];

//lookup all hints from array if length of q>0
if (strlen($q) > 0)
{
  $hint="";
  for($i=0; $i<count($a); $i++)
  {
    if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
    {
      if ($hint=="")
      {
        $hint=$a[$i];
      }
      else
      {
        $hint=$hint." , ".$a[$i];
      }
    }
  }
}

// Set output to "no suggestion" if no hint were found
// or to the correct values
if ($hint == "")
{
  $response="no suggestion";
}
else
{
  $response=$hint;
}

//output the response
echo $response;
?>
```

---