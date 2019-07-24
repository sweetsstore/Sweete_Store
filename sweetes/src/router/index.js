import Vue from 'vue'
import Router from 'vue-router'
import regist from '../Pages/regist/regist.vue'
import person from '../Pages/person/person.vue'

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
    }
  ]
})
