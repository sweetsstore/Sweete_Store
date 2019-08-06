import Vue from 'vue'
import Router from 'vue-router'
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
import orderall from '../Pages/orderall/orderall.vue'
import attention from '../Pages/attention/attention.vue'
import redmoney from '../Pages/redmoney/redmoney.vue'
import personmoney from '../Pages/personmoney/personmoney.vue'
import personattention from '../Pages/personattention/personattention.vue'
import personcollect from '../Pages/personcollect/personcollect.vue'
import collect from '../Pages/collect/collect.vue'
import newaddress from '../Pages/newaddress/newaddress.vue'
import myaddress from '../Pages/myaddress/myaddress.vue'
import orderpay from '../Pages/orderpay/orderpay.vue'
import orderevaluate from '../Pages/orderevaluate/orderevaluate.vue'
import personaddress from '../Pages/personaddress/personaddress.vue'
import payOk from '../Pages/payOk/payOk.vue'

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
      path: '/orderall',
      name: 'orderall',
      component: orderall
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    },
    {
      path: '/redmoney',
      name: 'redmoney',
      component: redmoney
    },
    {
      path: '/personmoney',
      name: 'personmoney',
      component: personmoney
    },
    {
      path: '/personattention',
      name: 'personattention',
      component: personattention
    },
    {
      path: '/personcollect',
      name: 'personcollect',
      component: personcollect
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/newaddress',
      name: 'newaddress',
      component: newaddress
    },
    {
      path: '/orderpay',
      name: 'orderpay',
      component: orderpay
    },
    {
      path: '/orderevaluate',
      name: 'orderevaluate',
      component: orderevaluate
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: myaddress
    },
    {
      path: '/personaddress',
      name: 'personaddress',
      component: personaddress
    },
    {
      path: '/payOk',
      name: 'payOk',
      component: payOk
    }
  ]
})
