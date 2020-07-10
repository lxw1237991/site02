<template>
    <div>
        <van-nav-bar title="购物车">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
            <template #right>
                <van-icon name="search" size="24" @click="search"/>
            </template>
        </van-nav-bar>

        <!-- 商品列表 -->
        <van-row class="carlist" v-for="(item,index) in lists" :key="index">
            <van-col span="2" class="check">
                <van-checkbox v-model="checked" @click="inputselect(index)"></van-checkbox>
                <!-- <input class="ch" type="checkbox" :checked="item.isSelect" @click="inputselect(index)"> -->
            </van-col>
            <van-col span="8" class="img">
                <div>
                    <img :src="item.image">
                </div>
            </van-col>
            <van-col span="10">
                <p class="name">{{item.name}}</p>
                <p >{{item.descrition}}</p>
                <p class="price">售价：{{item.price}}</p>
                <van-stepper v-model="item.num" />
            </van-col>
            <van-col span="4" class="del">
                <span class="iconfont icon-shanchu" @click="del(index)"></span>
            </van-col>
        </van-row>

         <!-- 数组长度为零，默认隐藏 -->
        <div v-show="!($store.state.cart.lists.length)" >
            <p class="goodsinfo">没有商品，请添加商品</p>
            <div class="goodslist">
                <span @click="home">去逛逛</span>
            </div>
            <div class="goodslisttitle">
                <span>为你推荐</span>
            </div>
            <recom></recom>
        </div>

        <van-submit-bar v-show="$store.state.cart.lists.length" :price="total * 100" button-text="提交订单" @submit="$router.push('/order')">
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>

        <vantabber></vantabber>

    </div>
</template>

<script>
import vantabber from "../components/public/vantabbar.vue"
import recom from "../components/public/recom"
    export default {
        data(){
            return{
                checked:true,
                total:0,
                lists:[
                    
                ]
            }
        },
        methods:{
            search(){
                this.$router.push('/search');
            },
            del(index){
                this.lists.splice(index,1);
            },
            home(){
                this.$router.push("/home/recommend")
            },
            got(index){
                let num = index;
                console.log(num);
                this.$router.push({path:"/details",query:{id:num}});
            },
            sum(){
                this.total = this.lists.reduce((total,item)=>{
                    if(!item.isSelect) return total;
                    return total + parseInt(item.price) * parseInt(item.num);
                },0)
            },

            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked =!this.checked;
            },

            checkboxclick(){
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },

            inputselect(index){
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxlick();
                this.sum();
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            // this.sum();
            // this.$store.state.vanTabbar = true;
            this.$store.state.active = 2;
        },
        beforeMount(){
            this.sum();
        },
        beforeUpdate(){
            this.sum();
        },
        components:{
            vantabber,
            recom,
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
.carlist{
    background-color: #fff;
    margin-bottom: 10px;
    .check{
        margin-left: 10px;
        margin-top: 50px;
        
    }
    .img{
        height: 90px;
        width:90px;
        margin: 15px 10px;
        border: 1px solid #eeeeee;
        box-sizing: border-box;
    }
    .name{
        margin-top: 20px;
        font-size: 14px;
    }
    .price{
        color: #999999;
    }
    .del{
        position: relative;
        .icon-shanchu{
            position: absolute;
            top: 70px;
            left: 30px;
            font-size: 20px;
            color: #c1c1c1;
        }
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
.list{
        // padding-top: 10px;
        padding-left: 6px;
        padding-right: 6px;
        background-color: #f4f4f4;
        // margin-bottom: 10px;
        // height: 400px;
        .content{
            margin-top: 8px;
            height: 280px;
            width: 100%;
            .left{
                // height: 200px;
                width: 49%;
                background-color: #fff;
                float: left;
            }
            .line-y{
                height: 100%;
                width: 2%;
                background-color: #f4f4f4;
                float: left;
            }
            .right{
                // height: 210px;
                width: 49%;
                background-color: #fff;
                float: left;
            }
        }
    }
    .txt{
        text-align: center;
        padding: 10px 0;
        background-color: #fff;
        p{
            margin-bottom: 8px;
        }
        .p1{
            font-size: 14px;
            font-weight: bold;
            color: #000;
        }
        .p2{
            color: #999999;
        }
        .p3{
            color: #cc0000;
            font-size: 14px;
        }
    }
.van-submit-bar{
    margin-bottom: 60px;
}
</style>