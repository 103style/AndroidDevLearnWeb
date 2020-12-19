[TOC]

# jQuery

> [参考链接：https://www.runoob.com/jquery/jquery-syntax.html](https://www.runoob.com/jquery/jquery-syntax.html)

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
* `$("*")` -- 选取所有元素	
* `$(this)` -- 选取当前 HTML 元素	
* `$("p.intro")` -- 选取 class 为 intro 的 `<p>` 元素	
* `$("p:first")` -- 选取第一个 `<p>` 元素	
* `$("ul li:first")` -- 选取第一个 `<ul>` 元素的第一个 `<li>` 元素	
* `$("ul li:first--child")` -- 选取每个 `<ul>` 元素的第一个 `<li>` 元素	
* `$("[href]")` -- 选取带有 `href` 属性的元素	
* `$("a[target='_blank']")` -- 选取所有 `target` 属性值等于 `"_blank"` 的 `<a>` 元素	
* `$("a[target!='_blank']")` -- 选取所有 `target` 属性值不等于 `"_blank"` 的 `<a>` 元素	
* `$(":button")` -- 选取所有 `type="button"` 的 `<input>` 元素 和 `<button>` 元素	
* `$("tr:even")` -- 选取偶数位置的 `<tr>` 元素	
* `$("tr:odd")` -- 选取奇数位置的 `<tr>` 元素	


---

## jQuery 事件

常用的 `$(document).ready()` 方法允许我们在文档完全加载完后执行函数。

鼠标事件
* `click` -- 单击
* `dblclick` -- 双击
* `mouseenter` -- 鼠标指针进入	
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



---
