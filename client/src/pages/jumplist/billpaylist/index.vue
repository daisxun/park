<template>
  <div class="bg">
			<div class="up">
					<div class="title">
							<span class="titleleft">消费金额</span>
							<span class="titleright">125元</span>
					</div>
					<div class="detail">
							<div  class="detailtilte">
									<span class="detailtiltename">停车场名称</span>
									<span class="detailtilteparking">{{billdata.parking_name}}</span>
							</div>
							<div class="detailtilte">
									<!-- <span class="detailtiltename">地址</span>
									<span class="detailtiltetxt">很早深度撒大大</span> -->
							</div>
							<div class="detailtilte">
								<span class="detailtiltename">订单编号</span>
								<span class="detailtiltetxt">{{billdata.customno}}</span>
							</div>
							<div class="detailtilte">
								<span  class="detailtiltename">停车时长</span>
								<span class="detailtiltetxt">{{billdata.billingtime}}</span>
							</div>
					</div>

					<div class="timer">
								 <span class="timerleft">停车时间段</span>
								 <span class="timeright">
									 <div>开始时间：{{billdata.intime}}</div>
									 <div>结束时间：{{billdata.chargetime}}</div>
								 </span>
					</div>
					<div class="rule">
							<div class="ruletitle">收费规则</div>
							<div class="ruleitem">
								 <span class="ruleitemleft">周一至周五 </span>
								 <span class="ruleitemright">6:00-18:00 X元/小时（免费停放半小时）18:00-6:00 X元/小时</span>
							</div>
							<div class="ruleitem">
									<span class="ruleitemleft">周六至周日 </span>
									<span class="ruleitemright">6:00-18:00 X元/小时（免费停放半小时）18:00-6:00 X元/小时</span>
							</div>
					</div>
					<div class="tick">
							<div class="tickleft">发票</div>
							<div class="tickright"> <span @click="viewtick"> 点击查看</span> </div>
					</div>
			</div>
			<div class="dn">支付完成</div>
  </div>
</template>

<script>
import store from '../../store';
import getcontent from '../../../utils/api';
export default {
  data () {
    return {
		billdata:{}
		}
  },
  methods: {
	viewtick:function(){
				wx.showToast({
				title: '暂无法查看',
				icon: 'none',
				duration: 2000
				})
	}
  },
  onLoad(e){
	 let orderN=JSON.parse(e.item).order_no;
    let than=this;
    let conf={
      // "token":store.state.token,
      "token": "48a828dc8bd27fd82b26121a5f6a3cc42d209973338bb1fdc1de19338d27263a",
      "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
      "id": "getMyBillsDetails",
	    	}
		let  req= {
             "order_no":"20190220113946568638428092627" // 账单编号
        }
    // console.log("conf",conf)
    getcontent.getapi(conf,req,function(data){
			console.log("交易记录",data.data.data[0])
      if(data.data.result.code==0){
		   if(data.data.data.length>0){
				than.billdata=data.data.data[0]
		   }else{
				  wx.showToast({
							title: '暂无详情订单',
							icon: 'none',
							duration: 1000
						})	
		   }
      }else if(data.data.result.code==400001){
					wx.showModal({
							content:'token失效，重新登录',
								success(res) {
									if (res.confirm) {
										wx.navigateTo({ url: '/pages/login/main'})
									 } else if (res.cancel) {
										console.log('用户点击取消')
										}
									 }
								})
      }else{
				  wx.showToast({
							title: ''+ data.data.result.msg,
							icon: 'none',
							duration: 1000
						})	
		}
    })
  }

}
</script>

<style scoped>
.bg{
	background:#f3f3f3;
	height:100vh;
	width:100%;
	box-sizing:border-box;
}
.up{
	height: 93vh;
	width: 100%;
	background: #f2f2f2;
	box-sizing: border-box;
	padding: 10rpx 20rpx;
}
.dn{
	height: 7vh;
	width: 100%;
	background: gray;
	box-sizing: border-box;
	line-height: 7vh;
	text-align: center;
	color: white;
	font-size: 30rpx;
	font-weight: bolder;
}
.title{
	height:10vh ;
	background: white;
	display: flex;
	padding: 0 50rpx;
	border-bottom: 2rpx solid #f2f2f2;
}
.titleleft{
	text-align:left;
	color:#666666;
	font-size: 24rpx;
	line-height: 10vh;
	font-weight: bolder;
	width:20%;
}
.titleright{
	text-align: right;
	line-height: 10vh;
	/* background: blue; */
	width: 80%;
	font-size: 40rpx;
	color: #333333;
	font-weight: bolder;
}
.detail{
	height: 25vh;
	background: white;
	width: 100%;
	padding: 20rpx 50rpx;
	overflow-y: scroll;
	box-sizing: border-box;
	border-bottom: 2rpx solid #f2f2f2;
}
.detailtilte{
	background: white;
	line-height: 5vh;
	font-size: 24rpx;
	color:#666;
	display: flex;
}
.detailtiltename{
	width: 30%;
	font-weight: bolder;
}
.detailtilteparking{
	width: 70%;
	color: #9B9B9B;
	/* background: rebeccapurple; */
	font-weight: bolder;
}
.detailtiltetxt{
	width: 70%;
	color:#9B9B9B;
	font-weight: initial
}
.timer{
	background: white;
	height: 10vh;
	padding :0 50rpx;
	color:#666;
	line-height: 5vh;
	display: flex;
	border-bottom:2rpx solid #f2f2f2;
}
.timerleft{
	text-align:left;
	color:#666666;
	font-size: 24rpx;
	line-height: 5vh;
	font-weight: bolder;
	width:30%;
}
.timeright{
	line-height: 5vh;
  font-size: 24rpx;
	width: 70%;
	color: #9B9B9B;
}
.rule{
	background: white;
	height: 20vh;
	width: 100%;
	box-sizing: border-box;
	padding :10rpx 30rpx;
	border-bottom: 2rpx solid #f2f2f2;
}
.ruletitle{
	background: white;
	line-height: 4vh;
	font-size: 24rpx;
	font-weight: bolder;
  color:#666666;
}
.ruleitem{
		display: flex;
		background: white;
		color:#9B9B9B;
		font-size: 20rpx;
		text-align: center;
}
.ruleitemleft{
		background:white;
		width: 30%;
}
.ruleitemright{
		background:white;
			width: 60%;
}
.tick{
	display: flex;
	background: white;
	box-sizing: border-box;
	height: 5vh;
}	
.tickleft{
 /* background: blue; */
 	box-sizing: border-box;
	width: 30%;
	padding-left: 30rpx;
	font-size: 24rpx;
	color: #666666;
	line-height:5vh;

}
.tickright{
 /* background: yellow; */
	font-size: 24rpx;
	color: #FF9933;
	line-height:5vh;
	padding-left: 80rpx;
	box-sizing: border-box;
 width: 70%;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
