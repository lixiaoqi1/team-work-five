<template>
	<div>
		<div class="city-search">
			<input type="text" class="city-search-txt" placeholder="输入城市名或拼音" />
		</div>
		<ul class="search-list">
			<li class="search-item" v-for="item in col">{{item}}</li>
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
	    	foreignInfo(state) {
		        return state.city.cityInfo;
		      }
	    }),
		methods: {
			
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
</style>