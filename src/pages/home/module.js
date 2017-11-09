import axios from "axios"

export default ({
	state:{
		Hotsale:[],
		weekendInfo:[],
		IconswiperInfo:[]
	},
	actions:{
		getHotsale(context){
			axios.get('../../../static/index.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeInfor",data)
				}
			})
		}
	},
	mutations:{
		changeInfor(state,data){
			state.Hotsale = data.Hotsale;
			state.weekendInfo=data.weekendInfo;
			state.IconswiperInfo = data.swiper;
		}
	},
	getters:{}
})