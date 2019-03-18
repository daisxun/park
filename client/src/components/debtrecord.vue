<template>
  <div>
    <div class="debtrecord" v-for="(val,index) in debt"  :key='index'>
      	<div class="debtheader">
      		<ul class="debtsheets">
      			<li class="debtfirstchilds">{{val.plate}}</li>
      			<li class="debtsecondchilds f8">停车类型：{{val.type}}</li>
      			<li class="lastchilds"><p class=" debtrepays">还款</p></li>
      		</ul>
      	</div>
      	<div class="debtbody f8">
      		欠费金额：{{val.plate}}<span class="debtyue ">/停车券余额0.00元</span>
      	</div>
      	<div class="debtfooter">
      		<div>地址：{{val.address}}</div>
      		<div>{{val.time}}</div>
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
    	this.debt=this.debt;
	  console.log(this.debt)
    },
  methods:{

  }
}
</script>

<style scoped>
.debtrecord{
   height:200rpx;
  border-bottom:2rpx solid grey;
  margin-top:10rpx;
}
.debtheader ul{
  display:flex;
  line-height:55rpx;
  padding:0;
  box-sizing:border-box;
}
.debtfirstchilds{
  font-size:36rpx;
  color:#4D4D4D;
  font-weight:bold;
  width:35%;
  box-sizing:border-box;
}
.debtsecondchilds{
  box-sizing:border-box;
  text-align:center;
  padding:0;
  width:35%;
  font-size:26rpx
}
.lastchilds{
  color:#F8A350;
  font-size:26rpx;
  text-align:center;
   width:30%;
   box-sizing:border-box;
}
.debtrepays{
  display:inline-block;
  width:100rpx;
  text-align:center;
  color:#fff;
  background:#F8A350;
}
.debtbody{
  line-height:60rpx;
  font-size:26rpx;
}
.debtfooter{
  display:flex;
  line-height:80rpx;
  font-size:26rpx;
}
.debtfooter :first-child{
  color:#999999;
  width:70%
}
.debtfooter :last-child{
  color:#999999;
  text-align:right;
  width:30%;
}
.debtyue{
  color:#999999;
  font-size:20rpx
}
.f8{
  color:#F8A350;
}
</style>