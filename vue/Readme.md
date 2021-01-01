[TOC]

# Vue
* [官网 https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)
* [菜鸟教程 https://www.runoob.com/vue2/vue-tutorial.html](https://www.runoob.com/vue2/vue-tutorial.html)

CDN引入
```
//对于制作原型或学习
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

//生成环境
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
```

---

## 命令行工具
安装 `npm install -g vue-cli`

```
# 创建一个基于 webpack 模板的新项目
> vue init webpack my-project

> cd my-project
> npm install
> npm run dev
```

---

## 项目结构
```
build	        项目构建(webpack)相关代码
config          配置目录，包括端口号等。我们初学可以使用默认的。
node_modules    npm 加载的项目依赖模块
src	            这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
--- assets:     放置一些图片，如logo等。
--- components: 目录里面放了一个组件文件，可以不用。
--- App.vue:    项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
--- main.js:    项目的核心文件。
static      	静态资源目录，如图片、字体等。
test	        初始测试目录，可删除
.xxxx文件	    这些是一些配置文件，包括语法配置，git配置等。
index.html	    首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json	项目配置文件。
README.md	    项目的说明文档，markdown 格式
```

src/APP.vue 代码结构
```
// html展示模块
<template>
  <div id="app">
    <img src="./assets/logo.png">
  </div>
</template>


//相关的组件
<script>
export default {
  name: 'App',
  components: {Hello},
  data () {return {msg: ''}}
}
</script>


//css样式代码
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

---

## Vue Step 1
每个 Vue 应用都需要通过实例化 Vue 来实现。  

[vue_demo.html](https://github.com/103style/AndroidDevLearnWeb/tree/master/vue/vue_demo.html)

示例如下：
```
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue起步</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="vue_demo">
        <h1>site : {{site}}</h1>
        <h1>url : {{url}}</h1>
        <h1>{{info()}}</h1>
    </div>

    <script type="text/javascript">
        var vm = new Vue({
            //DOM元素的id 匹配对应的元素
            el: "#vue_demo",
            //声明变量
            data: {
                site: '103Tech',
                url: '103style.top'
            },
            //申明方法
            methods: {
                info: function() {
                    return this.site + "----" + this.url;
                }
            }
        })
    </script>
</body>
</html>
```

---

## Vue.js 模板语法
[示例代码： vue_demo.html](https://github.com/103style/AndroidDevLearnWeb/tree/master/vue/vue_demo.html)

* 使用 `{{...}}`（双大括号）的文本插值
  ```
  <div id="app">
      <h1>site : {{message}}</h1>
  </div>
  <script>
      new Vue({
          el: '#app',
          data: {
              message: '103Tech'
          }
      })
  </script>
  ```

* 使用 `v-html` 指令用于输出 html 代码
  ```
  <div id="app">
      <!--  不能写出 <div v-html="message" />  -->
      <div v-html="message"></div>  
  </div>
  <script>
      new Vue({
          el: '#app',
          data: {
              message: '<h1>103Tech</h1>'
          }
      })
  </script>
  ```

* 使用 `v-bind` 设置 HTML 属性中的值。

  以下实例判断 use 的值，如果为 true 使用 class1 类的样式，否则不使用该类：
  ```
  <div id="app">
      <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
      <br><br>
      <div v-bind:class="{'class1': use}">
          v-bind:class 指令
      </div>
      <ol>
          <li v-for='todo in todos'>
              {{todo.text}}
          </li>
      </ol>

  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              use: false,
              todos: [
                  {text: 'a'},
                  {text: 'bb'}, 
                  {text: 'cccc'}, 
                  {text: 'dddd'}
              ]   
      });
  </script>
  ```

* JavaScript 表达式支持。
  ```
  <div id="app">
      {{5+5}}
      <br> {{ ok ? 'YES' : 'NO' }}
      <br> {{ message.split('').reverse().join('') }}
      <div v-bind:id="'list-' + id">菜鸟教程</div>
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              ok: true,
              message: 'RUNOOB',
              id: 1
          }
      })
  </script>
  ```

* 指令。 指令是带有 v- 前缀的特殊属性。
  ```
  <div id="app">
      <p v-if="seen">现在你看到我了</p>
      
      <!-- 在这里参数是监听的事件名。 -->
      <a v-on:click="doSomething">
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              seen: true
          }
      })
  </script>
  ```


* 参数。 参数在指令后以冒号指明。例如， `v-bind` 指令被用来响应地更新 HTML 属性。
  ```
  <div id="app">
      <a v-bind:href="url">103Tech</a>
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              url: 'http://103style.top'
          }
      })
  </script>
  ```

* 修饰符。修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
  
  例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：
  ```
  <form v-on:submit.prevent="onSubmit"></form>
  ```

* 过滤器。Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示, 格式如下：
  ```
  <!-- 在两个大括号中 -->
  {{ message | capitalize }}
  
  <!-- 在 v-bind 指令中 -->
  <div v-bind:id="rawId | formatId"></div>
  ```
  
  替换 `filterString` 中每个单次的首个字符为大写
  ```
  <div id="app">
      {{ filterString | capitalize }}
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              filterString: 'this is a filter string.'
          },
          filters: {
              capitalize: function(value) {
                  if (!value) return '';
                  value = value.toString();
                  var arr = value.split(' ');
                  var res = '';
                  for (var i = 0; i < arr.length; i++) {
                      res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                      if (i + 1 != arr.length) res += ' ';
                  }
                  return res;
              }
          }
      })
  </script>
  ```

* 缩写
  ```
  //v-bind 缩写
  <!-- 完整语法 -->
  <a v-bind:href="url"></a>
  <!-- 缩写 -->
  <a :href="url"></a>
  
  //v-on 缩写
  <!-- 完整语法 -->
  <a v-on:click="doSomething"></a>
  <!-- 缩写 -->
  <a @click="doSomething"></a>
  ```
---

## Vue.js 条件语句
* `v-if`
  ```
  <p v-if="seen">现在你看到我了</p>
  ```

* `v-else`
  ```
  <div v-if="Math.random() > 0.5">Sorry</div>
  <div v-else>Not sorry</div>
  ```
  
* `v-else-if`
  ```
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  ```
  
* `v-show` : 标识元素是否显示
  ```
  <h1 v-show="ok">Hello!</h1>
  ```

---


## Vue.js 循环语句
```
<div id="vue_demo">
    <ol>
        //输出每个 todo中的 text
        <li v-for='todo in todos'>
            {{todo.text}}
        </li>
    </ol>
    <ol>
       //输出todos中对应的值
        <li v-for="value in todos>
            {{ value }}
        </li>
    </ol>
    <ol>
        //输出todos中对应的 下标 key 和 value
        <li v-for="(value, key, index) in object>
            {{ index }}. {{ key }} : {{ value }}
        </li>
    </ol>
    <ol>
        //从 1 到 10
        <li v-for="n in 10>
            {{ n }}
        </li>
    </ol>
</div>
```
```
<script type="text/javascript">
    var vm = new Vue({
        el: "#vue_demo",
        data: {
            todos: [{
                text: 'a'
            }, {
                text: 'bb'
            }, {
                text: 'cccc'
            }, {
                text: 'dddd'
            }, ],  
        },
    });
</script>
```

---

## Vue.js 计算属性