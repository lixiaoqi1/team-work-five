<template>
	<div class="tourBox">
		<div style="position: relative;">
			<div class="spots-box" >
			<ul id="spots-xiala" style="width:38.3rem">
				<li v-for="item in tourListdelievery" @click="handelSoptsclick"  class="true" >
					{{item}}
				</li>
				<div class="clear"></div>
			</ul>
			</div>
			<div class="btn-down" ref="isblock">
				<p class="views">游玩景点(可多选)</p>
				<div style="margin: .1rem ;" v-for="item in tourListdelievery" @click="handelSoptsclick"  class="true" >
					{{item}}
				</div>
				<span class="up  iconfont icon-jiantoushang"  @click="handelUpclick"></span>
			</div>
			<span class="down iconfont icon-jiantouxia"  @click="handelDownclick">
				
			</span>
		</div>
		<div id="wrapper">
			<div id="scroller">
				<p v-if="isload" class="isload">
					我要变身了
					<img class="isload-img" src="../../../static/timg.gif" />
				</p>
				<ol class="detal-box">
					<li v-for="item in Tourlists.infor" class="tourDetal">
						<div class="pic">
							<img class="" :src=item.imgUrl>
							<span class="advance">
								可订明日
							</span>
						</div>
						<div class="infor">
							<h4 class="">【7-12点天天发】八达岭长城+往返直通车+门票，自由可选！</h4>
							<div class="descripe">
								<span class="">北京出发</span>
								<span class="">无自费</span>
								<span class="">无购物</span>
							</div>
							<div class=""></div>
							<div class="price">
								<span class="">¥<em>{{item.price}}</em></span>
								<span class="mp-list-priceflag">起</span>
							</div>
							<div class="nums">
								<span class="">已售{{item.sellnum}}</span>	
							</div>
						</div>
					</li>
				</ol>
				<p v-if="bottomisload" class="isload">
					我要变身了
					<img class="isload-img" src="../../../static/timg.gif" />
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import IScroll from '../../../utils/iscroll-probe.js'

	export default {
		props : ["Tourlist"],
		data() {
			return {	
				isload : false,
				flag : false,
				bottomisload : false
			}
		},
		methods:{
			handelSoptsclick : function(e){
				var just = e.target.className;
				if(just=="true"){
					e.target.style.borderColor="#28a9b9";
					e.target.style.color="#28a9b9";
					e.target.className="false";
				}else{
					e.target.style.borderColor="#e5e7e8";
					e.target.style.color="#212121";
					e.target.className="true";
				}
			},
			handelDownclick : function(){
				this.$refs.isblock.style.display="block"
			},
			handelUpclick : function(){
				this.$refs.isblock.style.display="none"
			}
		},
		computed:{
			tourListdelievery(){
				return this.$store.state.tour.Tourlist.delivery		
			},
			Tourlists(){
				return this.$store.state.tour.Tourlist	
			}
		},
		
		mounted(){
			this.myScroll = new IScroll('#wrapper', {probeType:2, mouseWheel: true });
			this.myScroll.on("scroll",()=>{
				
				if(!this.isload){
					if(this.myScroll.y>85){
						this.flag = true;
						this.isload=!this.isload;
					}
				}
			})
			this.myScroll.on("scrollEnd",()=>{
				if(this.flag){
					this.$store.commit("addTourlist");
					this.flag=!this.flag;
					this.isload=!this.isload;
				}
			})
		},

		updated() {
			this.myScroll.refresh();
		}
	}
</script>

<style scoped>
	.isload-img{
		width: .3rem;
		height: .3rem;
	}
	#wrapper{
		overflow: hidden;
		position: fixed;
		top: 1.72rem;
		bottom: .72rem;
		left: 0;
		right: 0;
	}
	.views{
		border-bottom: 1px solid #eaeaea;
		position: relative;
		z-index: 3;
		color: #212121;
		font-size: .28rem;
		line-height: .8rem;
		text-indent: .2rem;
	}
	.btn-down{
		position: absolute;
		z-index: 4;
		top: 0;
		background: #e5e7e8;
		display: none;
	}
	.down,
	.up{
		position: absolute;
		right: 0;
		top: 0;
		width: .78rem;
		height: .8rem;
		border-left: .01rem solid #cecece;
		line-height: .8rem;
		text-align: center;
	}
	.down{
		background:#e5e7e8;
		height: .84rem;
		line-height: .84rem;
		font-weight: 100;
	}
	.up{
		z-index: 5;
	}
	.spots-box ul {
		margin-right: .6rem;
		height: .68rem;
		max-height: 6rem;
		padding: .08rem .12rem;
		background: #e5e7e8;
		white-space: nowrap;
		overflow: hidden;
	}
	::-webkit-scrollbar{
		display: none;
	}
	.spots-box ul li,
	.views~div {
		float: left;
		min-width: .26rem;
		padding: 0 .22rem;
		background: #fff;
		color: #212121;
		font-size: .26rem;
		line-height: .56rem;
		margin-top: .05rem;
		margin-right: .2rem;
		border-radius: .08rem;
		border: 1px solid #e5e7e8;
		/*#28a9b9*/
	}
	.spots-box{
		overflow: auto;
		position: relative;
	}
	
	.pic{
		width: 1.6rem;
		height: 1.6rem;
		position: relative;
		padding: 10px;
		float:left;
	}
	.pic img{
		width: 1.6rem;
		width: 1.6rem;
	}
	.advance{
		position: absolute;
		left: .16rem;
		top: .16rem;
		height: .24rem;
		padding: .02rem;
		background: #00bcd4;
		color: #fff;
		line-height: .24rem;
		font-size: .24rem;
	}
	
	.infor{
		border-bottom: 1px solid #eaeaea;
		padding: .2rem .2rem .2rem 0;
		height: 1.6rem;
		overflow: hidden;
	}
	
	h4{
		line-height: .36rem;
		font-size: .2.9rem;
		font-family: tahoma,arial,"Hiragino Sans GB","\5FAE\8F6F\96C5\9ED1",simsun,sans-serif;
		color: #212121;
		text-overflow: ellipsis;
	}
	
	.descripe{
		overflow: hidden;
		max-height: .58rem;
		margin-right: 1rem;
		padding-top: .06rem;
		line-height: .24rem;
		font-size: 0;
	}
	.descripe span{
		display: inline-block;
		padding: 0 .1rem;
		font-size: .24rem;
		border-left: 1px solid #eaeaea;
	}
	.descripe span:nth-child(1){
		color: #00bcd4;
		border-left:none;
	}
	.price{
		right: .2rem;
		bottom: .48rem;
		height: .32rem;
		line-height: .32rem;
		color: #9e9e9e;
		text-align: right;
	}
	.price em{
		display:inline-block;
		font-size: .36rem;
		font-weight: bold;
		color: #ff8300;
		padding-left: .1rem;
	}
	.nums {
		height: .20rem;
	}
	.nums span{
		padding: 0 .1rem;
		font-size: .18rem;
		color: #9e9e9e;
	}
	.tourDetal,.tourBox{
	background: white;}
	
</style>