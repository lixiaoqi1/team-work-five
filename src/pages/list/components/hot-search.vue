<template>
	<div class="hotsearch">
		<div class="hotsearch-head">
			<span class="hotsearch-title">热门搜索</span>
			<span class="hotsearch-change">
				<span class=" iconfont icon-huanyipi hotsearch-hyp"></span>
				<span class="hotsearch-refreshtext" @click="handleChange">换一批</span>	
			</span>
		</div>
		<div class="hotsearch-con">
			<div class="hotsearch-spot">
				<div class="hotsearch-typeicon">
					<div class="hotsearch-container">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="hotsearch-container-img"/>
					</div>
				</div>
				<div class="hotsearch-items maxline">
					<div  class="hotsearch-items-inner" :style="{top:tops+'rem'}">
						<a href="javascript:;" class="hotsearch-items-con" v-for="item in changeInfo.changeInfoF" :key="item.id">{{item.title}}</a>
					</div>
				</div>
			</div>
			<div class="hotsearch-city hotsearch-spot">
				<div class="hotsearch-typeicon">
					<div class="hotsearch-container">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="hotsearch-container-img"/>
					</div>
				</div>
				<div class="hotsearch-items middleline">
					<div class="hotsearch-items-inner" :style="{top:topsa+'rem'}">
						<a href="javascript:;" class="hotsearch-cityitems" v-for="item in changeInfo.changeInfoS" :key="item.id">{{item.title}}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="hotsearch-footer">
			<a href="javascript:;" class="hotsearch-footer-btn">搜索身边的景点</a>
		</div>
		
	</div>
</template>

<script>
	import {mapState} from "vuex";  //对数据做映射
	export default {
		data:function(){
			return {
				tops:0,
				topsa:0
			}
		},
		methods:{
			handleChange:function(){
				this.tops-=1.7;
				this.topsa-=0.85;
				if(this.tops==-5.1){
					this.tops=0;
				}
				if(this.topsa==-3.4){
					this.topsa=0;
				}
			}
		},
		computed: mapState({
	    	changeInfo() {
		        return this.$store.state.list.changeInfo;
		      }
	    })
	}
</script>

<style scoped>
	.hotsearch-head{
		padding: 0 .2rem;
		background-color: #f0f5f6;
		height: .64rem;
		line-height: .64rem;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.hotsearch-title{
		font-size: .26rem;
		color:#888 ;
	}
	.hotsearch-change{
		color: #00afc7;
		font-size: .26rem;
	}
	.hotsearch-con{
		background: #fff;
	}
	.hotsearch-spot{
		position: relative;
		padding-left: .74rem;
		border-top: 1px solid #dce5e7;
	}
	.hotsearch-typeicon{
		position: absolute;
		width: .74rem;
		left:0;
		top: 0;
		height: 100%;
		line-height: 100%;
		text-align: center;
	}
	.hotsearch-container{
		position: absolute;
		width: .72rem;
		height: 70%;
		top: 15%;
		border-right: .02rem solid #DCE5E7;
	}
	.hotsearch-container-img{
		width: .3rem;
		height: .3rem;
		position: relative;
		top: 50%;
		margin-top: -.15rem;
	}
	.maxline{
		max-height: 1.8rem;
	}
	.middleline{
		max-height: .9rem;
	}
	.hotsearch-items{
		zoom: 1;
		overflow: hidden;
		position: relative;
		width: 100%;
	}
	.hotsearch-items-inner{
	    zoom: 1;
		overflow: hidden;
		position: relative;
		left: 0;
	}
	.hotsearch-items-con{
	    float: left;
	    height: .36rem;
	    max-width: 2.89rem;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    padding-left: .3rem;
	    padding-right: .3rem;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.hotsearch-cityitems{
	    float: left;
	    height: .36rem;
	    width: 24.5%;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.hotsearch-city{
		border-bottom: .02rem solid #DCE5E7;
	}
	.hotsearch-footer{
		height: .72rem;
		line-height: .72rem;
		margin: .2rem;
		border: 1px solid #dde1e3;
		border-radius: 0.06rem;
		text-align: center;
		background:#fff;
	}
	.hotsearch-footer-btn{
		color: #333;
	}
</style>