import Vue from 'vue'
import Router from 'vue-router'
import home from '@/Pages/home/home.vue'
import classify from '@/Pages/classify/classify.vue'
import goodsshow from '@/Pages/goodsshow/goodsshow.vue'
import goods from '@/Pages/goodsshow/goods/goods'
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'
import zhuce from '../Pages/zhuce/zhuce.vue'
import password from '../Pages/password/password.vue'
import zhuceOk from '../Pages/zhuceOk/zhuceOk.vue'
import set from '../Pages/set/set.vue'
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'regist',
      component: regist
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/goodsshow',
      name: 'goodsshow',
      component: goodsshow,
      children:
      [
        {
          path: '/goodsshow/goods',
          name: 'goods',
          component: goods
        }
      ]
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
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path: '/set',
      name: 'set',
      component: set
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
      path: '/payOk',
      name: 'payOk',
      component: payOk
    }
  ]
})
