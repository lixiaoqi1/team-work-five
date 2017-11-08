<template>
	<div>
		<div class="totalPrice">
			<div class="totalLeft">
				<span class="total-productPrice">
					产品价格￥<span id="totalPrice">{{40*allPrice}}</span>
					<span class="up iconfont icon-jiantoushang">
					</span>
				</span>
			</div>
			<div class="totalRight">提交订单</div>
		</div>
	</div>
</template>

<script>
	export default{
        props:["allPrice"]
        
	}
</script>

<style>
	.totalPrice{position:fixed;
	            bottom:0;
	            height:1rem;
	            
	            width:100%;
	           }
	.totalLeft{width:48%;
	           float:left;
	           position:absolute;
	           font-size:.28rem;
	           line-height:1rem;
	           left:0;
	           padding-left:0.2rem;
	           background:#fff;
	           border-right:0.001rem solid #ccc;}
	              
	.total-productPrice{}                  
	 
	.totalLeft span{color:#ff8300;}
	
	#totalPrice{font-size:.35rem;}
	
	.totalRight{background:#ff9800;
	            width:50%;
	            float:right;
	            line-height:1rem;
	            height:1.3rem;
	            text-align:center;
	            color:white;
	            font-size:.32rem;}
	
	.icon-jiantoushang{font-size:.32rem;}
	.totalLeft .up{color:#ccc;}            
</style>