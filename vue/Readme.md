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

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/index.html)

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
> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/index.html)

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

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_circle.html)

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

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_attrsChangeListener.html)

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


> [doc: https://www.runoob.com/vue2/vue-events.html](https://www.runoob.com/vue2/vue-events.html)

---


## Vue.js 表单

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_from.html)

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

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_component.html)

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

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_customEvent.html)


父组件是使用 `props` 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！

我们可以使用 `v-on` 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：
* 使用 `$on(eventName)` 监听事件
* 使用 `$emit(eventName)` 触发事件

另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。


如果你想在某个组件的根元素上监听一个原生事件。可以使用 `.native` 修饰 `v-on` 。例如：
```
<my-component v-on:click.native="doSomeThing"></my-component>
```

**data 必须是一个函数**

上面例子中，可以看到` button-counter` 组件中的 data 不是一个对象，而是一个函数。

这样的好处就是每个实例可以维护一份被返回对象的独立的拷贝，如果 data 是一个对象则会影响到其他实例，


---


### 自定义组件的 v-model
组件上的 `v-model` 默认会利用名为 `value` 的 `prop` 和名为 `input` 的事件。


`<input v-model="parentData">`  等价于：
```
<input 
    :value="parentData"
    @input="parentData = $event.target.value"
>
```

`checkbox`
```
<input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
>
```

---

## 自定义指令
除了默认设置的核心指令( `v-model` 和 `v-show` ), Vue 也允许注册自定义指令。

以下示例是通过 `Vue.directive()` 注册一个全局指令 `v-focus`，该指令的功能是在页面加载时，元素获得焦点。
```
<div id="app">
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>
</div>

<script>
    // 注册一个全局自定义指令 v-focus
    Vue.directive('focus', {
        // 当绑定元素插入到 DOM 中。
        inserted: function(el) {
            // 聚焦元素
            el.focus()
        }
    })
    // 创建根实例
    new Vue({
        el: '#app'
    })
</script>
```

注册局部指令,则将其放到对应的 Vue 实例中:
```
var app = new Vue({
    el: '#test',
    //
    directives: {
        focus: {
            inserted: function(tag) {
                tag.focus;
            }
        }
    }
});
```

---

### 钩子函数
指令定义函数提供了几个钩子函数（可选）：

* `bind`: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。

* `inserted`: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

* `update`: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
  
* `componentUpdated`: 被绑定元素所在模板完成一次更新周期时调用。

* `unbind`: 只调用一次， 指令与元素解绑时调用。

---

### 钩子函数参数
钩子函数的参数有：

* `el`: 指令所绑定的元素，可以用来直接操作 DOM 。

* `binding`: 一个对象，包含以下属性：
  * `name`: 指令名，不包括 v- 前缀。
  * `value`: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
  * `oldValue`: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
  * `expression`: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
  * `arg`: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
  * `modifiers`: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。

* `vnode`: Vue 编译生成的虚拟节点。

* `oldVnode`: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。


获取钩子函数 `bind` 函数参数的示例：
```
Vue.directive('103tech', {
    bind: function(el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            '指令名--name: ' + s(binding.name) + '<br>' +
            '指令的绑定值--value: ' + s(binding.value) + '<br>' +
            '绑定值的表达式或变量名--expression: ' + s(binding.expression) + '<br>' +
            '传给指令的参数--arg: ' + s(binding.arg) + '<br>' +
            '一个包含修饰符的对象--modifiers: ' + s(binding.modifiers) + '<br>' +
            ' Vue 编译生成的虚拟节点--vnode keys: ' + Object.keys(vnode).join(', ')
    }
})
```

如果不需要其他钩子函数，我们可以简写为
```
Vue.directive('103tech', function (el, binding) {
  // 设置指令的背景颜色
  el.style.backgroundColor = binding.value.color
})
```

---

## 路由
对于大多数单页面应用，都推荐使用官方支持的 [vue-router](https://github.com/vuejs/vue-router) 库。


> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_router.html)



