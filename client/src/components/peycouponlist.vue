<template>
  <div>
     <div class="peycouponlist">
       <div class="payup">
          <div class="left">{{list.coupon}}({{list.deadline}})</div>
          <div class="mind">X{{list.sum}}</div>
          <div class="right">￥{{list.moneys}}</div>

       </div >
       <div class="paydown">所有车场</div>
     </div>

  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style scoped>
.peycouponlist{
  background:#fff;

  height:120rpx;
  box-sizing:border-box;
  padding:10rpx;
}
.payup{
  height:60rpx;
  display:flex;
  font-size:24rpx;
  line-height:60rpx;
  color:#666666;
}
.left{
  width:50%;
}
.mind{
  width:25%;
  text-align:center;
}
.right{
  width:25%;
  text-align:center;
}
.paydown{
  height:40rpx;
  font-size:24rpx;
  line-height:40rpx;
  color:#BEBEBE
}



</style>