import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	state:{
		Hotsale:[],
		weekendInfo:[],
		swiperInfo:[]
	},
	actions:{
		getHotsale(context){
			axios.get('/static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeHotsale",data.Hotsale);
					context.commit("changeWeekendInfo",data.weekendInfo); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		},
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
		changeHotsale(state,data) {
			state.Hotsale = data;
		},
		changeWeekendInfo(state,data){
			state.weekendInfo=data;
		},
		changeSwiperInfo(state, data) {
			console.log(data)
			state.swiperInfo = data;
		}
	},
	getters:{}
})
