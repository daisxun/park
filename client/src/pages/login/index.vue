<template>
  <div class='contaniers' >
      
            <div class='root_page'>
                <div class='root_head'>
                    <image class='head_img' src='../../static/images/cylogo.png'></image>
                    <text class='head_title'>停车场管理登陆</text>
                </div>

                <div class='input_share'>
                    <div class='phone'>
                        <image class='phone_img' src='../../static/images/iPhone.png'></image>
                        <div class='v_box'>
                        <input class='phone_txt' name='phone' maxlength="11" v-model="phonenumber" type='number'  placeholder='输入手机号'  />
                        <view class='cross_line'></view>
                        </div>
                    </div>
                    <div class='vcode'>
                        <image class='vcode_img' src='../../static/images/ver.png'></image>
                        <div class='v_box'>
                            <input class='vcode_txt' type='number' v-model="codenumber" placeholder='输入验证码' name='vcode' />
                            <div type="button" class="show" @click="getCode">{{vertxt}}</div>
                            <div class='cross_line'></div>
                        </div>
                    </div>
                </div>

                <div class='login' >
                    <div >
                        <button class='login_in'  open-type="getUserInfo" @click="login" >登陆</button>
                    </div>
                </div>

            </div>
            <div class="register">
                <span @click="goreg">去注册</span>
            </div>
        <mp-toast :type="toastType" zIndex=9999999 v-model="showToast" :content="content" :duration="duration"></mp-toast>
        <van-popup custom-style="background:#f2f2f2" position='top' overlay-style="#f2f2f2" overlay='false'  :show="popshow">
          <div class="registercss">
                <div class="regtop">
                      <image class='head_img' src='../../static/images/cylogo.png'></image>
                      <text class='head_title'>停车场管理注册</text>
                </div>
                <div class='regphone'>
                          <image class='phone_img' src='../../static/images/iPhone.png'></image>
                          <div class='v_box'>
                          <input class='phone_txt' name='phone' maxlength="11" v-model="phonenumber" type='number'  placeholder='输入手机号'  />
                          <view class='cross_line'></view>
                          </div>
                </div>
                <div class='regvcode'>
                          <image class='vcode_img' src='../../static/images/ver.png'></image>
                          <div class='v_box'>
                              <input class='vcode_txt' type='number' v-model="regcodenumber"  placeholder='输入验证码' name='vcode' />
                              <div type="button" class="show" @click="reg_getCode">{{reg_vertxt}}</div>
                              <div class='cross_line'></div>
                          </div>
                      </div>
                <div class='login'>
                  <button class='login_in' @click="reg_register" open-type="getUserInfo">注册</button>
                </div>
                <div class="register">
                    <span @click="retlogin">返回登陆页</span>
                </div>
          </div>
          <mp-toast :type="toastType" zIndex=9999999 v-model="showToast" :content="content" :duration="duration"></mp-toast>
        </van-popup>
  </div>
</template>

