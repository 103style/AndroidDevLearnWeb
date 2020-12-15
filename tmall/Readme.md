## 基于 京东首页学习 实现 天猫首页
* 布局、样式
* 二级菜单
* 轮播图
* [矢量图](https://www.iconfont.cn/)

---

### ScreenShot
![screenshot](https://github.com/103style/AndroidDevLearnWeb/blob/master/tmall/tmall_srceenshot.gif)


---

### JavaScript相关
* 轮播图 和 二级菜单 参考 京东首页课程 里面的二级菜单和轮播图的JavaScript代码就行

---

### 布局相关
* **块元素** 独自占一行；**内联元素** 只占内容区域。 
  * 多个 块元素，布局会按竖直方向一次排列
  * 多个 内联元素，布局会在 一行内 按水平方向依次排列。
  
* 可以通过修改 [`display`](https://www.runoob.com/cssref/pr-class-display.html) 属性.
  * `display:block;` 将当前元素修改为 块元素
  * `display:inline;` 将当前元素修改为 内联元素

* 利用 [`float`](https://www.runoob.com/cssref/pr-class-float.html) 属性， 和 [`display:flex`](https://www.runoob.com/css3/css3-flexbox.html) 修改布局 竖直 边 水平。
