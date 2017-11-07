<template>
	<div>
		<ol class="pos-well-box">
			<li class="position-well">
				<p class="descrip">
					<span class="iconfont">&#xe6ec;</span>
					定位失败
				</p>
			</li>
			<li class="position-well">
				<p class="descrip">
					<span class="iconfont" >&#xe654;</span>
					5折泡温泉
				</p>
			</li>
			<div class="clear"></div>
		</ol>
		<ul class="activity">
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
	.pos-well-box{
		background: white;
	}
	
	.position-well{
		width: 50%;
		height: .98rem;
		overflow: hidden;
		font-size: .28rem;
		text-align: center;
		color: #212121;
		float: left;
		
	}
	.descrip{
		width: 1.92rem;
		height: .30rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 auto;
		margin-top: .35rem;
		color: black;
	}
	
	.activity{
		margin-top: .2rem;
		background: white;
	}
	.activity li{
		position: relative;
		width: 50%;
		padding-bottom:21.9%;
		line-height: 1.4rem;
		color: #212121;
		font-size: .28rem;
		float: left;
	}
	
	.activity li:nth-child(1){
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) ;
		background-size:100% 100%;
	}
	.activity li:nth-child(2){
		background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) ;
		background-size: cover;
		background-size:100% 100%;
	}
</style>