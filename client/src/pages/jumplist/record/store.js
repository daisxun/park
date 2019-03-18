// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      park:[
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"已离开",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"}],
     debt:[
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路22号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
     ],
     rule:[
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路22号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
      {plate:"粤123456",option:"停车中",type:"泊车",address:"深圳市南山区丽山南路16号",time:"2018-1-1"},
     ]
  },
  mutations: {


  }
})

export default store
