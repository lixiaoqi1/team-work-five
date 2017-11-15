import axios from 'axios'

export default  {
	state: {
		HeaderComponent:[],
		ticketList:[],
		userComment:[],
		reCommend:[]
	},
	actions: {
		getSpotInfo(context){
			axios.get('/static/spot.json')
			.then((response) => {
				if(response.status === 200){
					const data = response.data;
					context.commit("changeSpotInfo",data); //调用mutations
				}
			})
		}
	},
	mutations: {
		changeSpotInfo(state,data) {
			
			state.HeaderComponent = data.data.spotHeader;
			state.ticketList = data.data.ticketList;
			state.userComment = data.data.userComment;
			state.reCommend = data.data.reCommend;
			//console.log(state.reComment);
		}
	},
	getters: {  //避免数据的冗余
		shoulderGetData(state) {
			if(!state.HeaderComponent.length && !state.ticketList.length && !state.userComment.length && !state.reCommend.length){
				return true;
			}else{
				return false;
			}
		}
	}
}