<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
    	<ul>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
					</div>
					<div class="keywords">
						景点门票
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
					</div>
					<div class="keywords">
						动植物园
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"/>
					</div>
					<div class="keywords">
						故宫
					</div>
				</a>
			</li>
			<li>
				<router-link to="/tour">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"/>
					</div>
					<div class="keywords">
						一日游
					</div>
				</router-link>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"/>
					</div>
					<div class="keywords">
						必游榜单
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"/>
					</div>
					<div class="keywords">
						秋色美
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"/>
					</div>
					<div class="keywords">
						游乐场
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"/>
					</div>
					<div class="keywords">
						泡温泉
					</div>
				</a>
			</li>
			<div class="clear"></div>
		</ul>
    </swiper-slide>
    <swiper-slide>
    	<ul>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
					</div>
					<div class="keywords">
						城市观光
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
					</div>
					<div class="keywords">
						玻璃栈道
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"/>
					</div>
					<div class="keywords">
						名胜古迹
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"/>
					</div>
					<div class="keywords">
						周边游
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"/>
					</div>
					<div class="keywords">
						自然风光
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"/>
					</div>
					<div class="keywords">
						古北水镇
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"/>
					</div>
					<div class="keywords">
						景点讲解
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="img-box">
						<img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"/>
					</div>
					<div class="keywords">
						全部
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
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
    	swiper,
    	swiperSlide
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)

    }
  }
</script>
<style scoped>

	#pointer{
	bottom:-.3rem;
	}
	ul{
		background: white;
		width: 100%;
	}
	
	ul li{
		width: 25%;
		height: 1.3rem;
		padding-top: .3rem;
		float: left;
	}
	
	img {
		width:.66rem;
		height: .66rem;
	}
	
	.img-box{
		text-align: center;
	}
	
	.keywords{
		padding-top:.2rem;
		color: black;
		text-align: center;
	}
</style>