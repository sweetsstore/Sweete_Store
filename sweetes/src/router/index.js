import Vue from 'vue'
import Router from 'vue-router'
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
Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
