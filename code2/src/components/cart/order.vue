<template>
    <div>
        <div class="head">
            <van-row>
                <van-col span="4" @click="cartVue"><span class="iconfont icon-fanhui"></span></van-col>
                <van-col span="16">结算</van-col>
                <van-col span="6"></van-col>
            </van-row>
        </div>

        <!-- 地址 -->
        <div class="contacts" @click="address">
            <div>
                <span class="name">{{name}}</span>
                <span class="phone">{{tel}}</span>
            </div>
            <div class="address">地址：{{addre}}</div>
            <span class="iconfont icon-qianjin"></span>
        </div>

        <div class="line"></div>

        <div class="supplier">
            供应商：<span>魅族</span>
        </div>

        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.descrition"
            :title="item.name"
            :thumb="item.image"
            />
        </div>

        <div class="way">
            配送方式<span>快递配送(运费￥0.00)</span>
        </div>

        <div class="invoice">发票类型<span>电子发票</span></div>
        <div class="invoice">发票抬头<span>个人</span></div>

        <div class="title">抬头全称<span>李四</span></div>
        <div class="remarks">买家留言<span>备注信息</span></div>

        <div class="total">共1件商品</div>

        <div class="line"></div>

        <div class="coupon">优惠劵<span class="iconfont icon-qianjin"></span></div>

        <div class="line"></div>

        <!-- <div class="payway">
            <p>选择支付方式</p>
            <van-radio-group>
                <van-cell-group>
                    <van-cell title="支付宝支付" icon="location-o" clickable @click="radio = '1'">
                        <template #right-icon>
                            <van-radio name="1" />
                        </template>
                    </van-cell>
                    <van-cell title="微信支付" icon="location-o" clickable @click="radio = '2'">
                        <template #right-icon>
                            <van-radio name="2" />
                        </template>
                    </van-cell>
                    <van-cell title="Flyme支付" icon="location-o" clickable @click="radio = '3'">
                        <template #right-icon>
                            <van-radio name="3" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div> -->
        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单"  @submit="onsubmit"/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:"",
                tel:"",
                addre:"",
                price:"",
            }
        },
        methods:{
            
            sum(){
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num);
                },0) //总价格默认值0
            },

            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },

            cartVue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1
                }
                this.$store.commit("order/add",order);
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2
                }
                this.$store.commit("order/add",order);
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderlist/orderall")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        
        created(){
            this.$store.state.vanTabbar = false;

            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.addre = data.address;
                this.price = data.price;
            }
            
            this.lists = this.$store.state.cart.lists;
            this.sum();
        },
    }
</script>

<style lang="scss" scoped>
.head{
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    .icon-fanhui{
        font-size: 24px;
    }
}
.contacts{
    position: relative;
    padding: 4px 10px;
    height:50px;
    .name{
        // float: left;
        color: #000;
        font-size: 14px;
        position: absolute;
        left: 10px;
    }
    .phone{
        color: #000;
        font-size: 14px;
        position: absolute;
        left: 70px;
    }
    .address{
        height: 40px;
        margin-top: 10px;
        font-size: 10px;
        margin-top: 24px;
    }
    .icon-qianjin{
        font-size: 24px;
        position: absolute;
        right: 20px;
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
    span{
        color: #000;
    }
}

.van-card{
    background-color: #fff;
    // border-bottom: 1px solid #f4f4f4;
}

.way{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #999999;
    font-size: 12px;
    box-sizing: border-box;
    span{
        margin-left: 30px;
        color: #000;
    }
}
.invoice{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #999999;
    font-size: 12px;
    box-sizing: border-box;
    span{
        color: #000;
        float: right;
        margin-right: 10px;
    }
}

.title{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #999999;
    font-size: 12px;
    box-sizing: border-box;
    span{
        color: #999999;
        margin-left: 30px;
    }
}
.remarks{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #999999;
    font-size: 12px;
    box-sizing: border-box;
    span{
        color: #cccccc;
        margin-left: 30px;
    }
}
.total{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #000;
    font-size: 12px;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
}

.coupon{
    height: 36px;
    line-height: 36px;
    margin: 0 10px;
    border-top: 1px solid #f4f4f4;
    color: #999999;
    font-size: 12px;
    box-sizing: border-box;
    span{
        float: right;
        margin-right: 10px;
    }
}

.payway{
    p{
        display: block;
        height: 20px;
        width: 100%;
        line-height: 20px;
        background-color: #eeeeee;
        padding-left: 10px;
        box-sizing: border-box;
    }
}
.line{
    width: 100%;
    height: 6px;
    background-color: #eeeeee;
}
</style>