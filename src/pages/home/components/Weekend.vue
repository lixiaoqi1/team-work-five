<template>
 	<div class="weekendGo" id="weekendGo">
	 	<div id="scroll">
		 	<p class="loading"  v-if="isLoad">正在加载中......</p>
			<h3 class="no-wrap weekendTitle">周末去哪儿</h3>
			<ul>
				<li v-for="item in weekendInfo" :key="item.id">
					<router-link :to="item.link">
						<div class="weekendGo_li_top">
							<img :src="item.imgUrl" class="spotImg">
						</div>
						<div class="weekendGo_li_bottom">
							<p class="no-wrap itemsTitle">{{item.title}}</p>
							<span class="no-wrap itemsContent">{{item.content}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		 </div>	
 	</div>
</template>

<script>
	import {mapState} from "vuex";  //对数据做映射
	import Iscroll from "../../../../utils/iscroll-probe.js";
	//require("../../../../utils/iscroll-probe.js");
	export default {
		data() {
			return {
				isLoad:false,
				flag:false
			}
			
		},
	    computed: mapState({
	    	weekendInfo(state) {
		        return state.home.weekendInfo;
		      }
	    }),
		mounted() {
			this.scrolls=new Iscroll("#weekendGo",{probeType:2,mouseWwheel:true});

			this.scrolls.on("scroll",() => {
				if(!this.isLoad){
					if(this.scrolls.y>86) {
						this.flag=true;
						this.isLoad=!this.isLoad;
					}else if(this.scrolls.y<-(this.weekendInfo.length*78+80)) {
						this.flag=true;
						this.isLoad=!this.isLoad;
					}
				}
			});
			this.scrolls.on("scrollEnd",() => {
				if(this.flag) {
					this.$store.commit("addWeekendList");
					this.flag=!this.flag;
					this.isLoad=!this.isLoad;
				}
				
			});
		},
		updated() {
			this.scrolls.refresh();
		}
	}
</script>

<style scoped>
	.weekendGo{
		background:#fff;
		height:11.8rem;
		overflow:hidden;
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
		background:url(http://localhost:8080/static/images/error.jpg);
    	background-size:100% 100%;
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
	.loading{
		font-family:"宋体";
		font-size:.32rem;
		line-height:.6rem;
		color:#ccc;
	}
</style>
