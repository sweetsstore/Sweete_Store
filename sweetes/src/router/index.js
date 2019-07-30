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
import orderpay from '../Pages/orderpay/orderpay.vue'
import orderevaluate from '../Pages/orderevaluate/orderevaluate.vue'
import home from '../Pages/home/home.vue'
import classify from '../Pages/classify/classify.vue'
import goodsshow from '../Pages/goodsshow/goodsshow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/set',
      name: 'set',
      component: set
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
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/zhuceOk',
      name: 'zhuceOk',
      component: zhuceOk
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'classify',
      component: classify
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/goodsshow',
      name: 'goodsshow',
      component: goodsshow
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
    }
  ]
})
