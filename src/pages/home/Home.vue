<template>
	<div>
		<index-header/>
		<index-swiper/>
		<index-icon-swiper/>
		<index-activity/>
		<index-hotsale :Hotsale = "this.$store.state.Hotsale" />
		<index-weekend :weekendInfo="this.$store.state.weekendInfo"/>		

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
		this.$store.dispatch("getHotsale");  //调用action
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