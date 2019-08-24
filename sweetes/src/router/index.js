import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'
import comment from '../Pages/comment/comment.vue'
import recommend from '../Pages/recommend/recommend.vue'
import recommending from '../Pages/recommending/recommending.vue'
import recommendingtext from '../Pages/recommending/recommendingtext.vue'

Vue.use(Router)
Vue.use(VueLazyload)

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
      name: 'recommend',
      component: recommend
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
      path: '/recommendingtext',
      name: 'recommendingtext',
      component: recommendingtext
    }
  ]
})