简单示例：
```
<div id="vue_router_learn">
    <!-- 使用 router-link 组件来导航. 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <div class="title">
        <router-link to="/tech">Go to 103Tech</router-link>
    </div>
    <div class="title">
        <router-link to="/website">Go to 103style.top</router-link>
    </div>

    <!-- 路由出口， 路由匹配到的组件将渲染在这里-->
    <router-view></router-view>
</div>

<script>
    // 1.定义路由组件，也可以从其他文件 import 进来
    const Tech = {
        template: '<div class="item">103Tech</div>'
    }
    const Website = {
        template: '<div class="item">103style.top</div>'
    }

    // 2.定义路由表
    // 每个路由应该映射一个组件。
    // 其中"component" 可以是 通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    const routers = [{
        path: '/tech',
        component: Tech
    }, {
        path: '/website',
        component: Website
    }]

    // 3. 创建 router 实例，然后传 `routes` 配置
    const router = new VueRouter({
        //如果路由表变量名为 routes， 可以直接写 routes， 相当于 routes: routes
        routes: routers
    })

    // 4. 创建和挂载根实例。
    // 记得要通过 router 配置参数注入路由，
    const app = new Vue({
        router
    }).$mount('#vue_router_learn');
</script>
```

---

### `<router-link>` 相关属性
* `to` -- 表示目标路由的链接。
  ```
  <!-- 字符串 -->
  <router-link to="home">Home</router-link>
  <!-- 渲染结果 -->
  <a href="home">Home</a>
  
  <!-- 使用 v-bind 的 JS 表达式 -->
  <router-link v-bind:to="'home'">Home</router-link>
  <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
  <router-link :to="'home'">Home</router-link>
  
  <!-- 同上 -->
  <router-link :to="{ path: 'home' }">Home</router-link>
  
  <!-- 命名的路由 -->
  <router-link :to="{ name: 'user', params: { userId: 123 }}">User</  router-link>
  
  <!-- 带查询参数，下面的结果为 /register?plan=private -->
  <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</  router-link>
  ```

* `replace` -- 设置 `replace` 属性的话，当点击时，会调用 `router.replace()` 而不是 `router.push()`，导航后不会留下 history 记录。
  ```
  <router-link :to="{ path: '/abc'}" replace></router-link>
  ```

* `append` -- 设置 `append` 属性后，则在当前 (相对) 路径前添加其路径。例如，我们从 `/a` 导航到一个相对路径 `b`，如果没有配置 `append`，则路径为 `/b`，如果配了，则为 `/a/b`。
  ```
  <router-link :to="{ path: 'relative/path'}" append></router-link>
  ```

* `tag` -- 有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag` prop 类指定何种标签，同样它还是会监听点击，触发导航。
  ```
  <router-link to="/foo" tag="li">foo</router-link>
  <!-- 渲染结果 -->
  <li>foo</li>
  ```

* `active-class` -- 设置 链接激活时使用的 CSS 类名。可以通过以下代码来替代。
  ```
  <style>
     ._active{
        background-color : red;
     }
  </style>
  <p>
     <router-link v-bind:to = "{ path: '/route1'}" active-class = "_active">Router Link 1</router-link>
     <router-link v-bind:to = "{ path: '/route2'}" tag = "span">Router Link 2</router-link>
  </p>
  ```

* `exact-active-class` -- 配置当链接被精确匹配的时候应该激活的 class。可以通过以下代码来替代。
  ```
  <p>
     <router-link v-bind:to = "{ path: '/route1'}" exact-active-class = "_active">Router Link 1</router-link>
     <router-link v-bind:to = "{ path: '/route2'}" tag = "span">Router Link 2</router-link>
  </p>
  ```

* `event` -- 声明可以用来触发导航的事件。
  ```
  <router-link v-bind:to = "{ path: '/route1'}" event = "mouseover">Router Link 1</router-link>
  ```

---

## 过渡 & 动画
### 过渡
Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

Vue 提供了内置的过渡封装组件，该组件用于包裹要实现过渡效果的组件。


语法格式
```
<transition name = "nameoftransition">
   <div></div>
</transition>
```

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_anim.html)


示例代码中通过点击更改 `show` 字段，触发淡入淡出的效果 `fade`。
```
<button v-on:click="show = !show">点我</button>
<transition name="fade">
    <p v-show="show" v-bind:style="styleobj">动画实例</p>
</transition>
```

Vue在元素显示与隐藏的过渡中，提供了以下 6 个 class 来切换。

设置时将前缀 `v` 替换城设置的 动画名字。
* `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

* `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

* `v-enter-to`: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

* `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

* `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

* `v-leave-to`: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

![transition](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/img/transition.png.html)


对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。


---

### CSS 过渡
> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/vue_anim.html)

```
<style>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    

    /* .slide-fade-leave-active 用于 2.1.8 以下版本 */
    .slide-fade-enter,
    .slide-fade-leave-to{
        transform: translateX(10px);
        opacity: 0;
    }
</style>

