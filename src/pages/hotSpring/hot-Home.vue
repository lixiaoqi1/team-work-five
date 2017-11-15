
<template>
	<div>
		<hot-Header />
		<hot-Spring />
	</div>
</template>

<script>

import HeaderComponent  from './hot-Header.vue'
import HotSearchComponent  from './hot-Spring.vue'

export default{
	
	components:{

		'hot-Header':HeaderComponent,
		'hot-Spring':HotSearchComponent
		
	},
	mounted(){
		if (this.$store.getters.shouldGetSpringData){
		   this.$store.dispatch("getSpringInfo");
	  }
	}
	
}
</script>

<style>
</style>