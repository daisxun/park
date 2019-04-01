<template>
  <div class="counter">
    <div class="pick">
        <div class="choice" >
          <div class="include">
             <image class="citypic" src="../../static/images/change.png" alt="" />
            <span class="choice_txt">{{currentCity.city}}</span>
          </div>
        </div>
        <div class="scanse">
          <div class="include"  @click="Scan">
            <span class="scanse_txt">扫一扫</span>
            <image class="scansepic" src="../../static/images/scanse.png" alt="" />
          </div>
        </div>
    </div>
    <div class="sliderbox">
        <swiper class="swiper" indicator-dots="true" autoplay="true" >
          <block  v-for="(value, index) in picList" :key="index">
            <swiper-item >
               <img v-bind:src="value" class="slide-image" mode="aspectFill"  v-bind:data-previewurl='picList' v-bind:data-currenturl='value' />
            </swiper-item>        
          </block >
        </swiper>
    </div>
    <div class='menus' >
       <div class="menus_item" v-for="(value, index) in menusList" :key="index" @click="jump(value.falg)">
        <img v-bind:src="value.images"/>
        <span class="txt_item">{{value.name}}</span>
      </div> 
    </div>

    <div   class="mycar" >
        <div  v-if="carTeamZero">
            <div class="cartitle">我的车辆</div> 
              <div class="mycarImg" >
                <image src='../../static/images/myCar.png' style='width:150px;height:50px' />
              </div>
              <div style='text-align:center;padding:10px 0'>未绑定车辆</div>
              <div style='text-align:center'><span class="bindcar" @click="myCar">前往“我的车辆”</span></div> 
        </div>

        <div v-if="carTeamLimit">
            <div class="cartitle">我的车辆</div> 
                <swiper class="myswiper" indicator-dots="true" autoplay="true" >
                    <block  v-for="(value, index) in carlist" :key="index">
                        <swiper-item >
                            <div class="mycarImg" >
                              <image src='../../static/images/myCar.png' style='width:150px;height:50px' />
                            </div>
                            <div style='text-align:center;padding:10px 0'>{{value.carnumber}}</div>
                            <div style='text-align:center'><span class="bindcars" >{{value.parktime}}</span></div> 
                            <div class="choice">
                              <!-- <span class="choiceleft">停车场：名企科技园</span> -->
                              <span class="choiceright">缴费离场</span>
                            </div>
                        </swiper-item>        
                    </block >
                </swiper>
        </div>
    </div>


<!-- ============================== -->

    <van-dialog id="van-dialog" />
    <van-popup z-index=9999 custom-style="background:#f2f2f2" position='top' overlay-style="#f2f2f2" overlay='false'  :show=popshow>
      <div class="model">
            <div>
              <div class="searchLetter">
                  <div class="thishotText"  @click="gotoTop()">
                    <div >当前</div>
                    <div >热门</div>
                  </div>
                  <div class="list">
                     <div v-for="(value, index) in searchLetter" :key="index" class="pho" v-on:click="clickLetter(value.name)">{{value.name}}</div>
                  </div>
              </div>
              <block v-if="isShowLetter" >
                  <view class="showSlectedLetter">
                    {{showLetter}}
                  </view>
              </block>
              <div class="citybox">
                <div class="cityboxTop">
                  <view class="hotcity-common thisCity">当前选择城市：{{city}}</view>
                  <view>
                    <text class="hotcity hotcity-common">热门城市</text>
                    <view class="weui-grids">
                          <block v-for="(item, index) in hotcityList" :key="index" >
                            <view class="weui-grid" :data-code="item.code" :data-city="item.name" @click="bindHotCity">
                              <view class="weui-grid__label">{{item.name}}</view>
                            </view>
                          </block>
                      </view>
                  </view> 
                </div>
                <div class="cityboxDown">
                  <scroll-view class="selection"  v-for='(itemr,index) in cityList' :key="index" >
                        <view class="item_letter"  id="itemr.initial">{{itemr.initial}}</view>
                        <view class="item_city" v-for="(ct,index2) in itemr.cityInfo" :key="index2"  :data-code="ct.code" :data-city="ct.name" @click="bindCity">
                          {{ct.name}}
                        </view>
                    </scroll-view>
                  </div>
              </div>
            </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import city from '../../utils/city.js';
