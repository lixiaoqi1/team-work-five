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
			axios.get('../../../static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeInfor",data); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations:{
		changeInfor(state,data){
			state.Hotsale = data.Hotsale;
			state.weekendInfo=data.weekendInfo;
			state.IconswiperInfo = data.swiper;
			state.swiperInfo = data.swiperInfo;
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
	

