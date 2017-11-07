<template>
	<div>
		<home-header/>
		<home-sliper/>
		<home-swiper :swiperinfor="this.$store.state.swiperInfo" />
		<home-4part/>
		<home-scenelist/>
		<home-weekend/>
		
	</div>
</template>

<script>
import HeaderComponent from './Header';
import SliperComponent from './Sliper';
import PositionComponent from './4part';
import WeekendComponent from './WeekendGo';
import SceneListComponent from './SceneList';
import SwiperComponent from './swiper';


export default{
	props: ["swiperinfor"],
	components:{
		"home-header":HeaderComponent,
		"home-sliper":SliperComponent,
		"home-weekend":WeekendComponent,
		"home-scenelist":SceneListComponent,
		"home-swiper":SwiperComponent,
		"home-4part":PositionComponent
	},
    mounted() {
     	this.$store.dispatch("getswiperinfor");
     	console.log(this.$store.state.swiperInfo);
    }
}


</script>

<style>
</style>