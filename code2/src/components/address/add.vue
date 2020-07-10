<template>
    <div>
        <div class="head">
            <van-row>
                <van-col span="4" @click="$router.go(-1)"><span class="iconfont icon-fanhui"></span></van-col>
                <van-col span="16">新增地址</van-col>
                <van-col span="6"></van-col>
            </van-row>
        </div>
        <van-address-edit
            :area-list="areaList"
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
        />
    </div>
</template>

<script>
    import areaList from "./erea.js";
    export default {
        data() {
            return {
            areaList,
            searchResult: [],
            };
        },
        methods: {
            onSave({name,tel,province,city,county,areaCode,addressDetail}) {
                this.$store.commit("address/add",{
                    name,
                    tel,
                    address:province+city+county+addressDetail,
                    province,
                    city,
                    county,
                    areaCode,
                    addressDetail
                });
                this.$router.go(-1);
            },
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
    };
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
</style>