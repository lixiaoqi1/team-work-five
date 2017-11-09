import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import list from '../pages/list/module.js'
import city from '../pages/city/module.js'
import hotSpring from '../pages/hotSpring/module.js'
import axios from 'axios'
import tour from '../pages/tour/module.js'

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	modules: {
		home: home,
		list: list,
		city: city,
		tour : tour,
		home:home,
		hotSpring : hotSpring
	}
})


