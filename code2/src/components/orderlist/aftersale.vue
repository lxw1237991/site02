<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-for="(value,key) in item.goodsList" :key="key">
                
                <div class="supplier" v-if="item.type == 3">
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
                    v-if="item.type == 3"
                    />
                    <div class="content" v-if="item.type == 3">
                        合计：<span>{{value.price*value.num}}</span>（免运费）
                    </div>
                    <div class="orderfooter">
                <!-- 已完成 -->
                <div v-if="item.type == 3">
                    <van-button size="mini" @click="evaluate(value)">商品评价</van-button>
                </div>
                
            </div>
            </div>

            
            
            <div class="line" v-if="item.type ==3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[],
            }
        },
        methods:{
            evaluate(value){
                this.$router.push({path:"/evaluate",query:{item:value}});
                // this.$router.push({path:"/evaluate"})
            }
        },
        created(){
            this.lists = this.$store.state.order.lists;
            this.typeList = this.$store.state.order.typeList;
            // console.log(this.typeList);
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