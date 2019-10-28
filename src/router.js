import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chinese',
      component: () => import(/* webpackChunkName: "about" */ './views/Chinese/Chinese.vue')
    },
    {
      path: '/Taiwanese',
      name: 'Taiwanese',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Taiwanese/Taiwanese.vue')
    },
    {
      path: '/ChineseNew',
      name: 'ChineseNew',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ChineseNew/ChineseNew.vue')
    },
    {
      path: '/ChinesePlay',
      name: 'ChinesePlay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ChinesePlay/ChinesePlay.vue')
    },
    {
      path: '/TaiwaneseNew',
      name: 'TaiwaneseNew',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/TaiwaneseNew/TaiwaneseNew.vue')
    },
    {
      path: '/TaiwanesePlay',
      name: 'TaiwanesePlay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/TaiwanesePlay/TaiwanesePlay.vue')
    },
    {
      path: '/CantonesePlay',
      name: 'CantonesePlay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CantonesePlay/CantonesePlay.vue')
    },
    {
      path: '/ToyoPlay',
      name: 'ToyoPlay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ToyoPlay/ToyoPlay.vue')
    },
    {
      path: '/WesternPlay',
      name: 'WesternPlay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/WesternPlay/WesternPlay.vue')
    },
    {
      path: '/Cantonese',
      name: 'Cantonese',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cantonese/Cantonese.vue')
    },
    {
      path: '/Western',
      name: 'Western',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Western/Western.vue')
    },
    {
      path: '/Toyo',
      name: 'Toyo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Toyo/Toyo.vue')
    },
    {
      path: '/LoveHolday',
      name: 'LoveHolday',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoveHolday/LoveHolday.vue')
    },
    {
      path: '/Tempo',
      name: 'Tempo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tempo/Tempo.vue')
    },
    {
      path: '/LoveSong',
      name: 'LoveSong',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoveSong/LoveSong.vue')
    },
    {
      path: '/Graduation',
      name: 'Graduation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Graduation/Graduation.vue')
    }
  ]
})
