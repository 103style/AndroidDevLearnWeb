# [初识HTML(5)+CSS(3)-2020升级版](https://www.imooc.com/learn/9) 学习记录

* [示例代码 helloworld.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/html5css3/helloworld.html)

* [示例代码 form.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/html5css3/form.html)

* [示例代码 csstest.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/html5css3/csstest.html)

* [示例代码 水平和垂直居中](https://github.com/103style/AndroidDevLearnWeb/blob/master/html5css3/exercise.html)

---

# CSS样式

---

## 样式的继承
CSS的某些样式是具有继承性的，那么什么是继承呢？继承是一种规则，它允许样式不仅应用于某个特定html标签元素，而且应用于其后代。
比如下面代码：如某种颜色应用于p标签，这个颜色设置不仅应用p标签，还应用于p标签中的所有子元素文本，这里子元素为span标签。
```
p{color:red;}

<p>三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
```
可见右侧结果窗口中p中的文本与span中的文本都设置为了红色。


但注意有一些css样式是不具有继承性的。如border:1px solid red;
```
p{border:1px solid red;}

<p>三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
```

在上面例子中它代码的作用只是给p标签设置了边框为1像素、红色、实心边框线，而对于子元素span是没用起到作用的。

---

## 选择器的优先级
选择器的优先级依次是: **内联样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器**

---

## 权值计算-特殊性
标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。

例如下面的代码：
```
p{color:red;} /*权值为1*/

p span{color:green;} /*权值为1+1=2*/

.warning{color:white;} /*权值为10*/

p span.warning{color:purple;} /*权值为1+1+10=12*/

#footer .note p{color:yellow;} /*权值为100+10+1=111*/
```

注意：还有一个权值比较特殊--继承也有权值但很低，有的文献提出它只有0.1，所以可以理解为继承的权值最低。

---

## 选择器最高层级!important

我们在做网页代码的时，有些特殊的情况需要为某些样式设置具有最高权值，怎么办？这时候我们可以使用!important来解决。

如下代码：
```
p{color:red!important;}
p.first{color:green;}
<p class="first">三年级时，我还是一个<span>胆小如鼠</span>的小女孩。</p>
```
这时 p 段落中的文本会显示的red红色。

**注意：!important要写在分号的前面**

这里注意当网页制作者不设置css样式时，浏览器会按照自己的一套样式来显示网页。
并且用户也可以在浏览器中设置自己习惯的样式，比如有的用户习惯把字号设置为大一些，使其查看网页的文本更加清楚。
这时注意样式优先级为：**浏览器默认的样式 < 网页制作者样式 < 用户自己设置的样式**，但记住 `!important` 优先级样式是个例外，权值高于用户自己设置的样式。

---

## Font
* font样式的简写方式
  ```
  body{
      font-style:italic;
      font-weight:bold; 
      font-size:12px; 
      line-height:1.5em; 
      font-family:"宋体",sans-serif;
  }
  
  body{
      font:italic  bold  12px/1.5em  "宋体",sans-serif;
  }
  ```
  * 使用这一简写方式你至少要指定 font-size 和 font-family 属性，其他的属性将自动使用默认值。
  * 在缩写时 font-size 与 line-height 中间要加入“/”斜扛。


* 开头空两格, 使用 `text-indent` 为文本添加首行缩进。
  ```
  p{text-indent:2em;}
  ```

* 使用 `line-height` 为文字设置行间间距


* 使用 `letter-spacing` or `word-spacing`增加或减少字符间的空白

* 使用 `text-align` 设置文本对齐方式
  ```
  div{text-align:center;}

  <div><img src="http://img.mukewang.com/52b4113500018cf102000200.jpg"></div>
  ```

* 长度值
  * 像素
  * em : 就是本元素给定字体的 font-size 值，如果元素的 font-size 为 14px ，那么 1em = 14px；如果 font-size 为 18px，那么 1em = 18px。
  * 百分比.
    设置行高（行间距）为字体的130%（12 * 1.3 = 15.6px）。
    `p{font-size:12px;line-height:130%}` 
  
  但当给 font-size 设置单位为 em 时，此时计算的标准以 p 的父元素的 font-size 为基础。
  如下代码：
  ```
  p{font-size:14px}
  span{font-size:0.8em;}

  <p>以这个<span>例子</span>为例。</p>
  ```

---


## Box
* 常用的块状元素有：
  ```
  <div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
  ```

  设置 `display:block` 就是将元素显示为块级元素。
  ```
  a{display:block;}
  ```
  块级元素特点：
  * 每个块级元素都从新的一行开始，并且其后的元素也另起一行。
  * 元素的高度、宽度、行高以及顶和底边距都可设置。
  * 元素宽度在不设置的情况下，是它本身父容器的100%，除非设定一个宽度。

* 常用的内联元素有：
  ```
  <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
  ```
  当然块状元素也可以通过代码 `display:inline` 将元素设置为内联元素。

  内联元素特点：
  * 和其他元素都在一行上。
  * 元素的高度、宽度及顶部和底部边距不可设置。
  * 元素的宽度就是它包含的文字或图片的宽度，不可改变。

* 常用的内联块状元素有：
  ```
  <img>、<input>
  ```

  内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点.

  代码 `display:inline-block` 就是将元素设置为内联块状元素。

  inline-block 元素特点：
  * 和其他元素都在一行上。
  * 元素的高度、宽度、行高以及顶和底边距都可设置。
  

* `display: none`  设置此元素不会被显示，当想要元素隐藏的时候可以使用此值。

* 元素实际宽度 = 左边界+左边框+左填充+内容宽度+右填充+右边框+右边界。

* 设置盒子边框
  ```
  //四边都有边框
  div{border:1px solid red;} 

  //单独一边有边框
  div{border-bottom:1px dotted red;}
  div{border-top:1px solid red;}
  div{border-right:1px solid red; }
  div{border-left:1px solid red;}
  ```

* 使用 `border-radius` 设置圆角
  圆角可分为, 顺序（左上角开始顺时针）依次为 **左上**、**右上**、**右下**、**左下**。
  如下代码：
  ```
  div{border-radius: 20px 10px 15px 30px;}
  ```

  如果四个圆角都为10px;可以这么写：
  ```
  div{ border-radius:10px;}
  ```

  如果 **左上角和右下角** 圆角效果一样为10px，**右上角和左下角** 圆角一样为20px，
  可以这么写：
  ```
  div{ border-radius:10px 20px;}
  ```

* 使用 `padding` 为盒子设置内边距, `margin` 设置外边距
  ```
  div{
    padding-top:20px;
    padding-right:10px;
    padding-bottom:15px;
    padding-left:30px;
  }

  div{
    margin-top:20px;
    margin-right:10px;
    margin-bottom:15px;
    margin-left:30px;
  }

  //如果上、右、下、左的填充都为10px;可以这么写
  div{padding:10px;}
  div{margin:10px;}

  //如果上下填充一样为10px，左右一样为20px，可以这么写：
  div{padding:10px 20px;}
  div{margin:10px 20px;}
  ```

---


## CSS布局模型
* 流动模型（Flow）
* 浮动模型 (Float)
* 层模型（Layer）


`absolute`：如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。

`relative`：如果想为元素设置层模型中的相对定位，需要设置position:relative（表示相对定位），它通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。

`fixed`：表示固定定位，与absolute定位类型类似，但它的相对移动的坐标是视图（屏幕内的网页窗口）本身。由于视图本身是固定的，它不会随浏览器窗口的滚动条滚动而变化.

* Relative与Absolute组合使用
  ```
  <div id="box1"><!--参照定位的元素-->
      <div id="box2">相对参照元素进行定位</div><!--相对定位元素-->
  </div>
  
  #box1{
      width:200px;
      height:200px;
      position:relative;        
  }
  
  #box2{
      position:absolute;
      top:20px;  //box2 距离 box1 顶部20px
      left:30px; //box2 距离 box1 左边30px
  }
  ```


---

## 弹性盒模型之flex属性
1、设置display: flex属性可以把块级元素在一排显示。

2、flex需要添加在父元素上，改变子元素的排列顺序。

3、默认为从左往右依次排列,且和父元素左边没有间隙。

```
<style type="text/css">
    .box {
        background: blue;
        display: flex;
    }

    .box div {
        width: 200px;
        height: 200px;
    }

    .box1 {
        background: red;
    }

    .box2 {
        background: orange;
    }

    .box3 {
        background: green;
    }
</style>

<div class="box">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
</div>
```

* 操作一下横轴- 使用`justify-content`属性设置横轴排列方式
  `justify-content` 属性 设置水平方向 : 
  * `flex-start` 靠左排列
  * `flex-end` 靠右排列
  * `center` 居中
  * `space-between` 剩下的空间平分在 两两之间
  * `space-around` 剩下空间分成 内容个数 一样的份数， 就一份一分为二 添加在开头和结尾， 其他的在两两之间
  

* 操作一下竖轴- 使用`align-items`属性设置纵轴排列方式
  `align-items`属性 设置垂直方向: 
  * `flex-start` 默认值，左对齐
  * `flex-end` 交叉轴的终点对齐 父盒子的底部
  * `center` 交叉轴的中点对齐 垂直居中
  * `baseline` 项目的第一行文字的基线对齐。
  * `stretch` 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度。


* 给子元素设置flex占比, 给没给子元素设置 `flex:1(占比)` 
  ```
  <style type="text/css">
    .box {
        height: 300px;
        background: blue;
        display: flex;
    }

    .box div {
        width: 200px;
        height: 200px;
    }

    .box1 {
        flex: 1;
        background: red;
    }

    .box2 {
        flex: 3;
        background: orange;
    }

    .box3 {
        flex: 2;
        background: green;
    }
  </style>
  ```

---


