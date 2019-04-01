<template>
  <div class="bg">
      <div class="pageup" >
          <view class='bikeList' >
              <div>请输入车牌完成缴费</div>
          </view>
          <view class='noInput'>
            <view class="wallets-password">
                <view class="input-content-wrap">
                      <view  class="input-password-wrap">
                              <view class="password_dot">
                                <i @click="proviceSelect" style='text-align:center'>{{provice}}</i>
                                <mp-picker ref="mpPicker2" :mode="mode" :deepLength=deepLength @onConfirm="onConfirm2"  :pickerValueArray="proviceArray"></mp-picker>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=1">{{wallets_password[0]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=2">{{wallets_password[1]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=3">{{wallets_password[2]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=4">{{wallets_password[3]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=5">{{wallets_password[4]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="wallets_password.length>=6">{{wallets_password[5]}}</i>
                              </view>   
                              <view class="password_dot2" >
                                <i wx:if="wallets_password.length>=7">{{wallets_password[6]}}</i>
                              </view>      
                      </view>
                </view>
                <input style='position:absolute;border:1px solid gray;width:490rpx;height:50rpx;margin-left:70rpx;opacity:0' v-on:input="set_wallets_password" maxlength="7"/>
            </view>
          </view>
          <view style='text-align:center;color:#ff9933;margin:20px 0'>
            <button type="primary" size="large" @click='bing'>立即缴费</button>
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
       wallets_password:[],
        mode: 'selector',
        proviceArray: [
          {
            label: '京'       
          },
          {
            label: '沪'   
          },
          {
            label: '渝'   
          },
          {
            label: '津'     
          },
          {
            label: '粤'     
          },
          {
            label: '苏'     
          },
          {
            label: '浙'      
          },
          {
            label: '鲁'     
          },
          {
            label: '蒙'    
          }
        ],
      provice:"粤",
      plate:[],

      title:"提示：",
      content:"请输入完整车牌号！"
      }
  },

  components: {
    mpButton,
    mpPicker,
    mpModal
  },

  methods: {  
    set_wallets_password(e) { 
      this.wallets_password=e.target.value;
      },
 
    // showMulLinkageTwoPicker() {
    //   this.$refs.mpPicker.show();
    //   },

    proviceSelect() {
       this.$refs.mpPicker2.show();
      },

    onConfirm(e) {
       this.color=e.label;
     },

    onConfirm2(e) {
        this.provice=e.label;
      },

    confirm3(e) {
      
     },
    cancel(e) {},
    bing(){
      var obj={
        plate:this.provice+this.wallets_password,
      }
      console.log(obj);
      if(this.wallets_password.length<6){
        this.$refs.mpModal.show();
      }else{
        wx.navigateTo({ url: "../paymentorder/main"})
        
        //  store.commit() 
      //  wx.setStorage({  
      //   key: "carData",
      //   data: obj,
      //   success: function () {        
      //     wx.navigateBack();   //返回上一个页面
      //   }
      // })
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
  margin:30px 0
}
.noInput input{
  border:1px solid #e3e3e3;
  padding:5px
}

page .wallets-password  {
  display: flex;  
  height: 100rpx;
  margin: 0 23rpx;
}

page .input-password-wrap {
  display: flex;
}

page .password_dot {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70rpx;
  height: 70rpx;
  border: 2rpx solid #ddd;
  border-left: none 0;
}

page .password_dot2 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70rpx;
  height: 70rpx;
  border: 2rpx dashed #ddd;
  border-left: none 0;
}

page .password_dot:nth-child(1) {
  border-left: 2rpx solid #ddd;
}

page .input-content {
  opacity: 0;
  left: -100%;
  top: 600rpx;
  z-index: -999;
}

</style>
