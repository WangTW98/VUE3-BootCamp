// History模式路由
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// Hash模式路由
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // 路由发生变化修改页面title，需配合main.js代码生效
    meta: {
      title: 'Home'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由发生变化修改页面title，需配合main.js代码生效
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// History模式路由
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// Hash模式路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
