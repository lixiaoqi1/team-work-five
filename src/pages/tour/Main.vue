<template>
<div>
	<tour-Header/>
	<tour-Spots/>
	<tour-Bottom/>
</div>
</template>

<script>

import TourHeader from "./Header"
import TourSpots from "./hot-spots"
import TourBottom from "./bottom"
	
export default{
	components:{
		"tour-Header":TourHeader,
		"tour-Spots":TourSpots,
		"tour-Bottom":TourBottom
	}
}

</script>

<style>
	
</style>