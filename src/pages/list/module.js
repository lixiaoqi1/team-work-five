import axios from 'axios'

export default  {
	state: {
		changeInfo:[]
	},
	actions: {
		getListInfo(context){
			axios.get('/static/list.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeListInfo",data); //调用mutations
					//commit是用来调用mutations方法	
				}
			})
		}
	},
	mutations: {
		changeListInfo(state,data) {
			state.changeInfo = data.changeInfo;
		}
	},
	getters: {  //避免数据的冗余
		shouldGetListData(state) {
			if(!state.changeInfo.length){
				return true;
			}else{
				return false;
			}
		}
	}
}