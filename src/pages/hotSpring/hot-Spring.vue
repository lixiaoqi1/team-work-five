<template>
	
   <div ref="myHots">
   	<div v-for="item in SpringInfo" :key="item.id">
   	  <router-link :to="item.link">
	  <div class="mpp-product-item">
	  	
		<div class="mp-productimg-wrapper">
			<img :src="item.imgUrl" :key="item.id"/>
		</div>
		
		<div class="mpp-product-info">
			<p class="product-name">{{item.word}}</p>
			<p class="product-desc">{{item.sentence}}</p>
		</div>
		
		<div class="mpp-product-price">
			<span class="mpp-product-qunarprice">
				¥
				<em>{{item.price}}</em>
				<span class="mpp-product-pricestart">起</span>
			</span>
		 </div>
		 
        </div>
          </router-link>
       </div>
   </div>
</template>

<script>
	import {mapState} from "vuex"
	export default{
	  // props:["hotSpringInfo"],	
//	   computed: {
//	   	   hotSpringInfo() {
//	   	   	return this.$store.state.hotSpring.SpringInfo
//	   	   }
//	   }
      computed: mapState({
      	SpringInfo(state) {
      		
      		return state.hotSpring.SpringInfo
      	}
      }),
      mounted(){
      //	console.log(hotSpringInfo)
      	console.log("ss")
      }
	}
</script>

<style>
	.mpp-product-item {
        background: #fff;
        position: relative;
        margin-bottom: .2rem;
    }
    
    .mp-productimg-wrapper {
        overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 43.37288%;
     }
     
    .mpp-product-info {
        position: relative;
        padding: .14rem .2rem .24rem .2rem;
     }
     
    .mpp-product-item .product-name {
        overflow: hidden;
        padding-right: 2.2rem;
        color: #212121;
        font-size: .36rem;
        line-height: .54rem;
        white-space: nowrap;
        text-overflow: ellipsis;
     }
     
     .product-desc {
        overflow: hidden;
        color: #616161;
        font-size: .26rem;
        line-height: .45rem;
        white-space: nowrap;
       text-overflow: ellipsis;
     }
     
     .mpp-product-price {
        position: absolute;
        top: 3.75rem;
        right: .2rem;
     }
     
     .mpp-product-price .mpp-product-qunarprice {
        color: #ff8300;
        font-size: .18rem;
     }
     
     .mpp-product-price .mpp-product-qunarprice em {
        font-size: .4rem;
        margin-left: .04rem;
        font-weight: bold;
     }
     
     .mpp-product-price .mpp-product-qunarprice {
        color: #ff8300;
        font-size: .18rem;
     }
     
     .mpp-product-pricestart {
        color: #616161;
        font-size: .22rem;
     }
     
</style>