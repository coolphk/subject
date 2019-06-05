import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import xianqing from '@/components/tabs/xianqing.vue'
import livehall from '@/components/tabs/livehall.vue'
import weather from '@/components/tabs/weather.vue'
import knowledge from '@/components/tabs/answer.vue'
import showanswer from '@/components/tabs/showanswer.vue'
import score from '@/components/tabs/score.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/index',
        name: 'home',
        component: Home,
        redirect: '/xianqing',
        children: [{
            path: '/xianqing',
            name: 'xianqing',
            component: xianqing,
            // props: true
        },
            {
                path: "/livehall",
                desc: "生活馆介绍",
                component: livehall,
            },
            {
                path: "/weather",
                desc: "天气预报",
                component: weather
            },
            {
                path: "/knowledge",
                desc: "知识测试",
                component: knowledge
            },
            {
                path:"/score",
                name:'score',
                component:score
            },
            {
                path: '/showanswer',
                name: 'showanswer',
                component: showanswer
            }
        ]
    }
    ]
})
