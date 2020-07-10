<template>
    <div>
        <van-nav-bar title="收藏">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
        </van-nav-bar>

        <div class="likelists" v-for="(item,index) in lists" :key="index">
        <!-- 商品卡片 -->
            <div @click="got(0)">
                <van-card
                    :price="item.price"
                    :desc="item.descrition"
                    :title="item.name"
                    :thumb="item.image"
                    />
            </div>
            <span class="iconfont icon-shanchu" @click="del(index)"></span>
            <div class="line"></div>
        </div>

            

        <div v-show="!($store.state.my.lists.length)" >
            <p class="goodsinfo">没有商品，请添加商品</p>
            <div class="goodslist">
                <span @click="$router.push('/home/recommend')">去逛逛</span>
            </div>
            <div class="goodslisttitle">
                <span>为你推荐</span>
            </div>
            <recom></recom>
        </div>
    </div>
</template>

<script>
import recom from '../public/recom';
    export default {
        data(){
            return{
                lists:[],
            }
        },
        methods:{
            del(index){
                this.lists.splice(index,1);
            },
            got(index){
                let num = index;
                console.log(num);
                this.$router.push({path:"/details",query:{id:num}});
            }
        },
        components:{
            recom,
        },
        created(){
            this.lists = this.$store.state.my.lists;
            this.$store.state.vanTabbar = false;
        },
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        }
    }
</script>

<style lang="scss" scoped>
.van-nav-bar{
    height: 50px;
    background-color: #fff;
    color: black;
    .van-icon{
        color: black;
    }
}
.likelists{
    position: relative;
    .icon-shanchu{
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
.goodsinfo{
    font-size: 16px;
    text-align: center;
    margin-top: 50px;
    
}
.goodslist{
    width: 100%;
    height: 50px;
    position: relative;
    span{
        display: block;
        width: 60px;
        height: 24px;
        line-height: 24px;
        font-weight: bold;
        text-align: center;
        border: 2px solid dodgerblue;
        color:dodgerblue;
        border-radius: 30px;
        position: absolute;
        top: 30px;
        left: 50%;
        margin-left: -30px;
    }
}
.goodslisttitle{
    font-size: 16px;
    text-align: center;
    color: black;
    margin-top: 120px;
}
.line{
    width: 100%;
    height: 5px;
    background-color: fff;
}
</style>