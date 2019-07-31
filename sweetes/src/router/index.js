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
      path: '/',
      name: 'classify',
      component: classify
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
<<<<<<< HEAD
=======
      path: '/',
      name: 'goodsshow',
      component: goodsshow
    },
    {
>>>>>>> 334e794f0ba12b02551f590d48480d78b8eb785f
      path: '/goodsshow',
      name: 'goodsshow',
      component: goodsshow
    }
  ]
})
