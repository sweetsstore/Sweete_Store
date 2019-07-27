import Vue from 'vue'
import Router from 'vue-router'
import comment from '../Pages/comment/comment.vue'
import degree from '../Pages/degree/degree.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'

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
      name: 'degree',
      component: degree
    },
    {
      path: '/degree',
      name: 'degree',
      component: degree
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
    }
  ]
})
