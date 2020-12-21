[TOC]

# jQuery

> [参考链接：https://www.runoob.com/jquery/jquery-syntax.html](https://www.runoob.com/jquery/jquery-syntax.html)

> [参考链接：https://www.w3schools.com/jquery/default.asp](https://www.w3schools.com/jquery/default.asp)


[示例： index.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/jquery/index.html)


---

## jQuery 语法
基础语法： `$(selector).action()`
* 美元符号定义 jQuery
* 选择符（selector）"查询"和"查找" HTML 元素
* jQuery 的 action() 执行对元素的操作

实例：
* `$(this).hide()` - 隐藏当前元素
* `$("p").hide()` - 隐藏所有 `<p>` 元素
* `$("p.test").hide()` - 隐藏所有 `class="test"` 的 `<p>` 元素
* `$("#test").hide()` - 隐藏 `id="test"` 的元素


---

## 文档就绪事件
```
$(document).ready(function(){
 
   // 开始写 jQuery 代码...
 
});
```

---

## jQuery 选择器
元素选择器
```
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```

#id 选择器
```
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
```

.class 选择器
```
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```

更多实例
* `$("*")` -- 选取所有元素|
* `$(this)` -- 选取当前 HTML 元素|
* `$("p.intro")` -- 选取 class 为 intro 的 `<p>` 元素|
* `$("p:first")` -- 选取第一个 `<p>` 元素|
* `$("ul li:first")` -- 选取第一个 `<ul>` 元素的第一个 `<li>` 元素|
* `$("ul li:first--child")` -- 选取每个 `<ul>` 元素的第一个 `<li>` 元素|
* `$("[href]")` -- 选取带有 `href` 属性的元素|
* `$("a[target='_blank']")` -- 选取所有 `target` 属性值等于 `"_blank"` 的 `<a>` 元素|
* `$("a[target!='_blank']")` -- 选取所有 `target` 属性值不等于 `"_blank"` 的 `<a>` 元素|
* `$(":button")` -- 选取所有 `type="button"` 的 `<input>` 元素 和 `<button>` 元素|
* `$("tr:even")` -- 选取偶数位置的 `<tr>` 元素|
* `$("tr:odd")` -- 选取奇数位置的 `<tr>` 元素|


---

## jQuery 事件

常用的 `$(document).ready()` 方法允许我们在文档完全加载完后执行函数。

鼠标事件
* `click` -- 单击
* `dblclick` -- 双击
* `mouseenter` -- 鼠标指针进入|
* `mouseleave` -- 鼠标指针离开
* `hover` -- 鼠标指针悬停

键盘事件
* `keypress` -- 键被按下
* `keydown` -- 键按下的过程
* `keyup` -- 键被松开
  
表单事件
* `submit` -- 提交表单
* `change` -- `<input>` 字段改变时
* `focus` -- 当 `<input>` 字段获得焦点时
* `blur` -- 当 `<input>` 字段失去焦点
  
文档/窗口事件
* `load` -- 当图像全部加载时
* `resize` -- 浏览器窗口调整大小时
* `scroll` -- 元素滚动
* `unload` -- 离开页面

---

## jQuery 效果

### 显示/隐藏
* `hide()` -- 隐藏 
* `show()` -- 显示
* `toggle()` -- 来切换 `hide()` 和 `show()`


---

### 淡入淡出
可选的 `speed` 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 `callback` 参数是 `fading` 完成后所执行的函数名称。

`fadeTo()` 方法中必需的 `opacity` 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

* `fadeIn()` --  淡入已隐藏的元素
  
  语法：`$(selector).fadeIn(speed,callback);`
* `fadeOut()` -- 淡出可见元素。

  语法：`$(selector).fadeOut(speed,callback);`
* `fadeToggle()` -- 在 fadeIn() 与 fadeOut() 方法之间进行切换

  语法：`$(selector).fadeToggle(speed,callback);`
* `fadeTo()`
  
  语法: `$(selector).fadeTo(speed,opacity,callback);`

---

### 滑动
* `slideDown()` -- 用于向下滑动元素

  `$(selector).slideDown(speed,callback);`
* `slideUp()` -- 用于向上滑动元素

  `$(selector).slideUp(speed,callback);`
* `slideToggle()` -- 在 slideDown() 与 slideUp() 方法之间进行切换

  `$(selector).slideToggle(speed,callback);`

---

### 动画

语法：`$(selector).animate({params},speed,callback);`
* 必需的 `params` 参数定义形成动画的 CSS 属性。
* 可选的 `speed` 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
* 可选的 `callback` 参数是动画完成后所执行的函数名称。

把 `<div>` 元素往右边移动了 250 像素：
```
$("button").click(function(){
  $("div").animate({left:'250px'});
});
```

**注意！** 默认情况下，所有 HTML 元素都有一个静态位置，且无法移动。 如需对位置进行操作，要记得首先把元素的 CSS `position` 属性设置为 `relative`、`fixed` 或 `absolute`！

操作多个属性：
```
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```


使用相对值
```
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

使用预定义的值
```
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
})
```


使用队列功能
```
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

