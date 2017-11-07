import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);
//在store中存储
export default new Vuex.Store({
	state:{
		Hotsale:[],
		weekendInfo:[],
		IconswiperInfo:[]
	},
	actions:{
		getHotsale(context){
			axios.get('/static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeHotsale",data.Hotsale);
					context.commit("changeWeekendInfo",data.weekendInfo); //调用mutations
					context.commit("changeiconSwiperInfo", data.swiper);
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
		changeiconSwiperInfo(state, data) {
			state.IconswiperInfo = data;
		}
	},
	getters:{}
})
