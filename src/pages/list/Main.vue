<template>
	<div>
		<list-header @change="handleChange"/>
		<hot-search :changeInfo="this.$store.state.home.changeInfo" v-if="isSearch" />
	</div>
</template>

<script>

import HeaderComponent  from './components/list-header'
import HotSearchComponent  from './components/hot-search'

export default{
	data() {
		return {
			isSearch:true
		}
	},
	methods:{
		handleChange(e){
			this.isSearch=e;
		}
	},
	components:{
		'list-header':HeaderComponent,
		'hot-search':HotSearchComponent
	},
	mounted() {
		if(this.$store.getters.shouldGetListData){
			this.$store.dispatch("getListInfo");  //调用action
		}

	}
	
}
</script>

<style>
</style>