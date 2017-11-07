<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
    	<ul>
			<li v-for="item in swiperinfor.swiper1">
				<router-link :to="item.link">
					<div class="img-box">
						<img class="icon" :src="item.imgUrl"/>
					</div>
					<div class="keywords">
						<p class="keyword">
							{{item.word}}
						</p>
					</div>
				</router-link>
			</li>
			<div class="clear"></div>
		</ul>
    </swiper-slide>
    <swiper-slide>
    	<ul>	
			<li v-for="item in swiperinfor.swiper2">
				<a href="#">
					<div class="img-box">
						<img class="icon" :src="item.imgUrl"/>
					</div>
					<div class="keywords">
						<p class="keyword">
							{{item.word}}
						</p>
					</div>
				</a>
			</li>
			<div class="clear"></div>
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
  	props: ["swiperinfor"],
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
<<<<<<< HEAD
=======
          onTransitionStart (swiper) {
            //console.log(swiper)
          }
>>>>>>> a647d8af22e801a0369ecfa0d3eb75083dd33b7c
        }
      }
    },
    components:{
    	swiper,
    	swiperSlide
<<<<<<< HEAD
=======
    },
    mounted() {
      //console.log('this is current swiper instance object', this.swiper)

>>>>>>> a647d8af22e801a0369ecfa0d3eb75083dd33b7c
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