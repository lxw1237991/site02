<template>
    <div>
        <div class="head">
            <van-search placeholder="魅族17Pro" @click="search"/>
        </div>

        <!-- 分类列表 -->
        <bscroll></bscroll>

        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll" 
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        methods:{
            back(){
                this.$router.push('/home');
            },
            search(){
                this.$router.push('/search');
            }
        },
        components:{
            bscroll,
            vantabber
        },
        created(){
            this.$store.state.active = 1;
        }
        
    }
</script>

<style lang="scss" scoped>

</style>