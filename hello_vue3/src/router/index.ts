// 创建一个路由器，并暴露出去
// 引入创建函数
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    // 一个一个的路由规则
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiang',
          // /:id/:title/:content：params参数的占位符，query不需要这个
          path: 'detail/:id/:title/:content',
          component: Detail,
          // 第一种写法: 将路由收到的所有params参数作为props传给路由组件，props只能配合props参数
          props: true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件,通常是传query参数
          // props(route) {
          //   return route.query
          // },

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件,一般只能传固定参数，很少用，了解即可
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
      ],
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    },
    {
      path: '/',
      redirect: '/home', // 重定向，防止/没有路由
    },
  ],
})

// 暴露出去router
export default router
