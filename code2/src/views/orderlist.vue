<template>
    <div>
        <div class="head">
            <van-row>
                <van-col span="4" @click="$router.push('/my')"><span class="iconfont icon-fanhui"></span></van-col>
                <van-col span="16">我的订单</van-col>
                <van-col span="6"></van-col>
            </van-row>
        </div>
        
        <!-- <div class="main">
            <ul>
                <li v-for="(item,i) in tabslist" @click="num=i" :class="{active:num==i}" :key="i">
                    <span @click="add(i)">{{item}}</span>
                </li>
            </ul>
        </div> -->
        <van-tabs v-model="active" color="#00c3f5">
            <van-tab title="全部" to="/orderlist/orderall"></van-tab>
            <van-tab title="待付款" to="/orderlist/notpay"></van-tab>
            <van-tab title="待收货" to="/orderlist/notreceipt"></van-tab>
            <van-tab title="退款/售后" to="/orderlist/aftersale"></van-tab>
        </van-tabs>
        <div class="line"></div>

        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                active: 0,
                num:0,
                tabslist:["全部","待付款","待收货","退款/售后"],
                routerlist:["/orderlist/orderall","/orderlist/notpay","/orderlist/notreceipt","/orderlist/aftersale",]
            }
        },
        methods:{
            add(index){
                this.$router.push(this.routerlist[index]);
            }
        },
    }
</script>

<style lang="scss" scoped>
.head{
    height: 50px;
    width: 100%;
    padding-top: 10px;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;;
    .icon-fanhui{
        font-size: 24px;
    }
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
.line{
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
}
</style>