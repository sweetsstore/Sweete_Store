import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
=======
import comment from '../Pages/comment/comment.vue'
import degree from '../Pages/degree/degree.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
>>>>>>> 91aed3db0bb8ae05f64d7fd997248940dfa6cc5d
=======
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
>>>>>>> 26cc6f312df9074f0da30da60a0671a7d6656b79

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> 91aed3db0bb8ae05f64d7fd997248940dfa6cc5d
=======
      name: 'regist',
      component: regist
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
>>>>>>> 26cc6f312df9074f0da30da60a0671a7d6656b79
    }
  ]
})
