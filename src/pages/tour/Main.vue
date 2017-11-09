<template>
<div>
	<tour-Header/>
	<tour-Spots :Tourlist="this.$store.state.tour.Tourlist"/>
	<tour-Bottom />
</div>
</template>

<script>

import TourHeader from "./Header"
import TourSpots from "./hot-spots"
import TourBottom from "./bottom"
	
export default{
	mounted () {
		this.$store.dispatch("getTourdb");
	},
	components:{
		"tour-Header":TourHeader,
		"tour-Spots":TourSpots,
		"tour-Bottom":TourBottom
	}	
	
}

</script>

<style>
	
</style>