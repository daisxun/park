<template>
  <div class="billbg">
  		<div class="tabs">
  			<ul class="tar_ul"  >
  				<li :class="{ actives:val.show }"  v-for="(val,index) in tabs" :key='index' @click="bindChange(val)">{{val.name}}</li>
  			</ul>
  		</div>
  		<div>
  			<div class="conter"  v-show="'A'==ids">
  				<div class="box" v-for="(val,index) in nopay" :key='index'>
						<!-- <div> -->
							<div class="nopaybox">
							<div class="nopayup">
								<div class="plate">{{val.plate_number}}</div>
								<div class="type" @click="jumpunpay(val,index)">停车类型：{{val.business_type==1?"路外停车":"路内停车"}}</div>
							</div>
							<div class="nopaymd">
								<!-- 地址：{{val.address}} -->
								<span class="addrs"></span>
								<span @click="jumpchange(val,index)" class="btns">￥{{val.payamount/100}}</span>
							</div>
							<div class="nopaydown">
							<span>{{val.created_time}}</span>
							</div>
							</div>
						<!-- </div> -->
  				</div>
  			</div>
  			<div class="conter"  v-show="'B'==ids">
  				<div class="box" v-for="(val,index) in pays" :key='index'>
							<div class="paybill">
									<div class="payup">
										<div class="payup_first">
										   <span class="pay_tt">{{val.plate_number}}</span>
										   <span class="pay_tp"  @click="jumppay(val,index)">停车类型：{{val.business_type==1?"路外停车":"路内停车"}}</span>
										</div>
										<div class="payup_last">
										    <span class="pay_my">消费金额:{{val.payamount/100}}元</span>
										</div>
									</div >
									<div class="paymd">
										<!-- <div class="payadd"><span>地址：深圳市南山路123路</span></div>
										<div class="payadd"><span></span></div>
										<div class="payshi"><span>实付金额:202元</span></div> -->
									</div>
									<div class="paydown">
										<div class="paytimer"><span>{{val.created_time}}</span></div>
										<!-- <div class="paysub"><span >优惠金额:202元</span></div> -->
									</div>
							</div>
  				</div>
  			</div>
  			<div class="conter"  v-show="'C'==ids">
  				<div class="box" v-for="(val,index) in revoke" :key='index'>
  					<revokebill v-bind:pay="val"></revokebill>
  				</div>
  			</div>
  		</div>
  </div>
</template>

