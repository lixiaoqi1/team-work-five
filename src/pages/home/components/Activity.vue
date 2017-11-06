<template>
	<div>
		<ol>
			<li class="li">
				<span class="iconfont">&#xe6ec;</span>
				定位失败
			</li>
			<li class="li" >
				<a title="5折泡温泉" class="wenquan">
					<span class="iconfont" >&#xe654;</span>
					5折泡温泉
				</a>
			</li>
			<div class="clear"></div>
		</ol>
		<ul>
			<li></li>
			<li></li>
			<div class="clear"></div>
		</ul>
	</div>
</template>

<script>
	export default {
	
}
</script>
<style scoped>
	
	.clear{
		clear: both;
	}
</style>
<style scoped>

	ol{
		background: white;
	}
	
	ol li{
		overflow: hidden;
		height: .98rem;
		font-size: .28rem;
		color: #212121;
		line-height: .98rem;
		text-align: center;
		float: left;
		width: 50%;
	}
	.wenquan{
		color: black;
	}
	
	ul{
		margin-top: .2rem;
		background: white;
	}
	ul li{
		position: relative;
		width: 50%;
		padding-bottom:21.9%;
		line-height: 1.4rem;
		color: #212121;
		font-size: .28rem;
		float: left;
	}
	
	ul li:nth-child(1){
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) ;
		background-size:100% 100%;
	}
	ul li:nth-child(2){
		background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) ;
		background-size: cover;
		background-size:100% 100%;
	}
</style>