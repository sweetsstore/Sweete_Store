import Vue from 'vue'
import Router from 'vue-router'
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
import comment from '../Pages/comment/comment.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
import review from '../Pages/review/review.vue'
import recommend from '../Pages/recommend/recommend.vue'
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
import home from '@/Pages/home/home.vue'
import classify from '@/Pages/classify/classify.vue'
import goodsshow from '@/Pages/goodsshow/goodsshow.vue'
import westclass from '@/Pages/goodsshow/westclass/westclass.vue'
import eastclass from '@/Pages/goodsshow/eastclass/eastclass.vue'
import cafeclass from '@/Pages/goodsshow/cafeclass/cafeclass.vue'
import cakeclass from '@/Pages/goodsshow/cakeclass/cakeclass.vue'
import fishclass from '@/Pages/goodsshow/fishclass/fishclass.vue'
import fruitclass from '@/Pages/goodsshow/fruitclass/fruitclass.vue'
import teaclass from '@/Pages/goodsshow/teaclass/teaclass.vue'
import thingclass from '@/Pages/goodsshow/thingclass/thingclass.vue'
import wineclass from '@/Pages/goodsshow/wineclass/wineclass.vue'
import snackclass from '@/Pages/goodsshow/snackclass/snackclass.vue'
import recommending from '../Pages/recommending/recommending.vue'
import bottomnav from '../components/bottomnav/bottomnav.vue'
import shoppingcart from '../Pages/shoppingcart/shoppingcart.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/review',
      name: 'review',
      component: review
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
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
      component: person,
      children: [
        {
          path: '/orderall',
          name: 'orderall',
          component: orderall
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
    },
    {
      path: '/home',
      name: 'home',
      component: home
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
      children: [
        {
          path: '/',
          component: westclass
        },
        {
          path: 'westclass',
          component: westclass
        },
        {
          path: 'eastclass',
          component: eastclass
        },
        {
          path: 'cafeclass',
          component: cafeclass
        },
        {
          path: 'cakeclass',
          component: cakeclass
        },
        {
          path: 'fishclass',
          component: fishclass
        },
        {
          path: 'fruitclass',
          component: fruitclass
        },
        {
          path: 'snackclass',
          component: snackclass
        },
        {
          path: 'teaclass',
          component: teaclass
        },
        {
          path: 'thingclass',
          component: thingclass
        },
        {
          path: 'wineclass',
          component: wineclass
        }
      ]
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
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
    },
    {
      path: '/',
      name: 'review',
      component: review
    },
    {
      path: '/review',
      name: 'review',
      component: review
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/recommending',
      name: 'recommending',
      component: recommending
    },
    {
      path: '../components/bottomnav',
      name: 'bottomnav',
      component: bottomnav
    }
  ]
})