import getcontent from '../../utils/api';
import store from '../store';
import Dialog from '../../../static/vant/dialog/dialog';
export default {
  data () {
    return {
      popshow:false,
      currentCity:{},
      carTeamZero:true, 
      carTeamLimit:false,
      picList: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623318287,3864173199&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=6d4f20a64fb21f113e1bb67be1cdbb63&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F121019%2F240425-12101920154274.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=f3712ddf9ca5b37bf81f2cea4ae40c54&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140808%2F0042040230406581_b.jpg"
      ],
      carlist:[],
      menusList:[
        {name:"缴费",images:"../../static/images/payMoney.png",falg:"change"},
        // {name:"停泊位",images:"../../static/images/berths.png",falg:"parkspace"},
        {name:"续月租",images:"../../static/images/renewal.png",falg:"mounrent"},
        {name:"停车费",images:"../../static/images/parkingCoupon.png",falg:"ticketpay"},
        {name:"访客登记",images:"../../static/images/visitors.png",falg:"visitors"}
      ],

       searchLetter: [{carnumber:"12255"}],
       showLetter: "",
       winHeight:{height:"100px"},
       cityList: [],
       isShowLetter: false,
       scrollTop:0,//置顶高度
       scrollTopId: '',//置顶id
       city: "",
       hotcityList: city.hotcityList
    }
  },
  methods: {
      jump (ev) {
          switch(ev)
                  {
                  case "change":  wx.navigateTo({ url: '/pages/jumplist/change/main'}); break;
                  case "parkspace": wx.navigateTo({ url: '/pages/jumplist/parkspace/main'}); break;
                  case "mounrent":   wx.navigateTo({ url: '/pages/jumplist/mounrent/main'}); break;
                  case "ticketpay":  wx.navigateTo({ url: '/pages/jumplist/ticketpay/main'}); break;
                  case "visitors":wx.navigateTo({ url: '/pages/jumplist/visitors/main'}); break;
                  default: console.log(ev)     
                  }
        },
      Scan(){

        },
      gotoTop(){
          this.scrollTop=0;
        },
      myCar(){
        wx.navigateTo({ url: '/pages/jumplist/car/main'})
      }
  },
  onLoad(){
      this.currentCity=store.state.currentCity
  },
  onShow() {
    let than=this;
    let conf={
      "token":store.state.token,
      "consumer": "cn.sanray.city.parking.carowner.client.service.WxClient",
      "id": "getNoOutingCarsByCarOwner",
    }
    getcontent.getapi(conf,{},function(data){
      console.log("我的车辆",data)
      if(data.data.result.code==0){
       
          if(data.data.data.length==0){
              than.carTeamZero=true;
              than.carTeamLimit=false;
              store.commit("setCar",data.data.data)
          }else{
            // 有车情况等添加车辆了再写
              than.carTeamZero=false;
              than.carTeamLimit=true;
            let temp=data.data.data[0]
              store.commit("setCar",data.data.data)
              than.carlist=store.state.myCar
          }
      }else if(data.data.result.code==400001){
         than.carTeam=true;
          Dialog.alert({
              message: 'token失效，重新登录'
            }).then(() => {
              wx.navigateTo({ url: '/pages/login/main'})
            });
      }
    })
 },
}
</script>

<style scoped>
/* 模态框 */
.model{
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  /* border: 1rpx solid red; */
  background: white;
  /* padding:10rpx; */
}
.pho{
  color:#2ab4ff;
  font-size:20rpx;
  background: white;
  line-height: 50rpx;
}
.searchLetter {
  position: fixed;
  right: 0;
  width: 55rpx;
  height: 99vh;
  text-align: center;
  justify-content: center;
  color: #666;
  z-index: 1;
  box-sizing: border-box;
  background-color: #fff;
  color: #fff;
  box-sizing: border-box;

}
.list::-webkit-scrollbar {
    display: none;
  }
.thishotText{
  background: #fff;
  /* border: 1rpx solid black; */
  height: 10vh;
  width: 100%;
  padding-top: 30rpx;
  box-sizing: border-box
}
.list{
  height: 89vh;
    overflow-y: scroll;
     background: #fff;
  /* background: black; */

}
.citybox{
  border: 0rpx solid black;
  /* background: red */
  height: 99vh;
  box-sizing: border-box;
}
.cityboxTop{
  height: 30vh;
  border: 0rpx solid black;
  /* background: yellowgreen; */
}
.cityboxDown{
  height: 69vh;
  /* background: yellowgreen; */
  box-sizing: border-box;
  overflow-y: scroll;
}

.showSlectedLetter {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -100rpx;
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
  font-size: 52rpx;
  z-index: 1;
}

.selection {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10rpx;
}

.item_letter {
  display: flex;
  background-color: #f5f5f5;
  height: 40rpx;
  padding-left: 34rpx;
  align-items: center;
  font-size: 24rpx;
  color: #666;
}

