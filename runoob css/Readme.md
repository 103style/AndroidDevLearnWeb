[TOC]

## [菜鸟教程 | CSS 教程](https://www.runoob.com/css/css-tutorial.html)

[参考链接: https://www.runoob.com/css/css-tutorial.html](https://www.runoob.com/css/css-tutorial.html)

[参考链接: https://www.w3school.com.cn/css/index.asp](https://www.w3school.com.cn/css/index.asp)


---

## [属性参考手册](https://www.runoob.com/cssref/css-reference.html)

---

### CSS 背景

> 简写, 顺序依次为下面的属性 `background:#ffffff url('img_tree.png') no-repeat right top;`

* `background-color` : 背景颜色  
  * `background-color:#6495ed;` 
  * `background-color:rgba(255,0,0,255);` 
  * `background-color:red;`
  
* `background-image` : 背景图像 
  * `background-image:url('paper.gif');`
  
* `background-repeat` : 背景图像的重复模式
  * `repeat-x` ：水平平铺
  * `repeat-y` ：数值平铺
  * `no-repeat` ： 不平铺
  
* `background-attachment` : 背景图像是否固定或者随着页面的其余部分滚动。
  * `scroll` :	背景图片随着页面的滚动而滚动，这是默认的。
  * `fixed` :	背景图片不会随着页面的滚动而滚动。
  * `local` :	背景图片会随着元素内容的滚动而滚动。
  * `initial` :	设置该属性的默认值。
  * `inherit` :	指定 background-attachment 的设置应该从父元素继承。
  
* `background-position` : 设置背景图像的起始位置。
  * **水平 垂直** : 水平值为：`center` | `left` | `right`， 垂直值为：`center` | `bottom` | `top`，如果只设置一个值，另一个值将会是 `center`.
  * `x% y%` ：第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％
  * `xpos ypos` ：第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions。
  * `inherit` ：指定background-position属性设置应该从父元素继承。

---

### 列表 ul & ol
* 列表 `<ul>` 或 `<ol>` 默认设置了内边距和外边距，可使用 `margin:0` 和 `padding:0` 来移除。

* `list-style-image` : 使用图像来替换列表项的标记。
  
* `list-style-type` : 修改标记的类型。
  *  `list-style-type:circle` / `square` / `decimal` /  `lower-roman` / `lower-alpha` /...

---

### 表格
* `border-collapse` : border-collapse:collapse; 折叠边框
* `vertical-align` : 垂直方向的对齐方式

---

### Display(显示) 与 Visibility（可见性）
* `visibility:hidden;` : 隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。
* `display:none;` : 隐藏某个元素，且隐藏的元素不会占用任何空间。

---

### [Display](https://www.runoob.com/cssref/pr-class-display.html) - 块和内联元素
* 块元素是一个元素，独占一行，占用了全部宽度，在前后都是换行符。比如： `<h1>`、`<p>`、`<div>`
* 内联元素只需要必要的宽度，不强制换行，和相邻的内联元素在同一行。比如： `span`、`a`

可以通过 `display:inline;` 将其显示为内联元素，通过 `display:block;` 将其作为块元素。

**display** 的属性值如下：

* `none`	此元素不会被显示。
  
* `block`	此元素将显示为块级元素，此元素前后会带有换行符。
* `inline`	默认。此元素会被显示为内联元素，元素前后没有换行符。
* `inline-block`	行内块元素。（CSS2.1 新增的值）
* `list-item`	此元素会作为列表显示。
* `run-in`	此元素会根据上下文作为块级元素或内联元素显示。
* `table`	此元素会作为块级表格来显示（类似 `<table`>`），表格前后带有换行符。
* `inline-table`	此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。
* `table -row-group`	此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。
* `table -header-group`	此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。
* `table -footer-group`	此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。
* `table-row`	此元素会作为一个表格行显示（类似 `<tr>`）。
* `table-column-group`	此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。
* `table-column`	此元素会作为一个单元格列显示（类似 `<col>`）
* `table-cell`	此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）
* `table-caption`	此元素会作为一个表格标题显示（类似 `<caption>`）
* `inherit`	规定应该从父元素继承 display 属性的值。

---

### [Position](https://www.runoob.com/css/css-positioning.html)
* `static` ：默认值，即没有定位，遵循正常的文档流对象。
  
* `relative` ：相对定位元素的定位是相对其正常位置。移动相对定位元素，但它原本所占的空间不会改变。
  
* `fixed` ：元素的位置相对于浏览器窗口是固定位置。不随内容滚动而变化。

* `absolute` ：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>:
  
* `sticky` ：基于用户的滚动位置来定位。
  
  粘性定位的元素是依赖于用户的滚动，在 `position:relative` 与 `position:fixed` 定位之间切换。

  它的行为就像 `position:relative;` 而当页面滚动超出目标区域时，它的表现就像 `position:fixed;`，它会固定在目标位置。

  元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。


---

### 重叠元素

* `z-index` ： 指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面），具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面。

  同位置， 值越大 我们最先看到。

---

### 所有的CSS定位属性
* `bottom` ： 定义了定位元素下外边距边界与其包含块下边界之间的偏移。
  
* `top` ： 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
  
* `left` ： 定义了定位元素左外边距边界与其包含块左边界之间的偏移。
  
* `right` ： 定义了定位元素右外边距边界与其包含块右边界之间的偏移。

* `position` ： 指定元素的定位类型。
  
* `cursor` ： 显示光标移动到指定的类型。 `pointer` 鼠标箭头变成小手。
  
* `clip` ： 剪辑一个绝对定位的元素

* `overflow`、`overflow-x`、`overflow-y` ：设置当元素的内容溢出其区域时发生的事情。`hidden / scroll/ visible / auto`  

* `z-index` ： 设置元素的堆叠顺序。

---


### [Float(浮动)](https://www.runoob.com/css/css-float.html)
CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。

往往用于图像，但是布局很有用。

元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。

浮动元素之前的元素将不会受到影响。

**清除浮动，使用 `clear: left/right/both/none`** --- `clear:both;` - 指定元素两侧不能出现浮动元素。

---

### [组合选择符](https://www.runoob.com/css/css-combinators.html)

* 后代选择器(以空格 分隔)。 `div p`：div里面的所有 p 元素。
* 子元素选择器(以大于 `>` 号分隔）。 `div>p` div内的第一级中的 p 元素。
* 相邻兄弟选择器（以加号 `+` 分隔）。 `div+p` 紧跟在div之后的第一个 p 元素
* 普通兄弟选择器（以波浪号 `～` 分隔）。`div~p` div之后的所有 p 元素，不需要相邻。

---

### [伪类(Pseudo-classes)](https://www.runoob.com/css/css-pseudo-classes.html)
语法： `selector:pseudo-class {property:value;}`，CSS类也可用`selector.class:pseudo-class {property:value;}`。

```
//anchor伪类
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */

//伪类和CSS类
a.red:visited {color:#FF0000;}
 
//匹配所有<p> 元素中的第一个 <i> 元素
p > i:first-child

//匹配所有作为第一个子元素的 <p> 元素中的所有 <i> 元素
p:first-child i
{
    color:blue;
}
```

---

### [所有CSS伪类/元素](https://www.runoob.com/css/css-pseudo-classes.html)
* `:checked` --- `input:checked` 选择所有选中的表单元素
* `:disabled` --- `input:disabled` 选择所有禁用的表单元素
* `:empty` --- `p:empty` 选择所有没有子元素的p元素
* `:enabled` --- `input:enabled` 选择所有启用的表单元素
* `:first-of-type` --- `p:first-of-type`	选择的每个 p 元素是其父元素的第一个 p 元素
* `:in-range` --- `input:in-range`	选择元素指定范围内的值
* `:invalid` --- `input:invalid`	选择所有无效的元素
* `:last-child` --- `p:last-child`	选择所有p元素的最后一个子元素
* `:last-of-type` --- `p:last-of-type`	选择每个p元素是其母元素的最后一个p元素
* `:not(selector)` --- `:not(p)`	选择所有p以外的元素
* `:nth-child(n)` --- `p:nth-child(2)`	选择所有 p 元素的父元素的第二个子元素
* `:nth-last-child(n)` --- `p:nth-last-child(2)`	选择所有p元素倒数的第二个子元素
* `:nth-last-of-type(n)` --- `p:nth-last-of-type(2)`	选择所有p元素倒数的第二个为p的子元素
* `:nth-of-type(n)` --- `p:nth-of-type(2)`	选择所有p元素第二个为p的子元素
* `:only-of-type` --- `p:only-of-type`	选择所有仅有一个子元素为p的元素
* `:only-child` --- `p:only-child`	选择所有仅有一个子元素的p元素
* `:optional` --- `input:optional`	选择没有"required"的元素属性
* `:out-of-range` --- `input:out-of-range`	选择指定范围以外的值的元素属性
* `:read-only` --- `input:read-only`	选择只读属性的元素属性
* `:read-write` --- `input:read-write`	选择没有只读属性的元素属性
* `:required` --- `input:required`	选择有"required"属性指定的元素属性
* `:root` --- `root`	选择文档的根元素
* `:target` --- `#news:target`	选择当前活动#news元素(点击URL包含锚的名字)
* `:valid` --- `input:valid`	选择所有有效值的属性
* `:link` --- `a:link`	选择所有未访问链接
* `:visited` --- `a:visited`	选择所有访问过的链接
* `:active` --- `a:active`	选择正在活动链接
* `:hover` --- `a:hover`	把鼠标放在链接上的状态
* `:focus` --- `input:focus`	选择元素输入后具有焦点
* `:first-letter` --- `p:first-letter`	选择每个`<p>` 元素的第一个字母
* `:first-line` --- `p:first-line`	选择每个`<p>` 元素的第一行
* `:first-child` --- `p:first-child`	选择器匹配属于任意元素的第一个子元素的 `<p>` 元素
* `:before` --- `p:before`	在每个`<p>`元素之前插入内容
* `:after` --- `p:after`	在每个`<p>`元素之后插入内容
* `:lang(language)` --- `p:lang(it)`	为`<p>`元素的lang属性选择一个开始值

---

### [所有CSS伪类/元素](https://www.runoob.com/css/css-pseudo-elements.html)

* `:link` --- `a:link` 选择所有未访问链接
* `:visited` --- `a:visited` 选择所有访问过的链接
* `:active` --- `a:active` 选择正在活动链接
* `:hover` --- `a:hover` 把鼠标放在链接上的状态
* `:focus` --- `input:focus` 选择元素输入后具有焦点
* `:first-letter` --- `p:first-letter` 选择每个`<p>` 元素的第一个字母
* `:first-line` --- `p:first-line` 选择每个`<p>` 元素的第一行
* `:first-child` --- `p:first-child` 选择器匹配属于任意元素的第一个子元素的 `<p>` 元素
* `:before` --- `p:before` 在每个`<p>`元素之前插入内容
* `:after` --- `p:after` 在每个`<p>`元素之后插入内容
* `:lang(language)` --- `p:lang(it)` 为`<p>`元素的lang属性选择一个开始值

---

### [CSS 导航栏](https://www.runoob.com/css/css-navbar.html)

---

### 设置图像透明度
`opacity` 属性
```
img
{
  opacity:0.4;
  filter:alpha(opacity=40); /* IE8 及其更早版本 */
}
```

---


## 过渡效果 tansition

语法 `transition: attr time interpolator delay`。
* `attr` - 要过渡的属性（`all` 表示全部）
* `time` - 用时(s) 
* `interpolator` - 过渡速度的变化曲线（ease/ease-in/ease-out/ease-in-out ） 
* `delay` - 触发的延时(s)

示例
```
.transition_test {
    width: 400px;
    position: relative;
    height: 200px;
    background: pink;
    transition: all 2s ease-in-out 1s;
}

.transition_test:hover {
    width: 800px;
    height: 400px;
    margin-top: 10px;
    background: hotpink;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
}
```


---


## 转换 Transforms
[CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
```
transform -- 向元素应用 2D 或 3D 转换。
transform-origin --	允许你改变被转换元素的位置。
```

### transform
* `translate(x,y)` / `translateX(n)` / `translateY(n)` -- 通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数。

  示例：`transform: translate(50px, 100px);`

* `rotate()` -- 元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。
  
  `transform: rotate(20deg);`

* `scale()` / `scaleX()` / `scaleY()` -- 元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）

  `transform: scale(2, 3);`

* `skew()` / `skewX()` / `skewY()` -- 元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）。
  
  `transform: skew(20deg, 10deg);`
  
* `matrix(n,n,n,n,n,n)` -- matrix() 方法把所有 2D 转换方法组合在一起。

  需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。
  
  `transform: matrix(1, -0.3, 0, 1, 0, 0);`


### transform-origin
语法：`transform-origin: x-axis y-axis z-axis;`

* `x-axis` -- 定义视图被置于 X 轴的何处。可能的值：`left/center/right/length/%`

* `y-axis` -- 定义视图被置于 Y 轴的何处。可能的值：`top/center/bottom/length/%`

* `z-axis` -- 定义视图被置于 Z 轴的何处。可能的值：`length`

---