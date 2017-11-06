<template>
	<div>
		<index-header/>
		<index-swiper/>
		<index-icon-swiper/>
		<index-activity/>
		<index-hotsale/>
		<index-weekend :weekendInfo="weekendInfo"/>
		
	</div>
</template>

<script>
import HeaderComponent from './Header';
import SliperComponent from './Sliper';
import IconSwiperComponent from './swiper';
import AactivityComponent from './4part';
import HotsaleComponent from './SceneList';
import WeekendComponent from './WeekendGo';
import axios from 'axios';



export default{
	data() {
		return {
			weekendInfo:[]
		}
	},
	methods:{
		getIndexData (){
			axios.get('./static/index.json')
			.then(this.handleSuccGetData.bind(this))
			.catch(this.handleErroGetData.bind(this));	
		},
		handleSuccGetData:function(response){
			if(response.status===200){
				const {data} = response.data;
				this.weekendInfo = data.weekendInfo;
			}
		},
		handleErroGetData:function(err){
			
		}



	},
	mounted() {
		this.getIndexData();	
	},
	components:{
		"index-header":HeaderComponent,
		"index-swiper":SliperComponent,
		"index-icon-swiper":IconSwiperComponent,
		"index-activity":AactivityComponent,
		"index-hotsale":HotsaleComponent,
		"index-weekend":WeekendComponent
	}
}


</script>

<style>
</style>