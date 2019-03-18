// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    ticket:[{ coupon:"50元停车券", deadline:"期限：一个月", moneys:"10.00",sum:"0"},
       { coupon:"100元停车券", deadline:"期限：三个月", moneys:"20.00",sum:"0"},
       { coupon:"200元停车券", deadline:"期限：四个月", moneys:"30.00",sum:"0"},
       { coupon:"500元停车券", deadline:"期限：五个月", moneys:"40.00",sum:"0"},
       { coupon:"600元停车券", deadline:"期限：四个月", moneys:"50.00",sum:"0"}]
  },
  mutations: {
    increment: (state,value) => {
      state.ticket[value].sum++;
      let a=0;
      state.ticket.forEach( function(element, index) {
          a=a+(element.moneys*element.sum)
      });
      state.count=a
    },
    decrement: (state,value) => {
      if(state.ticket[value].sum>0){
        state.ticket[value].sum--;
        let a=0;
        state.ticket.forEach( function(element, index) {
          a=a+(element.moneys*element.sum)
        });
        state.count=a
      }
      
    }
  }
})

export default store
