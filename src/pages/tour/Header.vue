<template>
 	<div class="header">
 	
 		<router-link to="/" class="header-left iconfont icon-fanhui"></router-link>


 		<div class="header-title">
 			<input type="text" value="一日游"/>
 		</div>

 		<div class="header-right">
 			<span class="header-search">搜索</span>
 		</div>	

 	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.header {
		height:.88rem;
		background: #00bcd4;
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
		background:#fff;
		border-radius:.06rem;
		left:.8rem;
		top:.14rem;
		right:1.36rem;
		color:#ccc;
		line-height:.6rem;
		height:.6rem;
	}
	.header-title input{
		width:80%;
		border:none;
		text-indent:.2rem;
		line-height:.4rem;
		border-radius:.06rem;
	}
	.header-title input::placeholder{
		color:#999;
	}
	.header-title input::-webkit-input-placeholder{
		color:#999;
	}
	.header-title input::-moz-input-placeholder{
		color:#999;
	}
	.header-title input::-ms-input-placeholder{
		color:#999;
	}
	.header-right{
		float:right;
		color:#fff;
		width:1.28rem;
		height: .88rem;
		line-height:.88rem;
		text-align:center;
		overflow: hidden;
	}
	.header-search{
		width:1rem;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		display:inline-block;
	}
</style>