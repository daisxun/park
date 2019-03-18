<template>
  <div >
  <view style='border:0rpx solid #ff9933'>
  <swiper class="" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
    <block >
      <swiper-item v-for="(value, index) in picList" :key="index">
        <img v-bind:src="value" class="slide-image" mode="aspectFill"  v-bind:data-previewurl='picList' v-bind:data-currenturl='value' />
      </swiper-item>        
    </block>
  </swiper>
</view>
<view class='menus' >
  <view v-for="(value, index) in menusList" :key="index"> <img v-bind:src="value.images"/></view>
</view>
<view class='menus' >
  <view v-for="(value, index) in menusList"  :key="index"> {{value.name}} </view>
</view>
<view style='padding:20px;font-size:0.8em;color:gray'>
  <view style='border-left:3px solid #ff9933;padding-left:5px;font-weight:700'>我的车辆</view>
  <view style='text-align:center;padding:10px 0'>
    <image src='../../static/images/myCar.png' style='width:150px;height:50px' />
  </view>
  <view style='text-align:center;padding:10px 0'>粤B123456</view>
  <view style='text-align:center'>停车时长：00:11:22</view>
</view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      picList: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623318287,3864173199&fm=27&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=6d4f20a64fb21f113e1bb67be1cdbb63&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F121019%2F240425-12101920154274.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532429494100&di=f3712ddf9ca5b37bf81f2cea4ae40c54&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140808%2F0042040230406581_b.jpg"
      ],
      menusList:[
        {name:"缴费",images:"../../static/images/payMoney.png"},
        {name:"停泊位",images:"../../static/images/berths.png"},
        {name:"续月租",images:"../../static/images/renewal.png"},
        {name:"停车券",images:"../../static/images/parkingCoupon.png"},
        {name:"访客登记",images:"../../static/images/visitors.png"}
      ]
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.menus{
  display: flex;
  padding: 10px 0 0 0;
  color: gray;
  font-size: 0.8em
}

.menus view{
  width: 20%;
  text-align: center
}

.menus image{
  width: 40px;
  height: 40px
}
</style>
