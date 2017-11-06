import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		weekendInfo:[]
	},
	actions:{
		getWeekendInfo(context){
			axios.get('./static/index.json')
			.then((response) => {
				if(response.status===200){
					const {data} = response.data;
					context.commit("changeWeekendInfo",data.weekendInfo); //调用mutations
				}
			})
		}
	},
	mutations:{
		changeWeekendInfo(state,data){
			state.weekendInfo=data;
		}
	},
	getters:{}
});