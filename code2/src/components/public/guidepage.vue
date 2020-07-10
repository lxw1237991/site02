<template>
    <div>
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets//img/guidepage/yin1.png" alt="">
                    <h3>朴素首页，探索好物</h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/guidepage/yin2.png" alt="">
                    <h3>详情分类，发现更多
                    </h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/guidepage/yin3.png" alt="">
                    <h3>简洁页面，简单好用</h3>
                    <van-button plain type="info" size="small" to="/home/recommend">去探索</van-button>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        created(){
            document.body.style.backgroundColor="#d7edfd";
        },
        beforeDestroy(){
            document.body.style.backgroundColor="#fff";
        },
        mounted(){
            new Swiper('.guidepagecontainer', {
                // direction: 'vertical',
                pagination: {
                    el: '.guidepagepagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
.swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width:100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        img{
            margin: 80px auto 0 auto;
            width:240px;
            height:auto;
            border-radius: 20px;
            box-shadow: 0px 1px 1px 1px #ccc;
        }
        h3{
            margin-top: 20px;
            font-size: 20px;
            color:#404040;
        }
        button{
            margin-top: 30px;
            width: 100px;
            border-radius: 30px;
        }
    }
</style>