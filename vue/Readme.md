[TOC]

# Vue.js
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
计算属性关键词: `computed`。
```
<div id="app">
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: '103Tech!'
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function() {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    })
</script>
```

我们可以使用 `methods` 来替代 `computed`，效果上两个都是一样的，但是 `computed` 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 `methods` ，在重新渲染的时候，函数总会重新调用执行。

可以说使用 `computed` 性能会更好，但是如果你不希望缓存，你可以使用 `methods` 属性。


### computed setter
`computed` 属性默认只有 `getter` ，不过在需要时你也可以提供一个 `setter`。
```
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            name: 'Google',
            url: 'http://www.google.com'
        },
        computed: {
            site: {
                // getter
                get: function() {
                    return this.name + ' ' + this.url
                },
                // setter
                set: function(newValue) {
                    var names = newValue.split(' ')
                    this.name = names[0]
                    this.url = names[names.length - 1]
                }
            }
        }
    })
</script>
```


---


## Vue.js 监听属性
```
<div id="app">
    <p style="font-size:25px;">计数器: {{ counter }}</p>
    <button @click="counter++" style="font-size:25px;">点我</button>
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: '#app',
        data: {
            counter: 1
        }
    });
    vm.$watch('counter', function(nval, oval) {
        alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
    });
</script>
```


**监听属性变化**
```
<div>
    <p>转换示例：</p>
    千米 : <input type="text" v-model="kilometers"> 米 : <input type="text" v-model="meters">

    <div id="change_info" style="margin: 10px 0;"></div>
</div>
<script type="text/javascript">
    var vm = new Vue({
        el: "#vue_step_1",
        data: {
            kilometers: 0,
            meters: 0,
        },
        watch: {
            kilometers: function(val) {
                this.kilometers = val;
                this.meters = this.kilometers * 1000
            },
            meters: function(val) {
                this.kilometers = val / 1000;
                this.meters = val;
            }
        }
    });
    vm.$watch('kilometers', function(newValue, oldValue) {
        // 这个回调将在 vm.kilometers 改变后调用
        document.getElementById("change_info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
    });
</script>
```


---


## Vue.js 样式绑定
`class` 与 `style` 是 HTML 元素的属性，用于设置元素的样式，我们可以用 `v-bind` 来设置样式属性。

Vue.js `v-bind` 在处理 `class` 和 `style` 时， 专门增强了它。表达式的结果类型除了字符串之外，还可以是对象或数组。


```
//通过 isActive 的值来判断是否给 div 添加 active 类名。
<div v-bind:class="{ 'active': isActive }"></div>


//多个类名 用多个值控制
<div class="static" v-bind:class="{ 'active' : isActive, 'text-danger' : hasError }"></div>
```

或者 直接绑定数据里的一个对象。

```
<style>
    .active {}
    .text-danger {}
</style>
<div id="app">
    <div v-bind:class="classObject"></div>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            //需要控制的类名
            classObject: {
                active: true,
                'text-danger': true //带 - 需要用 引号包起来
            }
        }
    })
</script>
```

也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式：
```
<script>
    new Vue({
        el: '#app',
        data: {
            isActive: true,
            error: {
                value: true,
                type: 'fatal'
            }
        },
        computed: {
            classObject: function() {
                return {
                    base: true,
                    active: this.isActive && !this.error.value,
                    'text-danger': this.error.value && this.error.type === 'fatal',
                }
            }
        }
    })
</script>
```

或者把一个数组传给 `v-bind:class    `
```
<div v-bind:class="[activeClass, errorClass]"></div>
<script>
    new Vue({
        el: '#app',
        data: {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    })
</script>
```

还可以使用三元表达式来切换列表中的 class
```
<div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
<script>
    new Vue({
        el: '#app',
        data: {
            isActive: false,
	        activeClass: 'active',
            errorClass: 'text-danger'
        }
    })
</script>
```



---


### Vue.js style(内联样式)
我们可以在 `v-bind:style` 直接设置样式。

以下示例相当于`<div style="color: green; font-size: 30px;">103Tech</div>`
```
<div id="app">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">103Tech</div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            activeColor: 'green',
            fontSize: 30
        }
    })
</script>
```


