<template>
	<div>
		<div class="payMessage">
			<h1 class="payM-left">购买数量</h1>
			<h4>最多买5张</h4>
			
			<div class="payM-right">
			   <span id="payMminus" @click="minusEvents">-</span>
			   <input type="text" id="payNum" v-model="num" />
			   <span id="payMplus" @click="plusEvents">+</span>
			</div>
		</div>
		<!--列表-->
		<div class="payList" v-for="(i,index) in num" >
			<div class="payList-person">
				<span class="payList-youke">游客<span id="payList-pNum">{{i}}</span></span>
				<span id="payList-pName">游客姓名</span>
				<span class="mingpian iconfont icon-iconfontmingpian"></span>
			</div>
			<div class="payList-phoneNum" v-if="index==0">
				<span class="payList-phone">手机号</span>
				<span id="payList-text">
					<span class="num-86">+86<span class="iconfont icon-jiantou"></span></span>
					请填写手机号</span>
			</div>
			<div class="payList-idNum">
				<span class="payList-id">身份证</span>
				<span id="payList-text">请填写正确的身份证号</span>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	 export default{
	 	data(){
	 		return {
	 			num:1
	 		}
	 	},
	 	methods:{
	 		minusEvents:function(e){
	 			if(this.num>1){
	 				this.num--;
	 				//e.target.style.background="#00bc4f";
	 			}
	 			//console.log(this.num);
	 		},
	 		plusEvents:function(){
	 			//vaif)r num=this.$refs.input.value;
	 			if(this.num<=4){
	 			    this.num++;
	 			}
	 		}
	 	},
	 }
</script>

<style>
	.payMessage{height:0.5rem;
	            padding:0.4rem 0.2rem;
	            width:100%;
	            background:#fff;
	            position:relative;
	            margin-bottom:0.2rem;}
	            
	.payM-left{font-size:0.3rem;
	           line-height:0.5rem;
	           width:1.6rem;
	           color:#616161;
	           float:left;}
	           
	.payMessage h4{width:1.6rem;
	               color:#ccc;
	               float:left;}
	               
	.payM-right{border:0.02rem solid #c7ced4;
	             width:2.0rem;
	             float:right;
	             height:0.5rem;
	             position:absolute;
	             right:0.6rem;}
	
	.payM-right #payMminus{position:absolute;
	                     width:0.5rem;
	                     height:0.5rem;
	                     text-align:center;
	                     line-height:0.5rem;
	                     background:#f0f0f0;}
	
	.payM-right #payNum{position:absolute;
	                    width:1rem;
	                    height:0.5rem;
                        left:0.5rem;
                        border:none;
                        text-align:center;}
	
	.payM-right #payMplus{position:absolute;
	                      width:0.5rem;
	                      height:0.5rem;
	                      left:1.5rem;
	                      text-align:center;
	                      line-height:0.5rem;
	                      background:#00AFC7;}
	
	.payList{
		  width:100%;
		  background:#fff;
		  font-size:0.28rem;
		  margin-bottom:0.1rem;
	}
	.payList-person {
	    height:1rem;
		background:#fff;
		border-bottom:0.02rem solid #ccc;}
		
	
	.payList-youke{font-size:.32rem;
	               width:1.6rem;
	               line-height:1rem;
	               float:left;
	               text-align:center;
	               color:#616161;}	
	               
	#payList-pName{font-size:.32rem;
	               line-height:1rem;
	               width:4.5rem;
	               float:left;
	               color:#ccc;}
	               
	.mingpian{font-size:.32rem;
	          line-height:0.3rem;
	          color:#00BCD4;}
	          
     .payList-phoneNum {
     	height:1rem;
		background:#fff;
		border-bottom:0.02rem solid #ccc;
		}
		
	.payList-phone,.payList-id{height:0.32rem;
	               line-height:1rem;
	               color:#616161;
	               float:left;
	               font-size:0.32rem;
	               width:1.4rem;
	               text-align:center;}
	               
	.num-86{border:0.01rem solid #ccc;
	           width:0.6rem;
	           height:0.5rem;
	           padding:0.02rem;
	           }
	               
	#payList-text{height:0.32rem;
	              line-height:1rem;
	              width:4.5rem;
	              float:left;
	              color:#ccc;
	              margin-left:0.2rem;
	              font-size:0.32rem;}
	 
    .payList-idNum{
		height:1rem;
		background:#fff;
		border-bottom:0.02rem solid #ccc;
		}
		
</style>