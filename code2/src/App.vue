<template>
  <div id="app">
    <!-- 导航 -->
    <!-- <van-tabbar id="vanTabbar" v-model="$store.state.active"  v-show="$store.state.vanTabbar">
      <van-tabbar-item to="/home/recommend" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar> -->
    <!-- 路由显示位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
      return {
      }
    },
}
</script>

<style lang="scss">
#app{
  padding-bottom: 50px;
}
#vanTabbar{
  z-index: 999;
  background-color: #fff;
}
</style>
