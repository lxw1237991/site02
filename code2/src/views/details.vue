<template>
    <div>
        <div class="top">
            <!-- 轮播图 -->
            <div class="swiper-container homeSlideContainer">
                <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in lists[0].images[0]" :key="index">
                    <img :src="item" alt />
                </div>
                </div>
                <div class="swiper-pagination homeSlidePagination"></div>
            </div>
            <div class="back" @click="$router.go(-1)">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <div class="cart" @click="cart">
                <span class="iconfont icon-gouwuche"></span>
            </div>
        </div>

        <div class="panel">
            <h1>{{lists[0].name}}</h1>
            <div class="price">￥{{lists[0].price}}</div>
            <div class="content">
                <font color="#ff4a00">{{lists[0].reduct}}</font>
            </div>
        </div>

        <div class="line"></div>

        <van-cell title="活动" is-link value="另加29元起，即可换..."/>

        <div class="select">
            <span class="exit"></span>
            <p>内存容量</p>
            <div class="can">
                <span :class="{active:isselect==1}" @click="isselect=1">8+128GB</span>
                <span :class="{active:isselect==2}" @click="isselect=2">8+256GB</span>
            </div>
        </div>

        <div class="line"></div>

        <div class="main">
            <span>✔花呗分期</span>
            <span>✔魅族发货提供售后</span>
            <span>✔顺丰发货</span>
            <p>✔7天无理由退货</p>
        </div>
        <div class="line"></div>
        <div class="box">图文详情</div>
        <van-goods-action>
            <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" :badge="num"/>
            <van-goods-action-button color="#e03d3d"  @click="add(lists[0])" type="warning" text="加入购物车" />
            <van-goods-action-button color="#008cff" type="danger" text="立即购买" @click="buy(lists[0])"/>
        </van-goods-action>

        <div class="footer">
            <img src="../assets/img/mei17/mei17prodre.jpg" alt="">
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import { Toast } from 'vant';
const {mapState} = createNamespacedHelpers("cart");
import Swiper from "swiper";
    export default {
        data(){
            return{    
                lists:[
                    {
                    id:1,
                    name:"魅族 17",
                    price:"2599",
                    num:1,
                    color:["十七度灰","梦幻独角兽"],
                    model:["8+128GB","12+256GB"],
                    disc:"Flyme8周年 6.23-6.27 每日前100名限量赠魅族HIFI解码耳放】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 27W 无线超充 + 4500mAh 超大电池",
                    image:"https://fms.res.meizu.com/dms/2020/06/29/4a4e236f-0b08-4de1-a017-a239c34ca296.png",
                    images:[
                        [
                            "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAfxBJAAlp3c1WdI4793.png680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWANhNKAAVfQwmOan4751.png680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/07/C3/Cgbj0F6zwMWAbCieAAZp0FbICJA179.png680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6zwMWASoKjAAKhvZAJDTU118.png680x680.jpg",
                            ],
                        [
                            "https://openfile.meizu.com/group1/M00/08/0B/Cgbj0V7gsjWAPF5rAAsOWBHfhMc030.png680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/07/F3/Cgbj0F7eH2SAdKD5AAHWtl1T9Ws790.jpg680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/08/09/Cgbj0V7gLWKAKFcnAAFyldULfZ0173.jpg680x680.jpg",
                            "https://openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwM6AdEXLAALMpD5v_iE443.png680x680.jpg",
                            ],
                        ],
                    },
                ],
                count:"",    
                isselect:1,
                islike:true,
            }
        },
        methods:{
            onClickIcon() {
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.color = "#ff5000";
                if(this.islike){
                    Toast('收藏成功');
                    this.islike=false;
                    this.$store.commit("my/add",this.lists[0]);
                }else{
                    Toast('取消收藏')
                    this.islike=true;
                    this.$store.commit("my/del");
                }
            },
            cart(){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$router.push('/cart');
            },
            showTag(){
                this.isselect=2;
            },
            // 直接调用vuex里面方法
            // ...mapMutations(["add"]),
            // ...mapMutations(["buy"])
            add(item){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$store.commit("cart/add",item);
                this.$store.state.vanTabbar = false;
            },
            buy(item){
                if(this.$store.state.username==null){
                    Toast("请登录");
                    return;
                }
                this.$store.commit("cart/buy",item);
                this.$router.push("/order");
                this.$store.state.vanTabbar = false;
            }
        },
        computed:{
            ...mapState({
                num:state=>state.num
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
        created(){
            let goods = this.$route.query.goods
            if(goods){
            this.lists = [goods];
            }
            if(this.lists[0].color==1){
            this.selectcolor = this.lists[0].color[0]
            }
            if(this.lists[0].model==1){
            this.selectmodel = this.lists[0].model[0]
            }
            this.$store.commit("my/addone",this.lists[0]);
        },
    }
</script>

<style lang="scss" scoped>
.top{
    position: relative;
    .back{
        position: absolute;
        left: 10px;
        top: 10px;
        z-index: 1;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color:black;
        opacity: 0.9;
        border-radius: 50%;
        .icon-fanhui{
            color: #fff;
        }
    }
    .cart{
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color:black;
        opacity: 0.9;
        border-radius: 50%;
        .icon-gouwuche{
            color: #fff;
        }
    }
}
.title{
    padding: 0 20px;
    .name{
        font-size: 16px;
        color: #000;
    }
    .present{
        font-size: 12px;
        margin: 10px 0;
    }
    .price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
}

.main{
    height: 40px;
    padding: 10px 0;
    span{
        margin: 4px 10px;
    }
    p{
        margin: 4px 10px;
    }
}
.line{
    height: 4px;
    width: 100%;
    background: #eeeeee;
}


.panel{
        padding: 15px 15px 0px 15px;
        h1{
            font-size: 24px;
        }
        .content{
            font-size:14px;
        }
        .price{
            color:red;
            font-size: 28px;
        }
    }

.main1{
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
.box{
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
}
.select{
    height: 60px;
    width: 100%;
    background-color: white;
    p{
        margin-left: 16px;
        margin-top: 6px;
        font-size: 12px;
    }
    .can{
        height: 40px;
        width: 100%;
        line-height: 40px;
        margin-top: 10px;
        span{
            display: block;
            float: left;
            width: 100px;
            height: 24px;
            border: 2px solid #008cff;
            box-sizing: border-box;
            text-align: center;
            line-height: 24px;
            margin-left: 10px;
            border-radius: 10px;
        }
        span.active{
            background-color: skyblue;
            color: #008cff;
        }
    }
    .footer{
        height: 30px;
        width: 100%;
        span{
            display: block;
            float: left;
            width: 50%;
            height: 24px;
            text-align: center;
        }
    }
}
</style>