<script>
import Dialog from 'vant-weapp/dist/dialog/dialog';
import mpToast from 'mpvue-weui/src/toast'; 
import getcontent from '../../utils/api'
import store from '../store';
export default {
  data () {
    return {
        phonenumber:"",
        vertxt:"获取验证码",
        reg_vertxt:"获取验证码",
        verflag:true,
        codenumber:"",
        regcodenumber:"",
        num:5,
        showToast:false,
        toastType:"warn",
        content:"",
        duration:900,
        footer:false,
        popshow:false,
        openid:""
    }
  },
 components: {
    mpToast,
  },
 beforeCreate(){
     let than=this;
      const value = wx.getStorageSync('login');
      // console.log("value",value)
      if(value) {
        //  console.log("value1",value)
            store.commit('setToken',value.token )
            store.commit('setUserinfo',value )
            wx.reLaunch({
                       url: '/pages/index/main?token'   //主页面
                      //  url:"pages/jumplist/change/main" //缴费页面
                                  //  url:  "pages/jumplist/paymentorder/main"  //缴费确认订单子页面
                      //  url:  "pages/jumplist/parkspace/main"  //停泊位页面
                                  //  url:  "pages/jumplist/parkspaceorder/main"  //缴费确认订单子页面
                      //  url:"/pages/jumplist/mounrent/main"   //续月租页面
                                    //  url: "pages/jumplist/mounrentorder/main"  //续月租缴费页面订单子页面
                      //  url:"/pages/jumplist/ticketpay/main"  //停车费预缴费  等一段时间
                      //  url: '/pages/jumplist/visitors/main'//访客登记
                                // url: "pages/jumplist/visitAddCar/main"  //添加访客车辆
// 
                              // url:  "pages/jumplist/paycoupon/main"
                
                       

                      // url:  "pages/personal/main"  //  个人页面
                      // url:"/pages/jumplist/mag/main"  //个人信息修改
                              //  url: '/pages/jumplist/card/main'//绑定身份证页面   暂无
                              //  url: '/pages/jumplist/phone/main'//更换手机号码页面 
                      // url: "/pages/jumplist/parking/main"  //停车券页面
                                // url:'/pages/jumplist/protocol/main' //快速离场协议
                      // url:"/pages/jumplist/coupon/main"  //优惠券页面
                      // url:'/pages/jumplist/lease/main'  //月租车页面   莫名其妙，没法写，不知道是些啥东西
                              //  url: '/pages/jumplist/leasedetail/main'  //月租车详情页面
                      // url: '/pages/jumplist/bill/main'   //我的账单
                            //  url: '/pages/jumplist/billunpaylist/main'  //账单未支付详情
                            //  url: '/pages/jumplist/billpaylist/main'  //账单已经支付详情
                      // url: '/pages/jumplist/car/main'   //我的车辆页面
                            //  url: '/pages/jumplist/addCar/main'//添加车辆页面
              
                
                        //  url: "pages/nearby/main"   //附近车场页面
                 
                  
               
                
        //  {"id":7,
        //  "wx_nickname":"戴尚勋",
        //  "phone":"15116206200",
        //  "company_id":1002,
        //  "register_time":"2019-03-20T09:52:05.992635Z",
        //  "wx_mini_open_id":"3434_efde_eedd_2345",
        //  "wx_mp_open_id":null,"wx_union_id":null,
        //  "carowner_id":1,
        //  "token":"221420e1da76f702d1f1fd00c8290fc79ab87505624457106dc1d2a1d2857bbb"}   
                 
                
                
                  
                
                   
  
                })
      
      } else if (value ==undefined) {
        // console.log("value2",value)
      }
      wx.getSetting({
        success(result) {
          // console.log(result)
          if (result.authSetting["scope.userInfo"] == false) { //用户未授权
            wx.openSetting({ //引导授权
              success(res) {
                // console.log(res.authSetting)
                
              }
            })
          } else {
            // console.log("用户已授权!");
                wx.authorize({
                  scope: 'scope.userInfo',
                  success() {
                      wx.getUserInfo({
                          success(res) {
                            // console.log("scope.userInfo",res.userInfo)
                            store.commit("setwxinfo",res.userInfo)
                            than.userInfo= res.userInfo
                          }
                      })
                  }
              })
            than.footer=false;
          }
        }
      })
      wx.login({
				success(res) {
					if (res.code) {
						// 发起网络请求
						wx.request({
							url: 'https://api.weixin.qq.com/sns/jscode2session',
							data: {appid:"wxa9b371ede7fadcbd",secret:"ee6b7dcc0da326bece95767ce315ebd9",js_code:res.code,grant_type:"authorization_code"},
						   success:function(res){
                //  console.log("openid",res.data.openid)
                 than.openid=res.data.openid
						   }
						})
					} else {
						// console.log('登录失败！' + res.errMsg)
					}
				}
			})

  },
 
 methods:{
      getCode(e){
          let than=this;
                 if (than.phonenumber == undefined||than.phonenumber == ""){
                        than.showToast=true
                        than.toastType="warn"
                        than.content="手机号不能为空"
               }else{
                if (than.phonenumber.length == 11) {
                    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //正则验证手机
                    if (!myreg.test(than.phonenumber)) {
                        than.showToast=true
                        than.toastType="warn"
                        than.content="号码格式有误，重新输入"
                    } else {
                    //手机输入正确时、倒计时开始

                            if(than.verflag){
                                than.verflag=false;
                    //发送验证码 
                            than.timer=  setInterval(function(){
                                    than.num--
                                    than.vertxt=than.num+"s后继续"
                                    console.log(than.num)
                                    if(than.num<0){
                                        clearInterval(than.timer)
                                        than.vertxt="获取验证码";
                                        than.verflag=true;
                                        than.num=5
                                    }
                                },1000)
                             than.sendCode(than,2)
                            } 
                    }
                } else {
                        than.showToast=true
                        than.toastType="warn"
                        than.content="手机号码有误，重新输入"
                }
                }
   
      },
      sendCode(ther,index){
        let req= {
            'phone':ther.phonenumber,
            'type':index,
            'company_id':1002
        }
          let conf={
            "consumer": "wx_city_parking_member_service",
            "id": "getVerificationCode",
            "token":""
          }
          console.log(req,conf)
          getcontent.getapi(conf,req,function(data){
            if(index==2){
             if(data.data.result.code==-1){
               console.log(data.data.result.msg)
               wx.showModal({
                      title: '提示',
                      content:data.data.result.msg+ "前往注册",
                      success(res) {
                        if (res.confirm) {
                           ther.popshow=true;
                           ther.verflag=true;
                           ther.vertxt="获取验证码",
                           ther.num=5
                           clearInterval(ther.timer)
                        } else if (res.cancel) {
                          console.log('用户点击取消')
                        }
                      }
                    })
             }
              console.log(index,data)
            }else if(index==1){
                console.log(index,data)
                if(data.data.result.code==0){
                        ther.showToast=true
                        ther.toastType="success"
                        ther.content="发送成功"
                }else{
                  console.log(data)
                        ther.showToast=true
                        ther.toastType="warn"
                        ther.content=data.data.result.msg+ ""
                }
            }

         })
      },
      goreg(){
        this.popshow=true
      },
      retlogin(){
        this.popshow=false
      },
      login(e){
         let obj= { 
            'company_id':1002,
            'phone':this.phonenumber,
            'code':this.codenumber,
            }
          let conf={
            "consumer": "wx_city_parking_member_service",
            "id": "userLogin",
            "token":""
          }
          let than=this;
          if(this.phonenumber==""||this.codenumber==""){
                        than.showToast=true
                        than.toastType="warn"
                        than.content="登陆信息不完整"
          }else{
              // console.log("登陆信息发送",conf,obj)
                getcontent.getapi(conf,obj,function(data){
                  console.log("登陆信息接受",data)
                  if(data.data.result.code==0){
                    store.commit('setToken',data.data.data.token )
                    store.commit('setUserinfo',data.data.data )
                        wx.showModal({
                          title: '提示',
                          content: '登陆成功，跳转到主页',
                          success(res) {
                            if (res.confirm) {
                              // console.log('用户点击确定')
                             wx.reLaunch({
                                      url: '/pages/index/main'
                                    })
                          wx.setStorage({
                                  key: 'login',
                                  data: data.data.data
                                })
                          wx.setStorage({
                                  key: 'currentCity',
                                  data: {"city":"芜湖","code":"101220301","comkey":"0","eventid":"7_18-3"}
                                })
                            } else if (res.cancel) {
                              // console.log('用户点击取消')
                            }
                          }
                        })
                  }else {
                        than.showToast=true
                        than.toastType="warn"
                        than.content=data.data.result.msg+ ""
                  }
              })
          }


            // 

      },
      reg_getCode(){
            let than=this;
                 if (than.phonenumber == undefined||than.phonenumber == ""){
                        than.showToast=true
                        than.toastType="warn"
                        than.content="手机号不能为空"
               }else{
                if (than.phonenumber.length == 11) {
                    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //正则验证手机
                    if (!myreg.test(than.phonenumber)) {
                        than.showToast=true
                        than.toastType="warn"
                        than.content="号码格式有误，重新输入"
                    } else {
                    //手机输入正确时、倒计时开始

                            if(than.verflag){
                                than.verflag=false;
                    //发送验证码 
                            than.regtimer=  setInterval(function(){
                                    than.num--
                                    than.reg_vertxt=than.num+"s后继续"
                                    console.log(than.num)
                                    if(than.num<0){
                                        clearInterval(than.regtimer)
                                        than.reg_vertxt="获取验证码";
                                        than.verflag=true;
                                        than.num=5
                                    }
                                },1000)
                             than.sendCode(than,1)
                            } 
                    }
                } else {
                        than.showToast=true
                        than.toastType="warn"
                        than.content="手机号码有误，重新输入"
                }
                }
      },
      reg_register(){
        let than=this;
        let obj={
            'company_id':1002,
            'phone':than.phonenumber,
            'code':than.regcodenumber,
            'wx_logo':than.userInfo.avatarUrl,
            'wx_nickname':than.userInfo.nickName,
            'wx_mini_open_id':than.openid,
            "city_code":"1002"
           }
        let conf={
                "token":"",
                "consumer": "wx_city_parking_member_service",
                "id": "userReg",
           }
        //     console.log(than)
        // console.log(than.userInfo)
        if(than.phonenumber==""||than.regcodenumber==""){
                        than.showToast=true
                        than.toastType="warn"
                        than.content="注册信息不完整" 
        }else{
              console.log("注册发送信息",conf,obj)
                getcontent.getapi(conf,obj,function(data){
                  console.log(data)
                  if(data.data.result.code==0){
                        than.showToast=true
                        than.toastType="success"
                        than.content= "注册成功"
                  }else{
                        than.showToast=true
                        than.toastType="warn"
                        than.content=data.data.result.msg+ ""
                  }
              })
        }
  
      },
  }
}
</script>

