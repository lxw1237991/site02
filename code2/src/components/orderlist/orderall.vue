<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-for="(value,key) in item.goodsList" :key="key">
                
                <div class="supplier">
                    供应商：<span>魅族</span>
                    <span class="typepay">{{typeList[item.type]}}</span>
                </div>
                <!-- 商品卡片 -->
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    :desc="value.descrition"
                    :title="value.name"
                    :thumb="value.image"
                    />
                    <div class="content">
                        合计：<span>{{value.price*value.num}}.00</span>（免运费）
                    </div>
                    <div class="orderfooter">
                        <!-- 待支付 -->
                        <div v-if="item.type == 1">
                            <van-button size="mini" @click="del(index)">取消订单</van-button>
                            <van-button size="mini" type="danger" @click="pay(index)">立即付款</van-button>
                        </div>
                        <!-- 待收货 -->
                        <div v-else-if="item.type == 2">
                            <van-button size="mini"  type="warning">退款申请</van-button>
                            <van-button size="mini"  type="info" @click="geted(index)">已收货</van-button>
                        </div>
                        <!-- 已完成 -->
                        <div v-else-if="item.type == 3">
                            <van-button size="mini" @click="evaluate(value)">商品评价</van-button>
                        </div>
                    </div>
            </div>

            
            
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:"",
            }
        },
        methods:{
            pay(index){
                this.lists[index].type="2";
            },
            geted(index){
                this.lists[index].type="3";
            },
            del(index){
                this.lists.splice(index,1);
            },
            evaluate(value){
                this.$router.push({path:"/evaluate",query:{item:value}});
            }
        },
        created(){
            this.lists = this.$store.state.order.lists;
            this.typeList = this.$store.state.order.typeList;
        }
    }
</script>

<style lang="scss" scoped>
.orderlists{
    margin-top: 10px;
        background: #fff;
    .van-card{
        background: #fff;
    }
    .orderfooter{
        text-align: right;
        padding: 0px 16px 10px 16px;
    }
}
.supplier{
    padding-left: 10px;
    height: 34px;
    width: 100%;
    line-height: 34px;
    font-size: 14px;
    color: #999999;
    border-bottom: 1px solid #f4f4f4;
    box-sizing: border-box;
    position: relative;
    span{
        color: #000;
    }
    .typepay{
        position: absolute;
        right: 10px;
        color: red;
    }
}
.content{
    height: 30px;
    line-height: 30px;
    color: black;
    text-align: right;
    padding-right: 10px;
    border-top:1px solid #f4f4f4;
    border-bottom:1px solid #f4f4f4;
    span{
        color: red;
    }
}
.line{
    width: 100%;
    height: 6px;
    background-color: #eeeeee;
}
</style>