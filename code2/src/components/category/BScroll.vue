<template>
    <div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2>{{item.name}}</h2>
                        <ul>
                            <li v-for="(ite,i) in item.content" @click="got" :key="i">
                                <img :src="ite.image" alt="">
                                <p>{{ite.name}}</p>
                                <!-- <div>{{item.name + num}}</div> -->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'

    export default {
            data(){
                return {  
                    msg:'欢迎来到vue.js学习',
                    left:["推荐","手机","声学","配件","生活"],
                    right:[
                        {name:"推荐",
                            content:[
                                
                            ]
                        },
                        {name:"手机",
                            content:[
                            
                            ]
                        },
                        {name:"声学",
                            content:[
                            
                            ]},
                        {name:"配件",
                            content:[
                                
                            ]},
                        {name:"生活",
                            content:[
                                
                            ]},
                    ],
                    listHeight:[],//记录高度
                    scrollY:0,
                    recomlist:[],
                    phonelist:[],
                    musiclist:[],
                    partslist:[],
                    lifelist:[],
                }
            },
            // props:["left","right"],
            methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }

                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);

                        // this.currentIndex = index; //左侧效果
                    }
                },
                got(index){
                    let num = index;
                    console.log(num);
                    this.$router.push("/details");
                }
            },
            created(){
                this.$axios.get("recommend").then(res=>{
                    this.recomlist = res.data.recommend;
                    this.right[0].content = this.recomlist;
                })
                this.$axios.get("phoneList").then(res=>{
                    this.phonelist = res.data.phoneList;
                    this.right[1].content = this.phonelist;
                   
                })
                this.$axios.get("musicList").then(res=>{
                     this.musiclist = res.data.musicList;
                    this.right[2].content = this.musiclist;
                })
                this.$axios.get("partsList").then(res=>{
                    this.partslist = res.data.partsList;
                    this.right[3].content = this.partslist;
                })
                this.$axios.get("lifeList").then(res=>{
                    this.lifelist = res.data.lifeList;
                    this.right[4].content = this.lifelist;
                })
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
                const options = {
                    scrollY: true, 
                    scrollX: false,
                    mouseWheel: true,
                    click: true,
                    taps: true
                }
                this.scroll = new BScroll('.right-item-hook', options)
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }

                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        ul{
            list-style: none;
        }
        .head{
            width: 100%;
            height: 2.5rem;
            line-height: 50px;
            text-align: center;
            background-color: #ffffff;
            .left{
                background-color: azure;
                width: 25%;
                float: left;
            }
            .right{
                float: left;
                // height: 2.5rem;
                width: 75%;
                background-color: azure;
            }
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 0px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            background-color: #f9f9f9;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            background-color: #ffffff;
            color:#008cff;
            font-weight: bold;
        }
        .left li span{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            background-color: #ffffff;
        }
        .right .right-item-hook{
            height: 1000px;
            text-align: center;
            // border: 1px solid yellow;
            h2{
                font-size: 16px;
                margin-top: 20px;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    flex: 0 0 29%;
                    margin: 10px 6px;
                    text-align: center;
                    img{
                        height: 80px;
                        width: auto;
                        margin: 0 auto;
                    }
                }
            }
        }
</style>