import Vue from 'vue'
import Router from 'vue-router'
import comment from '../Pages/comment/comment.vue'
import degree from '../Pages/degree/degree.vue'

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
    }
  ]
})
