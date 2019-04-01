<template>
  <div class="bg">
  	<div class="txt_input_phone">
  	  <p class="">请输入您的新手机号码</p>
  	  <input type="number"  maxlength="11"  v-model="phone"  v-on:input='watchphone' placeholder="请输入您的手机号码">
  	</div>
  	  <hr/>
    <div class="txt_input_ver">
  	  <p class="">请输入您的手机验证码</p>
  	  <div class="inputbox">
  	  	<input type="number"  v-model="vernumber" placeholder="请输入您的手机验证码">
  	  	<span v-on:click="getver">{{timer}}</span>
  	  </div>
  	</div>
   	  <hr/>
   	  <button type="primary" size="large" v-on:click="complete">完成</button>
   	  <mp-toast :type="toastType" v-model="showToast" :content="content" :duration="duration"></mp-toast>
  </div>
</template>

<script>
import mpToast from 'mpvue-weui/src/toast';
import getcontent from '../../../utils/api';
import store from '../../store';
//  console.log("phone",store.state.userinfo.token)
export default {
   components: {
	    mpToast,
	  },
   data () {
    return {
      phone: '',
      timer:'发送验证码',
			clickflag:true,
			vernumber:"",
      completeflag:false,
			showToast:false,
			
    }
  },
   methods: {
    	watchphone:function(e){
    	this.phone=this.phone.replace(/[^\d]/g,'');
    	},
    	getver:function(e){
    		let than=this;
    		if(this.phone==''){
    			this.showToast=true;
    			this.duration=800;
    			this.content='号码为空',
                this.toastType='error'
    		}else if(this.phone.length<11){
    			this.showToast=true;
    			this.duration=800;
    			this.content='长度有误',
                this.toastType='error'
    		}else {
	    		if(than.clickflag){
	    			than.clickflag=false;
	    			than.timer=5
						// console.log("----点击一次----");
							than.sencode(than)
	    		than.calt = setInterval(function () {
					    // console.log("----Countdown----");
					    than.timer=than.timer-1;
					   	if(than.timer==0){
					   		than.timer='发送验证码'
					   		than.clickflag=true;
					      than.completeflag=true;
					   		clearInterval(than.calt)
					   	}
					  }, 1000);
	    		}
    		}
    		


			},
			sencode:function(ther){
				// console.log("send",this.phone)
				let than=ther;
				let req= {
            'phone':than.phone,
            'type':3,
            'company_id':1002
        }
          let conf={
            "consumer": "wx_city_parking_member_service",
            "id": "getVerificationCode",
            "token":store.state.userinfo.token
          }
          getcontent.getapi(conf,req,function(data){
						console.log(data)
						if(data.data.result.code==0){
							    			than.showToast=true;
												than.duration=800;
												than.content='发送成功';
												than.toastType='success';
												than.completeflag=true;
						}else{
												clearInterval(than.calt)
												than.timer='发送验证码';
												than.clickflag=true;
												
							    			than.showToast=true;
												than.duration=800;
												than.content=data.data.result.msg,
												than.toastType='error'
						}

         })
			},
    	complete:function(){
				let than=this;
				// console.log("completeflag",than.completeflag)
    		if(than.completeflag){
				let req= {
						'phone':than.phone,
						"verificationCode": than.vernumber,
        }
          let conf={
            "consumer":  "cn.sanray.city.parking.carowner.client.service.WxClient",
            "id": "changeCellphone",
            "token":store.state.userinfo.token
          }
          getcontent.getapi(conf,req,function(data){
						console.log(data)
						if(data.data.result.code==0){
							    			than.showToast=true;
												than.duration=800;
												than.content='修改成功';
												than.toastType='success';
												let temp=JSON.parse(JSON.stringify(store.state.userinfo)) 
														temp.phone=than.phone;
													 wx.setStorage({
                                  key: 'login',
                                  data: temp
                                })
														store.commit("setUserinfo",temp)	

						}else{
							    			than.showToast=true;
												than.duration=800;
												than.content=data.data.result.msg;

												than.toastType='error';		
						}
         })
    		}else{
						if(than.phone.length==0){
							    			than.showToast=true;
												than.duration=800;
												than.content='请输入号码';
												than.toastType='warn'	
						}else if(than.vernumber.length==0){
							    			than.showToast=true;
												than.duration=800;
												than.content='请输入验证码';
												than.toastType='warn'	
						}
				}
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
	.txt_input_phone {
		
		height:200rpx;
		width:100%;
		box-sizing:border-box;
		padding:0  40rpx;
	}
	.txt_input_phone p{
		line-height:100rpx;
		font-size:30rpx;
		color:#4D4D4D;
		
	}
	.txt_input_phone input{
		
		display:inline-block;
		height:100rpx;
		
		font-size:24rpx
	}
	.txt_input_ver{
		height:200rpx;
		width:100%;
		box-sizing:border-box;
		padding:0  40rpx;
	}
	.txt_input_ver p{
		line-height:100rpx;
		font-size:30rpx;
		color:#4D4D4D;
		
	}
	.inputbox{

		display:flex;
	}
	.inputbox input{
		width:70%;
		display:inline-block;

		height:100rpx;
		font-size:24rpx;
	}
	.inputbox span{
		width:30%;
		line-height:100rpx;
		color:#F9B570;
		text-align:center;
		font-size:24rpx;
	}
	hr{
		width:100%;
		height:4rpx;
		background:#D2D2D2
	}
	button{
		margin-top:50rpx;
		background:#F9B570;
		border-radius:50rpx;
		font-size:36rpx;
		font-weight:900;
		height:100rpx;
		width:80%;

	}
</style>
