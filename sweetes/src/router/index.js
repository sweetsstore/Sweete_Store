import Vue from 'vue'
import Router from 'vue-router'
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
import guanzhu from '../Pages/guanzhu/guanzhu.vue'
import redmoney from '../Pages/redmoney/redmoney.vue'
import personmoney from '../Pages/personmoney/personmoney.vue'
import recommending from '../Pages/recommending/recommending.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/',
      name: 'recommend',
      component: recommend
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
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu
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
      path: '/recommending',
      name: 'recommending',
      component: recommending
    }
  ]
})
