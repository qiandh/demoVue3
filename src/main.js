import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
//配置基本路径
axios.defaults.baseURL='http://t.weather.sojson.com/api/weather/city/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
