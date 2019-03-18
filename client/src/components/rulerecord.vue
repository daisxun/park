<template>
  <div>
    <div class="rulerecord" v-for="(val,index) in rule"  :key='index'>
        <div class="ruleheader">
          <ul class="rulesheets">
            <li class="rulefirstchilds">{{val.plate}}</li>
            <li class="rulesecondchilds f8">停车类型：{{val.type}}</li>
            <li class="rulelastchilds">删除</li>
          </ul>
        </div>
        <div class="rulebody f8">
          欠费金额：{{val.plate}}/停车券余额0.00元
        </div>
        <div class="rulefooter">
          <div>地址：{{val.address}}</div>
          <div>{{val.time}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rule'],
  data:function () {
  return {
    
  }
},
    created () {
      this.rule=this.rule;
    console.log(this.rule)
    },
  methods:{

  }
}
</script>

<style scoped>
.rulerecord{
   height:200rpx;
  border-bottom:2rpx solid grey;
  margin-top:10rpx;
}
.ruleheader ul{
  display:flex;
  line-height:55rpx;
  padding:0;
  box-sizing:border-box;
}
.rulefirstchilds{
  font-size:36rpx;
  color:#4D4D4D;
  font-weight:bold;
  width:35%;
  box-sizing:border-box;
}
.rulesecondchilds{
  box-sizing:border-box;
  text-align:center;
  padding:0;
  width:35%;
  font-size:26rpx
}
.rulelastchilds{
  color:#F8A350;
  font-size:26rpx;
  text-align:right;
   width:30%;
   box-sizing:border-box;
}
.rulerepays{
  display:inline-block;
  width:100rpx;
  text-align:center;
  color:#fff;
  background:#F8A350;
}
.rulebody{
  line-height:60rpx;
  font-size:26rpx;
}
.rulefooter{
  display:flex;
  line-height:80rpx;
  font-size:26rpx;
}
.rulefooter :first-child{
  color:#999999;
  width:70%
}
.rulefooter :last-child{
  color:#999999;
  text-align:right;
  width:30%;
}
.ruleyue{
  color:#999999;
  font-size:20rpx
}
.f8{
  color:#F8A350;
}
</style>