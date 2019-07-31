import Vue from 'vue'
import Router from 'vue-router'
import home from '../Pages/home/home.vue'
import classify from '../Pages/classify/classify.vue'
import goodsshow from '../Pages/goodsshow/goodsshow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/goodsshow',
      name: 'goodsshow',
      component: goodsshow
    }
  ]
})
