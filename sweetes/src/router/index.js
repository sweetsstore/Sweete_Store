import Vue from 'vue'
import Router from 'vue-router'
import home from '../Pages/home/home.vue'
import classify from '../Pages/classify/classify.vue'

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
    }
  ]
})
