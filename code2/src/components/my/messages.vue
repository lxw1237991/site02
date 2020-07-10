<template>
    <div>
        <van-nav-bar title="消息">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
        </van-nav-bar>

        <van-tabs v-model="active" color="#00bfff">
            <van-tab title="活动消息"><h2 class="p1">暂无活动消息</h2></van-tab>
            <van-tab title="交易消息"><h2 class="p1">暂无交易消息</h2></van-tab>
            <van-tab title="系统消息"><h2 class="p1">暂无系统消息</h2></van-tab>
        </van-tabs>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                active:0
            }
        },
        methods:{
        },
        created(){
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
.p1{
    display: block;
    height: 30px;
    width: 140px;
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -50px;
}
.line{
    width: 100%;
    height: 5px;
    background-color: fff;
}
</style>