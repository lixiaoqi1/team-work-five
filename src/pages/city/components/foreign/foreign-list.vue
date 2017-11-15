<template>
    <div class="city-box">
        <div class="city-content">
            <h3 class="city-content-title">您的位置</h3>
            <div class="city-content-main">
                <ul>
                    <li class="city-content-item">
                        <a href="javascript:;" class="city-content-link">{{foreignInfo.Forgien.currentCity}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="city-content">
            <h3 class="city-content-title  borders">热门城市</h3>
            <div class="city-content-main">
                <ul>
                    <li class="city-content-item" v-for="item in foreignInfo.Forgien.hotCity" :key="item.id">
                        <a href="javascript:;" class="city-content-link city-color-change">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="city-items">
            <div class="city-items-type" v-for="item in foreignInfo.Forgien.citys" :key="item.id">
                <h3 class="city-content-title  borders no-border-bottom" ref="suibian">{{item.text}}</h3>
                <ul>
                    <li class="city-items-details" v-for="items in item.cityName">
                        <a href="javascript:;" class="city-items-details-link">{{items}}</a>   
                    </li>
                </ul>
            </div>
        </div>
        <div class="domestic-word ">
            <a href="javascript:;" class="domestic-word-link" v-for="item in foreignInfo.Forgien.citys" :title="item.id" @touchstart="handleTouchStart">{{item.text}}</a>
        </div>
    </div>
</template>

<script>
	import {mapState} from "vuex";  //对数据做映射
   
	export default{
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
            handleTouchStart(e) {
                this.update();
                let arrs= this.col;
                document.documentElement.scrollTop=arrs[parseInt(e.target.title)]-44;
                document.addEventListener("touchmove",this.handleTouchMove,false);
                document.addEventListener("touchend",this.handleTouchEnd,false);
			},
            handleTouchMove(e) {
                e.preventDefault();
                let listBox=document.getElementsByClassName("domestic-word")[0];
                let offsetT=listBox.offsetTop;
                let allHeight=e.touches[0].clientY-offsetT;
                let num=Math.floor(allHeight/16);
                let arrs= this.col;
                document.documentElement.scrollTop=arrs[num]-44;
            },
            handleTouchEnd() {
                document.removeEventListener("touchmove",this.handleTouchMove);
                document.removeEventListener("touchend",this.handleTouchEnd);
            },
            update() {
                let arr=this.$refs.suibian;
                let l=arr.length;
                for(let i=0;i<l;i++) {
                    this.col.push(arr[i].offsetTop);
                    }
                this.col.push(parseInt(getComputedStyle(arr[l-1].parentNode,null).height)+arr[l-1].offsetTop);
            }
         }
	}
</script>

<style scoped>
	.city-content-title{
        position:relative;
        line-height: .54rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem;
        border-bottom:1px solid #c9cccd;
    }
    .borders{
         border-top:1px solid #c9cccd;
    }
    .no-border-bottom{
         border-bottom:none;
    }
    .city-content-main{
        padding:.04rem .5rem .26rem .2rem;
        overflow:hidden;
        background:#fff;
    }
    .city-content-item{
        box-sizing: border-box;
        float: left;
        width: 33.33%;
        padding: .2rem .14rem 0 .1rem;
    }
    .city-content-link{
        display:block;
        height:.56rem;
        line-height:.56rem;
        color:#00afc7;
        border:1px solid #00afc7;
        text-align:center;
        border-radius:.06rem;
    }
    .city-color-change{
        color:#212121;
        border-color:#c9cccd;
    }
    .city-items-details{
        border-top:1px solid #c9cccd;
        background:#fff;
    }
    .city-items-details-link{
        display:block;
        line-height: .76rem;
        padding-left: .2rem;
        font-size: .28rem;
        color: #212121;
    }
    .domestic-word{
		position: fixed;
    	right: 0;
		top:2rem;
	}
	.domestic-word-link{
		display:block;
		width: .32rem;
		line-height: .32rem;
		padding-left: .2rem;
		color: #00afc7;
		font-size: .24rem;
		text-align: center;
	}
</style>