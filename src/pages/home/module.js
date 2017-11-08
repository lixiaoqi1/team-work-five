import axios from 'axios'

export default  {
	state: {
		Hotsale:[],
		weekendInfo:[],
		swiperInfo:[],
		IconswiperInfo:[]
	},
	actions: {
		getIndexInfo(context){
			axios.get('/static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeIndexInfo",data); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations: {
		changeIndexInfo(state,data) {
			state.swiperInfo = data.swiperInfo;
			state.IconswiperInfo = data.swiper;
			state.Hotsale = data.Hotsale;
			state.weekendInfo = data.weekendInfo;
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