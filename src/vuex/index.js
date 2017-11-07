import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		swiperInfo:[]
	},
	actions:{
		getswiperinfor(context){
			axios.get("/static/IconSwiperdb.json")
				.then((res) => {
					//console.log(res.data.data);
					if (res.status === 200) {
						const data  = res.data.data;
						context.commit("changeSwiperInfo", data)
					}
				})
		}
	},
	mutations:{
		changeSwiperInfo(state, data) {
			console.log(data)
			state.swiperInfo = data;
			
		}
	},
	getters:{}
})
