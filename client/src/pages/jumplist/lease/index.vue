<template>
  <div class="bg">
   <div class="conter">
   	 <div class="item" v-for="(txt,it) in columns " wx:key="it">
   	 	<div class="up">
   	 		<div>{{txt.space}}</div>
   	 		<div>期限：{{txt.limit}}</div>
   	 	</div>
   	 	<div class="down">
				<radio-group class="radio_group" @change="radioChange">
				  <label class="radio" v-for="(item,index) in items" :key="index">
				       <radio :value="item.name" />
				    {{item.value}}
				  </label>
				</radio-group>
   	 	</div>
   	 </div>
   </div>
   <div class="btn">
   	 <button class="confirm" @click="confirm">确定</button>
   </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      radio: 'Hello',
      items: [ {name: 'BRA', value: '巴西'},
               {name: 'JPN', value: '日本'}, 
               {name: 'ENG', value: '英国'}],
      columns:[{space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"},
               {space:"167所有车场",limit:"2019-1-01"}]
		}
  },
  methods: {
	  radioChange(event) {
	  	console.log(event)
	  },
	  confirm(){
	  	console.log(123)
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
	padding:10rpx;
}
.conter{
	height:85vh;
	box-sizing:border-box;
overflow-y: scroll;
}
.btn{
	height:13vh;
	width:100%;
	padding:20rpx;
	box-sizing:border-box;
}
.confirm{
	margin:0 auto;
    padding: 0;
    border: 0; 
    background-color: #F8A350;
    outline: none;  
	width:85%;
	height:110rpx;
	color:white;
	font-size:36rpx;
	border-radius:50rpx;
	font-weight:bold;
}
.item{
	background:#fff;
	height:150rpx;
	width:100%;
	box-sizing:border-box;
	padding:0 20rpx;
	margin-bottom:10rpx;
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
	color:grey;
	padding-right:20rpx;
	box-sizing:border-box;
	text-align:right;
}
.down{
	 height:95rpx;
}
.radio_group{
	width:100%;
	line-height:95rpx;
	display:flex;
	padding:0 40rpx;
	box-sizing:border-box;
}
.radio{

	line-height:95rpx;
	width:100%;
	color:#363636;
	font-size:30rpx;
	transform:scale(0.8);
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
