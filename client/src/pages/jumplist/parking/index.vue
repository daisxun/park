<template>
  <div class="bg">
   	 <div class="head">
   	 	<div class="head_l">
   	 		<p class="p1">25.00</p>
   	 		<p class="p2">当前券值</p>
   	 		<p class="p3">2019-11-12日到期</p>
   	 	</div>
   	 	<div class="head_r">
   	 		<div class="num">
   	 			<p>50元券</p>
   	 		</div>
   	 		<div class="limit">
   	 			<p>一个月期限</p>
   	 		</div>
   	 	</div>
   	 </div>
   	 <div class="line">
   	 	<span class="s1">&nbsp</span>
   	 	<span class="s2">停车券</span>
   	 	<span class="s3">停车券购买记录</span>
   	 </div>
   	 <hr/>
   	 <div class="body">
   	 	<div class="conter"  v-for="(list,index) in ticket" wx:key="index">
   	 		<div class="ticket">
   	 			<div class="ticket_l">{{list.coupon}}</div>
   	 			<div class="ticket_r">{{list.deadline}}</div>
   	 		</div>
   	 		<div class="calc">
				<div class="calc_l">￥{{list.moneys}}</div>   	 			
				<div class="calc_r">
					<span class="up" @click="decrement(list,index)">-</span>
					<span class="mony">{{list.sum}}</span>
					<span class="down" @click="increment(list,index)">+</span>
				</div>   	 			
   	 		</div>
   	 		<hr>
   	 	</div>
   	 </div>
   	 <div class="gift">
   	 	<img src="/static/images/gift.png">
   	 </div>
   	 <div class="footer">
   	 	<div class="foot_l">
   	 		<span>总金额:￥{{count}}</span>
   	 	</div>
   	 	<div class="foot_r" @click="gopay">
   	 		<span>去结算</span>
   	 	</div>
   	 </div>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {

    }
  },
  created(){
  	
  },
  computed:{
  	ticket(){
            return store.state.ticket
        },
    count(){
    		return store.state.count
    }
  },
  methods:{
  	decrement:function(e,index){
  		const obj={e,index}
  		store.commit('decrement',index)
  	},
  	increment:function(e,index){
  		const obj={e,index}
  		store.commit('increment',index)
  	},
  	gopay:function(){
  		let arr=[];
  		   for(let a=0;a<store.state.ticket.length;a++){
  		   		if(store.state.ticket[a].sum!=0){
  		   			arr.push(store.state.ticket[a])
  		   		}
  		   }
  		let transf={list:arr,count:store.state.count};
  		wx.navigateTo({
				  url: '/pages/jumplist/paycoupon/main?id=' +JSON.stringify(transf)
				})

  	}
  }
}
</script>

<style scoped>
.bg{
	height:100vh;
	width:100%;
	background:#f3f3f3;
	box-sizing:border-box;
}
.head{
	height:20vh;
	width:100%;
	box-sizing:border-box;
	background:#434343;
	display:flex;
    padding:25rpx 60rpx 25rpx 80rpx;
}
.head_l{
   width:70%;
   height:200rpx;
}
.p1{
	
	color:#FFFCFC;
	line-height:120rpx;
	font-size:100rpx;
	font-weight:bold;

}
.p2,.p3{
	line-height:40rpx;

	color:#FFFFFF;
	font-size:20rpx;
}
.head_r{
	border-radius:10rpx;
	width:128rpx;
	height:200rpx;
	background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAKvCAYAAABAqx49AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFASURBVFhH7dWxTsJgFMXx+8SOzi48gDOLD+CAiYmBCojVxTibaNSqGB/AGE0BuZ4z2NqcBm2C0uI3/G9+Q1ua76OtbWxuObPtnT1ntn82dmbDi2dnNrp8cWbx9ZszO72dOPufSIF0IU4wWBExT4+TicfJlJgCM7fj5N0ZMAfmwJ07+xFGGCwgICCggCMMlmOIwb7gHkABRehCCXR5/xK63UsDFoDVF7oaGXSbSoBrFLd7gMEC1h39cnB8h8MHd7YijAG0Iuj9VEGEa7AcPQxmvUcALUKEwUqgBzcIXQxWY2CL2PKR/wFqCyxAcb8CAtYc+hR8Qt/hipIPRwb5KCj6GKwEAwz2i9AfDQhoLvT5qgS9oELPqgZ9S2TQg5sDXahK0FeTQs+qhCiZObPuTerMDq5endnu+ZMza7U73mp3/AOAwV7ztZHkTQAAAABJRU5ErkJggg==);
  	box-sizing:border-box;
  	background-repeat:no-repeat; 
  	background-size:100% 100%;
  	-moz-background-size:100% 100%;
}
.num{

  height:30%;
  color:#fff;
  font-size:25rpx;
  box-sizing:border-box;
  padding:10rpx; 
}
.limit{
	height:70%;
	text-align:right;
	padding-left:70%;
	box-sizing:border-box;
}
.limit p{
	font-size:25rpx;
	height:100%;
	width:30rpx;
	text-align:center;
	line-height:25rpx;
	color:#fff;
}
.line{
	height:60rpx;
	width:100%;
	padding:12rpx;
	box-sizing:border-box;
	font-size:24rpx;

}
hr{
	height:8rpx;
	background:#EEEEEE;
}
.s1{
	height:20rpx;
	width:12rpx;
	background:#FF9933;
	margin:0 30rpx 0 10rpx;
}
.s2{
   font-weight:bold;
   display:inline-block;
   width:130rpx;
   text-align:center;
   margin-right:50%;
}
.s3{
    display:inline-block;
    color:#FF9933;
}
.body{
	margin-top:4rpx;
	background:#f3f3f3;
	height:45vh;
	width :100%;
	overflow:scroll;
}
.conter{
	background:#FFFFFF;
	height:152rpx;
	width :100%;
	box-sizing:border-box;
    padding:0 40rpx ;
}
hr{
	height:2rpx;
	background:#EEEEEE
}
.ticket{
	display:flex;
	line-height:75rpx;
}
.ticket_l{
	width:30%;
	text-align:center;
	font-size:24rpx;
	font-weight:bold;
	margin-right:100rpx
} 
.ticket_r{
	line-height:75rpx;
	font-size:20rpx
}
.calc{
	display:flex;
}
.calc_l{
	width:30%;
	text-align:center;
	font-size:24rpx;
	color:#FF9933;
	line-height:75rpx
}
.calc_r{

	width:70%;
	text-align:right;
}
.up, .down{
	display:inline-block;
	text-align:center;
	width:60rpx;
	line-height:75rpx;
	font-size:55rpx;
	font-weight:bold;
	color:#BFBFBF
}
.mony{
   
	display:inline-block;
	text-align:center;
	width:60rpx
}
.down{
		font-size:50rpx;
	    font-weight:bold;
		color:#FF9933;
		width:60rpx;
}
.gift{
	height:20%;
	width:100%;
	box-sizing:border-box;
	padding:20rpx 40rpx;
	
}
.gift img{
	height:180rpx;
	width :100%
}
.footer{
	height:9.5vh;
	background:#F8B551;
	display:flex;
	box-sizing:border-box;
	padding-left:50rpx;
	color:#FFFFFF;
}
.foot_l{
	background:#F8B551;
	width:70%;
	box-sizing:border-box;
	line-height:9.5vh
}
.foot_r{
	width:30%;
    font-weight:bold;
    background:#FF9933;
    line-height:9.5vh;
    text-align:center;
}
</style>
