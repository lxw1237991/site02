<template>
    <div>
        <div class="heade">
            <img src="../../assets/img/life.jpg" alt="" @click="got(0)">
        </div>
        <div class="line"></div>
        <van-row>
            <van-col span="12"><img src="../../assets/img/life/main1.jpg" alt=""></van-col>
            <van-col span="12"><img src="../../assets/img/life/main2.jpg" alt=""></van-col>
        </van-row>
        <div class="line"></div>
        <!-- 商品列表 -->
        <div class="lists">
            <ul>
                <li v-for="(item,index) in lists" :key="index" @click="got(index)">
                    <div>
                        <img :src="item.image" alt="">
                    </div>
                    <div class="txt">
                        <p class="p1">{{item.name}}</p>
                        <p class="p2">{{item.disc}}</p>
                        <p class="p3">¥{{item.price}}</p>
                    </div>
                </li>
            </ul>
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
            got(index){
                let num = index;
                console.log(num);
                this.$router.push({path:"/details",query:{goods:this.lists[index]}});
            }
        },
        created(){
            this.$axios.get("lifeList").then(res=>{
                this.lists = res.data.lifeList
            })
        },
    }
</script>

<style lang="scss" scoped>
.heade{
    margin-top: 10px;
}
.lists{
    margin-top: 30px;
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            flex:0 0 50%;
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
                    display: block; 
                    white-space: nowrap;
                    width: 180px; 
                    overflow: hidden; 
                    text-overflow:ellipsis;
                    margin: 0 auto;
                }
                .p3{
                    color: #cc0000;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>