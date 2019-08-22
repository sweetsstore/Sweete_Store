import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
import bottomnav from '../components/bottomnav/bottomnav.vue'
import shoppingcart from '../Pages/shoppingcart/shoppingcart.vue'
import carnav from '../components/carnav/carnav.vue'
import ordermete from '../Pages/ordermete/ordermete.vue'
import buyinggoods from '../Pages/buyinggoods/buyinggoods.vue'
import collectOK from '../Pages/goodsdetails/collectOK.vue'
import lingquOK from '../Pages/goodsdetails/lingquOK.vue'
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
    },
    {
      path: '/carnav',
      name: 'carnav',
      component: carnav
    },
    {
      path: '/ordermete',
      name: 'ordermete',
      component: ordermete
    },
    {
      path: '/buyinggoods',
      name: 'buyinggoods',
      component: buyinggoods
    },
    {
      path: '/collectOK',
      name: 'collectOK',
      component: collectOK
    },
    {
      path: '/lingquOK',
      name: 'lingquOK',
      component: lingquOK
    }
  ]
})
