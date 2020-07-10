<template>
    <div>
        <!-- 顶部导航 -->
        <van-row class="head">
            <van-col span="3"><span class="iconfont icon-sousuo" @click="search"></span></van-col>
            <van-col span="18"><p>惠购厅</p></van-col>
            <van-col span="3"><span class="iconfont icon-gouwuche" @click="cart"></span></van-col>
        </van-row>

        <div class="main">
            <ul>
                <li v-for="(item,i) in tabslist" @click="num=i" :class="{active:num==i}" :key="i">
                    <span @click="add(i)">{{item}}</span>
                </li>
            </ul>
        </div>
        
        <router-view></router-view>

        <vantabber></vantabber>
    </div>
</template>

<script>

import Swiper from 'swiper';
import vantabber from "../components/public/vantabbar.vue"
    export default {
        data(){
            return{
                 num:0,
                tabslist:["推荐","手机","声学","配件","生活"],
                routerlist:["/home/recommend","/home/phone","/home/music","/home/parts","/home/life",]
            }
        },
        methods:{
            add(index){
                this.$router.push(this.routerlist[index]);
            },
            search(){
                this.$router.push('/search')
            },
            cart(){
                this.$router.push('/cart')
            }
        },
        mounted(){
            new Swiper('.homeNavSwiperContainer', {
                    slidesPerView: 5, //显示个数
                    freeMode: true,
            });
        },
        created(){
            // this.$store.state.vanTabbar = true;
            this.$store.state.active = 0;
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
.van-row{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #fff;
    .icon-sousuo{
        font-weight: bold;
    }
    .icon-gouwuche{
        font-weight: bold;
    }
    p{
        font-weight: bolder;
        font-size: 20px;
        color: #008cff;
    }
}
.swiper-container {
        width: 100%;
        height: 100%;
        color: black;
        padding-top: 4px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 14px;
        background: #fff;
        

      /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        a{
            color: #000;
            padding-bottom: 4px;
        }
    }
    .swiper-slide.active a{
        color: #008cff;
        border-bottom: 2px solid #008cff;
    }
.main{
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
    ul{
        display: flex;
        padding-left: 20px;
        li{
            flex: 1;
            span{
                color: black;
                padding-bottom: 6px;;
                border-bottom: 1px solid transparent;
            }
        }
        li.active span{
                border-bottom: 2px solid #00c3f5;
                color: #00c3f5;
            }
    }
}
</style>