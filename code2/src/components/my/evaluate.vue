<template>
    <div>
        <van-nav-bar title="评价">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
        </van-nav-bar>

        <div class="main">
            <van-card
                :desc="lists.descrition"
                :title="lists.name"
                :thumb="lists.img"
                />
            <p>从多个角度评价宝贝</p>
            <input type="text" v-model="text">
        </div>

        <div class="line"></div>

        <div class="bottom">
            <div>描述相符<van-rate v-model="value1" /></div>
            <div>物流服务<van-rate v-model="value2" /></div>
            <div>服务态度<van-rate v-model="value3" /></div>
        </div>

        <div class="btn">
            <span @click="add">提交</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[],
                value1:3,
                value2:3,
                value3:3,
                text:"",
            }
        },
        methods:{
           add(){
               this.$router.push({path:"/orderlist/orderall"})
           }
        },
        created(){
            this.lists=this.$route.query.item;
            this.$store.state.vanTabbar = false;
        },
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
.main{
    text-align: center;
    p{
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
        color: black;
    }
    input{
        border: 1px solid #ccc;
        width: 300px;
        height: 50px;
        border-radius: 20px;
        padding-left: 10px;
    }
}
.bottom{
    width: 100%;
    height: 150px;
    padding-left: 30px;
    padding-top: 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: black;
    div{
        margin: 5px 0;
    }
    .van-rate{
        margin-left: 20px;
        vertical-align: bottom;
    }
}
.btn{
    width:100%;
    height: 100px;
    span{
        display: block;
        width: 200px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #00bfff;
        color: #fff;
        font-size: 16px;
        margin: 0 auto;
    }
}
.line{
    width: 100%;
    height: 5px;
    background-color: fff;
}
</style>