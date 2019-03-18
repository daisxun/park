// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      isActive:true,
      my: [{tick:"20元优惠券",deal:"无期限",num:10},
           {tick:"200元优惠券",deal:"无期限",num:10}],
      getcop:[{tick:"10元优惠券",deal:"无期限",num:10},
              {tick:"20元优惠券",deal:"无期限",num:10},
              {tick:"30元优惠券",deal:"无期限",num:10},
              {tick:"50元优惠券",deal:"无期限",num:10},
              {tick:"100元优惠券",deal:"无期限",num:10},
              {tick:"200元优惠券",deal:"无期限",num:10},
              {tick:"300元优惠券",deal:"无期限",num:10},
              {tick:"500元优惠券",deal:"无期限",num:10},
              {tick:"5元优惠券",deal:"无期限",num:10},
              {tick:"15元优惠券",deal:"无期限",num:10}]
  },
  mutations: {
    getcoupon: (state,value) => {
           state.getcop[value].num--
    },
    putcoupon:function(state,value){
          const temp = {};
          temp.tick=value.tick
          temp.deal=value.deal
          temp.num=1
          temp.id=value.id
          state.my.push(temp)
           state.scrollchild=value.tick
    },
    addcoupon:function(state,el){
      let temp;
      for(const [index,value] of state.my.entries()){
          if(el.tick==value.tick){
               state.my[index].num++
          }
      }
    }


  }
})

export default store
