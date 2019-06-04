import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'xianqing/',
      children: [{
          path: 'xianqing/',
          name: 'xianqing',
          component: () => import('./components/tabs/xianqing.vue'),
          // props: true
        },
        {
          path: "livehall/",
          desc: "生活馆介绍",
          component: () => import('./components/tabs/livehall.vue'),
        },
        {
          path: "weather/",
          desc: "天气预报",
          component: () => import('./components/tabs/weather.vue')
        },
        {
          path: "knowledge/",
          desc: "知识测试",
          component: () => import('./components/tabs/answer.vue')
        },
        {
          path: 'front/showanswer',
          name: 'showanswer',
          component: () => import('./components/tabs/showanswer.vue')
        }
      ]
    }
  ]
})