<style scoped>
page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.root_page {
  box-sizing: border-box;
  padding-top: 200rpx;
    /* background-color: green; */
}
.register{
    /* background: red; */
    height: 10vh;
    margin-top: 20rpx;
    box-sizing: border-box;
   text-align: center;
   vertical-align: middle;
}
.register span{
    color:#444e81;
    font-size: 28rpx;
    text-align: center;
    /* background: #3cb371; */
    display: inline-block;
    width:150rpx;
    height: 50rpx;
    
}
.root_head {
  height: 250rpx;
  width: 100%;
  box-sizing: border-box;
  padding: 0rpx 0rpx 23rpx 0rpx;
  text-align: center;
  /* background-color: red; */
}

.head_img {
  height: 254rpx;
  width: 254rpx;
}

.head_title {
  display: inline-block;
  width: 100%;
  color: #444e81;
  font-size: 36rpx;
}

.input_share {
  margin-top: 108rpx;
  height: 200rpx;
  width: 100%;
}

.phone {
  height: 100rpx;
  box-sizing: border-box;
  padding-left: 149rpx;
  display: flex;
  flex-direction: row;
  /* background: red; */
}

.phone_img {
  height: 60rpx;
  width: 40rpx;
  margin-right: 25rpx;
}

.phone_txt {
  border-bottom: 2rpx solid #444e81;
  color: #999;
  width: 65%;
  font-size: 28rpx;
}

