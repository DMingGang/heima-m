import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/Vant.js'
import '@/styles/font_3502345_7to3z2ki5tt/iconfont.css'
import '@/styles/index.scss'
import 'amfe-flexible'
import '@/Dayjs/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
