<template>
  <div class="bg">
     <div class="cantenr">
     	<div class="coll_left">
     		<img src="/static/images/park.png">
     	</div>
     	<div class="coll_right">
     		<div class="coll_right_up">
     			<div class="up1">西湖林语名苑</div>
     			<div class="up2"><span>删除</span></div>
     		</div>
     		<div class="coll_right_down">
     			<div>深圳市南山路16号</div>
     		</div>
     	</div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello miniprograme'
    }
  }
}
</script>

<style scoped>
.bg{
	background:#f3f3f3;
	height:100vh;
	width:100%;
	box-sizing:border-box;
	overflow-y:scroll;
}
.cantenr{
	height:150rpx;
	display:flex;
	border-bottom:4rpx  solid #F2F9FF;
}
.coll_left{
	
	width:30%;
	padding:40rpx;
	padding-left:60rpx;
	box-sizing:border-box;
}
.coll_left img{
	height:89rpx;
	width:91rpx;
}
.coll_right{
	width:70%;
}
.coll_right_up{
	display:flex;
}
.up1{
	width:70%;
	font-size:28rpx;
	color:#333333;
	font-weight:bold;
	line-height:70rpx;
}
.up2{
	width:30%;
	text-align:center;
	color:#F8A350;
	line-height:70rpx;
	font-size:24rpx;
}
.coll_right_down{
	color:#333333;
	line-height:70rpx;
	font-size:20rpx;
}
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
</style>
