import Vue from 'vue'
import Router from 'vue-router'
import home from '../Pages/home/home.vue'
import classify from '../Pages/classify/classify.vue'
import goods_show from '../Pages/goods_show/goods_show.vue'
 

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
      path: '/',
      name: 'goods_show',
      component: goods_show
    },
    {
      path: '/goods_show',
      name: 'goods_show',
      component: goods_show
    }
  ]
})
