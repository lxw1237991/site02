<template>
    <div>
        <van-nav-bar title="登录">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.go(-1)"/>
            </template>
        </van-nav-bar>

        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请输入用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                // let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';

                this.$axios.get("login",{params}).then((res)=>{
                    console.log(res);
                    if(res.data == "200"){
                        Toast({
                            message:"登录成功",
                            onOpened(){
                                _this.$store.state.username = _this.username;
                                _this.$router.push("/my");
                            }
                        });
                    }else{
                        Toast("登录失败");
                    }
                })
            },
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
.van-form{
    margin-top: 50px;
    .van-field{
        margin: 30px 0;
    }
}
</style>