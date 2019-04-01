<template>
  <div class="bg">
			<div class="boxOne">
				<div class="oneLeft">
						<div  class="oneLeftUp">{{meney}}元</div>
						<div  class="oneLeftDown">停车费余额</div>
				</div>
				<div class="oneRight">
						<img src="/static/images/bag.png" alt="">
				</div>
			</div>
			<div class="boxTwo">
					<span class="boxTwoTile">充值金额</span>
			</div>
			<div class="boxThree">
					<div  v-for="(val ,index) in change " :class="val.bg" :key="index" @click="binditem(val,index)">
									<div class="boxitemup">{{val.Actual}}</div>
									<div  class="boxitemdown">实际支付：￥{{val.sale}}</div>
					</div>
			</div>
			<div class="boxFour">
					<div class="boxFourUp">注意：预缴费在云停车停车不停车收费缴费使用，一经充值，不可提现</div>
					<div  class="boxFourDown">
									 <!-- <span class="boxFourDowncheck"><van-checkbox :value="checked" @change="onChange"></van-checkbox></span>	 -->
                   <!-- <span>已阅读</span>
							     <span class="boxFourDownprot">停车费充值协议</span> -->
					</div>
			</div>
			<div class="boxFive">
					<img src="/static/images/gift.png" alt="">
			</div>
			<div class="boxSix">
				<div class="boxSixLeft">
						<span>总金额</span>
						<span class="padding20">￥50.00</span>
				</div>
				<div class="boxSixRight" @click="jumporder">
					<span>缴费</span>
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
			checked:true,
			meney:"00.00",
			change:[]
    }
  },
  methods: {
				onChange(e){
					this.checked=!this.checked
				},
				jumporder:function(){
					wx.navigateTo({ url: "../ticketpayorder/main"})
				},
				binditem(x,y){
					for(let i=0,j=this.change.length;i<j;i++){
								if(i==y){
									this.change[y].bg=	"chickboxitem"
								}else{
									this.change[i].bg=	"boxitem"
								}
					}
				},
				promisefun1:function(){
								let conf={
											"token":store.state.token,
											"consumer": "cn.sanray.city.parking.composite.service.ParkingCoupon",
											"id": "queryParkingCoupon",
								}
							let req= {
											"parking_coupon_id": 0,//停车券id【parking_coupon_id有效时，下面的参数无效】
											"parking_coupon_code": null,//停车券编号
											// "city_code": store.state.currentCity.code,//城市编码
											"city_code": "A001",//城市编码
											"company_id": 1075,//公司id【有效时不能为空】
											"direction": 1,// 翻页方向【1：下一页；2：上一页】
											"start_id": 0,// 起始id
											"page_size":10// 每页大小
								}
					let getdata= new Promise((resolve, reject) => {
								getcontent.getapi(conf,req,function(data){
										console.log("promisefun1",data)
										resolve(data.data.data)
									})
						});
						return getdata
				},
				promisefun2:function(){
					let conf={
							"token":store.state.token,
							"consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
							"id": "getMemberInfo",
						}
					let getdata= new Promise((resolve, reject) => {
								getcontent.getapi(conf,{},function(data){
									console.log("promisefun2",data)
											resolve(data.data.data)
								})
						});
						return getdata
				},

	},
  onShow(){
			let than=this;
				than.promisefun1().then(function(value) {
							let temparr=[]
									for(let i=0,j=value.length;i<j;i++){
											let obj={}
											obj.Actual=parseInt(value[i].coupon_money)/100;
											obj.sale=parseInt(value[i].buy_money)/100;
											obj.bg="boxitem";
											obj.company_id=value[i].company_id;
											obj.city_code=value[i].city_code;
											obj.valid_end_date=value[i].valid_end_date;
											obj.parking_coupon_id=value[i].parking_coupon_id;
											obj.parking_coupon_code=value[i].parking_coupon_code;
											temparr.push(obj)
										}
				            than.change=temparr
						}, function(error) {})

			     than.promisefun2().then(function(value){
							// console.log("余额",value)
							 than.meney=parseFloat(value[0].wallet_mny)/100
				})
   }

 }
