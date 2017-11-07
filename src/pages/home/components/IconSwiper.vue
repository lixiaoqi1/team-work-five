<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
    	<ul>
			
		</ul>
    </swiper-slide>
    <swiper-slide>
    	<ul>	
			
		</ul>
    </swiper-slide>

    <!-- Optional controls -->
    <div id="pointer" class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
  // swiper options example:
  export default {
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    },
    components:{
    	swiper,
    	swiperSlide
    }
  }
</script>
<style>
	
</style>
<style scoped>

	#pointer{
	bottom:-.3rem;
	}
	ul{
		width: 100%;
		height: 3.2rem;
		background: white;
	}
	
	ul li{
		width: 25%;
		height: 1.3rem;
		padding-top: .3rem;
		float: left;
		background:#fff;
	}
	
	.img-box	.icon {
		width:.66rem;
		height: .66rem;
		font-size: .1rem;
	}
	
	.img-box{
		width:.66rem;
		height: .66rem;
		text-align: center;
		margin: 0 auto;
	}
	
	.keywords{
		padding-top:.2rem;
		color: black;
		text-align: center;
	}
	.keywords .keyword{
		width: 1.35rem;
		margin: 0 auto;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
	}
</style>