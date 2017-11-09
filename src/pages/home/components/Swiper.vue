
<template>
  <swiper :options="swiperOption"  ref="mySwiper"> 
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
      <router-link :to="item.link">
      	<div class="swiper-img-con">
      		<img class="swiper-img" :src="item.img" />
      	</div>
      </router-link>
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {mapState} from "vuex";  //对数据做映射

  export default {
    data() {
      return {
      
        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',        
          autoHeight: true,
          pagination: '.swiper-pagination',        
          observeParents: true,  
           }
      }
   
    },
   computed: mapState({
        swiperInfo(state) {
            return state.home.swiperInfo;
          }
      }),
    components: {
    swiper,
    swiperSlide
   }
  }
</script>

<style>
	.swiper-pagination-bullet {
		background: #00bcd4;
	}
</style>


<style scoped>
	.swiper-img-con {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>
