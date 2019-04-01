<template>
  <div class="bg">
   <div class="conter">
   	 <div class="item" v-for="(txt,it) in columns " :key="it">
   	 	<div class="up">
   	 		<div>缴费订单号：{{txt.mun}}</div>
   	 		<div>缴费金额{{txt.money}}</div>
   	 	</div>
   	 	<div class="down">
						<div>{{txt.bindcar}}</div>
						<div>时间：{{txt.timer}}</div>
   	 	</div>
   	 </div>
   </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      columns:[{mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-1"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-1"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-1"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-1"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-11"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-11"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-11"},
               {mun:"12321423143",money:"120元",bindcar:"所有撤场",timer:"2019-1-1~2919-10-11"}]
		}
  },
  methods: {


  }

}
</script>

<style scoped>
.bg{
	background:#f3f3f3;
	height:100vh;
	width:100%;
	box-sizing:border-box;
	padding:10rpx;
}
.conter{
	height:99vh;
	box-sizing:border-box;
	/* background: red; */
	box-sizing: border-box;
	padding-bottom: 90rpx;
  overflow-y: scroll;
}

.item{
	background:#fff;
	height:150rpx;
	width:100%;
	border-radius: 20rpx;
	box-sizing:border-box;
	padding:10rpx 20rpx;
	margin-bottom:20rpx;
}
.up{
   display: flex;
   font-size:24rpx;
   line-height:50rpx;
}
.up :first-child{
	width:50%;
	font-weight:bold;
}
.up :nth-child(2){
	width:50%;
	color:grey;
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
	/* color:#F6A648 */
}
.down{
	 line-height:95rpx;
	 /* background: red; */
	display: flex;
}
.down :first-child{
	width:45%;
	font-size: 24rpx;
	color:#363636;
	font-weight:bold;
}
.down :nth-child(2){
	width:55%;
	color:grey;
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
		font-size: 24rpx;
	color:#363636;
}

button::after{
border:none;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
    }
</style>
