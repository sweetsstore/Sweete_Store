// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import '../src/components/bottomnav/iconstyle/iconfont.css'
=======
>>>>>>> zhangjinrui
import axios from 'axios'

Vue.prototype.$http = axios

<<<<<<< HEAD
=======
// axios.defaults.baseURL = 'http://116.62.6.6:8080/'

>>>>>>> zhangjinrui
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
