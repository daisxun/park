<template>
  <div class="bg">
  		<div class="car_head">
  			<ul class="contenr">
  				<li class="child_li" v-for="(val,index) in user" :key="index">
  					<span class="li_left">{{val.keys}}</span>
  					<span class="li_right">{{val.values}}</span>
  				</li>
  			</ul>
  			<div class="edit"><span >编辑</span></div>
  			
  		</div>
  		<div class="car_body">
  			<div class="car_title">
  				<span class="mycar">我的车辆</span>
  			</div>
  			<div class="car_lists">
  				<div class="car_box" v-for="(val,index) in car" :key="index">
  					<carlist></carlist>
  				</div>
  			</div>
  			<div class="edit"><span>添加车辆</span></div>
  		</div>
  		<div class="car_foot">
  			<button class="complet">完成</button>
  		</div>
  </div>
</template>

<script>
import carlist from '@/components/carlist'
export default {
  components: {
	    carlist
	  },
  data () {
    return {
      user: [{keys:'陈真',values:"陈真"},
             {keys:'地址',values:"大草原"},
             {keys:'手机',values:"13222222222"}],
      car:[
      {palte:'粤123456',type:'轿车',color:'黄色',time:'期限：2019-1-1',tip:'月租缴费记录'},
      {palte:'粤123456',type:'轿车',color:'黄色',time:'付款',tip:'月租缴费记录'},
      {palte:'粤123456',type:'轿车',color:'黄色',time:'付款',tip:'月租缴费记录'},
      {palte:'粤123456',type:'轿车',color:'黄色',time:'付款',tip:'月租缴费记录'},
      {palte:'粤123456',type:'轿车',color:'黄色',time:'付款',tip:'月租缴费记录'},
      ]
    }
  }
}
</script>

<style scoped>
.bg{
	background:#f3f3f3;
	height:100vh;
	width :100%;
	box-sizing:border-box;
}
.car_head{
	height:28vh;
}
.contenr{

}
.child_li{
	display:flex;
	line-height:80rpx;
	background:#fff;
	color:#4D4D4D;
	font-size:28rpx;
	margin-bottom:10rpx;
}	
.li_left{
	width:20%;
	text-align:center;
}
.li_right{
	width:80%;
	text-align:right;
	box-sizing:border-box;
	padding-right:40rpx;
}
.edit{
	color:#F9B570;
	font-size:28rpx;
	line-height:50rpx;
	text-align:center;
}
.car_body{
	height:60vh;
}
.car_title{
	height:5vh;
	color:#282828;
	font-size:24rpx;
	padding-left:30rpx;

}
.car_lists{
	height:50vh;
    overflow:scroll;
}
.car_box{
	padding:10rpx 30rpx;
}
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
.mycar{
	display:inline-block;
	padding:0 20rpx;
	border-left:20rpx solid #F8A350;
}
.car_foot{
	height:10vh;
	margin-top:10rpx;
	padding:5rpx;
}
.complet{
	height:100rpx;
	width:85%;
	border-radius:50rpx;
	margin:0 auto;
	color:#fff;
	font-size:36rpx;
	background:#F9B570;
}
</style>
