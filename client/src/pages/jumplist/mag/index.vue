<template>
  <div class="bg">
   <div class="head">
   	  <div class="head_left">
   	  	<p>头像</p>
   	  </div>
   	  <div class="head_right">
   	  	<img src="/static/images/jmar.jpeg">
   	  </div>
   </div>
   <div class="body">
   	 <div class="item" v-for="(tar,index) in options" wx:key="index"  v-on:click="jump(tar.flag)">
   	 	<div class="item_left" >
   	 		<p>{{tar.keys}}</p>
   	 	</div>
   	 	<div class="item_right">
   	 		<p>{{tar.bindval}}</p>
   	 	</div>
   	 </div>
   	 <button>注销</button>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{keys: '手机', bindval: '绑定>>', flag: '../phone/main'}, 
                {keys: '昵称', bindval: 'jddj', flag: ''}, 
                {keys: '身份证', bindval: '绑定>>', flag: '../card/main'}]
    }
  },
  methods: {
  	 jump: function(e){
  	 		if(e=='../card/main'){
				wx.navigateTo({url:'../card/main'}) 
  	 		}else if(e=='../phone/main'){
  	 			wx.navigateTo({url:'../phone/main'}) 
  	 		}else{
  	 			return
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
   }
  .head{
  	height:150rpx;
  	width:100%;
  	display:flex;
  	background:white;
  }	
  .head_left{
  	flex:1;
  }
  .head_left p{
  	line-height:150rpx;
  	padding-left:40rpx;
  	box-sizing:border-box;
  	color:#4D4D4D;
  	font-size:36rpx;
  	font-weight:bold;
  }
  .head_right{
	flex:1;
	box-sizing:border-box;
	padding-top:10rpx;
	text-align:right;
	padding-right:30rpx;
  }
  .head_right img{
  	height:130rpx;
  	width:130rpx;
  	border-radius:50%;
  }	
  .body{
  	margin-top:10rpx;
  }
  .item{
  	height:80rpx;
  	width:100%;
  	display:flex;
  	margin-top:10rpx;
  	background:white;
  }
  .item_left{
	flex:1;

	line-height:80rpx;
	padding-left:40rpx;
	color:#4D4D4D;
  	font-size:36rpx;
  	font-weight:bold;
  	box-sizing:border-box;
  }
  .item_right{
	flex:1;
	
	line-height:80rpx;
	text-align:right;
	box-sizing:border-box;
	padding-right:30rpx;
	color:#F9B570;
	font-size:24rpx
  }
  .body button{
  	background:#F9B570;
  	margin: 0 auto;
  	margin-top:30vh;
	padding: 0;
	border: 0; 
	outline: none; 
	width:90%;  
	color:#fff;
	fontWeight:'bold'

  }

</style>
