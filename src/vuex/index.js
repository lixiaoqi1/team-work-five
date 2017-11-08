import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import hotSpring from '../pages/hotSpring/module.js'
import axios from 'axios'

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	modules: {
		home: home,
		hotSpring : hotSpring
	}
});
	