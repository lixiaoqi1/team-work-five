<template>
 	<header class="header">
 		<a class="header-left iconfont icon-fanhui"></a>

 		<router-link to="./list">
	 		<div class="header-title">
	 			<span class="single-line">输入城市/景点/游玩主题</span>
	 		</div>
 		</router-link>

 		<div class="header-right">
		 	<router-link to="/city">
				<div class="header-city-box">
					<span class="header-city">北京</span>
				</div>
			</router-link>
 		</div>	
 	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.header {
		height:.88rem;
		background: #00bcd4;
		overflow: hidden;
	}
	.header-left{
		width: .4rem;
    	line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
		display:inline-block;
	}
	.header-title{
		position:absolute;
		line-height:.6rem;
		background:#fff;
		border-radius:.06rem;
		left:.8rem;
		top:.14rem;
		right:1.36rem;
		text-indent:.2rem;
		color:#ccc;
	}
	.header-right{
		float:right;
		color:#fff;
		width:1.28rem;
		line-height:.88rem;
		text-align:center;
	}
	.header-city-box{
		position:relative;
		padding-right:.3rem;
		overflow:hidden;
		height:.88rem;
	}
	.header-city{
		width:1rem;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		display:inline-block;
		color:#fff;
	}
	.header-city:after{
		content:"\0020";
		position:absolute;
		width:0;
		height:0;
		border:.11rem solid transparent;
		border-top-color:#fff;
		top:0.4rem;
		right:0.1rem;
	}
</style>