import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'orders',
      component: orders
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: goodsdetails
    }, {
      path: '/order',
      name: 'orders',
      component: orders
    }
  ]
})
