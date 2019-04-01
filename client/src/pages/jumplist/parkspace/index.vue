<template>
  <div class="bg">
      <div class="pageup" >
          <view class='bikeList' >
              <div>请输入泊车位完成缴费</div>
          </view>
          <view class='noInput'>
            <view class="wallets-password">
                <view class="input-content-wrap">
                      <view   class="input-password-wrap">
                              <view class="dot">
                                <i wx:if="seatNumber.length>=1">{{seatNumber[0]}}</i>
                              </view>
                              <view class="dot">
                                <i wx:if="seatNumber.length>=2">{{seatNumber[1]}}</i>
                              </view>
                              <view class="dot">
                                <i wx:if="seatNumber.length>=3">{{seatNumber[2]}}</i>
                              </view>
                              <view class="dot">
                                <i wx:if="seatNumber.length>=4">{{seatNumber[3]}}</i>
                              </view>
                              <view class="dot">
                                <i wx:if="seatNumber.length>=5">{{seatNumber[4]}}</i>
                              </view>
                              <view class="dot">
                                <i wx:if="seatNumber.length>=6">{{seatNumber[5]}}</i>
                              </view>       
                      </view>
                </view>
                <input class="inputvalue" v-on:input="setNumber" :focus="isFocus" maxlength="6"/>
            </view>
          </view>
          <view style='text-align:center;color:#ff9933;margin:20px 0'>
            <button type="primary" size="large" @click='bing' >立即缴费</button>
          </view>
      </div>
      <div class="pageminder">

      </div>
      <div class="pagedown"></div>
      <mp-modal ref="mpModal" :title="title" :content="content" :showCancel="true" @confirm="confirm3" @cancel="cancel"></mp-modal>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button';
import mpPicker from 'mpvue-weui/src/picker';
import mpModal from 'mpvue-weui/src/modal';
import store from '../../store';
import getcontent from '../../../utils/api';
export default {
  data () {
    return {
       title:"",
			 content:"请输入完整泊位号！",
			 seatNumber:"",
      }
  },

  components: {
    mpButton,
		mpPicker,

    mpModal
  },

  methods: {  
    setNumber(e) { 
      this.seatNumber=e.target.value;
      },
    bing(){
      var obj={
        seatNumber:this.seatNumber,
      }
      console.log(obj);
      if(this.seatNumber.length<6){
        this.$refs.mpModal.show();
      }else{
          wx.navigateTo({ url: "../parkspaceorder/main"})
      }
    },
  }
}
</script>

<style scoped>
.bg{
  background: white;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  
}
.pageup{
   padding:20px;
   font-size:0.8em;
   height: 50vh;
   color:gray;
   background: white;
}
.pageminder{
  height: 5vh;
  margin-top: 5vh;
  background: white;
  box-sizing: border-box;
}
.pagedown{
  margin-top: 2vh;
  background: white;
  height:30vh ;
  box-sizing: border-box;
}
.bikeList {
  /* display: flex; */
	background: white;
	text-align: center;
	color:#999999;
	font-size: 30rpx;
	font-weight: 200;
}
.noInput{
  display:flex;
	background:white;
	padding: 40rpx;
	box-sizing: border-box;
}
.input-content-wrap{
	background: snow;
}
 .input-password-wrap {
  display: flex;
	/* background: yellowgreen */
}

 .dot {
	  background:white;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin:0 10rpx;
		width: 70rpx;
		height: 70rpx;
		border: 2rpx solid #ddd;
		border-left: none 0;
}
.noInput input{
  border:1px solid #e3e3e3;
  padding:5px
}
.inputvalue{
	background: white;
	position:absolute;
	border:10px solid black;
	color:rgba(255,255,255,0);
	width:1200rpx;
	height:50rpx;
	margin-left:-700rpx;
	opacity:0
}

.wallets-password  {
  display: flex;  
  height: 100rpx;
  margin: 0 23rpx;
	background: white;
}


</style>
