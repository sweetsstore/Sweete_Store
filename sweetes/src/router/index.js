import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
import comment from '../Pages/comment/comment.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
import bottomnav from '../Pages/bottomnav/bottomnav.vue'
import shoppingcart from '../Pages/shoppingcart/shoppingcart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingcart',
      component: shoppingcart
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
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/merchandise',
      name: 'merchandise',
      component: merchandise
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path: '/zhuceOk',
      name: 'zhuceOk',
      component: zhuceOk
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/bottomnav',
      name: 'bottomnav',
      component: bottomnav
    }
  ]
})
