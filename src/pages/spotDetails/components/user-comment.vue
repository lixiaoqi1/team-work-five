<template>

	<div class="userComment">
		<div class="space"></div>
		<h3>用户评论</h3>
		<ul>
			<li v-for="item in usercomment">
				<p class="comment-title">
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<span class="iconfont icon-xing commentStar"></span>
					<em>{{item.user}}<i>{{item.date}}</i></em>
				</p>
				<div class="comment-content">
					{{item.content}}
				</div>
				<p class="extent iconfont icon-down-copy"></p>
				<ol class="imgList" >
					<li v-for="imgss in item.imgs" >
						<img :src="imgss.img" />
					</li>
				</ol>
				<p class="totalNum">共<i>9</i>张</p>
			</li>
		</ul>
		<p class="allComment">查看所有评论 <span class="iconfont icon-jiantou"></span> </p>
	</div>
</template>
<script>
	import {mapState} from "vuex";

	export default{
		computed:mapState({
			usercomment(state){
				return state.spotDetails.userComment;
			}
		}),

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