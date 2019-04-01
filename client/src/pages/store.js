import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token:'',
    wxinfo:{},
    userinfo:{},
    MemberInfo:{},//会员信息，报班了停车费信息，优惠券信息，月租车信息。因为停车费涉及页面较多，添加一个全局
    currentCity:{"city":"芜湖","code":"101220301","comkey":"0","eventid":"7_18-3"},
    myCar:[],//车主车辆
    visitCar:[],//访客车辆
  },
  mutations:{
      setToken:function(state,rem){
        state.token=rem
      },
      setwxinfo:function(state,rem){
        state.wxinfo=rem
      },
      // 设置用户信息
      setUserinfo:function(state,rem){
        state.userinfo=rem
      },
      // 设置车辆默认值
      setCar:function(state,rem){
        state.myCar=rem
      },
      // 车主添加车辆
      addCar:function(state,rem){
        state.myCar.push(rem)
      },
      //访客车辆添加默认信息
      setVisitCar:function(state,rem){
        console.log(rem)
        state.visitCar=rem
      },
      // 设置会员信息
      setMemberInfo:function(state,rem){
        state.MemberInfo=rem
      }, 
  }
});
export default store
