<template>
    <div>
        <div class = "spot-header-banner" v-if= "show">
            <a class = "spot-header-banner-back iconfont icon-fanhui1" @click="handleBackClick"></a>
            <h1 class = "spot-header-banner-con">故宫</h1>
        </div>
        <div class = "spot-header">           
            <div class ="spot-img-con">
                <img class = "spot-img" src ="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
            </div>
            <div class = "spot-img-info">
                <div class = "spot-img-title">故宫(AAAAA景区)</div>
                <div class = "spot-img-pic">
                    <span class = "spot-iconfont spot-iconfont-icon icon-tupian iconfont"></span>
                    <em class = "spot-iconnum">10</em>
                </div>
            </div> 

        </div>
        <div class = "spot-baseinfo">
            <div class = "spot-baseinfo-address">
                <p class = "spot-baseinfo-address-txt">
                    <span class = "spot-iconfont spot-baseinfo-address-icon icon-dizhi iconfont"></span>
                    北京市东城区景山前街4号
                    <span class = "spot-iconfont icon-jiantou iconfont spot-baseinfo-address-arrow"></span>
                </p>
            </div>
            <div class = "spot-baseinfo-intro">
                <p class = "spot-baseinfo-intro-txt">
                    <span class = "spot-iconfont spot-baseinfo-intro-icon  icon-tupian iconfont"></span>
                    查看景点简介及开放时间
                    <span class = "spot-iconfont icon-jiantou iconfont  spot-baseinfo-address-arrow"></span>
                </p>
            </div>
        </div> 

        <div class = "spot-comment">
            <span class = "spot-comment-icon"></span>  
            <span class = "spot-comment-star iconfont icon-qianhoumianbanwujiaoxing "></span>
            <span class = "spot-comment-star iconfont icon-qianhoumianbanwujiaoxing "></span>
            <span class = "spot-comment-star iconfont icon-qianhoumianbanwujiaoxing "></span>
            <span class = "spot-comment-star iconfont icon-qianhoumianbanwujiaoxing "></span>
            <span class = "spot-comment-star iconfont icon-qianhoumianbanwujiaoxing "></span>  
            <span class = "spot-comment-tagscore">5.0分</span>
            <a class = "spot-comment-total">
                <span class = "spot-comment-total-num">
                    147314评论
                    <span class = "spot-iconfont spot-comment-iconfont icon-jiantou iconfont  spot-baseinfo-address-arrow"></span>
                </span>
            </a>  
        </div>
        <div class = "spot-warn">
            <div class = "spot-warn-inner">
                <span class = "spot-warn-icon spot-iconfont iconfont icon-laba"></span>
                因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
                <span class = "spot-iconfont icon-jiantou iconfont spot-warn-iconing"></span>
            </div>
        </div>
        <div class = "spot-promote-box">
            <div class = "spot-promote">
                <h3 class = "spot-promote-title">
                    去哪儿推荐
                </h3>
                <div class="ticket-default" > 
                    <div class="ticket-qunar" v-for="item in spotHeader" :key ="item.id">
                        <div class="ticket-order-left flexbox-layout">
                            <div>
                                <h3>{{item.title}}</h3>
                                <p class="ticket-order-term">
                                    <span class="order-time">
                                        <i class="order-time-icon iconfont icon-time"></i>
                                         {{item.date}}
                                    </span>
                                    <span class="term-unsubscribe">
                                        <i class="unsubscribe iconfont icon-duihao"></i>
                                           {{item.exhange}}
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
                <div class = "spot-promote-top"></div>
            </div>
        </div>
        <a class = "spot-header-back-box">
            <span class = "spot-header-back-bg"></span>
            <router-link to="/">
                 <span class = "spot-header-back icon-fanhui1 iconfont"></span>
            </router-link>
        </a>
    </div> 
</template>

<script>


    import {mapState} from "vuex";

    export default{
        data(){
            return {
                show:false
            }
        },
        computed:mapState({
            spotHeader(state){
                return state.spotDetails.HeaderComponent;
            }
        }),
        methods:{
            handleScroll(){
                this.scroll = document.documentElement.scrollTop;
                if(this.scroll>30){
                    this.show = true;
                }else{
                    this.show = false;
                }
            },
            handleBackClick(){
                this.$router.go(-1)
            }
        },
        mounted() {
            document.addEventListener("scroll",this.handleScroll,false)
        }
    }




</script>

