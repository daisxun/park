<template>
  <div>
    <div class="nopaybox">
     <div class="nopayup">
        <div class="plate">{{nopay.plate}}</div>
        <div class="type">停车类型：{{nopay.type}}</div>
     </div>
     <div class="nopaymd">
        <span class="addrs">地址：{{nopay.address}}</span><span class="btns">￥{{nopay.money}}</span>
     </div>
     <div class="nopaydown">
       <span>{{nopay.time}}</span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nopay'],
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
.nopaybox{
  background:#fff;
  height:200rpx;
  box-sizing:border-box;
  padding:10rpx;
  border-radius:10rpx;
}
.nopayup{
  height:60rpx;
  display:flex;

}
.plate{
  color:#4D4D4D;
  font-size:36rpx;
  font-weight:bold;
}
.type{
  color:#F8A350;
  font-size:26rpx;
  line-height:60rpx;
  padding-left:20rpx;
  box-sizing:border-box;
}
.nopaymd{
  line-height:80rpx;
}
.addrs{
  color:#999999;
  font-size:26rpx;
}
.btns{
  background:#FF9933;
  color:#FFFFFF;
  font-size:26rpx;
  padding:10rpx;
  margin-left:30%;
}
.nopaydown{
  height:40rpx;
  color:#999999;
  font-size:26rpx;
}
</style>