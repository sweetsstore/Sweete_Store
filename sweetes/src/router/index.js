import Vue from 'vue'
import Router from 'vue-router'
import comment from '../Pages/comment/comment.vue'

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
    }
  ]
})
