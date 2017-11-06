<template>
	<div>
		<index-header/>
		<index-swiper/>
		<index-icon-swiper/>
		<index-activity/>
		<index-hotsale :Hotsale = "this.$store.state.Hotsale" />
		<index-weekend/>		
	</div>
</template>

<script>
import Header from './components/Header';
import Swiper from './components/Swiper';
import IconSwiper from './components/IconSwiper';
import WeekendList from './components/WeekendList';
import Recommend from './components/Hotsale';
import Activity from './components/Activity';
import axios from 'axios';

export default{
	
	components:{
		"index-header":Header,
		"index-swiper":Swiper,
		"index-icon-swiper":IconSwiper,
		"index-activity":Activity,
		"index-hotsale":Recommend,
		"index-weekend":WeekendList
	},
	mounted(){
		this.$store.dispatch("getHotsale");
	}
}

</script>
	
<style>

</style>