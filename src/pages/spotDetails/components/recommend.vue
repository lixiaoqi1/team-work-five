<template>
	<div class="recommend">
		<div class="space"></div>
		<h2 class="hot-sale">看了该景点的人还看了</h2>
		<div class="scene-con">
			<ul v-for="item in reCommend">
				<li class="scene-con-li" >
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img :src="item.img" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">
								<span class="scene-name">{{item.title}}</span>
								<div class="scene-con-price-box">
									￥<em class="scene-con-price">{{item.price}}</em>
									<span>起</span>
								</div>
							</div>
							<div  class="scene-con-con">
								<span class="iconfont icon-xing commentStar"></span>
								<span class="iconfont icon-xing commentStar"></span>
								<span class="iconfont icon-xing commentStar"></span>
								<span class="iconfont icon-xing commentStar"></span>
								<span class="iconfont icon-xing commentStar"></span>
								<i class="scene-con-text">123条评论</i>
							</div>
							<div class="spot-area">{{item.con}}</div>
						</div>	
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapState} from "vuex";

	export default{
		
		computed:mapState({
			reCommend(state){
				return state.spotDetails.reCommend;
			}
		})
	}
</script>
<style scoped>
	.space{
		height:.3rem;
	}
	.hot-sale{
		padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	    position:relative;
	    border-bottom:1px solid #e0e0e0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.hot-sale:after{
		content: " ";
	    position: absolute;
	    top: .33rem;
	    left: .2rem;
	    width: .06rem;
	    height: .25rem;
	    background: #1ba9ba;
	    -webkit-border-radius: .04rem;
	    -moz-border-radius: .04rem;
	    border-radius: .04rem;
	}
	.scene-con{
		background: #fff;
	}
	.scene-con-li{
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	}
	.scene-con-img-box{
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem;
	}
	.scene-con-img-box .scene-con-img{
		vertical-align: top;
		width: 1.4rem;
		height: 1.4rem;
	}
	.scene-con-infos{
		margin-left: 1.6rem;
	}
	.scene-con-infos:after{
		content:"";
		width:100%;
		height:0;
		position:absolute;
		bottom:0;
		border-bottom: 1px solid #e0e0e0;
	}
	.scene-con-title{
		position:relative;
		overflow: hidden;
		font-size: .3rem;
	}
	.scene-name{
		position:absolute;
		top:0;
		left:0;
		right:1.5rem;
		line-height:.4rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #212121;
		overflow: hidden;
	}
	.scene-con-price-box{
		margin-left: 1.6rem;
		color: #ff8300;
		text-align:right;
	}
	.scene-con-price{
		font-size: .36rem;
    	padding: 0 .04rem;
	}
	.scene-con-price-box span{
		color:#9e9e9e;
	}
	.scene-con-con{
		overflow: hidden;
		margin-top: .1rem;
		height: .4rem;
		line-height: .4rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #9e9e9e;
	}
	.scene-con-text{
		color: #9e9e9e;
		font-size: .24rem;
	}
	.spot-area{
		margin-top:.2rem;
		margin-bottom:.2rem;
		color:#9e9e9e;
		font-size:.24rem;
	}
	.commentStar{
		float:left;
		color:#1ba9ba;
	}
</style>

