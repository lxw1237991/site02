<template>
    <div class="re">
        <!-- 轮播图 -->
        <div class="swiper-container homeSlideContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner1.jpg" alt="">
                </div>
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner02.jpg" alt="">
                </div>
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner3.jpg" alt="">
                </div>
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner01.jpg" alt="">
                </div>
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner5.jpg" alt="">
                </div>
                <div class="swiper-slide" @click="$router.push('/details')">
                    <img src="../../assets/img/banner03.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination homeSlidePagination"></div>
        </div>

        <div class="line"></div>
        <!-- 分类 -->
        <van-row class="category">
            <van-col span="6" @click="got(2)">
                <img src="../../assets/img/nav01.jpg" alt="">
                <p>17狂欢购</p>
            </van-col>
            <van-col span="6">
                <img src="../../assets/img/nav02.jpg" alt="">
                <p>配件新登场</p>
            </van-col>
            <van-col span="6">
                <img src="../../assets/img/nav03.png" alt="">
                <p>手机</p>
            </van-col>
            <van-col span="6">
                <img src="../../assets/img/nav04.jpg" alt="">
                <p>mCycle</p>
            </van-col>
        </van-row>


        <div class="line"></div>
        <!-- 热卖 -->
        <van-row class="main">
            <van-col span="12" @click="got(1)">
                <img src="../../assets/img/main01.jpg" alt="">
            </van-col>
            <van-col span="12">
                <div>
                    <img src="../../assets/img/main2.jpg" alt="">
                </div>
                <div>
                    <img src="../../assets/img/main03.png" alt="">
                </div>
            </van-col>
        </van-row>

        <div class="phone">
            热<span>门推</span>荐
            <img src="../../assets/img/banner4.jpg" alt="">
        </div>

        <!-- 手机商品列表 -->
        <recom></recom>

        <van-loading type="spinner"/>
    </div>
</template>

<script>
import recom from "../../components/public/recom"
import Swiper from 'swiper';
    export default {
        data(){
            return{
                lists:[],
            }
        },
        methods:{
            got(index){
                let num = index;
                console.log(num);
                this.$router.push({path:"/details",query:{goods:this.lists[index]}});
            }
        },
        created(){
            this.$axios.get("recommend").then(res=>{
                this.lists = res.data.recommend
            })
        },
        mounted(){
            new Swiper(".swiper-container", {
                loop: true, // 循环模式选项
                pagination: {
                    el: ".homeSlidePagination",
                    clickable: true
                },
                autoplay: true
            });
        },
        components:{
            recom,
        }
    }
</script>

<style lang="scss" scoped>
.re{
    margin-bottom: 80px;
}
.swiper-container {
        width: 100%;
        height: 100%;
        box-shadow: 0 -1px 1px #ccc;
        margin-top: 10px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
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
    }
    .van-grid-item__content--center{
        padding: 0;
    }
    .category{
        text-align: center;
        img{
            display: block;
            margin: 0 auto;
            width: 50px;
        }
    }
    .phone{
        width: 100%;
        height: 270px;
        background-color: #f4f4f4;
        text-align: center;
        line-height: 80px;
        color: #000;
        font-size: 20px;
        font-weight: bolder;
        span{
            padding-bottom: 8px;
            border-bottom: 3px solid #008cff;
        }
    }
    .music{
        width: 100%;
        height: 80px;
        background-color: #f4f4f4;
        text-align: center;
        line-height: 80px;
        color: #000;
        font-size: 20px;
        font-weight: bolder;
        span{
            padding-bottom: 8px;
            border-bottom: 3px solid #ff6363;
        }
    }
  
    .line{
        height: 6px;
        width:100%;
        background-color: #f4f4f4;
    }
.van-loading{
    margin-top: 30px;
    text-align: center;
}
</style>