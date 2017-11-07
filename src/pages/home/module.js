import axios from 'axios'

export default  {
	state: {
		Hotsale:[],
		weekendInfo:[],
		swiperInfo:[]
	},
	actions: {
		getIndexInfo(context){
			axios.get('/static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeSwiperInfo",data.swiperInfo);
					context.commit("changeHotsale",data.Hotsale);
					context.commit("changeWeekendInfo",data.weekendInfo); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations: {
		changeHotsale(state,data) {
			state.Hotsale = data;
		},
		changeWeekendInfo(state,data) {
			state.weekendInfo=data;
		},
		changeSwiperInfo(state, data) {
			state.swiperInfo = data;
		}
	},
	getters: {  //避免数据的冗余
		shouldGetData(state) {
			if(!state.Hotsale.length && !state.weekendInfo.length && !state.swiperInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}