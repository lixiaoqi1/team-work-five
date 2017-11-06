//引入第三方模块
import Vue from 'vue'
//引入App.vue组件
import App from './app/App'
import router from './router'
import store from './vuex'

//提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