停止动画
```
//语法
$(selector).stop(stopAll,goToEnd);

//示例
$("#stop").click(function(){
  $("#panel").stop();
});
```

---

## 链(Chaining)
Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。
```
$("#p1").animate({width:'+50px'}).slideUp(2000).slideDown(2000).hide().show();
```


## 获取、修改内容和属性
* `text()` -- 获取当前元素的文本 
* `html()` -- 获取当前元素的html
* `val()` -- 获取当前input元素的值
* `attr("属性名")` -- 获取当前的属性 `.attr("class")`

* `text("修改的值")` -- 修改当前元素的文本 
* `html("修改的值")` -- 修改当前元素的html
* `val("修改的值")` -- 修改当前input元素的值
* `attr({"属性名":"属性值","属性名"："属性值"...})` -- 修改当前的属性

---

## 添加删除元素
* `append()` - 在被选元素的结尾插入内容
* `prepend()` - 在被选元素的开头插入内容
* `after()` - 在被选元素之后插入内容
* `before()` - 在被选元素之前插入内容
* `remove()` - 删除被选元素（及其子元素）
* `empty()` - 从被选元素中删除子元素。 无参数删除全部内容， 
  
  `$("p").empty(".classname")` 删除类名为`"classname"` 的 `p` 元素的内容

---

## 获取并设置 CSS 类
* `addClass()` - 向被选元素添加一个或多个类
* `removeClass()` - 从被选元素删除一个或多个类
* `toggleClass()` - 对被选元素进行添加/删除类的切换操作
* `css()` - 设置或返回样式属性
  * `css("propertyname");` 获取属性， `$("p").css("background-color");`
  * `css("propertyname","value");` 设置属性，`$("p").css("background-color","yellow");`
  * `css({"propertyname":"value","propertyname":"value",...});` 设置多个属性


---

## jQuery 尺寸
* `width()` - 设置或返回元素的宽度（不包括内边距、边框或外边距）。
* `height()` - 设置或返回元素的高度（不包括内边距、边框或外边距）。
* `innerWidth()` - 返回元素的宽度（包括内边距）。
* `innerHeight()` - 返回元素的高度（包括内边距）。
* `outerWidth()` - 返回元素的宽度（包括内边距和边框）。
* `outerHeight()` - 返回元素的高度（包括内边距和边框）。

---

## jQuery 遍历
下图展示了一个家族树。通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行遍历。

