import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import goodsdetails from '../Pages/goodsdetails/goodsdetails.vue'
import orders from '../Pages/orders/orders.vue'
=======
import comment from '../Pages/comment/comment.vue'
import degree from '../Pages/degree/degree.vue'
import merchandise from '../Pages/merchandise/merchandise.vue'
>>>>>>> 91aed3db0bb8ae05f64d7fd997248940dfa6cc5d

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'orders',
      component: orders
    },
    {
      path: '/goodsdetails',
      name: 'goodsdetails',
      component: goodsdetails
    }, {
      path: '/order',
      name: 'orders',
      component: orders
=======
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
      name: 'degree',
      component: degree
    },
    {
      path: '/degree',
      name: 'degree',
      component: degree
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
>>>>>>> 91aed3db0bb8ae05f64d7fd997248940dfa6cc5d
    }
  ]
})
