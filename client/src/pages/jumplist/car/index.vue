<template>
  <div class="bg">
  		<div class="car_head">
  			<ul class="contenr">
  				<li class="child_li" v-for="(val,index) in user" :key="index">
  					<span class="li_left">{{val.keys}}</span>
  					<span class="li_right">{{val.values}}</span>
  				</li>
  			</ul>
  			<div class="edit" @click="edit"><span >{{btntxt}}</span></div>
					<div :class="boxmodel"	>
					   	<div :class="errottxt">
								 {{errormsg}}
							 </div>
								<div class="edit_Box">
										<van-cell-group>
											<van-field
												:value="vanName"
												clearable
												label="用户名"
												placeholder="请输入用户名"
												@input="completeInputMobilevanName"
											/>
												<van-field
												:value="vanaddress"
												clearable
												label="地址"
												placeholder="请输入用户地址"
													@input="completeInputMobilevanaddress"
											/>
											<van-field
												:value="vanphone"
												clearable
												label="手机"
												placeholder="请输入用户手机"
													@input="completeInputMobilevanphone"
											/>
										</van-cell-group>
										<div class="btn"><span class="btn1" @click="onClose">取消</span><span class="btn2" @click="onfirm">确定</span></div>
								</div>
						</div>
  		</div>
  		<div class="car_body">
  			<div class="car_title">
  				<span class="mycar">我的车辆</span>
  			</div>
  			<div class="car_lists">
  				<div class="car_box" v-for="(val,index) in car" :key="index">
								<div class="carlist">
										<ul class="carul">
											<li>
												<span class="car_left">{{val.carnumber}}</span>
												<span class="car_right"> <span class="txtgray">{{val.carColor}}</span> </span>
											</li>
											<li>
												<span  class="car_left"> <span class="txtgray">车型：{{val.carmode_nane}}</span> </span>
												<span class="car_right"><span @click="delcar(val,index)" class="txtyeelow"> 删除</span> </span>
											</li>
										</ul>
								</div>
  				</div>
  			</div>
  			<div class="edit" @click="addcar"><span>添加车辆</span></div>
  		</div>
  		<div class="car_foot">
  			<!-- <button class="complet">完成</button> -->
  		</div>
  </div>
</template>