<body>
    <transition name="slide-fade">
        <p v-if="show">103Tech</p>
    </transition>
</body>
```

---

### CSS动画
> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_anim.html)

```
<style>
    .anim-enter {
        animation: bounce-in 2s;
    }
    .anim-leave-active {
        animation: bounce-in 2s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
<body>
    <div id="vue_anim">
        <transition name="anim">
            <p v-show="show" v-bind:style="styleobj">动画B</p>
        </transition>
    </div>
</body>
```

---

### 自定义过渡的类名
我们可以通过以下特性来自定义过渡类名：
* `enter-class`
* `enter-active-class`
* `enter-to-class (2.1.8+)`
* `leave-class`
* `leave-active-class`
* `leave-to-class (2.1.8+)`

**自定义过渡的类名优先级高于普通的类名，这样就能很好的与第三方（如：animate.css）的动画库结合使用。**

---


### 同时使用过渡和动画
Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 `transitionend` 或 `animationend` ，这取决于给元素应用的 CSS 规则。

如果你使用其中任何一种，Vue 能自动识别类型并设置监听。

但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 `animation` 很快的被触发并完成了，而 `transition` 效果还没结束。在这种情况中，你就需要使用 `type` 特性并设置 `animation` 或 `transition` 来明确声明你需要 Vue 监听的类型。

---


### 显性的过渡持续时间

**2.2.0 新增**

在很多情况下，Vue 可以自动得出过渡效果的完成时机。

默认情况下，Vue 会等待其在过渡效果的根元素的第一个 `transitionend` 或 `animationend` 事件。

然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。


在这种情况下你可以用 <transition> 组件上的 duration 属性定制一个显性的过渡持续时间 (以毫秒计)：
```
<transition :duration="1000">...</transition>

//or
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

---

### JavaScript 钩子
可以在属性中声明 JavaScript 钩子。

这些钩子函数可以结合 CSS `transitions`/`animations` 使用，也可以单独使用。


**当只用 JavaScript 过渡的时候，在 `enter` 和 `leave` 中必须使用 `done` 进行回调。否则，它们将被同步调用，过渡会立即完成。**


**推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。**

```
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
 
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"> 
  <!-- ... -->
</transition>

<script type="text/javascript">
    var vm = new Vue({
        el: "#vue_anim",
        methods: {
            // 进入中
            beforeEnter: function(el) {
                // ...
            },
            // 此回调函数是可选项的设置与 CSS 结合时使用
            enter: function(el, done) {
                // ...
                done()
            },
            afterEnter: function(el) {
                // ...
            },
            enterCancelled: function(el) {
                // ...
            },
            // 离开时
            beforeLeave: function(el) {
                // ...
            },
            // 此回调函数是可选项的设置与 CSS 结合时使用
            leave: function(el, done) {
                // ...
                done()
            },
            afterLeave: function(el) {
                // ...
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function(el) {
                // ...
            }
        }
    });
</script>
```

---


## 初始渲染的过渡
可以通过 `appear` 属性设置节点在初始渲染的过渡。
```
<transition appear>
  <!-- ... -->
</transition>
```

这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名。
```
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class" (2.1.8+)
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```


---

## 多个元素的过渡
我们可以设置多个元素的过渡，对于原生标签可以使用 `v-if`/`v-else`。

最常见的多标签过渡是一个列表和描述这个列表为空消息的元素。

```
<transition>
  <table v-if="items.length > 0">
    <!-- ... -->
  </table>
  <p v-else>抱歉，没有找到您查找的内容。</p>
</transition>
```

**当有相同标签名的元素切换时，需要通过 `key` 属性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。即使在技术上没有必要，给在 `<transition>` 组件中的多个元素设置 key 是一个更好的实践。**


如下实例：
```
<transition>
  <button v-if="isEditing" key="save">
    Save
  </button>
  <button v-else key="edit">
    Edit
  </button>
</transition>
```
在一些场景中，也可以通过给同一个元素的 key 特性设置不同的状态来代替 `v-if` 和 `v-else`，上面的例子可以重写为：
```
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```

使用多个 `v-if` 的多个元素的过渡可以重写为绑定了动态属性的单个元素过渡。例如：
```
<transition>
  <button v-if="docState === 'saved'" key="saved">
    Edit
  </button>
  <button v-if="docState === 'edited'" key="edited">
    Save
  </button>
  <button v-if="docState === 'editing'" key="editing">
    Cancel
  </button>
</transition>
```

可以重写为：
```
<transition>
  <button v-bind:key="docState">
    {{ buttonMessage }}
  </button>
</transition>
```

```
// ...
computed: {
  buttonMessage: function () {
    switch (this.docState) {
      case 'saved': return 'Edit'
      case 'edited': return 'Save'
      case 'editing': return 'Cancel'
    }
  }
}
```

---

### 过渡模式
* `in-out`：新元素先进行过渡，完成之后当前元素过渡离开。

* `out-in`：当前元素先进行过渡，完成之后新元素过渡进入。

```
<transition name="fade" mode="out-in">
  <!-- ... the buttons ... -->
</transition>
```

---


## 混入
混入 (`mixins`)定义了一部分可复用的方法或者计算属性。混入对象可以包含任意组件选项。

当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

> [示例代码](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_mixin.html)


```
<div id="vue_mixin">
</div>

<script type="text/javascript">
    var vm = new Vue({
        el: "#vue_mixin",
        data: {},
    });

    var mixinA = {
        created: function() {
            this.startmixin();
        },
        methods: {
            startmixin: function() {
                document.write("Hello Mixin.");
            }
        }
    }

    var ComponentMixinA = Vue.extend({
        mixins: [mixinA]
    })
    var conmpentA = new ComponentMixinA();
</script>
```

---


### 选项合并
当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。

```
<div id="vue_mixin">
</div>

<script type="text/javascript">
    var mixinA = {
        created: function() {
            this.startmixin();
        },
        methods: {
            startmixin: function() {
                document.write("Hello Mixin. <br>");
            },
        }
    }

    var ComponentMixinA = Vue.extend({
        mixins: [mixinA]
    })
    var conmpentA = new ComponentMixinA();

    var vm = new Vue({
        el: "#vue_mixin",
        data: {},
        mixins: [mixinA],
        created: function() {
            document.write('组件调用' + '<br>')
        },
        
    });
</script>
```
界面输出：
```
Hello Mixin.
组件调用
```
从输出结果可以看出两个选项合并了。



如果 methods 选项中有相同的函数名，则 **Vue 实例** 优先级会较高。
```
<div id="vue_mixin">
</div>

<script type="text/javascript">

    var mixinA = {
        methods: {
            hellworld: function() {
                document.write('HelloWorld 方法' + '<br>');
            },
            samemethod: function() {
                document.write('Mixin：相同方法名' + '<br>');
            }
        }
    }
    var vm = new Vue({
        el: "#vue_mixin",
        data: {},
        mixins: [mixinA],
        methods: {
            start: function() {
                document.write('start 方法' + '<br>');
            },
            samemethod: function() {
                document.write('Main：相同方法名' + '<br>');
            }
        }
    });

    vm.hellworld();
    vm.start();
    vm.samemethod();
</script>
```
输出：
```
HelloWorld 方法
start 方法
Main：相同方法名
```

---

### 全局混入

也可以全局注册混入对象。注意使用！ 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。使用恰当时，可以为自定义对象注入处理逻辑。

```
<div id="vue_mixin">
</div>
<script type="text/javascript">
    //全局混入
    Vue.mixin({
        created: function() {
            var myOption = this.$options.myOption
            if (myOption) {
                document.write(myOption)
            }
        }
    })
    var vm = new Vue({
        el: "#vue_mixin",
        data: {},
        myOption: 'hello!',
    });
    
</script>
```

---


## Ajax(axios)
[axios.md](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/axios.md)

---


## Ajax(vue-resource)

Vue 要实现异步加载需要使用到 vue-resource 库。

Vue.js 2.0 版本推荐使用 axios 来完成 ajax 请求。

```
<script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>
```

### Get 请求
```
//发送get请求
this.$http.get('/try/ajax/ajax_info.txt').then(function(res){
    document.write(res.body);    
},function(){
    console.log('请求失败处理');
});
```

如果需要传递数据，可以使用 `this.$http.get('get.php',{params : jsonData})` 格式，第二个参数 `jsonData` 就是传到后端的数据。

```
this.$http.get('get.php', {params : {a:1,b:2}}).then(function(res){
    document.write(res.body);    
},function(res){
    console.log(res.status);
});
```

---


### post 请求
post 发送数据到后端，需要第三个参数 `{emulateJSON:true}`。

`emulateJSON` 的作用： 如果Web服务器无法处理编码为 application/json 的请求，你可以启用 `emulateJSON` 选项。

```
//发送 post 请求
this.$http.post('/try/ajax/demo_test_post.php',{name:"菜鸟教程",url:"http://www.runoob.com"},{emulateJSON:true}).then(function(res){
    document.write(res.body);    
},function(res){
    console.log(res.status);
});
```

---


### 语法 & API
你可以使用全局对象方式 `Vue.http` 或者在一个 Vue 实例的内部使用 `this.$http` 来发起 HTTP 请求。
```
// 基于全局Vue对象使用http
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);

// 在一个Vue实例内使用$http
this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```

`vue-resource` 提供了 7 种请求 API(REST 风格)：
```
get(url, [options])
head(url, [options])
delete(url, [options])
jsonp(url, [options])
post(url, [body], [options])
put(url, [body], [options])
patch(url, [body], [options])
```

`options` 参数说明:
* `url` -- string  --- 请求的目标URL

* `body` -- Object, FormData, string  --- 作为请求体发送的数据
* `headers` -- Object  ---  作为请求头部发送的头部对象
* `params` -- Object  ---  作为URL参数的参数对象
* `method` -- string  ---  HTTP方法 (例如GET，POST，...)
* `timeout` -- number  ---  请求超时（单位：毫秒）(0表示永不超时)
* `before` -- function(request)	--- 在请求发送之前修改请求的回调函数
* `progress` -- function(event)  ---  用于处理上传进度的回调函数 ProgressEvent
* `credentials` -- boolean  ---  是否需要出示用于跨站点请求的凭据
* `emulateHTTP` -- boolean  ---  是否需要通过设置 `X-HTTP-Method-Override` 头部并且以传统POST方式发送PUT，PATCH和DELETE请求。
* `emulateJSON` -- boolean  ---  设置请求体的类型为 `application/x-www-form-urlencoded`


通过如下属性和方法处理一个请求获取到的响应对象：
* `url` --  string --- 响应的 URL 源

* `body` --  Object, Blob, string ---  响应体数据
* `headers` --  Header --- 请求头部对象
* `ok` --  boolean --- 当 HTTP 响应码为 200 到 299 之间的数值时该值为 true
* `status` --  number --- HTTP 响应码
* `statusText` --  string --- HTTP 响应状态
* `text()` -- 约定值  --- 以字符串方式返回响应体
* `json()` -- 约定值  --- 以格式化后的 json 对象方式返回响应体
* `blob()` -- 约定值  --- 以二进制 Blob 对象方式返回响应体

---

## 响应接口
Vue 可以添加数据动态响应接口。

例如以下实例，我们通过使用 `$watch` 属性来实现数据的监听，`$watch` 必须添加在 Vue 实例之外才能实现正确的响应。

下面的示例中通过点击按钮计数器会加 1。`setTimeout` 设置 `10秒` 后计算器的值修改为 `20` 。
```
<div id="vue_reactive">
    <p class="title">计数器: {{ counter }}</p>

    <button @click="counter++" style="font-size:25px;">点我</button>

</div>

<script type="text/javascript">
    var vm = new Vue({
        el: "#vue_reactive",
        data: {
            counter: 0,
        },
    });
    //监听 counter 的变化
    vm.$watch('counter', function(now, before) {
        alert('计数器值的变化 :' + before + ' 变为 ' + now + '!');
    })

    //10s后将 counter 修改为 20
    setTimeout(function() {
        vm.counter = 20;
    }, 10000);
</script>
```


Vue 不允许在已经创建的实例上动态添加新的根级响应式属性。

Vue 不能检测到对象属性的添加或删除，最好的方式就是在初始化实例前声明根级响应式属性，哪怕只是一个空值。

如果我们需要在运行过程中实现属性的添加或删除，则可以使用全局 Vue，`Vue.set` 和 `Vue.delete` 方法。


---


### Vue.set
`Vue.set` 方法用于设置对象的属性，它可以解决 Vue 无法检测添加属性的限制，语法：`Vue.set( target, key, value )`。


通过 `Vue.set` 添加了属性， 会自动生成对应的 `get/set` 方法。

但是通过 `vm.products.qty = "1";` 这样添加属性则不会生成对应的 `get/set` 方法。
```
<script type = "text/javascript">
var myproduct = {"id":1, name:"book", "price":"20.00"};
var vm = new Vue({
   el: '#app',
   data: {
      products: myproduct
   }
});
Vue.set(myproduct, 'qty', 1);
</script>
```


---


### Vue.delete
`Vue.delete` 用于删除动态添加的属性。 语法：`Vue.delete( target, key )`。

被删除属性对应的 'get/set' 方法也会被删除。

---