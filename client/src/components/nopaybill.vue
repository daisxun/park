<template>

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
        jumppay:function(){
      console.log(123)
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
  border-radius: 10rpx;
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