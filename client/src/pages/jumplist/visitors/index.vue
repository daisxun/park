<template>
    <div >
        <div style='padding:20px;font-size:0.8em;color:gray'>
            <view style='border-left:3px solid #ff9933;padding-left:5px;font-weight:700'>访客车辆</view>
            
            <view class='bikeList' v-for="(item, index) in carList" :key="index">
                <view style='width:30%'>{{item.plate_number}}</view>
                <view style='width:40%'></view>
                <view style='background:#fab570;width:30%;color:#fff'>代付</view>
            </view>
           <view style='text-align:center;color:#ff9933;margin:10px 0' @click='addCar'>添加车辆</view>
           <van-dialog id="van-dialog" />
        </div>
         
     </div>
</template>

<script>
import getcontent from '../../../utils/api';
import Dialog from 'vant-weapp/dist/dialog/dialog';
import store from '../../store';
console.log(Dialog)
export default {
  data () {
    return {
        carList:[]
    }
  },
  methods: {
    addCar () {
       mpvue.navigateTo({  url :'../visitAddCar/main' })
    },
   
  },

  onShow() {
        let than=this;
        
				let req= {};
        let conf={
            "consumer":  "cn.sanray.city.parking.carowner.client.service.WxClient",
            "id": "getVisitorCars",
            "token":store.state.userinfo.token
          }
          getcontent.getapi(conf,req,function(data){
            // console.log(data)
            if(data.data.result.code==-1){
              // 没有车主信息，
                wx.showToast({
                  title: data.data.result.msg,
                  icon: 'none',
                  duration: 2000
                })
            }else{
              // 有车主信息====》没有车辆
              if(data.data.data.length==0){
                console.log(data)
                    store.commit("setVisitCar",[{index:1,plate_number:200}])
                    than.carList=store.state.visitCar;
              }else {
                // 有车主信息==》有车辆
            console.log(data.data.data)
                    store.commit("setVisitCar",data.data.data)
                    than.carList=store.state.visitCar;  
              }
            }
          })
  }
}
</script>

<style scoped>
.bikeList {
  display: flex;
  border-bottom:1px solid #efefef
}

.bikeList view{
  margin:10px 5px;
  text-align:center;
  padding:10px 0
}

</style>
