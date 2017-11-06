<template>
	<div>
		<ticket-list />
		<user-comment />
		<recommend />
	</div>
	
</template>
<script>
	import ticketList from "./ticket-list";
	import userComment from "./user-comment";
	import reCommend from "./recommend";

	export default{
		components:{
			'ticket-list':ticketList,
			'user-comment':userComment,
			'recommend':reCommend
		}
	}
</script>
<style>
</style>