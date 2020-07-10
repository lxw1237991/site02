import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from "./cart";
import address from "./address";
import order from "./order";
import my from "./my";
import details from "./details";
import footprint from "./footprint";

export default new Vuex.Store({
  state: {
    got:"",
    username:null, //用户名
    active:0,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,     //购物车
    address,  //地址
    order,    //订单
    my,       //我的
    details,  //详情页
    footprint,//浏览记录
  }
})
