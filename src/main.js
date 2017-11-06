//引入第三方模块
import Vue from 'vue'
//引入App.vue组件
import App from './app/App'
import router from './router'

//提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
