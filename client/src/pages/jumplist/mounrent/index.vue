<template>
  <div class="bg">
			<div class="one">
          <span>我的车辆</span>
      </div>
			<div class="two">
          <div class="twoconter"  v-for="(list,index) in parklist" :key="index" >
              <div class="twoup">
                  <div class="twoupleft">
                      <div class="checkbox" >
                          <van-checkbox :value="list.pick" @change="onChange(list,index)"></van-checkbox>
                      </div>
                  </div>
                  <div  class="twoupminder">{{list.carnumber}}</div>
                  <div  class="twoupright">{{list.parking_name}}</div>
              </div>
              <!-- <div class="twodown"><span>期限：{{list.timer}}</span></div> -->
          </div>
      </div>
			<div class="three">
        <span class="threetxt">月租信息</span>
      </div>
			<div class="four">
          <div   v-for="(val, index) in tiktem" :key="index" :class="val.border" @click="hitcouple(val,index)" >  
              <div class="tikleft">
                  <div class="tikleftup"  >{{val.money}}</div>
                  <div class="tikleftdown">{{val.mounth}}</div>
              </div>
              <div class="tikright">
                  <div class="tikrightup"><span class="tip">{{val.agio}}</span> </div>
                  <div class="tikrightdown">{{val.source}}</div>
              </div>
          </div>
      </div>
			<div class="five">
        <div class="fiveleft">总金额：￥123456</div>
        <div class="fiveright" @click="gocul">去结算</div>
      </div>
   </div>

</template>

<script>
import store from '../../store';
import getcontent from '../../../utils/api';
export default {
  data () {
    return {
      showborder:"colorborder",
        parklist:[],
        tiktem:[
          // {money:"180元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"200元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"280元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"380元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"480元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"480元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"480元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"},
          // {money:"480元",mounth:"1个月",agio:"7.5折",source:"240元",border:"tiktem"}
        ]
    }
  },
  methods: {
    onChange:function(e,x){
      console.log("onChange",e,x)
      for(let i=0,l=this.parklist.length;i<l;i++){
        if(i==x){
              this.getcouple(this.parklist[i].parking_id)
              this.parklist[i].pick=true
        }else{
             this.parklist[i].pick=false
        }
         
      }
    },
    gocul:function(e){
      wx.navigateTo({ url: "../mounrentorder/main" })
    },
    hitcouple:function(e,ind){
      for(let i=0 ,j=this.tiktem.length;i<j;i++){
          if(i==ind){
              this.tiktem[i].border="colorborder"
          }else{
              this.tiktem[i].border="tiktem"
          }
      }
       
    },
    getcouple:function(x){
    let than=this;
    let conf={
      "token":store.state.token,
      "consumer": "cn.sanray.city.parking.offroad.service.RentalRules",
      "id": "getParkingRentalRules",
	    	}
		let  req= {
            "id": 0, // 规则id【id有效则其他无效】
            "parking_id": 128 // 停车场id
    }
    getcontent.getapi(conf,req,function(data){
      if(data.data.result.code==0){
            if(data.data.data.length==0){
                wx.showToast({
                      title: '暂无月租信息',
                      icon: 'none',
                      duration: 1000
                    }) 
            }else{
              let month=data.data.data[0];
            //  console.log("我的月租信息",month)
        than.tiktem=[{
                      money:parseInt(month.month_rebate),
                      mounth:"1个月",
                      agio:(parseInt(month.month_rebate))/((parseInt(month.month_mny))).toFixed(2)+"折",
                      source:(parseInt(month.month_mny))*1,
                      border:"tiktem"},
                      {
                      money:parseInt(month.quarter_rebate),
                      mounth:"3个月",
                      agio:(parseInt(month.quarter_rebate))/((parseInt(month.month_mny))*3).toFixed(2)+"折",
                      source:(parseInt(month.month_mny))*3,
                      border:"tiktem"
                      },
                      {money:parseInt(month.six_month_rebate),
                      mounth:"6个月",
                      agio:(parseInt(month.six_month_rebate))/((parseInt(month.month_mny))*6).toFixed(2)+"折",
                      source:(parseInt(month.month_mny))*6,
                      border:"tiktem"},
                      {money:parseInt(month.one_year_rebate),
                      mounth:"12个月",
                      agio:(parseInt(month.one_year_rebate))/((parseInt(month.month_mny))*12).toFixed(2)+"折",
                      source:(parseInt(month.month_mny))*12,
                      border:"tiktem"}]
            }
					}else{
					  wx.showToast({
									title: ''+data.data.result.msg,
									icon: 'none',
									duration: 1000
								})
					}	
    })
    }
  },
  onShow(){
    let than=this;
    let conf={
      "token":store.state.token,
      // "token": "ba4d9f1f7c8ba9449d8e689a814d0adb6c8abf81e34a3db02861f4a553ebc877"}",
      "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
      "id": "getCarsAndParkingsForMonthRent",
	    	}
		let  req= {}
    getcontent.getapi(conf,req,function(data){
			// console.log("我的车辆",data.data.data)
      if(data.data.result.code==0){
				  if(data.data.data.length>0){
               than.parklist=data.data.data.map(function(x,y,z){
                         x.pick=false;
                      if(x.parking_name==null){
                        x.parking_name="暂无"
                      } 
                  return  x;
               })
               for(let i=0; i<than.parklist.length;i++){
                  if(than.parklist[i].parking_id!=null){
                      console.log(than.parklist[i]);
                      than.parklist[i].pick=true;
                      than.getcouple( than.parklist[i].parking_id)
                      break;
                  }
               }
            
					}else{
					  wx.showToast({
									title: '暂无车辆信息',
									icon: 'none',
									duration: 1000
								})
					}	
      }else{
					  wx.showToast({
									title: ''+ data.data.result.msg,
									icon: 'none',
									duration: 1000
								})
			}
    })
  }

}
</script>

