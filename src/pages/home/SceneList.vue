<template>
	<div>
		<h2 class="hot-sale">热销推荐</h2>
		<div class="scene-con">
			<ul>
				<li class="scene-con-li">
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">故宫</div>
							<div  class="scene-con-con">东方宫殿建筑代表，世界宫殿建筑典范</div>
						</div>
						<div class="scene-con-price-box">
							￥<em class="scene-con-price">40</em>
							<span>起</span>
						</div>
					</a>
				</li>
				<li class="scene-con-li">
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">八达岭长城</div>
							<div  class="scene-con-con">不到长城非好汉</div>
						</div>
						<div class="scene-con-price-box">
							￥<em class="scene-con-price">25</em>
							<span>起</span>
						</div>
					</a>
				</li>
				<li class="scene-con-li">
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">颐和园</div>
							<div  class="scene-con-con">保存完整的一座皇家行宫御苑</div>
						</div>
						<div class="scene-con-price-box">
							￥<em class="scene-con-price">22</em>
							<span>起</span>
						</div>
					</a>
				</li>
				<li class="scene-con-li">
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">北京欢乐谷</div>
							<div  class="scene-con-con">七大主题园区带你畅享北京欢乐谷</div>
						</div>
						<div class="scene-con-price-box">
							￥<em class="scene-con-price">28</em>
							<span>起</span>
						</div>
					</a>
				</li>
				<li class="scene-con-li">
					<a href="javascript:void(0)">
						<div class="scene-con-img-box"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫"  class="scene-con-img"></div>
						<div class="scene-con-infos">
							<div class="scene-con-title">慕田峪长城</div>
							<div  class="scene-con-con">秀美长城，关键是人少</div>
						</div>
						<div class="scene-con-price-box">
							￥<em class="scene-con-price">19.1</em>
							<span>起</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="all-produces">
			<a href="javascript:void(0)">查看所有产品</a>
		</div>	
	</div>
</template>
<script>

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
		background: #ccc;
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
	}
	.scene-con-img-box .scene-con-img{
		vertical-align: top;
		width: 1.4rem;
		height: 1.4rem;
	}
	.scene-con-infos{
		margin-left: 1.6rem;
	}
	.scene-con-titlle{
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
	.all-produces a{
		display: block;
	}
</style>

