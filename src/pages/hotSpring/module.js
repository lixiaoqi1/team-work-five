import axios from 'axios';
export default{
	state: {
	    SpringInfo: []
	},
	actions: {
		 getSpringInfo(context) {
			axios.get('/static/spring.json')
				.then((response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						context.commit("changeSpringInfo", data)
					}
				})
		},
		
	},
	
	mutations: {		
		   changeSpringInfo(state, data) {
			state.SpringInfo = data.hotSpringInfo;
		
		},
	},
	getters: {
		shouldGetSpringData(state) {
			if (!state.SpringInfo.length ) {
			    	return true;
			    }else {
			    	return false;
			    }
		    }
	  }
  }