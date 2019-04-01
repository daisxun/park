<template>
  <div class="bg">
      <div class="pageup" >
          <div class='bikeList' >
              <div class="bikeListleft">请选择车辆颜色</div>
              <div class="bikeListright">
                  <view  @click="showcolorPicker" class="pickinput">{{car_color}}</view>
                  <mp-picker ref="colorPicker" :mode="mode"  @onConfirm="selectcolor"  :pickerValueArray="PickerColor"></mp-picker>
              </div>
          </div>
          <div class='bikeList' >
              <div class="bikeListleft">请选择车辆型号</div>
              <div class="bikeListright">
                  <div  @click="showPicker" class="pickinput">{{car_model_name}}</div>
                  <mp-picker ref="mpPicker" :mode="mode"  @onConfirm="SelectCarModel"  :pickerValueArray="PickerCarStyle"></mp-picker>
              </div>
          </div>
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
        PickerCarStyle: [],
        PickerColor:[ 
          {label: '红色' },{label: '黄色'},  { label: '蓝色' }, { label: '绿色'},
          { label: '白色' }, { label: '黑色' }, { label: '银色' }, {  label: '灰色' }, 
          {label: '紫色' }],
        proviceArray: [
          {label:'京'}, {label:'沪'},{label:'渝'},{label:'津'},{label:'粤'},
          {label:'苏'},{label:'浙'},{label:'鲁'},{label:'蒙'} ],
        car_color:"请选择车辆颜色",
        car_model_name:"请选择车辆型号",
        car_model:"",
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

  },
  methods: {  
      // 打开颜色选择器
      showcolorPicker(){
         this.$refs.colorPicker.show();
      },
      // 选择具体的颜色
      selectcolor(e){
          this.car_color=e.label
      },
      // 打开车辆类型选择器
      showPicker(){
         this.$refs.mpPicker.show();
      },
    //  选择车型
      SelectCarModel(e){
        console.log("selectpark",e)
        this.car_model_name=e.label  //车型名称
        this.car_model=e.value[0]   //车型id
      },
      // 打开车牌头选择器
      showprovice(){
          this.$refs.provice.show();
      },
      // 选择车牌头
      provicevalue(e){
        console.log(e)
        this.platehead=e.label
      },
      // 输入车牌号码
      setplate(e) { 
        this.plate=e.target.value;
      },
     bing(){
      let obj={
        car_number:this.platehead+this.plate,
        car_model_name:this.car_model_name,
        car_model:this.car_model,
        car_color:this.car_color,
        "time_begin": "2018-12-29 13:27:44+08", // 开始时间
        "time_end":"2018-12-29 13:27:44+08" // 结束时间
      }
      let than=this;
      console.log("obj",obj)
      if(than.plate.length<6){
            wx.showToast({
              title:"请输入完整车牌号！",
              icon: 'none',
            })
      }else if(than.car_model_name==""){
            wx.showToast({
              title:"请选择车场！",
              icon: 'none',
            })
      }else if(than.car_color==""){
            wx.showToast({
              title:"请选择车辆颜色！",
              icon: 'none',
            })
      }else{
        let conf={
          "token":store.state.token,
          "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
          "id": "addOwnerCar",
        }
        getcontent.getapi(conf,obj,function(data){
             if(data.data.result.code==0){
                  wx.showToast({
                      title:"添加成功！",
                      icon: 'none',
                    })
             }else{
                  wx.showToast({
                      title:"添加失败！请重试",
                      icon: 'none',
                    })
             }
        })  
      }
     },
  },
   onLoad(){
        this.mode='selector';
        this.parking_id="";
        this.plate="";
        this.platehead="粤";
        this.car_color="请选择车辆颜色";
        this.car_model_name="请选择车辆型号";
        this.car_model="";
        this.title="提示：";
        this.content="";
   },
   onShow(){
			let than=this;
              wx.request({
                  url: 'https://citypark.wulian2025.net/city_park_apigateway',
                  data: { "header": { "token": store.state.token},
                          "data": {
                            "payload_type": "api",
                            "description": {
                              "type": "auth",
                              "id": "sys_data_dictionary_query_by_pname_no_turning",
                              "params": {
                               "v_pname": "车型",//数据字典值集名称
                              }
                            }
                          }    
                  },
                  method: 'post',
                  header: {
                        'Accept': 'application/json',
                        'content-type': 'application/json',
                        'Authorization': null,
                      },
                  success: function (res) {
                   let data=   res.data.data.map(function(x,y,z){
                            let obj=x;
                                obj.label= x.name;
                                obj.value=x.id
                               return  obj

                    })
                    than.PickerCarStyle=data
                      console.log("数据字典值集名称",data)
                      
                  }
                })
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
  margin: 20rpx 0;
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
