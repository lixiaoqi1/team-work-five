<template>
	<div>
		<index-header/>
		<index-swiper :swiperInfo = "this.$store.state.home.swiperInfo"/>
		<index-icon-swiper :iconSwiperinfor = "this.$store.state.home.IconswiperInfo"/>
		<index-activity/>
		<index-hotsale :Hotsale = "this.$store.state.home.Hotsale" />
		<index-weekend :weekendInfo="this.$store.state.home.weekendInfo"/>		
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
		console.log(this.$store.getters.shouldGetData)
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