<template>
  <div class="bg">
  	<div class="txt_input_phone">
  	  <p class="">请输入您的身份证</p>
  	  <input type="number"  maxlength="18"  v-model="cardnum"  v-on:input='watchcardnum' >
  	</div>
  	  <hr/>
  	  <span class="tips">请输入正确的18位身份证号码</span>
   	  <button type="primary" size="large" v-on:click="complete">完成</button>
   	  <mp-toast :type="toastType" v-model="showToast" :content="content" :duration="duration"></mp-toast>
  </div>
</template>

<script>
import mpToast from 'mpvue-weui/src/toast';
export default {
   components: {
	    mpToast,
	  },
   data () {
    return {
      cardnum: '',
      clickflag:true,
      completeflag:false,
      showToast:false,
    }
  },
   methods: {
    	watchcardnum:function(e){
    		console.log(e)
    	this.cardnum=this.cardnum.replace(/[^\d]/g,'');
    	},
    	complete:function(){
    		    if(this.cardnum==''){
	    		    this.showToast=true;
	    			this.duration=800;
	    			this.content='身份证号码为空',
	                this.toastType='error'
    		    }
    			console.log(this.cardnum)
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
	hr{
		width:100%;
		height:4rpx;
		background:#D2D2D2
	}
	.tips{
		display:block;
		font-size:18rpx;
		color:#D7D7D7;
		padding-left:50rpx;
		box-sizing:border-box;
		margin-top:20rpx;
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
