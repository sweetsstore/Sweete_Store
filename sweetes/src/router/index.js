import Vue from 'vue'
import Router from 'vue-router'
import home from '../Pages/home/home.vue'
import comment from '../Pages/comment/comment.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
import review from '../Pages/review/review.vue'

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
      name: 'comment',
      component: comment
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/',
      name: 'merchandise',
      component: merchandise
    },
    {
      path: '/merchandise',
      name: 'merchandise',
      component: merchandise
    },
    {
      path: '/',
      name: 'review',
      component: review
    },
    {
      path: '/review',
      name: 'review',
      component: review
    }
  ]
})
