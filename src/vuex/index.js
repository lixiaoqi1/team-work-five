import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	modules: {
		home: home
	}
});
