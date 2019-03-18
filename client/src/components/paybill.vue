<template>
  <div>
     <div class="paybill">
       <div class="payup">
         <div class="payup_first">
          <span class="pay_tt">粤B123456</span>
          <span class="pay_tp">停车类型：泊车</span>
        </div>
         <div class="payup_last">
          <span class="pay_my">消费金额:202元</span>
        </div>
       </div >
       <div class="paymd">
        <div class="payadd"><span>地址：深圳市南山路123路</span></div>
         <div class="payshi"><span>实付金额:202元</span></div>
       </div>
       <div class="paydown">
         <div class="paytimer"><span>2018-1-1 T 12:12:12</span></div>
         <div class="paysub"><span >优惠金额:202元</span></div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  props: ['debt'],
  data:function () {
  return {
    
  }
},
    created () {

    },
  methods:{

  }
}
</script>

<style scoped>
.paybill{
  background:#fff;
  border-radius:10rpx;
  height:200rpx;
  box-sizing:border-box;
  padding:10rpx;
}
.payup{
  height:60rpx;
  display:flex;
}
.payup_first{
width:60%;
}

.pay_tt{
  color:#4D4D4D;
  font-size:30rpx;
  font-weight:bold;
  line-height:60rpx;
}
.pay_tp{
  color:#F8A350;
  font-size:24rpx;
  line-height:60rpx;
  padding:0 20rpx;
}
.payup_last{
  width:40%
}
.pay_my{
  color:#999999;
  font-size:26rpx;
  line-height:60rpx;
  width:100%;
  display:inline-block;
}
.paymd{
  height:60rpx;
  color:#999999;
  font-size:26rpx;
  display:flex;
  line-height:60rpx;
}
.paydown{
  height:60rpx;
  display:flex;
  color:#999999;
  font-size:26rpx;
  line-height:60rpx;
}
.paytimer{
  width :60%;
}
.payadd{
  width:60%;
}
.payshi{
   width:35%;
   box-sizing:border-box;
}
.paysub{
  width:40%;
  box-sizing:border-box;
}
</style>