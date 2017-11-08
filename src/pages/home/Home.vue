<template>
	<div>
<<<<<<< HEAD
		<home-header/>
		<home-sliper/>
		<home-swiper/>
		<home-4part/>
		<home-scenelist/>
		<home-weekend/>
=======
		<index-header/>
		<index-swiper :swiperInfo = "this.$store.state.home.swiperInfo"/>
		<index-icon-swiper :iconSwiperinfor = "this.$store.state.home.IconswiperInfo"/>
		<index-activity/>
		<index-hotsale :Hotsale = "this.$store.state.home.Hotsale" />
		<index-weekend :weekendInfo="this.$store.state.home.weekendInfo"/>		

>>>>>>> 7ebecaa59286b65424ffd237861461885bac6b83
	</div>
</template>

<script>
import HeaderComponent from './components/Header';
import SwiperComponent from './components/Swiper';
import IconSwiperComponent from './components/IconSwiper';
import ActivityComponent from './components/Activity';
import HotsaleComponent from './components/Hotsale';
import WeekendComponent from './components/Weekend';



export default{

	mounted() {
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch("getIndexInfo");  //调用action
		}
	},
	components:{
		"index-header":HeaderComponent,
		"index-swiper":SwiperComponent,
		"index-icon-swiper":IconSwiperComponent,
		"index-activity":ActivityComponent,
		"index-hotsale":HotsaleComponent,
		"index-weekend":WeekendComponent
	}
}

</script>
	
<style>

</style>