<script>
import store from '../../store';
import getcontent from '../../../utils/api';
import revokebill from '@/components/revokebill'
export default {
   components: {
	    revokebill
	  },
  data () {
    return {
    	ids:'A',
      tabs: [{id:'A',name:'未支付',show:true},
             {id:'B',name:'已完成',show:false},
             {id:'C',name:'已撤销',show:false}],
     nopay:[],
  	pays:[],
    revoke:[]
		  }

   },
  methods:{
			bindChange:function(e){
				// console.log("id",e.id)
							let req={}				// 	"bill_type"支付状态:0(未支付);1(已支付);2(已关闭)
									if(e.id=="A"){
								    req= {	"bill_type": 0 }
								}else if(e.id=="B"){
										req= {	"bill_type": 1 }
								}else if(e.id=="C"){
										req= {	"bill_type": 2 }
								}
	          let than=this;
						let conf={
							// "token":store.state.token,
							"token": "48a828dc8bd27fd82b26121a5f6a3cc42d209973338bb1fdc1de19338d27263a",
							"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
							"id": "getMyBills",
						}
				for (var val in this.tabs){
					if(this.tabs[val].id==e.id){
						this.tabs[val].show=true;
						this.ids=this.tabs[val].id;
						getcontent.getapi(conf,req,function(data){
							// console.log("交易记录",data.data.data)
							if(data.data.result.code==0){
								    if(req.bill_type=="0"){
											      if(data.data.data.length>0){
															than.nopay=data.data.data
														}else{
															wx.showToast({
																	title: '暂无订单数据',
																	icon: 'none',
																	duration: 1000
																})
														}		
										}else if(req.bill_type=="1"){
											      if(data.data.data.length>0){
															than.pays=data.data.data
														}else{
															wx.showToast({
																	title: '暂无订单数据',
																	icon: 'none',
																	duration: 1000
																})
														}
										}else if(req.bill_type=="2"){
												      if(data.data.data.length>0){
															than.revoke=data.data.data
														}else{
															wx.showToast({
																	title: '暂无订单数据',
																	icon: 'none',
																	duration:1000
																})
														}
														
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
					}else{
						this.tabs[val].show=false
					}
				}
				
			},
		jumpunpay:function(e,x){
				wx.navigateTo({
				url: '/pages/jumplist/billunpaylist/main?item='+JSON.stringify(e)
			})
		},
		jumppay:function(e){
				wx.navigateTo({
				url: '/pages/jumplist/billpaylist/main?item='+JSON.stringify(e)
			})
		},
		jumpchange:function(){
				wx.navigateTo({
						url:"/pages/jumplist/ticketpay/main"
					})	
			}
	},
	onShow(){
    let than=this;
    let conf={
      // "token":store.state.token,
      "token": "48a828dc8bd27fd82b26121a5f6a3cc42d209973338bb1fdc1de19338d27263a",
      "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
      "id": "getMyBills",
	    	}
		let  req= {
             "bill_type": 0 // 支付状态:0(未支付);1(已支付);2(已关闭)
        }
    getcontent.getapi(conf,req,function(data){
			// console.log("交易记录",data.data)
      if(data.data.result.code==0){
				  if(data.data.data.length>0){
							than.nopay=data.data.data
					}else{
					  wx.showToast({
									title: '暂无订单数据',
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
.billbg{
	background:#f3f3f3;
	width:100%;
	height:100vh;
}
.tabs{
	background:red;
	box-sizing:border-box;
}
.tar_ul{
	background:#BFBFBF;
	display:flex;
	color:#FFFFFF;
	line-height:80rpx;
	text-align:center;
	font-size:28rpx;
	box-sizing:border-box;
}
.tar_ul li{
	flex:1;
}
.actives{
	background:#F8A350;
}
.conter{
	margin-top:10rpx;
	height:90vh;
	overflow-y:scroll;

}
.box{
	padding:0 40rpx;
	padding-top:25rpx;
	box-sizing:border-box
}
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}

/* 未支付 */
.nopaybox{
  /* background:#fff; */
  background:white;
  height:12vh;
  box-sizing:border-box;
  padding:10rpx 20rpx;
  border-radius:10rpx;
}
.nopayup{
  height:3vh;
  display:flex;
	background: white
}
.plate{
  color:#4D4D4D;
  font-size:30rpx;
	line-height: 3vh;
	font-weight:bold;
}
.type{
  color:#F8A350;
  font-size:26rpx;
 	line-height: 3vh;
  padding-left:20rpx;
  box-sizing:border-box;
}
.nopaymd{
	/* background: green; */
	height: 50rpx;
	display: flex;
}
.addrs{
  color:#999999;
	background: white;
	width: 80%;
	/* display: inline-block; */
	/* width: 45%; */
	/* background: pink */
	/* height: 20rpx; */
  /* font-size:26rpx; */
}
.btns{
  background:#FF9933;
	padding:15rpx  10rpx 0 10rpx;
	line-height: 20rpx;
	width: 15%;
	text-align: center;
	display: inline-block;
  border-radius: 10rpx;
  color:#FFFFFF;
  font-size:24rpx;
  /* padding:10rpx; */
  /* margin-left:30%; */
}
.nopaydown{
  height:40rpx;
  color:#999999;
  font-size:26rpx;
}
/* 已完成 */
.paybill{
  background:#fff;
  border-radius:10rpx;
  height:200rpx;
  box-sizing:border-box;
  padding:10rpx;
}
.payup{
  height:60rpx;
  display:flex;
}
.payup_first{
width:60%;
}

.pay_tt{
  color:#4D4D4D;
  font-size:30rpx;
  font-weight:bold;
  line-height:60rpx;
}
.pay_tp{
  color:#F8A350;
  font-size:24rpx;
  line-height:60rpx;
  padding:0 20rpx;
}
.payup_last{
  width:40%
}
.pay_my{
  color:#999999;
  font-size:26rpx;
  line-height:60rpx;
  width:100%;
  display:inline-block;
}
.paymd{
  height:60rpx;
  color:#999999;
  font-size:26rpx;
  display:flex;
  line-height:60rpx;
}
.paydown{
  height:60rpx;
  display:flex;
  color:#999999;
  font-size:26rpx;
  line-height:60rpx;
}
.paytimer{
  width :60%;
}
.payadd{
  width:60%;
}
.payshi{
   width:35%;
   box-sizing:border-box;
}
.paysub{
  width:40%;
  box-sizing:border-box;
}
</style>

		    // {plate_number:'粤123456',business_type:'泊车',address:'深圳市南山路1213号',created_time:'2018-1-1 t:12;12:12', payamount:'124.00'},
		    // {plate_number:'粤123456',business_type:'泊车',address:'深圳市南山路1213号',created_time:'2018-1-1 t:12;12:12', payamount:'124.00'},
				// {plate_number:'粤123456',business_type:'泊车',address:'深圳市南山路1213号',created_time:'2018-1-1 t:12;12:12', payamount:'124.00'}

	        // {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'}

				// 			    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'},
		    // {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12' ,money:'124.00'},
		    // {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'}