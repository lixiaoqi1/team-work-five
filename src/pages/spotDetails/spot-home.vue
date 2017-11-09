<template>
	<div>
		<spot-header :HeaderComponent = "this.$store.state.spotDetails.HeaderComponent"/>	
		<ticket-list :ticketList = "this.$store.state.spotDetails.ticketList"/>
		<user-comment :userComment = "this.$store.state.spotDetails.userComment"/>
		<recommend :reCommend = "this.$store.state.spotDetails.reCommend"/>
	</div>
	
</template>
<script>
	import HeaderComponent from './components/spot-header';
	import ticketList from "./components/ticket-list";
	import userComment from "./components/user-comment";
	import reCommend from "./components/recommend";

	export default{
		components:{
			'ticket-list':ticketList,
			'user-comment':userComment,
			'recommend':reCommend,
			"spot-header":HeaderComponent
		},
		mounted(){
			//if(!this.$store.getters.shoulderGetData){
			//	this.$store.dispatch("getSpotInfo");
			//}
				this.$store.dispatch("getSpotInfo");
		}	
	}
</script>
<style>
</style>