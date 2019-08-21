import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import home from '../Pages/home/home.vue'
import comment from '../Pages/comment/comment.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
import review from '../Pages/review/review.vue'
=======
>>>>>>> bca1815ec5357dc502e270e15465023a65a72611
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
<<<<<<< HEAD
=======
import orderall from '../Pages/person/shop/orderall/orderall.vue'
import attention from '../Pages/attention/attention.vue'
import redmoney from '../Pages/personmoney/redmoney/redmoney.vue'
import personmoney from '../Pages/personmoney/personmoney.vue'
import personattention from '../Pages/personattention/personattention.vue'
import personcollect from '../Pages/personcollect/personcollect.vue'
import collect from '../Pages/collect/collect.vue'
import newaddress from '../Pages/newaddress/newaddress.vue'
import myaddress from '../Pages/myaddress/myaddress.vue'
import personaddress from '../Pages/personaddress/personaddress.vue'
import payOk from '../Pages/payOk/payOk.vue'
import shop from '../Pages/person/shop/shop.vue'
>>>>>>> bca1815ec5357dc502e270e15465023a65a72611

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'regist',
      component: regist
    },
    {
<<<<<<< HEAD
      path: '/home',
      name: 'home',
      component: home
=======
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/person',
      name: 'person',
      component: person,
      children: [
        {
          path: '/',
          name: 'shop',
          component: shop
        },
        {
          path: '/shop',
          name: 'shop',
          component: shop,
          children: [
            {
              path: '/',
              name: 'orderall',
              component: orderall
            }
          ]
        }
      ]
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
>>>>>>> bca1815ec5357dc502e270e15465023a65a72611
    },
    {
      path: '/attention',
      name: 'attention',
      component: attention
    },
    {
      path: '/personmoney',
      name: 'personmoney',
      component: personmoney,
      children: [
        {
          path: '/',
          name: 'redmoney',
          component: redmoney
        }
      ]
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
<<<<<<< HEAD
      path: '/review',
      name: 'review',
      component: review
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
=======
      path: '/payOk',
      name: 'payOk',
      component: payOk
>>>>>>> bca1815ec5357dc502e270e15465023a65a72611
    }
  ]
})
