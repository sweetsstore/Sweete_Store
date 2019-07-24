import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodsdetails',
      component: goodsdetails
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: goodsdetails
    }
  ]
})
