import Vue from 'vue'
import Router from 'vue-router'
import comment from '../Pages/comment/comment.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
import review from '../Pages/review/review.vue'
import recommend from '../Pages/recommend/recommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }
  ]
})
