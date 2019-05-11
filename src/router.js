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
      redirect:'xianqing/县情简介',
      children: [
        {
          path: 'xianqing/:title',
          name: 'xianqing',
          component: () => import('./components/tabs/xianqing.vue'),
          props:true
        },
        {
          path: "livehall/:title",
          desc: "生活馆介绍",
          component: () => import('./components/tabs/livehall.vue'),
          props:true
        },
        {
          path: "weather/:title",
          desc: "天气预报"
        },
        {
          path: "knowledge/:title",
          desc: "知识测试"
        }
      ]
    }
  ]
})