![img_travtree](https://github.com/103style/AndroidDevLearnWeb/blob/master/resources/img_travtree.png)

jQuery 提供了多种遍历 DOM 的方法。

遍历方法中最大的种类是树遍历（tree-traversal）

---

向上遍历 DOM 树
* `parent()` - 返回被选元素的直接父元素。

  下面的例子返回每个 `<span>` 元素的直接父元素：
  
  `$("span").parent();`

* `parents()` - 返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。

  下面的例子返回所有 `<span>` 元素的所有祖先，并且它是 `<ul>` 元素：
  
  `$("span").parents("ul");`

* `parentsUntil()` - 方法返回介于两个给定元素之间的所有祖先元素。

  下面的例子返回介于 `<span>` 与 `<div>` 元素之间的所有祖先元素：
  
  `$("span").parentsUntil("div");`

---

向下遍历 DOM 树
* `children()` - 方法返回被选元素的所有直接子元素
  
  `$("div").children("p.1");` 返回类名为 `"1"` 的所有 `<p>` 元素，并且它们是 `<div>` 的直接子元素：

* `find()` - 回被选元素的后代元素，一路向下直到最后一个后代。

  `$("div").find("span");`  返回属于 `<div>` 后代的所有 `<span>` 元素：

---

水平遍历
* `siblings()` - 返回被选元素的所有同胞元素。
  * `$("h2").siblings();` 返回 `<h2>` 的所有同胞元素：
  * 使用可选参数来过滤对同胞元素的搜索。 `$("h2").siblings("p");` - 返回属于 `<h2>` 的同胞元素的所有 `<p>` 元素。

* `next()` - 返回被选元素的下一个同胞元素。只返回一个元素。

  `$("h2").next();` - 返回 `<h2>` 的下一个同胞元素：
  
* `nextAll()` - 返回被选元素的所有跟随的同胞元素。
  
* `nextUntil()` - 返回介于两个给定参数之间的所有跟随的同胞元素。

  ` $("h2").nextUntil("h6");` - `$("h2").nextUntil("h6")`

以下三个和 上面三个 next 函数效果类似，只不过往前遍历。

* `prev()`
* `prevAll()`
* `prevUntil()`

---

jQuery 遍历- 过滤
* `first()` - 返回被选元素的首个元素。

* `last()` -  返回被选元素的最后一个元素。
  
* `eq()` - 返回被选元素中带有指定索引号的元素。

  `$("p").eq(1);` - 选取第二个 `<p>` 元素，索引从0开始

* `filter()` - 允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。

  ` $("p").filter(".url");` - 返回带有类名 `"url"` 的所有 `<p>` 元素：

* `not()` - 返回不匹配标准的所有元素。`not()` 方法与 `filter()` 相反。

  `$("p").not(".url");` - 返回不带有类名 `"url"` 的所有 `<p>` 元素.

---


## AJAX
AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。

AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。


更多介绍：

[https://www.w3schools.com/jquery/jquery_ref_ajax.asp](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)

[https://www.runoob.com/jquery/ajax-ajax.html](https://www.runoob.com/jquery/ajax-ajax.html)


### jQuery load() 方法
语法：`$(selector).load(URL,data,callback);`
* 必需的 URL 参数规定您希望加载的 URL。
* 可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
* 可选的 callback 参数是 load() 方法完成后所执行的函数名称。


示例：
```
<h2>jQuery AJAX 是个非常棒的功能！</h2>
<p id="p1">这是段落的一些文本。</p>

$("#div1").load("ajaxload.txt");
```

下面的例子把 "ajaxload.txt" 文件中 id="p1" 的元素的内容，加载到指定的 `<div>` 元素中：
```
$("#div1").load("demo_test.txt #p1");
```


可选的 callback 参数规定当 `load()` 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：
* `responseTxt` - 包含调用成功时的结果内容
* `statusTXT` - 包含调用的状态
* `xhr` - 包含 XMLHttpRequest 对象

下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：
```
$("button").click(function() {
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
            alert("外部内容加载成功!");
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});
```


HTTP 请求：GET vs. POST

* `$.get() 方法`
  
  $.get() 方法通过 HTTP GET 请求从服务器上请求数据。

  语法：`$.get(URL,callback);`

  示例：
  ```
  $("button").click(function(){
    $.get("demo_test.php",function(data,status){
      alert("数据: " + data + "\n状态: " + status);
    });
  });
  ```
* `$.post() 方法`

  $.post() 方法通过 HTTP POST 请求向服务器提交数据。

  语法：`$.post(URL,data,callback);`

  示例：
  ```
  $("button").click(function(){
      $.post("/try/ajax/demo_test_post.php",
      {
          name:"菜鸟教程",
          url:"http://www.runoob.com"
      },
      function(data,status){
          alert("数据: \n" + data + "\n状态: " + status);
      });
  });
  ```

---

##  jQuery noConflict 方法

[noConflict() 方法](https://www.w3schools.com/jquery/jquery_noconflict.asp)

jQuery 使用 $ 符号作为 jQuery 的简写。

如果其他 JavaScript 框架也使用 $ 符号作为简写怎么办？

`noConflict()` 方法会释放对 $ 标识符的控制，这样其他脚本就可以使用它了。

```
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery 仍然在工作!");
  });
});

//or

var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery 仍然在工作!");
  });
});
```


---


## jQuery 选择器
| 选择器 | 实例 | 选取 |
| :- | :- | :- | 
|  *  |  $("*")  |  所有元素  |  
| #id | $("#lastname") | id="lastname" 的元素 | 
| .class | $(".intro") | class="intro" 的所有元素 | 
| .class,.class | $(".intro,.demo") | class 为 "intro" 或 "demo" 的所有元素 | 
| element | $("p") | 所有 `<p>` 元素 | 
| el1,el2,el3 | $("h1,div,p") | 所有 `<h1>`、`<div>` 和 `<p>` 元素 | 
| :first | $("p:first") | 第一个 `<p>` 元素 | 
| :last | $("p:last") | 最后一个 `<p>` 元素 | 
| :even | $("tr:even") | 所有偶数 <tr> 元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 | 
| :odd | $("tr:odd") | 所有奇数 <tr> 元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 | 
| :first-child | $("p:first-child") | 属于其父元素的第一个子元素的所有 `<p>` 元素 | 
| :first-of-type | $("p:first-of-type") | 属于其父元素的第一个 `<p>` 元素的所有 `<p>` 元素 | 
| :last-child | $("p:last-child") | 属于其父元素的最后一个子元素的所有 `<p>` 元素 | 
| :last-of-type | $("p:last-of-type") | 属于其父元素的最后一个 `<p>` 元素的所有 `<p>` 元素 | 
| :nth-child(n) | $("p:nth-child(2)") | 属于其父元素的第二个子元素的所有 `<p>` 元素 | 
| :nth-last-child(n) | $("p:nth-last-child(2)") | 属于其父元素的第二个子元素的所有 `<p>` 元素，从最后一个子元素开始计数 | 
| :nth-of-type(n) | $("p:nth-of-type(2)") | 属于其父元素的第二个 `<p>` 元素的所有 `<p>` 元素 | 
| :nth-last-of-type(n) | $("p:nth-last-of-type(2)") | 属于其父元素的第二个 `<p>` 元素的所有 `<p>` 元素，从最后一个子元素开始计数 | 
| :only-child | $("p:only-child") | 属于其父元素的唯一子元素的所有 `<p>` 元素 | 
| :only-of-type | $("p:only-of-type") | 属于其父元素的特定类型的唯一子元素的所有 `<p>` 元素 | 
| parent > child | $("div > p") | `<div>` 元素的直接子元素的所有 `<p>` 元素 | 
| parent descendant | $("div p") | `<div>` 元素的后代的所有 `<p>` 元素 | 
| element + next | $("div + p") | 每个 `<div>` 元素相邻的下一个 `<p>` 元素 | 
| element ~ siblings | $("div ~ p") | `<div>` 元素同级的所有 `<p>` 元素 | 
| :eq(index) | $("ul li:eq(3)") | 列表中的第四个元素（index 值从 0 开始） | 
| :gt(no) | $("ul li:gt(3)") | 列举 `index` 大于 3 的元素 | 
| :lt(no) | $("ul li:lt(3)") | 列举 `index` 小于 3 的元素 | 
| :not(selector) | $("input:not(:empty)") | 所有不为空的输入元素 | 
| :header | $(":header") | 所有标题元素 `<h1>`, `<h2>` ... | 
| :animated | $(":animated") | 所有动画元素 | 
| :focus | $(":focus") | 当前具有焦点的元素 | 
| :contains(text) | $(":contains('Hello')") | 所有包含文本 "Hello" 的元素 | 
| :has(selector) | $("div:has(p)") | 所有包含有 `<p>` 元素在其内的 `<div>` 元素 | 
| :empty | $(":empty") | 所有空元素 | 
| :parent | $(":parent") | 匹配所有含有子元素或者文本的父元素。 | 
| :hidden | $("p:hidden") | 所有隐藏的 `<p>` 元素 | 
| :visible | $("table:visible") | 所有可见的表格 | 
| :root | $(":root") | 文档的根元素 | 
| :lang(language) | $("p:lang(de)") | 所有 `lang` 属性值为 "de" 的 `<p>` 元素 | 
| [attribute] | $("[href]") | 所有带有 href 属性的元素 | 
| [attribute=value] | $("[href='default.htm']") | 所有带有 href 属性且值等于 "default.htm" 的元素 | 
| [attribute!=value] | $("[href!='default.htm']") | 所有带有 href 属性且值不等于 "default.htm" 的元素 | 
| [attribute$=value] | $(\"[href\$='.jpg']") | 所有带有 href 属性且值以 ".jpg" 结尾的元素 | 
| [attribute\|=value] | $("[title\|='Tomorrow']") | 所有带有 title 属性且值等于 'Tomorrow' 或者以 'Tomorrow' 后跟连接符作为开头的字符串 | 
| [attribute^=value] | $("[title^='Tom']") | 所有带有 title 属性且值以 "Tom" 开头的元素 | 
| [attribute~=value] | $("[title~='hello']") | 所有带有 title 属性且值包含单词 "hello" 的元素 | 
| [attribute*=value] | $("[title*='hello']") | 所有带有 title 属性且值包含字符串 "hello" 的元素 | 
| [name=value][name2=value2] | $(\"input[id][name\$='man']" ) | 带有 id 属性，并且 name 属性以 man 结尾的输入框 | 
| :input | $(":input") | 所有 `input` 元素 | 
| :text | $(":text") | 所有带有 type="text" 的 `input` 元素 | 
| :password | $(":password") | 所有带有 type="password" 的 `input` 元素 | 
| :radio | $(":radio") | 所有带有 type="radio" 的 `input` 元素 | 
| :checkbox | $(":checkbox") | 所有带有 type="checkbox" 的 `input` 元素 | 
| :submit | $(":submit") | 所有带有 type="submit" 的 `input` 元素 | 
| :reset | $(":reset") | 所有带有 type="reset" 的 `input` 元素 | 
| :button | $(":button") | 所有带有 type="button" 的 `input` 元素 | 
| :image | $(":image") | 所有带有 type="image" 的 `input` 元素 | 
| :file | $(":file") | 所有带有 type="file" 的 `input` 元素 | 
| :enabled | $(":enabled") | 所有启用的元素 | 
| :disabled | $(":disabled") | 所有禁用的元素 | 
| :selected | $(":selected") | 所有选定的下拉列表元素 | 
| :checked | $(":checked") | 所有选中的复选框选项 | 
| .selector | $(selector).selector | 在jQuery 1.7中已经不被赞成使用。返回传给jQuery()的原始选择器 | 
| :target | $( "p:target" ) | 选择器将选中ID和URI中一个格式化的标识符相匹配的`<p>`元素 | 

---

## ajax() 方法

| 名称 | 值/描述 |
|:-|:-|
| async | 布尔值，表示请求是否异步处理。默认是 true。 |
| beforeSend(xhr) | 发送请求前运行的函数。|
| cache	| 布尔值，表示浏览器是否缓存被请求页面。默认是 true。|
| complete(xhr,status)	| 请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。|
| contentType	| 发送数据到服务器时所使用的内容类型。默认是："application/x-www-form-urlencoded"。|
| context	| 为所有 AJAX 相关的回调函数规定 "this" 值。|
| data	| 规定要发送到服务器的数据。|
| dataFilter(data,type)	| 用于处理 XMLHttpRequest 原始响应数据的函数。|
| dataType | 预期的服务器响应的数据类型。|
| error(xhr,status,error) | 如果请求失败要运行的函数。|
| global | 布尔值，规定是否为请求触发全局 AJAX 事件处理程序。默认是 true。|
| ifModified | 布尔值，规定是否仅在最后一次请求以来响应发生改变时才请求成功。默认是 false。|
| jsonp	| 在一个 jsonp 中重写回调函数的字符串。|
| jsonpCallback	| 在一个 jsonp 中规定回调函数的名称。|
| password	| 规定在 HTTP 访问认证请求中使用的密码。|
| processData	| 布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。|
| scriptCharset	| 规定请求的字符集。|
| success(result,status,xhr)	| 当请求成功时运行的函数。|
| timeout	| 设置本地的请求超时时间（以毫秒计）。|
| traditional	| 布尔值，规定是否使用参数序列化的传统样式。|
| type	| 规定请求的类型（GET 或 POST）。|
| url	| 规定发送请求的 URL。默认是当前页面。|
| username | 规定在 HTTP 访问认证请求中使用的用户名。|
| xhr	| 用于创建 XMLHttpRequest 对象的函数。|


---

## 其他参考
* [jQuery 事件 方法](https://www.runoob.com/jquery/jquery-ref-events.html)
  
* [jQuery 效果 方法](https://www.runoob.com/jquery/jquery-ref-effects.html)
  
* [jQuery HTML / CSS 方法](https://www.runoob.com/jquery/jquery-ref-html.html)
  
* [jQuery 遍历 方法](https://www.runoob.com/jquery/jquery-ref-traversing.html)
  
* [jQuery AJAX 方法](https://www.runoob.com/jquery/jquery-ref-ajax.html)
  
* [jQuery 杂项方法](https://www.runoob.com/jquery/jquery-ref-misc.html)
  
* [jQuery 属性](https://www.runoob.com/jquery/jquery-ref-prop.html)


---


## 插件
* [https://www.runoob.com/jquery/jquery-plugin-validate.html](https://www.runoob.com/jquery/jquery-plugin-validate.html)