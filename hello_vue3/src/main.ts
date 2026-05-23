import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

// 创建应用
const app = createApp(App)

// hello组件就可以到处使用了,全局组件
app.component('hello', Hello)
// 全局变量
app.config.globalProperties.x = 99
// 注册全局指令
app.directive('beauty', (element, { value }) => {
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')
