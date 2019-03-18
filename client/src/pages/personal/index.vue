<template>
  <div>
   	<div class="title_box">
   		<div class="avatar_box">
   			<div class="avatar">
   				 <img class="userinfo-avatar" src="/static/images/jmar.png" background-size="cover" />
   			</div>
   			<div class="personal">
   				<ul>
   					<li>粉色瞳孔</li>
   					<li>12345678911</li>
   				</ul>
   			</div>
   			<a class="link" href="/pages/jumplist/mag/main" >
   				 <img class="whiterow" src="/static/images/whiterow.png" background-size="cover" />
   			</a>
   		</div>			
   	</div>
   	<div class="card">
   		<a class="bar" v-for="(list,index) in coupon" wx:key="index" :href="coupon[index].jump">
   			<div class="imgvar">
   				<img class="coupon" :src="coupon[index].url" background-size="cover" />
   			</div>
   			<div class="txt">
   				<p>{{coupon[index].name}}</p>
   			</div>
   			<div class="numb">
   				<p>{{coupon[index].number}}</p>
   			</div>
   		</a>
   	</div>
   	<hr class="line">
   	<div class="list">
   		<a class="item" v-for="(list,index) in itemhead" wx:key="index"  :href="itemhead[index].jump">
   			<div class="leftitem">
   				<img :class="itemhead[index]._style" :src="itemhead[index].url"  />
   			</div>
   			<div class="centeritem">
   				<p>{{itemhead[index].name}}</p>
   			</div>
   			<div class="rightitem">
   				<img class="yellrow" src="/static/images/yellrow.png"  />
   			</div>
   		</a>
   	</div>
   	<div class="server">
   		<div class="item" >
   			<div class="leftitem">
   				<img class="item_img" src="/static/images/server.png" />
   			</div>
   			<div class="centeritem">
   				<p>客服</p>
   			</div>
   			<div class="rightitem">
   			</div>
   		</div>
   	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coupon: [{name: '停车券', url: '/static/images/parking.png', number: '0', jump: '/pages/jumplist/parking/main'}, {name: '优惠券', url: '/static/images/coupon.png', number: '0', jump: '/pages/jumplist/coupon/main'}, {name: '月租券', url: '/static/images/lease.png', number: '0', jump: '/pages/jumplist/lease/main'}],
      itemhead: [{name: '停车记录', url: '/static/images/record.png', _style: 'record', jump: '/pages/jumplist/record/main'}, {name: '我的账单', url: '/static/images/bill.png', _style: 'bill', jump: '/pages/jumplist/bill/main'}, {name: '我的车辆', url: '/static/images/car.png', _style: 'car', jump: '/pages/jumplist/car/main'}, {name: '我的收藏', url: '/static/images/collect.png', _style: 'collect', jump: '/pages/jumplist/collect/main'}, {name: '车场组关联', url: '/static/images/relation.png', _style: 'relation', jump: '/pages/jumplist/relation/main'}]
    }
  },
  onLoad(){
    // console.log("onLoad")
  },
  onShow(){
    // console.log(456)
  }
}
</script>

<style scoped>
  .title_box{
  	box-sizing:border-box;
  	padding-top:10rpx;
  	height:186rpx;
  	width:100%;
  	background: #434343;
  }
  .avatar_box{
  	display: flex;
    background-color: #434343;
    padding:0 60rpx;
  }
  .avatar{
    height:176rpx;
    width:30%
  }
  .personal{
  	padding-top:35rpx;
  	box-sizing:border-box;
  	height:172rpx;
  	width:55%;
  	color:white;
  }
  .personal ul li{
  	margin-top:10rpx;
  	height:50rpx;
  	font-size:28rpx;
  	padding-left:30rpx;
  }
  .personal ul li:first-child{
	font-size:36rpx;
  }
  .link{
  	height:172rpx;
  	width:15%;
  	text-align:center;
  	line-height:172rpx;
  }
  .link img{
  	height:35rpx;
  	width:20rpx;
  }
  .userinfo-avatar{
  	height:170rpx;
  	width:172rpx;
  	border-radius:100%;
  	border:2rpx solid white;
  }
  .card{
  	height:210rpx;
  	width:100%;
  	box-sizing:border-box;
  	padding:0 40rpx;
  	background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAEnCAYAAACZnHKbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACCSURBVHhe7cuxDQAhEMAwdmN25rrfIAUdL0dK6bX3npvBGIzBGIzBGIzBGIzBGIzBGIzBGIxfguecuXnNZWAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmAERmD0fzjzAQcxVr7cU2k7AAAAAElFTkSuQmCC");
  	box-sizing:border-box;
  	background-repeat:no-repeat; 
  	background-size:100% 100%;
  	-moz-background-size:100% 100%;
  	border:0rpx solid red;
  	display:flex;
  }
  .bar{
  	display:inline-block;
  	padding-top:20rpx;
  	box-sizing:border-box;
  	flex:1;
  	height:200rpx;
  	border:0rpx solid black;
  }
  .imgvar{
  	text-align:center;
  }
  .coupon{
  	height:80rpx;
  	width:80rpx;
  }
  .txt{
  	text-align:center;
  	font-size:28rpx
  }
  .numb p{
  	color:#FE9E2D;
  	text-align:center;
  	ont-size:28rpx
  }
  .line{
  	background:#F2F9FF;
  	height:8rpx;
  	width:100%;
  }
  .item{
  	display:black;
  	height:112rpx;
  	width:100%;
  	background:#FFFFFF;
  	box-sizing:border-box;
  	padding:0 30rpx;
  	display:flex;
  	border-bottom:2rpx solid rgba(242,249,255,1);
  }
  .leftitem{
  	height:110rpx;
  	width:20%;
  	text-align:center;
  	box-sizing:border-box;
  	padding-top:33rpx;
  	background:#fff;
  	border:0rpx solid red
  }
  .centeritem{
  	height:110rpx;
  	width:60%;
  	line-height:110rpx;
  	font-size:36rpx;
  	color:#333333;
  	font-weight:bold
  }
  .rightitem{
  	border:0rpx solid red;
  	height:110rpx;
  	box-sizing:border-box;
  	padding-left:50rpx;
  	padding-top:15rpx;
  	background:#FFF;
  	width:20%;
  	line-height:110rpx;
  	font-weight:bold;
  	font-size:60rpx;
  	color:#FE9E2D
  }
  .rightitem .yellrow{
  	height:63rpx;
  	width:35rpx;
  }
  .record{
  	height:44rpx;
  	width:40rpx;
  }
  .bill{
  	height:46rpx;
  	width:40rpx;
  }
  .car{
  	height:34rpx;
  	width:42rpx;  	
  }
  .collect{
  	height:33rpx;
  	width:36rpx;  	  	
  }
  .relation{
  	height:38rpx;
  	width:38rpx; 	
  }
  .item_img{
   	height:44rpx;
  	width:29rpx;  	
  }
</style>
