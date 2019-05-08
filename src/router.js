import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'xianqing',
          name: 'xianqing',
          component: () => import('./components/tabs/xianqing.vue')
        },
        {
          path: "/shenghuo",
          desc: "生活馆介绍"
        },
        {
          path: "/weather",
          desc: "天气预报"
        },
        {
          path: "/knowledge",
          desc: "知识测试"
        }
      ]
    }
  ]
})
