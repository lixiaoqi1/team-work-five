<template>

	<div class="userComment">
		<div class="space"></div>
		<h3>用户评论</h3>
		<ul>
			<li>
				<p class="comment-title">
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<em>小小<i>2017-11-04</i></em>
				</p>
				<div class="comment-content">
					直接把故宫所有需要买票的地方的票都买了，不用取票，直接刷身份证就可以进，很方便，这次去的时间可能不凑巧，最中央的几个大殿都不让进，只有钟表馆，珍宝馆还有其他的陈列文物的地方是允许进的，不过我对钟表馆里的各种钟表是欣赏不来的，珍宝馆里的玉石雕刻的确是很精巧，故宫一趟转下来腿都要断了。。真的是很大，光看没有什么感觉，只有转的时候才能真正体会到故宫的宏伟。
				</div>
				<p class="extent iconfont icon-down-copy"></p>
				<ol class="imgList" >
					<li v-for="item in imgs" >
						<img :src="item.img" />
					</li>
				</ol>
				<p class="totalNum">共<i>9</i>张</p>
			</li>
			<li>
				<p class="comment-title">
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<em>小小<i>2017-11-04</i></em>
				</p>
				<div class="comment-content">
					绝对应该到的一处景点，因为以前看网上评论忽略了要是从长安街，天安门进故宫，注意是单行，只许进不许出，西华门只是供工作人员出入，东华门，和神武门是出口，午门是进口，单向游玩，大家一定要注意，还有建议大家一定要卖珍宝馆和钟表馆的票，时间允许还是要请一个导游，注意要请经典专业的导游人员呦～售票窗口都有咨询～珍宝馆实际就是皇极殿，九龙壁就在那里，乾隆养老的地方呗，钟表馆就是奉先殿，门票建议网上预定，直接刷身份证很方便，最重要的是故宫每天最多接待8万人，遇到周六日，基本上午10点钟就没有门票啦，所以提前会好一些～
				</div>
				<p class="extent iconfont icon-down-copy"></p>
				<ol class="imgList">
					<li v-for="item in images" >
						<img :src="item.img" />
					</li>
				</ol>
				<p class="totalNum">共<i>9</i>张</p>
			</li>
		</ul>
		<p class="allComment">查看所有评论 <span class="iconfont icon-jiantou"></span> </p>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				imgs:[
					{img:"http://img1.qunarzz.com/piao/fusion/1709/97/4b253b4f685bd02.jpg_228x168_df830bed.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1709/f3/d00a465647306e02.jpg_228x168_d9a4bb9e.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1709/4d/3ddcd92224397a02.jpg_228x168_d3a311f9.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1709/b2/89015b9a783c3102.jpg_228x168_eebd2965.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1709/c3/a84ee5d149b73a02.jpg_228x168_53aab06b.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1709/58/dc9febcf3b539b02.jpg_228x168_4dc89937.jpg"}
				],
				images:[
					{img:"http://img1.qunarzz.com/piao/fusion/1708/de/02da6038919bc502.jpg_228x168_992d2b4b.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1708/3e/8078b77ad21a2a02.jpg_228x168_b3bdb9fc.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1708/11/38941021bd1e8a02.jpg_228x168_1ca63bf5.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1708/9a/30f6292322d62a02.jpg_228x168_6d51464f.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1708/12/bae90855e7669d02.jpg_228x168_87c3210d.jpg"},
					{img:"http://img1.qunarzz.com/piao/fusion/1708/f3/e0dbbd9155c5c702.jpg_228x168_0f397974.jpg"}
				]
			}
		}
	}
</script>
<style scoped>
	.space{
		height:.3rem;
	}
	.userComment h3{
		padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	    position:relative;
	    border-bottom:1px solid #e0e0e0;
	}
	.userComment h3:after{
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
	.userComment ul{
		padding: 0 .2rem;
		background:#fff;
	}
	.userComment ul>li{
		position:relative;
	}
	.userComment ul>li:nth-child(1){
		border-bottom:1px solid #e0e0e0;
	}
	.comment-title{
		height:.6rem;
		line-height:.6rem;
	}
	.comment-title span{
		float:left;
		color:#1ba9ba;
	}
	.comment-title em{
		float:right;
		font-size:.24rem;
	}
	.comment-title em i{
		margin-left:.2rem;
	}
	.comment-content{
		word-break:break-all;
		word-wrap:break-word;
		line-height:.42rem;
		font-size:.26rem;
		color:#616161;
		max-height:2.6rem;
		overflow:hidden;
	}
	.imgList{
		overflow:hidden;
		margin:.2rem 0 .1rem 0;
	}
	.imgList>li{
		width:32%;
		float:left;
		margin-bottom:.1rem;
		margin-right:1.3%;
	}
	.imgList>li:nth-child(3n){
		margin-right:0;
	}
	.imgList>li>img{
		width:100%;
	}
	.totalNum{
		position:absolute;
		bottom:.3rem;
		right:.1rem;
		background:rgba(0,0,0,0.5);
		color:#fff;
		padding:.1rem .1rem .1rem .3rem;
		font-size:.24rem;
		border-top-left-radius:1em;
		border-bottom-left-radius:1em;
	}
	.extent{
		height: .48rem;
   	 	line-height: .48rem;
    	text-align: center;
    	font-size: .56rem;
    	color: #9e9e9e;
    	background:#fff;
	}
	.allComment{
		height:.8rem;
		line-height:.8rem;
		text-align:center;
		color:#616161;
		background:#fff;
	}
</style>