<template>
  <div class='contaniers' >
     <div style='padding:10px 0;font-size:0.8em'  v-for="(value, index) in news" :key="index" >
        <div style='text-align:center;color:#aeaeae;padding:5px 0' wx:if="value.times.length>0">{{value.times}}</div>
        <div style='display:flex;'>
             <div style='width:15%;text-align:center'><image src="../../static/images/xylogo.png" style='width:20px;height:20px'/></div>
             <div style='width:70%;border:1px solid #e7e7e7;background:#ffffff;border-radius:5px;padding:10px'>
                 <div>{{value.title}}</div>
                 <div style='color:#aeaeae;font-size:0.9em'>{{value.content}}</div>
             </div>
        </div>
     </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
     bodyHeight:(wx.getSystemInfoSync().windowHeight)+"px",
     news:[
       {title:"新用户您好！",times:"2018-11-02 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"2018-11-03 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"2018-11-04 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"2018-11-05 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"2018-11-06 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"2018-11-07 18:00:00",content:"恭喜你成功注册成为我们系统的会员！"},
       {title:"新用户您好！",times:"",content:"你的用户信息天下不完整，请前往填写完整信息！"}
     ]
    }
  },

  components: {
    card
  },

onShow(){
    
  },

  methods: {
   
   
  },

  created () {
    
  }
}
</script>

<style scoped>
.contaniers {
  /* background:#f2f2f2;v-bind:style="{height:bodyHeight}" */
  background:#f2f2f2;
  height:100vh;
  box-sizing: border-box;
  /* border:1rpx solid black; */
  overflow-y:scroll; 
}
</style>