<style scoped>

.five{
  margin-top: 2vh;
  height: 8vh;
  width: 100%;
  box-sizing:border-box;
  background: white;
  display: flex;
}
.fiveleft{
  width: 80%;
  background: #F8B551;
  padding-left: 30rpx;
  padding-top: 20rpx;
  color:white;
  font-size: 28rpx;
}

.fiveright{
  width: 20%;
  color:white;
  text-align: center;
  font-size: 30rpx;
  font-weight: bolder;
  background: #FF9933;
  padding-top:20rpx;
  box-sizing: border-box;
}




.bg{
	height: 100vh;
	width: 100%;
	 background: white;
}
.one{
  height: 7vh;
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 10rpx 0 0 35rpx;
}
.one span{
  border-left: 10rpx solid #FF9933;
  display: inline-block;
  font-size: 28rpx;
  color: #4C4C4C;
  padding-left: 10rpx;
  /* background: red; */
  font-weight: bold;
}
.two{
  height: 33vh;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  overflow-y: scroll;
}
.twoup{
  background: white;
  height:50%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  font-size: 28rpx;
  font-weight: bold;
  padding-top: 10rpx;
}

.twoupleft{
  width: 15%;
  /* background: red; */
}
.checkbox{
  box-sizing: border-box;
  text-align: center;
  /* padding-left: 20rpx; */
}

.twoupminder{
  width: 40%;
}
.twoupright{
  width: 45%;
  background: white;
  text-align: right;
  color:#999999;
  padding-right: 30rpx;
}
.twodown{
   height:50%;
   width: 100%;
  box-sizing: border-box;
  background: white;
  color:#999999;
  font-size: 20rpx;
  padding-left: 15%;
  padding-top: 10rpx;
}

.twoconter{
  background: white;
  height: 6vh;
  width: 100%;
  box-sizing: border-box;
  border: 1rpx solid #f2f2f2;

}
.three{
  height: 10vh;
  width: 100%;
  /* background: white; */
  box-sizing: border-box;
  padding: 20rpx 0 0 35rpx;
}
.threetxt{
  border-left: 10rpx solid #FF9933;
  display: inline-block;
  font-size: 28rpx;
  color: #4C4C4C;
  padding-left: 10rpx;
  /* background: red; */
  font-weight: bold;

}

.four{
  height: 40vh ;
  width: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
  padding: 20rpx 50rpx;
  flex-wrap:  wrap ;
  text-align: center;
  overflow-y: scroll;

  }

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.tiktem{
  background: white;
  border-radius: 20rpx;
  box-sizing: border-box;
  padding: 10rpx;
  height: 180rpx;
  margin:10rpx auto;
  width: 7em;
  display: flex;
  border: 1rpx solid #CCCCCC;
}
.colorborder{
  border:2rpx solid #FF9933;
  background: white;
  border-radius: 20rpx;
  box-sizing: border-box;
  padding: 10rpx;
  height: 180rpx;
  margin:10rpx auto;
  width: 7em;
  display: flex;
} 
.tikleft{
  display: inline-block;
   border-radius: 20rpx;
  background: white;
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  font-weight: bold;
}
.tikleftup{
  color: #FF9933;
  background: white;
  height: 50%;
  text-align: center;
  box-sizing: border-box;
  padding-top: 40rpx;
  font-size: 30rpx;
}
.tikleftdown{
  color: #FF9933;
  font-size: 24rpx;
  text-align: center
}
.tikright{
  background: white;
   border-radius: 20rpx;
  width: 40%;
  height: 100%;
  box-sizing: border-box;
}

.tikrightup{
  color:#FF9933;
  height: 40%;
  background: white;
  box-sizing: border-box;
  padding-top: 30rpx;
  text-align: right;
  font-size: 24rpx;
}
.tip{
  color: white;
  background: #FF9933;
  
}
.tikrightdown{
  
  color:#999999;
  background: white;
  font-size: 20rpx;
}





</style>