也可以直接绑定到一个样式对象，让模板更清晰：
```
<div id="app">
    <div v-bind:style="styleObject">103Tech</div>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            styleObject: {
                color: 'green',
                fontSize: '30px'
            }
        }
    })
</script>
```


`v-bind:style` 可以使用数组将多个样式对象应用到一个元素上：
```
<div id="app">
    <div v-bind:style="[baseStyles, overridingStyles]">103Tech</div>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            baseStyles: {
                color: 'green',
                fontSize: '30px'
            },
            overridingStyles: {
                'font-weight': 'bold'
            }
        }
    })
</script>
```

---

## 事件处理器
事件监听可以使用 `v-on` 指令：
```
<div id="app">
    <button v-on:click="counter += 1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>

<script>
    new Vue({
        el: '#app',
        data: {
            counter: 0
        }
    })
</script>
```

`v-on` 通过接收一个定义的方法来调用。
```
<div id="app">
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>

    <button v-on:click="say('Hello World.')">内联 JavaScript 语句方法调用</button>
</div>

<script>
    var app = new Vue({
            el: '#app',
            data: {
                name: 'Vue.js'
            },
            // 在 `methods` 对象中定义方法
            methods: {
                greet: function(event) {
                    // `this` 在方法里指当前 Vue 实例
                    alert('Hello ' + this.name + '!')
                    
                    // `event` 是原生 DOM 事件
                    if (event) {
                        alert(event.target.tagName)//获取对应的标签名
                    }
                },
                say: function (message) {
                    alert(message)
                }
            }
        })
        // 也可以用 JavaScript 直接调用方法
    app.greet() // -> 'Hello Vue.js!'
</script>
```


### 事件修饰符
Vue.js 为 `v-on` 提供了事件修饰符来处理 DOM 事件细节，如：`event.preventDefault()` 或 `event.stopPropagation()`。

Vue.js 通过由点 `.` 表示的指令后缀来调用修饰符。
* `.stop` -- 阻止冒泡

* `.prevent` -- 阻止默认事件

* `.capture` -- 阻止捕获

* `.self` -- 只监听触发该元素的事件

* `.once` -- 只触发一次

* `.left` -- 左键事件

* `.right` -- 右键事件

* `.middle` -- 中间滚轮事件

```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件只能点击一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>

<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">

<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

全部的按键别名：
* `.enter`
* `.tab`
* `.delete` (捕获 "删除" 和 "退格" 键)
* `.esc`
* `.space`
* `.up`
* `.down`
* `.left`
* `.right`
* `.ctrl`
* `.alt`
* `.shift`
* `.meta`

示例：
```
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```


[doc: https://www.runoob.com/vue2/vue-events.html](https://www.runoob.com/vue2/vue-events.html)

---


## Vue.js 表单
* 输入框
  ```
  <div id="app">
      <p>input 元素：</p>
      <input v-model="message" placeholder="编辑我……">
      <p>消息是: {{ message }}</p>
  
      <p>textarea 元素：</p>
      <p style="white-space: pre">{{ message2 }}</p>
      <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              message: '103Tech',
              message2: '103Tech\r\nhttp://www.103style.top'
          }
      })
  </script>
  ```


* 复选框
  ```
  <div id="app">
      <p>单个复选框：</p>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
  
      <p>多个复选框：</p>
      <input type="checkbox" id="103tech" value="103Tech" v-model="checkedNames">
      <label for="103tech">103Tech</label>
      <input type="checkbox" id="google" value="Google" v-model="checkedNames">
      <label for="google">Google</label>
      <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
      <label for="taobao">taobao</label>
      <br>
      <span>选择的值为: {{ checkedNames }}</span>
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              checked: false,
              checkedNames: []
          }
      })
  </script>
  ```

* 单选按钮
  ```
  <div id="app">
      <input type="checkbox" id="103tech" value="103Tech" v-model="picked">
      <label for="103tech">103Tech</label>
      <br>
      <input type="radio" id="google" value="Google" v-model="picked">
      <label for="google">Google</label>
      <br>
      <span>选中值为: {{ picked }}</span>
  </div>
  
  <script>
      new Vue({
          el: '#app',
          data: {
              picked: '103Tech'
          }
      })
  </script>
  ```

---


### 修饰符 
* `.lazy` -- 在默认情况下， `v-model` 在 `input` 事件中同步输入框的值与数据，但你可以添加一个修饰符 `lazy` ，从而转变为在 `change` 事件中同步。

* `.number` -- 自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值）

* `.trim` -- 自动过滤用户输入的首尾空格

---


## [组件](https://www.runoob.com/vue2/vue-component.html)
组件（Component）是 Vue.js 最强大的功能之一。

组件可以扩展 HTML 元素，封装可重用的代码。

![components](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/img/components.png)

注册一个全局组件语法格式如下：
```
Vue.component(tagName, options)
```
`tagName` 为组件名，`options` 为配置选项。注册后，我们可以使用以下方式来调用组件：
```
<tagName></tagName>
```

---


### 全局组件
所有实例都能用全局组件。
```
<div id="app"></div>
<script>
    // 注册
    Vue.component('103tech', {
        template: '<h1>自定义组件!</h1>'
    })

    // 创建根实例
    new Vue({
        el: '#app'
    })
