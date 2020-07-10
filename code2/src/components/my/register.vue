<template>
    <div>
        <van-nav-bar title="注册">
            <template #left>
                <van-icon name="arrow-left" size="24" @click="$router.push('/my')"/>
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
                v-model="password1"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请输入密码' }]"
            />
            <van-field
                v-model="password2"
                type="password"
                name="密码"
                label="密码"
                placeholder="请再次输入密码"
                :rules="[{ required: true, message: '请再次输入密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
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
                password1: '',
                password2: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                this.$axios.get("register",{params}).then((res)=>{
                    console.log(res);
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                _this.$router.push("/login");
                            }
                        });
                    }else{
                        Toast("注册失败");
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
};
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