</script>

<style scoped>
	.bg{
		width: 100%;
		height: 100vh;
		background: #EEEEEE;
		box-sizing: border-box;
		/* border: 1rpx solid black; */
	}
	.boxOne{
		width: 100%;
		height: 20vh;
		background: #434343;
		display: flex;
		padding: 20rpx 50rpx;
		box-sizing: border-box;
	}
	.oneLeft{
		background: #434343;
		height: 100%;
		width: 100%;
		color:white
	}
	.oneLeftUp{
		background: #434343;
		height: 70%;
		font-size: 100rpx;
		font-weight: 100;
	
	}
	.oneLeftDown{
		  background: #434343;
			font-size: 24rpx;
			height: 30%;
	}
	.oneRight{
		background: #434343;
		height: 100%;
		width: 100%;
		text-align: center;
	}
	.oneRight img{
		height: 170rpx;
		width: 150rpx;
	}
	.boxTwo{
		width: 100%;
		height: 5vh;
		background: white;	
	}
	.boxTwoTile{
		border-left: 10rpx solid #FF9933;
		font-size: 24rpx;
		display:inline-block;
		margin-left: 40rpx;
	}
	.boxThree{
		margin-top: 1vh;
		width: 100%;
		height: 30vh;
		background: white;	
		display: flex;
		flex-direction: row ;
		 flex-wrap: wrap;
		 padding:25rpx 30rpx;
		 text-align: center;
		 box-sizing: border-box;
	}
	.boxitem{
		border: 1rpx solid #B5B5B5;
		border-radius: 10rpx;
		height: 120rpx;
		width: 200rpx;
		margin: 10rpx;
		box-sizing: border-box;
		padding-top: 10rpx;
		color:#999898;
	}
	.chickboxitem{
		border: 0rpx solid #B5B5B5;
		background: #FF9933;
		color:white!important;
		border-radius: 10rpx;
		height: 120rpx;
		width: 200rpx;
		margin: 10rpx;
		box-sizing: border-box;
		padding-top: 10rpx;
	}
	.boxitemup{
		/* color:#999898; */
		font-size: 28rpx;
		font-weight: bolder;
		line-height: 50rpx;
	}
	.boxitemdown{
		/* color:#B5B5B5; */
		font-size: 20rpx;
		line-height: 50rpx;
	}
	.boxFour{
		width: 100%;
		height:8vh;
		background: white;	
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-top: 10rpx;
	}
	.boxFourUp{
		font-size:20rpx;
		color:#989898;
		background: white;

	}
	.boxFourDown{
		background: white;
		line-height: 3vh;
		display: flex;
		box-sizing: border-box;
		color:#343434;
		font-size: 20rpx;
	}
	.boxFourDownprot{
		color:#0890E7;
		margin-left: 20rpx;
	}
	.boxFourDowncheck{
			border-radius: 50%;
			margin-right: 10rpx;
			height: 40rpx;
			width: 40rpx;
	}
	.boxFive{
		width: 100%;
		height:30vh;
		background: white;	
		padding: 20rpx 50rpx;
		box-sizing: border-box;
	}
	.boxFive img{
		height: 190rpx;
		margin: 0 auto;
	}
	.boxSix{
		width: 100%;
		height:6vh;
		background: burlywood;	
		box-sizing: border-box;
		display: flex;

	}
	.boxSixLeft{
		width: 80%;
		background: #F8B551;
		box-sizing: border-box;
		padding-left: 20rpx;
		color: white;
		font-size: 30rpx;
		line-height: 6vh;
	}
	.boxSixRight{
		width: 20%;
		text-align: center;
		color: white;
		font-size: 30rpx;
		line-height: 6vh;
		background: #FF9933;
	}
	.padding20{
		padding-left: 20rpx;
	}


</style>