</script>
```

---

### 局部组件
我们也可以在实例选项中注册局部组件，这样组件只能在这个实例中使用:
```
<div id="app"></div>
<script>
    // 注册
    var Child = {
        template: '<h1>自定义组件!</h1>'
    }

    // 创建根实例
    new Vue({
        el: '#app'
        components:{
            //103tech组件 将只在父模板可用
            '103tech':Child
        }
    })
</script>
```

---

### Prop
`prop` 是子组件用来接受父组件传递过来的数据的一个自定义属性。

**注意: prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。**

```
<div id="app"></div>
<script>
    // 注册
    Vue.component('child', {
        // 声明 props
        props:['msg'],
        // 同样也可以在 vm 实例中像 "this.message" 这样使用
        template: '<h1>{{msg}}</h1>'
    })

    // 创建根实例
    new Vue({
        el: '#app'
    })
</script>
```

---


### 动态 Prop
类似于用 `v-bind` 绑定 HTML 特性到一个表达式，也可以用 `v-bind` 动态绑定 `props` 的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件：
```
<div id="app">
    <div>
        <input v-model="parentMsg">
        <child v-bind:message="parentMsg"></child>
    </div>
</div>

<script>
    // 注册
    Vue.component('child', {
        // 声明 props
        props: ['message'],
        // 同样也可以在 vm 实例中像 "this.message" 这样使用
        template: '<span>{{ message }}</span>'
    })

    // 创建根实例
    new Vue({
        el: '#app',
        data: {
            parentMsg: '父组件内容'
        }
    })
</script>
```

---


### Prop 实例
```
<div id="app">
	<ol>
    <todo-item v-for="item in sites" v-bind:todo="item"></todo-item>
  	</ol>
</div>

<script>
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
new Vue({
  el: '#app',
  data: {
    sites: [
      { text: 'Runoob' },
      { text: 'Google' },
      { text: 'Taobao' }
    ]
  }
})
</script>
```

---

### Prop 验证
组件可以为 props 指定验证要求。

为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：
```
<script>
    Vue.component('my-component', {
        props: {
            // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
            propA: Number,
            // 多个可能的类型
            propB: [String, Number],
            // 必填的字符串
            propC: {
                type: String,
                required: true
            },
            // 带有默认值的数字
            propD: {
                type: Number,
                default: 100
            },
            // 带有默认值的对象
            propE: {
                type: Object,
                // 对象或数组默认值必须从一个工厂函数获取
                default: function() {
                    return {
                        message: 'hello'
                    }
                }
            },
            // 自定义验证函数
            propF: {
                validator: function(value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
            }
        }
    })
</script>
```

`type` 可以是下面原生构造器，也可以是一个自定义构造器，使用 `instanceof` 检测。
* `String`
* `Number`
* `Boolean`
* `Array`
* `Object`
* `Date`
* `Function`
* `Symbol`


---

## 组件 - 自定义事件

父组件是使用 `props` 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！

我们可以使用 `v-on` 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：
* 使用 `$on(eventName)` 监听事件
* 使用 `$emit(eventName)` 触发事件

另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。


---