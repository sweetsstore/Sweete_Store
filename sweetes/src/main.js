// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/components/bottomnav/iconstyle/iconfont.css'
import axios from 'axios'

Vue.prototype.$http = axios

// axios.defaults.baseURL = 'http://116.62.6.6:8080/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
