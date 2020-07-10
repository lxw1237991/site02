<template>
    <div>
        <div class="main">
            <div class="box">
                <button @click="goHome">{{num}}<span>跳过</span></button>
            </div>
            <img src="../../assets/img/main01.jpg" alt="">
            <!-- <div class="bottom"></div> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                // 跳转首页
                this.$router.push("/home/recommend");
            }
        },
        created(){
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    this.$router.push("/home/recommend");
                }else{
                    this.num--;
                }
            },1000),
            document.body.style.backgroundColor="#dffeff";
                
            this.$store.state.vanTabbar = false;
        },
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
            document.body.style.backgroundColor="#fff";
            clearInterval(this.cleardata);
        },
    }
</script>

<style lang="scss" scoped>
.main{
    height: 100%;
    // background-color: #dffeff;
    position: relative;
    .box{
        position: absolute;
        top: -10px;
        right: 10px;
        button{
            background-color: skyblue;
            color: #fff;
            width: 60px;
            height: 30px;
            border-radius: 30px;
            border: none;
            span{
                margin-left: 10px;
            }
        }
    }
    img{
        display: block;
        margin-top: 50px;
    }
}
.bottom{
    height: 100%;
    width: 100%;
    background: olive;
}
</style>