<script>
import Dialog from 'vant-weapp/dist/dialog/dialog';
import store from '../../store';
import getcontent from '../../../utils/api';
// console.log(store.state.userinfo)
export default {
  data () {
    return {
			vanName:"",
			vanaddress:"",
			vanphone:"",
			btntxt:"",
      user: [{keys:'姓名',values:"请编辑用户姓名"}, {keys:'地址',values:"请编辑用户地址"}, {keys:'手机',values:"请编辑手机号码"}],
			boxmodel:"hidemodel",//hidemodel  model
			show:true,
			errormsg:"none",
			errottxt:"titletxthide", //titletxt titletxthide
      car:[ ]
    }
	},
	methods:{
		edit(){
			this.boxmodel="model";
			 },
		addcar(){
			 wx.navigateTo({ url: "../addCar/main"})
	  	},
		completeInputMobilevanName (event) {
				//  console.log(event.mp.detail)
					this.vanName=(event.mp.detail)
			} ,
		completeInputMobilevanaddress (event) {
				  // console.log(event.mp.detail)
					this.vanaddress=(event.mp.detail)
			} ,
		completeInputMobilevanphone (event) {
					// console.log(event.mp.detail)
						this.vanphone=(event.mp.detail)
      } ,
		onClose(event) {
				  let than=this;
 				this.boxmodel="hidemodel";			
		 	},
		onfirm(e){
				let than=this;
				// this.boxmodel="hidemodel";	
				if(than.vanName.length==0){
						this.errormsg="姓名错误"
		      	this.errottxt="titletxt"
						setTimeout(() => {
								this.errormsg="none";
								this.errottxt="titletxthide"
						},500);
				}else if(than.vanaddress.length==0){
						this.errormsg="地址错误"
		      	this.errottxt="titletxt"
						setTimeout(() => {
								this.errormsg="none";
								this.errottxt="titletxthide"
						},500);
				}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(than.vanphone))){
					this.errormsg="手机错误"
		      	this.errottxt="titletxt"
						setTimeout(() => {
								this.errormsg="none";
								this.errottxt="titletxthide"
						},500);
				}else{
					console.log(store.state.userinfo.carowner_id)
		  	let tempid=[{keys:'姓名',values:than.vanName},{keys:'地址',values:than.vanaddress}, {keys:'手机',values:than.vanphone}]
						 this.boxmodel="hidemodel";
						if(than.btntxt=="编辑"){
					  	let conf={
									"consumer":  "cn.sanray.city.parking.carowner.client.service.WxClient",
									"id": "updateOwnerInfo",
									"token":store.state.userinfo.token
									}
							let req= {
									"car_owner_id": store.state.userinfo.carowner_id, // 
									"name":than.vanName, // 姓名
									"identityno":"", // 身份证号
									"address": than.vanaddress, // 地址
									"telephone": than.vanphone // 手机号
						    	}
								getcontent.getapi(conf,req,function(data){
									// console.log(data)
											if(data.data.result.code==-1){
												wx.showToast({
																title: data.data.result.msg,
																icon: 'none',
																duration: 2000
															})
											}else if(data.data.result.code==0){
													than.user=tempid;
															than.vanName="";
															than.vanaddress="";
															than.vanphone="";
													wx.showToast({
																		title: "修改成功",
																		icon: 'none',
																		duration: 2000
																	})
											}
								})
						}else if(than.btntxt=="登记"){
							let regConf={
								"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
								"id": "addOwnerInfo",
								"token":store.state.userinfo.token
							}
							let regReq={
									"city_code": than.city_code, // 城市编码
									"name": than.vanName, // 姓名
									"identityno": "", // 身份证号
									"address": than.vanaddress, // 地址
									"telephone":than.vanphone// 手机号
							}
						  getcontent.getapi(regConf,regReq,function(data){
									console.log(data)
											if(data.data.result.code==-1){
												wx.showToast({
																title: data.data.result.msg,
																icon: 'none',
																duration: 2000
															})
											}else if(data.data.result.code==0){
													than.user=tempid;
															than.vanName="";
															than.vanaddress="";
															than.vanphone="";
															than.btntxt="编辑";
													wx.showToast({
																		title: "登记成功",
																		icon: 'none',
																		duration: 2000
																	})
											}
								})

						}
	   	}
		},
		delcar(x,y){
			   	let than=this;
						// console.log("获取车辆信息",store)
					let req= {
									"car_id": x.car_id // 车辆id
								}
					let conf={
										"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
										"id": "deleteOwnerCar",
										"token":store.state.userinfo.token
									}
						getcontent.getapi(conf,req,function(data){
							console.log("删除",data)
							if(data.data.result.code==0){
								than.car.splice(y,1);
									wx.showToast({
										title:"删除成功！",
										icon: 'none',
									})

							}else{
									wx.showToast({
										title:"删除成功！",
										icon: 'none',
									})
							}
						})
		}
	},
	onShow(){
		let than=this;
		let req= {
					}
		let conf={
							"consumer":  "cn.sanray.city.parking.carowner.client.service.WxClient",
							"id": "getOwnerInfoAndAllCars",
							"token":store.state.userinfo.token
						}
						wx.getStorage({
							key: 'currentCity',
							success(res) {
								console.log(res)
								than.city_code=res.data.code
							}
						})
			getcontent.getapi(conf,req,function(data){
				console.log("获取车主车辆信息",data)
						if(data.data.result.code==-1){
							than.btntxt="登记";
							wx.showToast({
											title: data.data.result.msg,
											icon: 'none',
											duration: 2000
										})
						}else {
							than.btntxt="编辑";
							than.user=[{keys:'姓名',values:data.data.data[0].name}, 
												 {keys:'地址',values:data.data.data[0].address},
												 {keys:'手机',values:data.data.data[0].telephone}]
							than.car=JSON.parse(data.data.data[0].car_owner_car_info)
						}
						// console.log("我的车辆信息",JSON.parse(data.data.data[0].car_owner_car_info))
						
			})
		}

}
</script>

<style scoped>
/* 模态框 */
.model{
	position: absolute;
	top:0;
	box-sizing: border-box;
	height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	
}
.hidemodel{
	display: none;
	visibility: hidden;
}
.titletxt{
	background: white;
	text-align: center;
	font-size: 28rpx;
	color:red;
	line-height: 40rpx;
 
}
.titletxthide{
	height:40rpx;
	width: 100%;
 background: rgba(0, 0, 0, 0.5);
 color:rgba(0, 0, 0, 0);
}
.btn{
	/* background: red; */
	display: flex;
	font-size: 30rpx;
	text-align: center;
	line-height:80rpx;
}
.btn1{
	/* background: blue; */
	width: 50%;
	color:#999;
	
}
.btn2{
		/* background: green; */
		width: 50%;
		color:#F9B570
}
.edit_Box{
	height: 30vh;
	margin-top: 30vh;
	width: 80%;
	box-sizing: border-box;
  margin: 0 auto;
	background: white;
	border-radius: 30rpx;
	padding: 10rpx;
	margin-top: 25vh;
	/* padding-top: 30vh; */
}
.edit_body{
	height: 30vh;
	width: 80%;
	background: red;
	margin: 0 auto;
}
.overlay_style{
	background: red;
}
/* 我的车辆 */
.carlist{
  background:#fff;
  height:120rpx;
  box-sizing:border-box;
  border-radius:10rpx;
}
.carul li{
  line-height:60rpx;
  font-size:24rpx;
  padding-left:40rpx;
  padding-right:40rpx;
  border-radius:10rpx;
  box-sizing:border-box;
  display :flex;
}
.car_left{
  width:50%;
}
.car_right{
    width:50%;
    text-align:right;
}
.txtgray{
	color:#A5A5A5
}
.txtyeelow{
	color:#FF9933
}

/* 主页面 */
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
	height:58vh;
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
