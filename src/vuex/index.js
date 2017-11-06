import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	state:{
		Hotsale:[]
	},
	actions:{
		getHotsale(context){
			axios.get('/static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeHotsale",data.Hotsale)
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations:{
		changeHotsale(state,data) {
			state.Hotsale = data;
		}
	},
	getters:{}
})
