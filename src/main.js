import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入第三方
import VueCookie from 'vue-cookie'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import loadingSVG from '@/assets/imgs/loading-svg/loading-bars.svg'
Vue.use(VueLazyload, {
  loading: loadingSVG
})
Vue.use(VueCookie)
Vue.use(VueAxios, axios) // vue-axios 可以讲axios 实例挂载在 vue上，减少 axios 引入
// axios 配置
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000 // 258原则
axios.interceptors.response.use(
  response => {
    const {data: res} = response
    if (res.status == 0) {
      return res.data
    } else if (res.status == 10) {
      // 未登录 status 为 10
      window.location.href = '/login'
    } else {
      Message.warning(res.msg || '未登录鸽鸽')
    }
  },
  error => {
    Message.error(`网络错误，刷新重试`)
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
