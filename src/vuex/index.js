import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import tour from '../pages/tour/module.js'
import home from '../pages/home/module.js'
Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	modules:{
		tour : tour,
		home:home
	}
})
