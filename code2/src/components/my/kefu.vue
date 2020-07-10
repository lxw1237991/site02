<template>
    <div>
        <van-nav-bar title="联系客服">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
        </van-nav-bar>

        <img src="../../assets/img/kefu.png" alt="">

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