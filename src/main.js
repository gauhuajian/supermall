import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/iconfont.css'
import toast from './components/common/toast/index'
//适配
import './assets/js/font'
//网络请求
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = "http://152.136.185.210:8000/api/n3"
axios.defaults.timeout = 10000
//swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(toast)

//时间戳过滤器
import moment from 'moment'
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD,h:mm:ss') {
  if (dataStr) {
    return moment(dataStr).format(pattern)
  } else {
    return dataStr
  }
})
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
//全局事件总线
Vue.prototype.$bus = new Vue({})

Vue.config.productionTip = false

import FastClick from 'fastclick'

FastClick.attach(document.body);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')