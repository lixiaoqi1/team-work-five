<template>
 	<div class="weekendGo">
 		<h3 class="no-wrap weekendTitle">周末去哪儿</h3>
 		<ul>
 			<li v-for="item in weekendInfo" :key="item.id">
	 			<router-link :to="item.link">
	 				<div class="weekendGo_li_top">
	 					<img :src="item.imgUrl" :alt="item.title" class="spotImg">
	 				</div>
	 				<div class="weekendGo_li_bottom">
	 					<p class="no-wrap itemsTitle">{{item.title}}</p>
	 					<span class="no-wrap itemsContent">{{item.content}}</span>
	 				</div>
	 			</router-link>
 			</li>
 		</ul>
 	</div>
</template>

<script>
	import {mapState} from "vuex";  //对数据做映射
	
	export default {

	    computed: mapState({
	    	weekendInfo(state) {
		        return state.home.weekendInfo;
		      }
	    })
	}
</script>

<style scoped>
	.weekendGo{
		background:#fff;
	}
	.weekendTitle{
		line-height:0.8rem;
		color:#212121;
		padding-left:.26rem;
		background:#f5f5f5;
		width:100%;
	}
	.weekendGo_li_top{
		width:100%;
		height:0;
		padding-bottom:38%;
	}
	.weekendGo_li_top .spotImg{
		width:100%;
	}
	.weekendGo_li_bottom{
		padding:.14rem .2rem .2rem .2rem;
	}
	.itemsTitle{
		line-height:.48rem;
		padding-right:.14rem;
		color:#212121;
		font-size:.28rem;
		width:80%;
	}
	.itemsContent{
		line-height:.42rem;
		padding-right:.14rem;
		color:#616161;
		font-size:.24rem;
		width:80%;
		display:block;
	}
</style>
