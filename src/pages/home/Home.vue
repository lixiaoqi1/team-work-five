<template>
	<div>
		<home-header/>
		<home-sliper/>
		<home-swiper/>
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
	components:{
		"home-header":HeaderComponent,
		"home-sliper":SliperComponent,
		"home-weekend":WeekendComponent,
		"home-scenelist":SceneListComponent,
		"home-swiper":SwiperComponent,
		"home-4part":PositionComponent
	}
}


</script>

<style>
</style>