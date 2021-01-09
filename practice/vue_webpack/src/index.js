import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'
//创建div添加到body中
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
        render: (h) => h(App)
    }).$mount(root) // 将vue视图导入到这个div中