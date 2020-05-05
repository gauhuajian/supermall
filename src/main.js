import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/iconfont.css'
import './assets/js/font'

import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = "http://baidu.com"
axios.defaults.timeout = 5000

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

Vue.prototype.$bus = new Vue({}) //事件代理总线

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')