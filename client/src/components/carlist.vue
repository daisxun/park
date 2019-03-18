<template>
  <div>
    <div class="carlist">
        <ul class="carul">
          <li>
            <span class="car_left">粤123456</span>
            <span class="car_right">月租缴费记录</span>
          </li>
          <li>
            <span  class="car_left">车型：轿车</span>
            <span class="car_right">黄色</span>
          </li>
          <li>
            <span  class="car_left">所有车场</span>
            <span class="car_right">付款</span>
          </li>
        </ul>
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
.carlist{
  background:#fff;
  height:180rpx;
  box-sizing:border-box;
  border-radius:10rpx;
}
.carul li{
  line-height:60rpx;
  font-size:24rpx;
  padding-left:40rpx;
  padding-right:40rpx;
  border-radius:10rpx;
  box-sizing:border-box;
  display :flex;
}
.car_left{
  width:50%;
}
.car_right{
    width:50%;
    text-align:right;
}

</style>