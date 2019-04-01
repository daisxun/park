<template>
  <div class="bg">
   	 <div class="head">
   	 	<div class="head_l">
   	 		<p class="p1">{{money}}元</p>
   	 		<p class="p2">停车费余额 <span class="charge" @click="getcharge">我要充值</span></p>
   	 		<p class="p3">停车场快速离场</p>
   	 		<div class="p4"  @click="getprot">
							<div class="choose" >
									<van-checkbox :value="pick" ></van-checkbox>
							</div>
							<span class="p42">开启快速离场</span>
							<span class="p43">快速缴费协议</span>
					</div>
   	 	</div>
   	 	<div class="head_r">
						<img src="/static/images/bag.png" alt="">
   	 	</div>
   	 </div>
   	 <div class="line">
   	 	<span class="s1">交易记录</span>
   	 </div>
   	 <hr/>
   	 <div class="body">
				<div class="conter"  v-for="(list,index) in payment" :key="index">
						<div class="ticket">
								<div class="ticket_up"> <span class="up1">{{list.log_type==1?"预缴费充值":"停车场缴费"}}</span> <span class="up2">{{list.carnumber}}</span></div>
								<div class="ticket_min"><span class="min1">{{list.log_type==1?"":"停车场:"}}</span> <span class="min2">{{list.parking_name}}</span></div>
								<div class="ticket_min"><span class="min1">{{list.log_type==1?"充值时间":"发生时间:"}}</span> <span class="min2">{{list.cerated_time}}</span></div>
						</div>
						<div class="calc">
								<div class="calc_l"><span>金额:</span><span>{{list.mny}}</span></div>   	 			
								<div class="calc_r"><span>余额:</span><span>{{list.cur_wallet_mny}}</span></div>   	 			
						</div>
				</div>
   	 </div>
  </div>
</template>

<script>
import store from '../../store';
import getcontent from '../../../utils/api';
export default {
  data () {
    return {
				pick:false,
				money:0,
				payment:[],
    }
  },
  created(){
  	
  },
  methods:{
		onChange:function(){
			console.log(123)
			// let than=this;
		  //   	than.pick=!than.pick
		},
  	getprot:function(){
			// url:"/pages/jumplist/ticketpay/main"
  		wx.navigateTo({
				  url: '/pages/jumplist/protocol/main'
				})

		},
		getcharge:function(){
  		wx.navigateTo({
				   url:"/pages/jumplist/ticketpay/main"
				})	
		},
		// 获取交易记录
		promisefun1:function(){
				let conf={
					"token":store.state.token,
					"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
					"id": "getParkingFeeRechargeAndPaymentRecords",
				}
					let getdata= new Promise((resolve, reject) => {
								getcontent.getapi(conf,{},function(data){
										// console.log("promisefun1",data.data.data)
										if(data.data.result.code==0){
												resolve(data.data.data)
										}else{
											  wx.showToast({
														title:data.data.result.msg,
														icon: 'none',
														duration: 2000
													})
												resolve([])
										}
									})
						});
						return getdata
				},
		// 获取会员信息
		promisefun2:function(){
					let conf={
							"token":store.state.token,
							"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
							"id": "getMemberInfo",
						}
					let getdata= new Promise((resolve, reject) => {
								getcontent.getapi(conf,{},function(data){
									// console.log("promisefun2",data)
										if(data.data.result.code==0){
												resolve(data.data.data)
										}else{
											  wx.showToast({
														title:data.data.result.msg,
														icon: 'none',
														duration: 2000
													})
												resolve([])
										}
								})
						});
						return getdata
				},
	},
	onShow(){
				let than=this;
				than.promisefun1().then(function(value) {
					console.log("获取交易记录",value)
					if(value.length==0){
							
				let  temp= [
									{
										"id": 1,
										"log_type": 1, // 类型：1(充值)；2（消费）
										"mny": 2000, // 消费金额
										"cur_wallet_mny": 10000, // 当前余额
										"offroad_parking_chargeid": null,
										"cerated_time": "xxx"
									},
									{
										"id": 2,
										"log_type": 2, // 类型：1(充值)；2（消费）
										"mny": 2000,
										"cur_wallet_mny": 12000,
										"offroad_parking_chargeid": 1,
										"cerated_time": "",
										"carnumber": "xxxxxx", // 车牌号
										"parking_id": 1,
										"parking_name": "xxx" // 停车场名
									}
							]
						temp.map(function(x,y,z){
							let obj=x
									obj.mny=parseFloat(obj.mny)/100
									obj.cur_wallet_mny=parseFloat(obj.cur_wallet_mny)/100
							return obj
						})
						console.log(temp)
		    than.payment=temp

					}else{
							than.payment=[]
					}
				}, function(error) {})
				than.promisefun2().then(function(value) {
					// console.log("获取会员信息",)
					than.money=parseInt(value[0].wallet_mny)

				}, function(error) {})
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
    padding:25rpx 0 0 50rpx;
}
.head_l{
   width:70%;
   height:200rpx;
	 background: #434343;
}
.p1{
	
	color:#FFFCFC;
	line-height:80rpx;
	font-size:80rpx;
	font-weight:bold;
	background: #434343;
}
/*循环列表 */
.conter{
	background:white;
	border: 1rpx solid #E5E5E5;
	margin-bottom: 10rpx;
	height:152rpx;
	width :100%;
	box-sizing:border-box;
	display: flex;
}
.ticket{
	height: 100%;
	width: 60%;
	/* background: yellowgreen; */
}
.ticket_up{
	/* background: red; */
	padding-left: 10rpx;
}
.up1{
	color:#333333;
	font-size: 24rpx;
	font-weight: bolder;
}
.up2{
	color:#FF9933;
	font-size: 24rpx;
	padding-left: 50rpx;
}
.ticket_min{
	/* background: #BFBFBF; */
	color: #333333;
	font-size: 20rpx;
	line-height: 42rpx;
	padding-left: 10rpx;
}
.min2{
	padding-left: 10rpx;
}
.calc{
	height: 100%;
	width: 40%;
	/* background: blueviolet; */
	font-size: 20rpx;
	color: #333333;
	text-align: center;
}
.calc_l{
	height: 50%;
	padding-top: 30rpx;
	box-sizing: border-box;
}
.calc_r{
	height: 50%;
}

.charge{
	color:#FF9933;
	padding-left: 10rpx;
}
.p2,.p3 ,.p4{
	line-height:40rpx;
	/* display: inline-block; */
	/* background: forestgreen; */
	color:#FFFFFF;
	font-size:20rpx;
}
.p4{
	display: flex;
}
.p42,.p43{
	/* background: red; */
	line-height: 40rpx;
	display: inline-block;
	margin-left: 30rpx;
}
.p43{
	color:#FF9933
}

.choose{
	/* background: red; */
	display: inline-block;
	width: 40rpx;
	height:40rpx;
}
.head_r{
	width:128rpx;
	height:200rpx;
	/* background: blue; */
	box-sizing:border-box;
	padding-top: 30rpx;
}
.head_r img{
	height: 126rpx;
	width: 110rpx;
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
	/* background:; */
	margin:0 30rpx 0 10rpx;
	color:#FF9933;
	font-weight:bold;
	border-left: 10rpx solid #FF9933;
	padding-left: 20rpx;
}
.body{
	margin-top:4rpx;
	background:#f3f3f3;
	/* background: red; */
	padding:20rpx;
	box-sizing: border-box;
	height:74vh;
	width :100%;
	overflow:scroll;
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

</style>
