<template>
    <div>
        <van-row class="searchNav">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-fanhui"></span></van-col>
            <van-col span="18">
                <div class="search">
                    <span class="iconfont icon-sousuo"></span>
                    <input type="text" placeholder="搜索" v-model="text" @input="search">
                </div>
            </van-col>
            <van-col span="3"><span class="iconfont icon-sousuo"></span></van-col>

            <!-- <div class="sear">
                <ul>
                    <li>{{list}}</li>
                </ul>
            </div> -->
        </van-row>
        <div class="content">
            <p>热门搜索</p>
            <div class="box">
                <span  @click="got(1)">魅族17Pro</span>
                <span  @click="got(1)">魅族POP2</span>
                <span  @click="got(1)">魅族帆布袋</span>
            </div>
        </div>

        <div class="line"></div>

        <div class="history">
            <div class="txt">
                <p>历史记录</p>
            </div>
            <div class="content">
                <p>暂无历史记录</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:["手机","电视","配件","生活"],
                list:[],
                text:"",
            }
        },
        methods:{
            got(index){
                let num = index;
                console.log(num);
                this.$router.push({path:"/details",query:{id:num}});
            },
            search(){
                let txt = this.text;
                let arr = this.lists;
                let arr2 = arr.find(item=>item == txt);
                this.list = arr2;
            }
        },
    }
</script>

<style lang="scss" scoped>
.searchNav{
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    .search{
        width: 100%;
        height: 30px;
        background-color: #eeeeee;
        border-radius: 20px;
        line-height: 30px;
        margin-top: 6px;
        span{
            float: left;
            font-size: 18px;
            margin-left: 10px;
        }
        input{
            background: #eeeeee;
            height: 30px;
            display: block;
            padding-left: 10px;
        }
    }
    .sear{
        width: 260px;
        // height: 40px;
        background: #eeeeee;
        position: absolute;
        top: 36px;
        left: 50%;
        margin-left: -130px;
        padding: 4px 0;
        // display: none;
        li{
            background: #ccc;
            margin-top: 5px;
        }
    }
}
.van-col{
    height: 42px;
    line-height: 42px;
    text-align: center;
    .icon-fanhui{
        font-size: 22px;
        color: #707070;
    }
    .icon-sousuo{
        font-size: 24px;
        color: #707070;
    }
}

.content{
    height: 180px;
    width: 100%;
    p{
        font-size: 16px;
        margin-left: 10px;
        margin-top: 10px;
    }
    .box{
        span{
            display: inline-block;
            height: 30px;
            border: 1px solid #999999;
            line-height: 30px;
            padding: 0 10px;
            margin: 4px 10px;
            border-radius: 20px;
        }
    }
}

.history{
    .txt{
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        p{
            margin: 0 20px;
            border-bottom: 1px solid #eeeeee;
        }
    }
    .content{
        text-align: center;
        p{
            font-size: 14px;
            color: #999999;
        }
    }
}
.line{
    height: 10px;
    width:100%;
    background-color: #eeeeee;
}

</style>