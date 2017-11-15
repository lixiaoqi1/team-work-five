import axios from "axios"

export default ({
	state:{
		Tourlist:[]
	},
	actions:{
		getTourdb(context){
			axios.get('/static/tour.json')
			.then((res)=>{
				const {data}=res.data;
				context.commit("changeTourlist",data)
			})
			
		}
	},
	mutations:{
		changeTourlist(state,data){
			state.Tourlist=data;
		},
		addTourlist(state,data) {
			state.Tourlist.infor.push(...(state.Tourlist.infor))
		}
	},
	getters:{}
})