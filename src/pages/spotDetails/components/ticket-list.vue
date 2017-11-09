<template>

	<div class="ticketList-box">
		<div class="ticketList" v-for="item in ticketlist" >
			<h3 class="ticketTittle">
				<span class="ticketIcon"></span>
				<span class="ticketTittles">{{item.title}}</span>
			</h3>
			<ul>
				<li>
					<div class="ticket-type-info" @click="showTickets" ref="item.id">
						<p class="todayTicket">
							{{item.con.num1}}
							<i>{{item.con.num2}}</i>
						</p>
						<span class="ticketDown iconfont icon-down-copy"></span>
						<div class="ticketPrice">
							￥<em>{{item.price}}</em>
							<i>起</i>
						</div>
					</div>
					<div class="ticket-default" > 
						<div class="ticket-qunar border-style">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3><span class='qunar-icon'></span>去哪儿直销</h3>
									<h6>{{item.con.num3}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
						<div class="ticket-qunar">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3>{{item.con.num6}}</h3>
									<h6> {{item.con.num7}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
					</div>
					
				</li>
				<li>
					<div class="ticket-type-info" @click="showTickets">
						<p class="todayTicket">
							{{item.con.new1}}
							<i>{{item.con.num2}}</i>
						</p>
						<span class="ticketDown  iconfont icon-down-copy"></span>
						<div class="ticketPrice">
							￥<em>{{item.price}}</em>
							<i>起</i>
						</div>
					</div>
					<div class="ticket-default"  > 
						<div class="ticket-qunar border-style">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3><span class='qunar-icon'></span>去哪儿直销</h3>
									<h6>{{item.con.new2}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
						<div class="ticket-qunar">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3>{{item.con.num6}}</h3>
									<h6>{{item.con.num7}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
					</div>
					
				</li>
				<li v-if="item.con.new3">
					<div class="ticket-type-info" @click="showTickets">
						<p class="todayTicket">
							{{item.con.new3}}
							<i>{{item.con.num2}}</i>
						</p>
						<span class="ticketDown  iconfont icon-down-copy"></span>
						<div class="ticketPrice">
							￥<em>{{item.price}}</em>
							<i>起</i>
						</div>
					</div>
					
					<div class="ticket-default" > 
						<div class="ticket-qunar border-style">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3><span class='qunar-icon'></span>去哪儿直销</h3>
									<h6>{{item.con.new4}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
						<div class="ticket-qunar">
							<div class="ticket-order-left flexbox-layout">
								<div>
									<h3>{{item.con.num6}}</h3>
									<h6>{{item.con.new6}}</h6>
									<p class="ticket-order-term">
										<span class="order-time">
											<i class="order-time-icon iconfont icon-time"></i>
											{{item.con.num4}}
										</span>
										<span class="term-unsubscribe">
											<i class="unsubscribe iconfont icon-duihao"></i>
											{{item.con.num5}}
										</span>
									</p>
								</div>
							</div>
							<div class="ticket-order-right flexbox-layout">
								<a href="javascript:;" class="ticket-link">
									<strong class="ticket-price displays">￥<em>40</em></strong>
									<span class="ticket-btn displays">预订</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<div class="showLast" @click="showOther"  v-if="item.con.new3" >
					<i class="showLast_pro">{{item.other}}</i>
					<span class="iconfont icon-down-copy downs"></span>
				</div>
			</ul>
		</div>
	</div>

</template>
<script>
	import {mapState} from "vuex";

	export default{
		/*data() {
			return {
				isShow:true,
				col:[]

			}
		},*/
		computed:mapState({
			ticketlist(state){
				return state.spotDetails.ticketList;
			}
		}),
		methods:{
			showOther:function(e){
				e.target.parentNode.style.display="none";
				e.target.parentNode.parentNode.childNodes[4].style.display="block";
			},
			showTickets:function(e){								
				e.currentTarget.parentNode.childNodes[2].style.display="block";
				e.currentTarget.children[1].classList.remove("icon-down-copy");
				e.currentTarget.children[1].classList.add("icon-up");
				
			}
		}
	}	
				/*for(var i in this.$refs){
					this.col.push(this.$refs[i]);
				}
				var l=this.col.length;
				for(var j=0;j<l;j++){
					if(e.currentTarget.innerText == this.col[j][0].innerText){
						this.col[j][0].
						break;
					}
					
				}*/
				
			
</script>
<style scoped>
	.ticketList{
		margin-top:.3rem;
	}
	.ticketTittle{
		height:.88rem;
		line-height:.88rem;
		padding:0 .22rem;
		background:#fff;
		font-size:.32rem;
		text-indent:.4rem;
		position:relative;
	}
	.ticketIcon{
		display: inline-block;
	    position: absolute;
	    width: .36rem;
	    height: .36rem;
	    top: .26rem;
	    left: .2rem;
	    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
	    margin-right: .1rem;
	    background-size: .4rem 3rem;
	}
	.ticketList li{
		background:#fff;
		border-bottom:1px solid #F0F0F0;
		position:relative;
	}
	.ticketList li:nth-child(3){
		display:none;
	}
	.ticket-type-info{
		padding:.24rem .2rem;
		position: relative;
	}
	.todayTicket{
		font-size:.3rem;
		color:#333;
		margin-right:1.8rem;
		line-height:.48rem;
	}
	.todayTicket i{
		font-size:.24rem;
		color:#888;
	}
	.ticketPrice{
		position:absolute;
		font-size:.24rem;
		color:#ff9800;
		top:50%;
		right:.46rem;
		height:.4rem;
		line-height:.4rem;
		margin-top:-.28rem;
	}
	.ticketPrice em{
		font-size:.36rem;
	}
	.ticketPrice i{
		color:#9e9e9e;
	}
	.ticketDown{
		position:absolute;
		font-size:.46rem;
		color:#9e9e9e;
		top:50%;
		right:0;
		height:.4rem;
		margin-top:-.28rem;
	}
	.showLast{
		text-align:center;
		height:.8rem;
		position:relative;
		background:#fff;
		color:#616161;
	}
	.showLast_pro{
		line-height:.8rem;
		display:inline-block;
	}
	.downs{
		position:absolute;
		top:50%;
		font-size:.6rem;
		color:#616161;
		margin-top:-.3rem;
	}
	.ticket-default{
		display: none;
	}
	.ticket-default>div:nth-child(1){
		border-bottom: 1px solid #F0F0F0;
	}
	.ticket-qunar{
		width:100%;
		display: flex;
		box-sizing: border-box;
		background: #F5F5F5;
		position: relative;
		padding: .25rem;
	}
	.flexbox-layout{
		width: .02rem;
		flex: 1;
	}
	.ticket-order-left{
		flex: 2.92;
		-webkit-flex: 2.92;
		-moz-box-flex: 2.92;
		-ms-flex: 2.92;
		display: flex;
		-moz-box-align: center;
		-webkit-box-align: center;
		align-items: center;
	}
	.ticket-order-left h3{
		font-size: .32rem;
		padding: .08rem 0;
		color: #333;
		line-height: .36rem;
	}
	.qunar-icon{
		display: inline-block;
	    overflow: hidden;
	    width: .3rem;
	    height: .3rem;
	    margin-right: .06rem;
	    background: url(http://appimg.hicloud.com/hwmarket/files/application/icon144/d8437a82a12a475da76792e0404a39b9.png) 0 0 no-repeat;
	    background-size: 100% 100%;
	    vertical-align: -.04rem;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	}
	.ticket-order-left h6{
		padding: .08rem 0;
		color: #888;
		font-size: .24rem;
		line-height: .36rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ticket-order-term{
		overflow: hidden;
		position: relative;
	}
	.ticket-order-term span{
		display: inline-block;
		color: #616161;
		font-size: .24rem;
		line-height: .32rem;
		white-space: nowrap;
	}
	.order-time{
		margin-right: .24rem;
		margin-left: .32rem;
	}
	.order-time-icon{
		color: #00BCD4;
		font-size: .32rem;
		position: absolute;
		left: 0;
		top: .01rem;
	}
	.unsubscribe{
		color: #00BCD4;
		font-size: .24rem;
	}
	.ticket-order-right{
		display: flex;
		position: relative;
	}
	.ticket-order-right:after{
		content: " ";
    	overflow: hidden;
    	position: absolute;
    	left: 0;
    	width: 1px;
    	height: 100%;
    	border-left: 1px solid 	#EEEEE0;
	}
	.ticket-link{
		width: 100%;
		box-sizing: border-box;
		display: block;
		padding-left: .2rem;
	}
	.ticket-price{
		height: .32rem;
		line-height: .32rem;
		font-size: .24rem;
		color: #FF9800;
		margin-top: .1rem;
	}
	.ticket-price em{
		line-height: .3rem;
		font-size: .32rem;
		margin-left: .04rem;
	}
	.displays{
		overflow: hidden;
		display: block;
		text-align: center;
	}
	.ticket-btn{
		height: .6rem;
		background: #FF9800;
		font-size: .28rem;
		line-height: .6rem;
		color: #fff;
		border-radius: .06rem;
	}
</style>