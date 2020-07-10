<template>
    <div>
        <div class="head">
            <div class="back" @click="$router.go(-1)">
                <span class="iconfont icon-fanhui"></span>
            </div>
            
            <div class="user">
                <div class="my" v-if="$store.state.username">
                    <div class="box">
                        <img src="../assets/img/user.png" alt="">
                    </div>
                    <p>{{$store.state.username}}</p>
                </div>
                <div class="login" v-else>
                    <div class="box">
                        <img src="../assets/img/user.png" alt="">
                    </div>
                    <p>
                        <router-link to="/login">登录/</router-link>
                        <router-link to="/register">注册</router-link>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="line"></div>

        <div class="order" @click="order">
            我的订单
            <span class="txt">查看全部订单</span>
            <span class="iconfont icon-qianjin"></span>
        </div>



        <van-row class="top">
            <van-col span="8" @click="gotoed(1)">
                <span class="iconfont icon-weibiaoti2fuzhi04"></span>
                <p>待付款</p>
            </van-col>
            <van-col span="8" @click="gotoed(2)">
                <span class="iconfont icon-daishouhuo"></span>
                <p>待收货</p>
            </van-col>
            <van-col span="8" @click="gotoed(3)">
                <span class="iconfont icon-shouhou"></span>
                <p>退款/售后</p>
            </van-col>
        </van-row>

        <div class="line"></div>

        <van-row class="top">
            <van-col span="6" @click="collec">
                <span class="iconfont icon-ziyuanldpi"></span>
                <p>我的收藏</p>
            </van-col>
            <van-col span="6" @click="address" is-link>
                <span class="iconfont icon-dizhi"></span>
                <p>我的地址</p>
            </van-col>
            <van-col span="6" @click="envelopes">
                <span class="iconfont icon-hongbao"></span>
                <p>我的红包</p>
            </van-col>
            <van-col span="6" @click="coupon">
                <span class="iconfont icon-youhuiquan"></span>
                <p>我的优惠券</p>
            </van-col>
        </van-row>

        <div class="line"></div>

        <van-row class="top">
            <van-col span="6" @click="kefu">
                <span class="iconfont icon-tongyong-lianxikefutubiao"></span>
                <p>联系客服</p>
            </van-col>
            <van-col span="6" @click="messages">
                <span class="iconfont icon-tongzhi"></span>
                <p>消息通知</p>
            </van-col>
            <van-col span="6">
                <span class="iconfont icon-pingjia"></span>
                <p>我的评价</p>
            </van-col>
            <van-col span="6" @click="footprint">
                <span class="iconfont icon-zuji"></span>
                <p>浏览足迹</p>
            </van-col>
        </van-row>

        <div class="line"></div>

         <div class="bottom">
            <van-cell @click="notplay" title="M码通道" is-link />
            <van-cell @click="notplay" title="手机号查询订单" is-link />
            <van-cell @click="notplay" title="以旧换新" is-link />
            <van-cell @click="notplay" title="意见反馈" is-link />
        </div>
        <div class="line"></div>
        <div class="line"></div>

        <div class="footer" v-if="$store.state.username">
            <span @click="$store.state.username=''">退出登录</span>
        </div>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
import { Toast } from 'vant'
import vantabber from "../components/public/vantabbar.vue"
    export default {
        data(){
            return{
                active: 2,
            }
        },
        components:{
            vantabber
        },
        methods:{
            address(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            order(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/orderlist/orderall')
            },
            collec(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/collec')
            },
            coupon(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/coupon')
            },
            envelopes(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/envelopes')
            },
            kefu(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/kefu')
            },
            messages(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/messages')
            },
            footprint(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/footprint');
            },
            gotoed(index){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                if(index==1){
                    this.$router.push('/orderlist/notpay')
                }else if(index==2){
                    this.$router.push('/orderlist/notreceipt')
                }else if(index==3){
                    this.$router.push('/orderlist/aftersale')
                }
            },
            notplay(){
                Toast("敬请期待");
            }
        },
        created(){
            this.$store.state.active = 3;
        },
    }
</script>

<style lang="scss" scoped>
.head{
    height: 150px;
    width:100%;
    background: url(../assets/img/my01.jpg) no-repeat;
    position: relative;
    .user{
        .box{
            width: 82px;
            height: 82px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -51px;
            margin-left: -41px;
            img{
                width: 78px;
                height: 78px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -39px;
                margin-left: -39px;
            }
        }
        p{
            display: block;
            width:120px;
            height: 20px;
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            margin-top: 34px;
            margin-left: -60px;
            a{
                color: #fff;
            }
        }
    }
    .back{
        color: #fff;
        position: absolute;
        top: 10px;
        left: 10px;
        .icon-fanhui{
            font-size: 26px;
        }
    }
    .talk{
        color: #fff;
        position: absolute;
        top: 10px;
        right: 10px;
        .icon-liaotian{
            font-size: 26px;
        }
    }
}
.order{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 20px;
    .txt{
        font-size: 12px;
        margin-left: 50%;
        color: #999999;
    }
}
.top{
    background-color: #fff;
    border-top: 1px solid #eeeeee;
    padding-bottom: 10px;
    .van-col{
        text-align: center;
        .iconfont{
            font-size: 32px;
            color: #ababab;
        }
        .icon-ziyuanldpi{
            color: #f0a151;
        }
        .icon-dizhi{
            color: #00ace5;
        }
        .icon-hongbao{
            color: #ef5d64;
        }
        .icon-youhuiquan{
            color: #f19f48;
        }
        .icon-tongyong-lianxikefutubiao{
            color: pink;
        }
        .icon-tongzhi{
            color: darkseagreen;
        }
        .icon-pingjia{
            color: darkred;
        }
        .icon-zuji{
            color: darkorange;
        }
    }
    
}
.van-cell{
    height: 50px;
}
.footer{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    position: relative;
    z-index: 100;
    // background-color: springgreen;
    span{
        display: block;
        width: 250px;
        height: 30px;
        line-height: 30px;
        background: deepskyblue;
        color: white;
        border-radius: 10px;
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: -125px;
    }
}
.line{
    height: 6px;
    width: 100%;
    background-color: #f5f5f5;
}

</style>