.item_city {
  display: flex;
  background-color: #fff;
  height: 100rpx;
  padding-left: 34rpx;
  align-items: center;
  border-bottom: 1rpx solid #ededed;
  font-size: 24rpx;
  color: #666;
}

.hotcity-common {
  font-size: 24rpx;
  color: #666;
  padding: 0 0 0 30rpx;
}

.thisCity {
  padding-top: 30rpx;
}

.thisCityName {
  display: inline-block;
  border: 0rpx solid #2ab4ff;
  border-radius: 8rpx;
  padding: 10rpx 0;
  font-size: 24rpx;
  color: #2ab4ff;
  text-align: center;
  min-width: 149.5rpx;
  margin: 20rpx 0 20rpx 30rpx;
}
.thishotText {
  color: #2ab4ff;
  font-size: 20rpx;
  margin-right: 10rpx !important;
  background: #fff;
}


.slectCity {
  border-color: #2ab4ff !important;
}

.slectCity view {
  color: #2ab4ff !important;
}

.weui-grid {
  position: relative;
  float: left;
  padding: 10rpx 0;
  width: 149.5rpx;
  box-sizing: border-box;
  border: 0rpx solid #ececec;
  border-radius: 8rpx;
  margin: 10rpx 12rpx;
}

.weui-grid__label {
  display: block;
  text-align: center;
  color: #333;
  font-size: 24rpx;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 主页面 */
.counter{
  background: #f2f2f2;
  height: 100vh;
  box-sizing: border-box;
  border:0rpx solid blue;
}
.pick{
  background: #f2f2f2;
  height: 6vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  direction: row;

}
.citypic{
  width:28rpx;
  height:28rpx;
  /* background: gray; */
 vertical-align: middle;
}
.include{
  display: inline-block;
}
.choice{
/* background: red; */
  width: 50%;
  padding-left: 20rpx;
}
.choice_txt{
  font-size: 28rpx;
  margin-left: 10rpx;
}
.scanse_txt{
  font-size: 28rpx;
  margin-right: 10rpx;
}
.scanse{
  /* background: green; */
  width: 50%;
  height: 100%;
  text-align: right;
  padding-right: 20rpx;
}
.scansepic{
    width:28rpx;
  height:28rpx;
    vertical-align: middle;
}
.sliderbox{
  height: 30vh;
  background:  #FF9933;
  padding: 15rpx 20rpx;
  box-sizing: border-box;
  /* border:0rpx solid #ff9933 */
}
.swiper{
  border-radius: 20rpx;
  background: #f2f2f2;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.slide-image{
  width: 100%;
  border-radius: 20rpx;
  height: 100%;
}
.menus{
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 15vh;
  padding:  0 20rpx;
  box-sizing: border-box;

}
.menus_item{
  background: #fff;
  /* border:1rpx solid red; */
  flex: 1;
  text-align: center;
  padding-top: 15rpx;
  box-sizing: border-box;
}
.txt_item{
  /* background: red; */
  display: block;
  color: gray;
  font-size: 26rpx;
}
.menus_item image{
  width: 80rpx;
  height: 80rpx
} 
.mycar{
  margin-top: 10rpx;
  height: 40vh;
  padding:20px;
  font-size:0.8em;
  color:gray;
  background: #fff;
}
.mycarImg{
text-align:center;
/* background: blue; */
height: 10vh;
padding:10px 0;
}
.note{
  /* background: blue; */
  line-height: 8vh;
  width: 100%;
}
.bindcar{
  background: #FF9933;
  font-size: 24rpx;
  display: inline-block;
  width: 240rpx;
  line-height: 50rpx;
  text-align: center;
  color:#fff;
}
.cartitle{
    border-left:10rpx solid #ff9933;
    background: white;
    padding-left:5px;
    color:#4C4C4C;
    font-size: 28rpx;
    font-weight:700
}
.myswiper{
  height:39vh;
  width: 100%;
  /* background: gold; */
  box-sizing: border-box;
  padding-top:20rpx;

}
.bindcars{
  background: white;
  color:#ff9933;
}
.choice{
  width: 100%;
  height: 6vh;
  /* background: #2ab4ff; */
  box-sizing: border-box;
  display: flex;
}
.choiceleft{
  width: 70%;
  /* background: #333; */
  line-height: 6vh;
  font-size: 20rpx;
}
.choiceright{
  width:30%;
  line-height: 6vh;
  text-align: center;
  font-size: 20rpx;
  color:#ff9933;
}
</style>
