<template>
	<div>
		<div class="city-search">
			<input type="text" class="city-search-txt" placeholder="输入城市名或拼音" @keyup="handleDataInput"/>
		</div>
		<ul>
			<li v-for="item in col" class="search-list">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	
	import {mapState} from "vuex";  //对数据做映射
	export default {
		data() {
			return {
				col:[]
			}
		},
		computed: mapState({
	    	domesticInfo(state) {
		        return state.city.cityInfo;
		      }
	    }),
		methods: {
			handleDataInput(e) {
				let arr=this.domesticInfo.China.citys;
				let l=arr.length;
				//let reg=new RegExp(e.target.value);
				//var reg = /^[\u4e00-\u9fa5]+$/;
				for(let i=0;i<l;i++){
					let arr1=arr[i].cityName;
					let arr2=arr[i].letter;
					let ls=arr1.length;
					for(let j=0;j<ls;j++){
						if(arr1.indexOf(e.target.value)>=-1){
							this.col.push(arr1[j]);
						}else if(reg.test(arr2[j])){
							this.col.push(arr1[j]);
						}
					}
				}
				if(e.target.value==""){
					this.col=[];
				}

			}
		}
	}
</script>

<style scoped>
	.city-search{
		background:#00bcd4;
		margin-top:.88rem;
		padding:0 .2rem .1rem .2rem;
		font-size:.26rem;
		color:#9e9e9e;
	}
	.city-search-txt{
		display: block;
		width: 100%;
		height: .3rem;
		line-height: .3rem;
		padding: .16rem 0 .16rem .1rem;
		background: #fff;
		border: 0;
		-webkit-border-radius: .06rem;
		-moz-border-radius: .06rem;
		border-radius: .06rem;
		text-align: center;
		margin-top:-0.03rem;
		
	}
	.search-list{
		line-height:.8rem;
		padding:0 .2rem;
		border-bottom:1px solid #f7f7f7;
	}
</style>