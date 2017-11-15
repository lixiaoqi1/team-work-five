import axios from 'axios'

export default  {
	state: {
		cityInfo:[]
	},
	actions: {
		getCityInfo(context){
			axios.get('/static/cityList.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeCityInfo",data); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations: {
		changeCityInfo(state,data) {
			state.cityInfo = data;
		}
	},
	getters: {  //避免数据的冗余
		shouldGetCityData(state) {
			if(!state.cityInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}