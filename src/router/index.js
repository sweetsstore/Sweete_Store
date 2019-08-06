import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
import bottomnav from '../components/bottomnav/bottomnav.vue'
import shoppingcart from '../Pages/shoppingcart/shoppingcart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodsdetails',
      component: goodsdetails
    }, {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: goodsdetails
    }, {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/bottomnav',
      name: 'bottomnav',
      component: bottomnav
    }
  ]
})
