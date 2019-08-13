// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/bottomnav/iconstyle/iconfont.css'
import './Pages/shoppingcart/style/iconfont.css'
import './Pages/orders/style/iconfont.css'
import './Pages/goodsdetails/style/iconfont.css'
import './Pages/ordermete/ordermete.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
