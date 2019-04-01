<template>
  <div class="bg">
			<div class="title">快速缴费协议</div>
			<div class="pager">
			   	<p>
			    	 当账户绑定车辆进入本系统管理停车场时，系统将根据停车实际应缴费金额，并自动从车牌牌号绑定的唯一账户预缴停车费账户中自动扣费，
				     当账户余额充足，车牌识别后即可实现自动放行立场。
				 	</p>
			</div>
		
			<div class="title">快速缴费优先级</div>
		  <div class="pager">
				  <p>
	            快速缴费属于自动扣费，系统会自动先使用可用的面额最大的优惠券，剩余部分从停车预缴费余额中扣除。
					</p>
				</div>	
			<div class="title">可能存在的风险</div>	
			<div class="pager">
				  	<p>
              快速缴费基于车辆车牌号识别和云停车绑定账户扣取费用，对于扣费金额的分歧，你需要另行向停车场反馈，协商处理，云停车客服电话：4001000
				  	</p>
				  	<p>
		     	     当您的车辆出借给他人，如果您不希望支付借车人出入停车场所产生的停车服务费，建议暂时关闭不停车缴费
				  	</p>
	   </div>
		 <div class="btn">
			 	<div class="btncss">开启快速缴费</div>
		 </div>
		 <div class="btn">
			 		<div  class="btncss" @click="bindcar">绑定快速缴费车辆</div>
		 </div>
		 <div class="btn">
			 	<div  class="btncss" @click="getcharge">充值</div>
		 </div>
		 <van-dialog
					use-slot
					async-close
					:show="show"
					show-cancel-button
					@close="onClose"
					
				>
							<div class="dialogtitle">绑定快速缴费车辆</div>
							<radio-group class="radio-group" @click="onChange">
		            
								<label class="radio"  v-for="(val,index) in items" :key="index">
									<span class="csstip">{{val.value}}</span>
									<radio :value="val.name" class="cssup"  :checked="val.checked" />
								</label>
							</radio-group>
				</van-dialog>
	</div>

</template>

<script>
import Dialog from '../../../../static/vant//dialog/dialog';
import mpToast from 'mpvue-weui/src/toast';
import getcontent from '../../../utils/api';
import store from '../../store';
export default {
   components: {
	    mpToast,
	  },
   data () {
    return {
			show:false,
			items:[
				      {name: 'USA', value: 'testx'},
							{name: 'CHN', value: 'testx', checked: 'true'},
							{name: 'BRA', value: 'testx'},
			]
			
    }
  },
   methods: {
		 bindcar:function(){
				 // this.show=true
			wx.navigateTo({
						url:"/pages/jumplist/addCar/main"
					})
		 },
		 onClose:function(event) {
			 	this.show=false
			},
			onChange:function(event){
					// console.log(event.mp._relatedInfo.anchorRelatedText)
					console.log(event)
			},
			getcharge:function(){
				wx.navigateTo({
						url:"/pages/jumplist/ticketpay/main"
					})
			}
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
	.title{
		/* background: red; */
		height: 5vh;
		width: 100%;
		color:323232;
		font-size: 36rpx;
		font-weight: bolder;
		box-sizing: border-box;
		padding-left: 30rpx;
		padding-top: 10rpx;
	}
	.pager{
		font-size: 20rpx;
		color: #323232;
		padding: 30rpx;
		height: 15vh;
		box-sizing: border-box;
		/* border: 1rpx solid red; */
	}
	.btn{
		height: 10vh;
		width: 100%;
		/* background: red; */
		box-sizing: border-box;
		text-align: center;
		margin: 10rpx;
	}
	.btncss{
		background: #FF9933;
		color:white;
		font-size: 36rpx;
		border-radius: 30rpx;
		width: 80%;
		margin: 0 auto;
	 line-height: 80rpx;
	}
	.dialogtitle{
		color:#FF9933;
		font-size: 26rpx;
		text-align: center;
		line-height: 50rpx;
		background: white;

	}
	.radio-group{
		background: white;
    box-sizing: border-box;
		padding: 20rpx 10rpx;
	}
	.radio{
		background: white;
		width: 100%;
		display: block;

	}
	.cssup{
		background: white;
		height: 50rpx;

	}
	.csstip{
		background: white;
		display: inline-block;
		width: 80%;
		line-height: 50rpx;
		padding-top: 10rpx;
		font-size: 28rpx;
		text-align: left;
		box-sizing: border-box;
		padding-left: 30rpx
	}
	
</style>
