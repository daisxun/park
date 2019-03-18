<template>
  <div>
    <div class="parkrecord" v-for="(val,index) in park"  :key='index'>
      	<div class="header">
      		<ul class="sheet">
      			<li class="first_child">{{val.plate}}</li>
      			<li><span class="f8">{{val.option}}</span></li>
      			<li @click="deletepark">删除</li>
      		</ul>
      	</div>
      	<div class="body">
      		停车类型：<span class="f8">{{val.type}}</span>
      	</div>
      	<div class="footer">
      		<div>地址：{{val.address}}</div>
      		<div>{{val.time}}</div>
      	</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['park'],
  data:function () {
  return {
    
  }
},
    created () {
    	this.park=this.park;
	  console.log(this.park)
    },
  methods:{

  }
}
</script>

<style scoped>
.parkrecord {
  height:200rpx;
  border-bottom:2rpx solid grey;
  margin-top:10rpx;
}

.header ul{
  display:flex;
  line-height:55rpx;
  padding:0;
}
.first_child{
	font-size:36rpx;
	color:#4D4D4D;
	font-weight:bold;
}
.sheet :nth-child(2){
	width:60%;
	text-align:center;

	padding:0
}
.sheet :nth-child(2) span{
	display:inline-block;
	background:#434343;
	color:#F8A350;
	font-size:25rpx;
	width:100rpx;
	line-height:40rpx;
	margin-bottom:8rpx;
	text-align:center;
}
.sheet :last-child{
	color:#F8A350;
	font-size:26rpx;
	width:13%;
	text-align:right;
}
.body{
	line-height:60rpx;
	font-size:26rpx;

}
.footer{
	display:flex;
	line-height:80rpx;
	font-size:26rpx;
}
.footer :first-child{
	color:#999999;
	width:70%
}
.footer :last-child{
	color:#999999;
	text-align:right;
	width:30%;
}
.f8{
	color:#F8A350;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
    }
</style>