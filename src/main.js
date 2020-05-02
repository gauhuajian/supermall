import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/iconfont.css'
import './assets/js/font'

Vue.prototype.axios = axios
axios.defaults.baseURL = "http://152.136.185.210:8000/api/h8"
axios.defaults.timeout = 5000
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')