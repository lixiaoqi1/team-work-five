<template>
	<div>
		<h2 class="hot-sale">热销推荐</h2>
		<div class="scene-con">
			<ul v-for="item in Hotsale" :key= "item.id">
				<router-link :to="item.link">
					<li class="scene-con-li">
						<a href="javascript:void(0)">
							<div class="scene-con-img-box"><img :src="item.img"   class="scene-con-img"></div>
							<div class="scene-con-infos">
								<div class="scene-con-title">{{item.title}}</div>
								<div  class="scene-con-con">{{item.con}}</div>
							</div>
							<div class="scene-con-price-box">
								￥<em class="scene-con-price">{{item.price}}</em>
								<span>起</span>
							</div>
						</a>
					</li>
				</router-link>

			</ul>
		</div>
		<div class="all-produces">
			<a href="javascript:void(0)" class ="all-pro-btn">查看所有产品</a>
		</div>	
	</div>
</template>
<script>
	import {mapState} from "vuex";  //对数据做映射

	export default{
	    computed: mapState({
	    	Hotsale(state) {
		        return state.home.Hotsale;
		      }
	    })
	}
</script>
<style scoped>
	a{
		color: #00afc7;
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	.hot-sale{
		width: 100%;
		line-height: .8rem;
		padding-left: .26rem;
		color: #212121;
		background: #f5f5f5;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.scene-con{
		background: #fff;
	}
	.scene-con-li{
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	    border-bottom: 1px solid #ccc;
	}
	.scene-con-img-box{
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem;
		background:url(http://localhost:8080/static/images/error1.jpg);
    	background-size:100% 100%;
	}
	.scene-con-img-box .scene-con-img{
		vertical-align: top;
		width: 1.4rem;
		height: 1.4rem;
	}
	.scene-con-infos{
		margin-left: 1.6rem;
	}
	.scene-con-title{
		overflow: hidden;
		margin-top: .04rem;
		margin-bottom: .1rem;
		font-size: .3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #212121;
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
	.scene-con-price-box{
		margin-left: 1.6rem;
		color: #ff8300;
		margin-top: .25rem;
	}
	.scene-con-price{
		font-size: .36rem;
    	padding: 0 .04rem;
    	overflow: hidden;
    	white-space: nowrap;
		text-overflow: ellipsis;
	}
	.scene-con-text{
		color: #212121;
		font-size: .24rem;
	}
	.all-produces{
		margin-top: .02rem;
		height: .88rem;
		color: #00afc7;
		line-height: .88rem;
		text-align: center;
	}
	.all-pro-btn{
		display: block;
		background:#fff;
	}
</style>