.vcode {
  height: 100rpx;
  box-sizing: border-box;
  padding-left: 149rpx;
  display: flex;
  flex-direction: row;
    /* background: yellowgreen; */
}

.v_box {
  background-color: white;
  width: 65%;
  display: flex;
  flex-direction: row;
  height: 52rpx;
  border-bottom: 2rpx solid #444e81;
}

.vcode_img {
  width: 40rpx;
  height: 44rpx;
  margin-right: 25rpx;
}

.vcode_txt {
  color: #999;
  width: 60%;
  font-size: 28rpx;
}
.show {
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  color: #8c9cef;
  font-size: 25rpx;
  height: 50rpx;
  margin: 0;
  padding: 0;
  background-color: white;
}
.hide {
  display: none;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10rpx;
  width: 350rpx;
  font-size: 32rpx;
}

.cross_line {
  height: 100rpx;
  width: 10rpx;
}



.login {
  box-sizing: border-box;
  padding: 0rpx 75rpx;
  margin-top: 46rpx;
}

.login_in {
  background: linear-gradient(to right, #a1b0fc, #9e83fb);
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}

/*===================  */

.none {
  display: none;
}

.UserInfo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(144, 144, 144, 0.5);
  z-index: 999;
}

.UserInfoBox {
  background-color: white;
  width: 600rpx;
  height: 380rpx;
  margin-top: 300rpx;
  margin-left: 75rpx;
  opacity: 1;
  color: black;
  font-size: 36rpx;
  border-radius: 10rpx;
  text-align: center;
  z-index: 1000;
}

button::after {
  border: none;
}

input {
  outline: none;
  border: none;
  list-style: none;
}

.footer_msg {
  line-height: 60rpx;
  border-bottom: 2rpx solid gainsboro;
}

.content {
  width: 100%;
  height: 200rpx;
  font-size: 28rpx;
  padding-top: 20rpx;
}

.note {
  font-size: 20rpx;
  color: gainsboro;
}

.line {
  height: 1rpx;
  width: 70%;
  margin-left: 90rpx;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  background-color: gainsboro;
}

.content image {
  width: 80rpx;
  height: 80rpx;
}

.footer_btn {
  display: flex;
  flex-direction: row;
}

.footer_btn button {
  background-color: white;
  border: 0;
}

.registercss{
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  border: 1rpx solid white;
  background: white;
}
.regtop{
  /* background: red; */
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin-top: 200rpx;
}
.regphone{
  height: 100rpx;
  box-sizing: border-box;
  padding-left: 149rpx;
  display: flex;
  flex-direction: row;
  /* background: red; */
  margin-top: 50rpx;
}
.regvcode{
  height: 100rpx;
  box-sizing: border-box;
  padding-left: 149rpx;
  display: flex;
  flex-direction: row;
    /* background: yellowgreen; */
    margin-top: 20rpx;
}

</style>
