<template>
  <div class="bg">
   <div class="conter">
   	 <div class="item" v-for="(txt,it) in columns " :key="it">
   	 	<div class="up">
   	 		<div>{{txt.space}}</div>
   	 		<div @click="jumplist(txt)">{{txt.limit}}</div>
   	 	</div>
   	 	<div class="down">
						<div>绑定车辆：{{txt.bindcar}}</div>
						<div v-if="txt.flag==0" >{{txt.timer}}</div>
						<div v-if="txt.flag==1" >已到期，请前往 <span @click="remain"  class="remain">续月组</span> </div>
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
      columns:[{space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234561",timer:`到期时间，2019-10-12`,flag:1},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234562",timer:"到期时间，2019-10-12",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234563",timer:"到期时间，2019-10-13",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234564",timer:"到期时间，2019-10-14",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234565",timer:"到期时间，2019-10-15",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234566",timer:"到期时间，2019-10-16",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234567",timer:"到期时间，2019-10-17",flag:0},
               {space:"167所有车场",limit:"月租缴费记录",bindcar:"粤1234568",timer:"到期时间，2019-10-18",flag:0}]
		}
	},
  methods: {
	  jumplist(event) {
			console.log(event)
			wx.navigateTo({ url: '/pages/jumplist/leasedetail/main'})
		},
		remain(){
			wx.navigateTo({ url: '/pages/jumplist/mounrent/main'})
		}
  },
  	onShow(){
			let than=this;
			// 第一步获取城市id
			wx.getStorage({
					key: 'currentCity',
					success(res) {
							  let conf={
											"token":store.state.token,
											"consumer":"city.offroad.parking.service.parking.space",
											"id": "getParkingByOrgAndCity",
											  }
							  let req= {
											"orgid": 0,//组织id
											// "cityid": res.data.code,//城市id
											"companyid": store.state.userinfo.company_id,//公司id
											"cityid": 3002//公司id
											}
											// 第二步获取所有车场信息
							getcontent.getapi(conf,req,function(data){
                    console.log("getParkingByOrgAndCity",JSON.parse(data.data.data.list))
			          if(data.data.result.code==0){   
			               let remember=JSON.parse(data.data.data.list);
			                  if(remember.length>0){
			                      let arr=remember.map(function(x,y,z){
			                          return  x.map
			                          })
															console.log("getParkingByOrgAndCity",arr)
															// 第三步开始请求月租车信息
																let conf={	"token":store.state.token,
																				   	"consumer": "car.longlease.manager.service.definition.CarlongleaseService",
																					  "id": "getCarsByCarOwner" }
															  let req= { "id": store.state.userinfo.carowner_id }
																   getcontent.getapi(conf,req,function(data){
																						console.log("第三步开始请求月租车信息",data.data.data)
																								          if(data.data.result.code==0){   
																								//               let remember=JSON.parse(data.data.data.data);
																								//         console.log("第三步开始请求月租车信息",remember)
																								                  if(remember.length>0){	
																								                      let arr=remember.map(function(x,y,z){
																								                          return  x.map
																								                        })
																								                  let temparr=[]
																								//                     for(let i=0,j=arr.length;i<j;i++){
																								//                           if(arr[i].parkings.list.length!=0){
																																											// console.log(arr[i])
																																												// for(let x=0,y=arr[i].parkings.list.length;x<y;y++){
																																														// let a={}
																																														    // a.parking_id=arr[i].parkings.list[x].parking_id
																																																// a.carid=arr[i].parkings.list[x].carid
																																																// a.carColor=arr[i].carColor
																																																// a.car_id=arr[i].car_id
																																																// a.car_owner_id=arr[i].car_owner_id
																																																// a.carnumber=arr[i].carnumber
																																																// a.carnumberold=arr[i].carnumberold
																																																// a.groupid=arr[i].groupid
																																																// a.is_delete=arr[i].is_delete
																																																// a.isfixedparking=arr[i].isfixedparking
																																																// a.opter_id=arr[i].opter_id
																																														// temparr.push(a)
																																												// }
																																										// let var1=arr[i].parkings.list.map(function(x,y,z){
																																										// 				let a=	x.map
																																																
																																										// 			return a;
																																										// 	 })
																																											//  temparr.push(var1)
																																											 

																								//                              }
																								//                       }
																							                  	console.log("temparr",temparr)	
																																	// console.log("temparr",temparr)
																								                        
																								                  }
																								          }else{
																														wx.showToast({
																																title: data.data.result.msg,
																																icon: 'none',
																																duration: 2000
																															})
																							     	}
																				       }) 
			                  }
			              }else if(data.data.result.code==-1){
																				wx.showToast({
																					title: data.data.result.msg,
																					icon: 'none',
																					duration: 2000
																				})
		                       	}
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
	/* color:grey; */
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
	color:#F6A648
}
.down{
	 line-height:95rpx;
	 /* background: red; */
	display: flex;
}
.down :first-child{
	width:50%;
	font-size: 24rpx;
	color:#363636;
	font-weight:bold;
}
.down :nth-child(2){
	width:50%;
	color:grey;
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
		font-size: 24rpx;
	color:#363636;
}
.down :nth-child(3){
	width:50%;
	color:grey;
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
		font-size: 24rpx;
	color:#363636;
}
.remain{
	color:#F6A648!important
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
