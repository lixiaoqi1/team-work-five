<template>
<div class="bottom-box">
	<div class="bottom" @click="handeldisplay"  ids="0">
		<div class="iconfont icon-manage"></div>
		<div class="bottom_">全部分类</div>
		<div class="lefts isnone" :nums="num" :class="{isblock: num==0}">
			<ul class="left">
				<li v-for="(it1,index) in left" :ids=index @click="handelLeftClick" :class="{isclick: ind==index}">{{it1}}</li>
			</ul>
		</div>
	</div>
	<div class="bottom"  ids="1" @click="handeldisplay" >
		<div class="iconfont icon-shaixuanguolv"></div>
		<div class="bottom_">筛选</div>
		<div class="lefts isnone" :nums="num" :class="{isblock: num==1}">
			<ul class="mid">
				<li v-for="(it2,index) in mid" :ids=index @click="handelLeftClick" :class="{isclick: ind==index}">{{it2}}</li>
			</ul>
		</div>
	</div>
	<div class="bottom" ids="2" @click="handeldisplay" >
		<div class="iconfont icon-paixu"></div>
		<div class="bottom_">推荐排序</div>
		<div :nums="num"  class="isnone lefts" :class="{isblock: num==2}" >
			<ul class="rightul">
				<li class="right" v-for="(it3,index) in right" :ids=index @click="handelRightClick" :class="{rightcolor: rightind==index}">{{it3}}</li>
			</ul>
		</div>
	</div>
	<div :class="{zhezhao: a}" @click="handelZhezhaoClick"></div>
</div>
</div>
</template>

<script>
	export default{
		data(){
			return {
				left : ["全部分类","一日游","文化古迹","城市观光","展馆","交通","自然风光","温泉","餐饮"],
				mid: ["北京","天津","唐山","保定","承德"],
				right :["推荐排序","销量最高","价格最高","价格最低","热门评论","本周最热"],
				ind : "0",
				num:"4",
				rightind:"0",
				a : false
			}
		},
		methods:{
			handelLeftClick : function(e){
				this.ind=e.target.getAttribute("ids");
			
			},
			handeldisplay : function(e){
				this.num=e.currentTarget.getAttribute("ids");
				if(!this.a){
				this.a=!this.a;
				}
			},
			handelRightClick : function(e){
				this.rightind=e.currentTarget.getAttribute("ids");
			},
			handelZhezhaoClick : function(e){
				this.a=!this.a;
				this.ind="0";
				this.num="4";
				this.rightind="0";
			}
		}
	}
</script>

<style scoped>
	
	::-webkit-scrollbar{
		display: none;
	}
	
	.isnone{
		display: none;
	}
	.bottom .isblock{
		display: block;
	}
	.bottom-box{
		background: black;
		color: white;
		position: fixed;
		width: 100%;
		bottom: 0;
		text-align: center;
	}
	.bottom{
		position: relative;
		width: 31.5%;
		float: left;
		height: .72rem;
		padding:.04rem .05rem 0 .05rem;
		z-index: 3;
	}
	.iconfont{
		height: .32rem;
		font-size: .32rem;
	}
	.bottom_{
		height: .4rem;
		font-size: .24rem;
		line-height: .4rem;
		font-weight: 100;
	}
	.lefts{
		position: fixed;
		bottom: .76rem;
		width: 100%;
		left: 0;
		background: white;
		z-index: 3;
		height: 5.28rem;
		overflow-x: auto;
	}
	.lefts ul{
		height: 100%;
		background: #f4f5f6;
		width: 2.6rem;
	}
	.lefts ul li{
		padding: .24rem .1rem;
		color: #212121;
		font-size: .28rem;
		line-height: .4rem;
		width: 2.4rem;
		text-align: left;
		text-indent: .2rem;
		background: #f4f5f6;
		
	}
	.lefts .isclick{
		background: white;
	}
	.lefts .rightul{
		width: 100%;
	}
	.lefts .right{
		line-height: .4rem;
		padding: .24rem 0;
		width: 100%;
		text-align: center;
		background: white;
		border-bottom: .02rem solid #DCE5E7;
	}
	
	.lefts .rightcolor{
		color: #00afc7;
	}
	.zhezhao{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom:0;
		background: rgba(0,0,0,.5);
		z-index: 1;
	}
</style>