<style>
    .spot-header{
        position:relative;
    }
    .spot-header-banner{
        position:fixed;
        width:100%;
        top:0px;
        left:0px;
        opacity:1;
        height:.88rem;
        background:#00bcd4;
        z-index: 10;
    }
    .spot-header-banner-back{
        position:absolute;
        top:0.25rem;
        left:0.2rem;
        color: #fff;
        font-size: .4rem;
    }
    .spot-header-banner-con{
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }
    .spot-img-con{
        overflow:hidden;
        width:100%;
        height:0;
        padding-bottom:55%;
    }
    .spot-img{
        width:100%;
    }
    .spot-img-info{
        position:relative;
        right:.2rem;
        bottom:.6rem;
        left:.2rem;
    }
    .spot-img-title{
        position:absolute;
        margin-right:1.4rem;
        line-height:.4rem;
        color:#fff;
        font-size:.32rem;
        text-shadow:0 1px 2px rgba(0,0,0,.7)
    }
    .spot-img-pic{
        position:absolute;
        right:0.4rem;
        top:0;
        width:1.2rem;
        height:.4rem;
        background:rgba(0,0,0,.5);
        border-radius:.2rem;
        font-size:.24rem;
        color:#fff;
        line-height:.4rem;
        text-align:center;
    }
    .spot-iconfont{     
        font-style:normal;
        font-weight:normal;
        font-variant:normal;
        line-height:1;
    }
    .spot-iconfont-icon{
        position:relative;
        top:-0.06rem;
        right:0.2rem;
        font-size:.5rem;
    }
    .spot-baseinfo-intro-icon{
        font-size:.5rem;
        position:relative;
        top:0.06rem;
        right:0.1rem;
    }
    .spot-iconnum{
        position:absolute;
        top:-0.01rem;
        right:0.3rem;
    }
    .spot-baseinfo{
        position:relative;
        top:-.1rem;
        border-top-left-radius:.1rem;
        border-top-right-radius:.1rem;
        padding:.1rem .2rem .2rem;
        margin-bottom:0.1rem;
        background:#fff;
    }
    .spot-baseinfo-address{
        display:block;
        position:relative;
        height:.88rem;
        color:#212121;
        line-height:.88rem;
        border-bottom:1px solid #ddd;
    }
    .spot-baseinfo-address-txt{
        overflow:hidden;
        padding-right:0.56rem;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .spot-baseinfo-address-icon{
        margin-right: .2rem;
        color: #9e9e9e;
    }
    .spot-baseinfo-intro{
        display: block;
        position: relative;
        height: .72rem;
        color: #212121;
        line-height: .88rem;
    }
    .spot-baseinfo-intro-txt{
        overflow:hidden;
        padding-right:0.56rem;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .spot-baseinfo-address-arrow{
        position: absolute;
        right: 0;
        top: .28rem;
        color: #b9b9b9;
    }
    .spot-comment{
        position:relative;
        margin-bottom:.2rem;
        background-color:#fff;
        height:.8rem;
        line-height:.8rem;
    }
    .spot-comment-icon{
        position:relative;
        top:0.08rem;
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
        margin-left: .2rem;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .spot-comment-star{
        display: inline-block;
        position: relative;
        width: 0.28rem;
        height: .28rem;
        top:0.04rem;
        color:#1ba9ba;
    }
    .spot-comment-tagscore{
        display:inline-block;
        margin-left:.1rem;
        color:#00afc7;
    }
    .spot-comment-total{
        float:right;
        display:block;
        margin-bottom:.2rem;
    }
    .spot-comment-total-num{
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    .spot-comment-iconfont {
        position: relative;
        top: .02rem;
    }
    .spot-warn{
        background-color: #fdeede;
        color: #f1441a;
        margin-bottom: .2rem;
        height: .88rem;
        line-height: .88rem;
        padding-left:.23rem;
    }
    .spot-warn-inner{
        padding-right:.6rem;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        position:relative;
    }
    .spot-warn-icon{
        color: #f67353;
        margin-right: .1rem;
    }
    .spot-warn-iconing{
        right: .2rem;
        position: absolute;
        top:0.3rem;
        color: #c7bcaf;
    }
    .spot-promote-box{
        position:relative;
    }
    .spot-promote{
        position:relative;
        background:#fff;
        margin-bottom:.2rem;
    }
    .spot-promote .spot-promote-title{
        background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=');
        background-repeat: no-repeat;
        background-size: .5rem .5rem;
        background-position: .2rem center;
        text-indent: .7rem;
        overflow: hidden;
        position: relative;
        z-index: 4;
        margin-bottom: -.02rem;
        padding: 0 .2rem;
        height: .88rem;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
        border-bottom:1px solid #e0e0e0;
    }
    .spot-promote .spot-promote-top{
        padding: .2rem .2rem .24rem .2rem;
    }
    .ticket-default{
        border-bottom: 1px solid #F0F0F0;
    }
    .ticket-qunar{
        width:100%;
        display: flex;
        box-sizing: border-box;
        background: #fff;
        position: relative;
        padding: .25rem;
        border-bottom:1px solid #e0e0e0;
    }
    .ticket-qunar-bottom{
        width:100%;
        display: flex;
        box-sizing: border-box;
        background: #fff;
        position: relative;
        padding: .25rem;
        border:none;
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
        font-size: .3rem;
        padding: .08rem 0;
        color: #333;
        line-height: .36rem;
        line-height:0.55rem;
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
        border-left: 1px solid  #EEEEE0;
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
    .ticket-link-span{
        color:#999;
    }
    .spot-header-back-box{
        position:absolute;
        font-size:.36rem;
        width:.72rem;
        height:.72rem;
        line-height:.72rem;
        top:.1rem;
        left:.1rem;
        text-align:center;
        color:#fff;
    }
    .spot-header-back-bg{
        display:block;
        width:.72rem;
        height:.72rem;
        background:#000;
        opacity:.5;
        border-radius:.36rem;
    }
    .spot-header-back{
        position:absolute;
        left:0;
        top:0;
        color:#fff;
        display:block;
        width:.72rem;
        line-height:.72rem;
        text-align:left;
        text-indent:.24rem;
    }
</style>