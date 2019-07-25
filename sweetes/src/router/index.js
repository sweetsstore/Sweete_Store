import Vue from 'vue'
import Router from 'vue-router'
import like from '../pages/like/like.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'like',
      component: like
    },
    {
      path:'/like',
      name:'like',
      component:like
    }
  ]
})