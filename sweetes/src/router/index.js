import Vue from 'vue'
import Router from 'vue-router'
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
