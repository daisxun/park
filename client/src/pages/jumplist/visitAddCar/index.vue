<template>
  <div class="bg">
      <div class="pageup" >
          <view class='bikeList' >
              <view class="bikeListleft">请选择车场</view>
              <view class="bikeListright">
                  <view  @click="showPicker" class="pickinput">{{carPark}}</view>
                  <mp-picker ref="mpPicker" :mode="mode"  @onConfirm="selectpark"  :pickerValueArray="pickerValueArray"></mp-picker>
              </view>
          </view>
          <view class='noInput'>
            <view class="wallets-password">
                <view class="input-content-wrap">
                      <view  class="input-password-wrap">
                              <view class="password_dot">
                                <i @click="showprovice" style='text-align:center'>{{platehead}}</i>
                                <mp-picker ref="provice" :mode="mode"  @onConfirm="provicevalue"  :pickerValueArray="proviceArray"></mp-picker>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=1">{{plate[0]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=2">{{plate[1]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=3">{{plate[2]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=4">{{plate[3]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=5">{{plate[4]}}</i>
                              </view>
                              <view class="password_dot">
                                <i wx:if="plate.length>=6">{{plate[5]}}</i>
                              </view>   
                              <view class="password_dot2" >
                                <i wx:if="plate.length>=7">{{plate[6]}}</i>
                              </view>      
                      </view>
                </view>
                <input class="hideinput"  v-on:input="setplate" maxlength="7"/>
            </view>
          </view>
          <view style='text-align:center;color:#ff9933;margin:20px 0'>
            <button type="primary" size="large" @click='bing'>绑定</button>
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
        mode: 'selector',
        parking_id:"",
        plate:"",
        platehead:"粤",
        pickerValueArray: [ { label: '', value: "",} ],
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
      carPark:"请选择停车场",
      title:"提示：",
      content:""
      }
  },

  components: {
    mpButton,
    mpPicker,
    mpModal
  },
  mounted(){
    let than=this;
        let conf={
      "token":store.state.token,
      "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
      "id": "getCarOwnerParkings",
    }
    let req={ }
    console.log("conf",conf,req)
    getcontent.getapi(conf,req,function(data){
        // console.log("所有车辆停车场信息",data.data.data)
        if(data.data.result.code==0){
          if(data.data.data.length>0){
            let temp=[]
            for(let i=0,j=data.data.data.length;i<j;i++){
                let obj={}
                obj.label=data.data.data[i].parking_name
                obj.value=data.data.data[i].parking_id
                temp.push(obj)
            } 
                than.pickerValueArray= temp
          }

        }

      })
  },
  methods: {  
     setplate(e) { 
      this.plate=e.target.value;
      },
      showPicker(){
         this.$refs.mpPicker.show();
      },
      selectpark(e){
        // console.log("selectpark",e)
        this.carPark=e.label
        this.parking_id=e.value[0]
      },
      showprovice(){
          this.$refs.provice.show();
      },
      provicevalue(e){
        console.log(e)
        this.platehead=e.label
      },
     bing(){
      var obj={
        plate:this.platehead+this.plate,
        parking_id:this.parking_id
      }
      if(this.plate.length<6){
            wx.showToast({
              title:"请输入完整车牌号！",
              icon: 'none',
            })
      }else if(this.parking_id==""){
            wx.showToast({
              title:"请选择车场！",
              icon: 'none',
            })
      }else{
        console.log(obj)
           let conf={
              "token":store.state.token,
              "consumer":"cn.sanray.city.parking.carowner.client.service.WxClient",
              "id": "addVisitorCar",
            }
            let req={ 
                    "plate_number": obj.plate, // 车牌号
                    "parking_id":obj.parking_id, // 停车场id
                    "desc": "" // 备注，可以为空
            }
            console.log("conf",conf,req)
            getcontent.getapi(conf,req,function(data){
                console.log("添加信息",data)
                if(data.data.result.code==0){
                    wx.showToast({
                        title:"添加成功",
                        icon: 'success',
                      })
                }else{
                    wx.showToast({
                        title:"添加失败",
                        icon: 'success',
                      })
                }
              })
      }
      },
  }
}
</script>

<style scoped>
.bg{
  background: #434343;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  
}
.pageup{
   padding:20px;
   font-size:0.8em;
   height: 50vh;
   color:gray;
   background: #434343;
}
.pageminder{
  height: 5vh;
  margin-top: 5vh;
  background: #434343;
  box-sizing: border-box;
}
.pagedown{
  margin-top: 2vh;
  /* background: red; */
  height:31vh ;
  box-sizing: border-box;
}
.bikeList {
  display: flex;
}
.bikeListleft{
    /* background: red; */
    /* text-align: center; */
    padding-left: 30rpx;
    box-sizing: border-box;
    width: 40%
}
.bikeListright{
  /* background: green; */
   text-align: center;
  width: 50%
}
.pickinput{
  border:1px dashed #d9d9d9;
  text-align:center
}

.noInput{
  display:flex;
  margin:30px 0
}
.noInput input{
  border:1px solid #e3e3e3;
  padding:5px
}
.hideinput{
   position:absolute;
   left:74rpx;
   border:0px solid gray;
   width:410rpx;
   height:50rpx;
   /* padding-left: 1000rpx; */
   margin-left:70rpx;
   /* background: red; */
   text-align: right;
   opacity:0;
   color:rgba(255, 255, 255, 0);
   /* box-sizing: border-box; */
   overflow: hidden;
}
 .wallets-password  {
  display: flex;  
  height: 100rpx;
  margin: 0 23rpx;
  overflow: hidden;
  /* box-sizing: border-box; */
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
