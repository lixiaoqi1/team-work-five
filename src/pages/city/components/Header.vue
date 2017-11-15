<template>
	<header class="header">
		<a class="header-left iconfont icon-fanhui"  @click="handleBackClick"></a>
		<div class="header-right">
			<div class="header-right-container"  @click="handleDomesitic">
				<span class="mp-header-city radius-left" :class="{changeColor:change}">国内</span>
				<span class="mp-header-city radius-right"  :class="{changeColor:!change}">海外</span>
			</div>
		</div>	
	</header>
</template>

<script>
	export default {
		data() {
			return {
				change:true
			}
		},
		methods:{
			handleDomesitic() {
				this.change=!this.change;
				this.$emit("change",this.change);
			},
			handleBackClick() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header {
		position:fixed;
		width:100%;
		height:.88rem;
		background: #00bcd4;
		overflow: hidden;
		top:0;
		display:flex;
	}
	.header-left{
		width: 8%;
    	line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
		display:inline-block;
	}
	.header-right{
		float:left;
		width:92%;
		position:relative;
	}
	.header-right-container{
		color:#fff;
		width:4.28rem;
		margin:0 auto;
		line-height:.88rem;
		text-align:center;
		overflow:hidden;
	}
	.radius-left{
		border-top-left-radius:.06rem;
		border-bottom-left-radius:.06rem;
	}
	.radius-right{
		border-top-right-radius:.06rem;
		border-bottom-right-radius:.06rem;
	}
	.mp-header-city {
		float:left;
		width: 2rem;
		height: .56rem;
		line-height: .56rem;
		margin-top: .15rem;
		background: #00afc7;
		font-size: .28rem;
		border: .02rem solid #fff;
	}
	.changeColor{
		background:#fff;
		color:#00afc7;
	}
</style>