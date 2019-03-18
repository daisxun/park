<template>
  <div class="bg">
   	<div class="my">
   		<div class="my_head">
   			<span class="sp">&nbsp</span>
   			<span class="sb">我的优惠券</span>
   		</div>
   		<scroll-view class="my_list" scroll-y>
   			<div class="item" v-for="(val,index) in my" wx:key="index"  >
   				<div class="item_l">{{val.tick}}</div>
   				<div class="item_m">{{val.deal}}</div>
   				<div class="item_r">x{{val.num}}</div>
   			</div>
   		</scroll-view>
   	</div>
   	<div class="get">
   		<div class="my_head get_head">
   			<span class="sp">&nbsp</span>
   			<span class="sb">尚未领取</span>
   		</div>
   		<div class="my_list">
   			<div class="item" v-for="(val,index) in getcop" wx:key="index" >
   				<div class="item_l">{{val.tick}}</div>
   				<div class="item_m"></div>
   				<div class="item_r" ><div class="bint" @click="getcoupons(val,index)">x{{val.num}}</div></div>
   			</div>
   		</div>
   	</div>
  </div>
</template>

<script>
import store from './store'
export default {
  data () {
    return {
    }
  },
  created(){
       // console.log(store.state)
  },
  computed:{
    getcop(){
         return store.state.getcop
    },
    my(){
        return store.state.my
    }

  },
  methods: {
    getcoupons: (e,value) => {
      if(e.num>0){
        let flag=false;
         for (const [index,value] of store.state.my.entries()) {
                if(value.tick==e.tick){
                  flag=true
                }
            }
        if(flag){
          store.commit('getcoupon',value)
          store.commit('addcoupon',e)

      
        }else{
         store.commit('getcoupon',value)
         store.commit('putcoupon',e) 

        }
      }else{
        console.log(this.bint)
        this.bint="tinb"
      }
      
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
	padding:0rpx 10rpx;
}
.bint{
  margin:0 auto;
  color:#fff;
  background:#F19149;
  width:80rpx;
  line-height:40rpx;
  border-radius:20rpx;
}
.tinb{
  margin:0 auto;
  color:#fff;
  background:#EEEEEE;
  width:80rpx;
  line-height:40rpx;
  border-radius:20rpx;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
    }
.my{

	height:50vh;
	box-sizing:border-box;
}
.my_head{
	background:#f3f3f3;
	box-sizing:border-box;
	height:5vh;
	padding:1vh;
	display:flex;
}
.sp{
	display:inline-block;
	width:10rpx;
	height:3vh;
	background:#F19149
}
.sb{
	display:inline-block;
	color:#999999;
	line-height:3vh;
	margin-left:20rpx;
	font-size:20rpx;

}
.my_list{
	background:#FFFFFF;
	height:45vh;
	overflow-y: scroll;
	padding :0 20rpx;
	box-sizing:border-box;
}
.item{
	background:#FFFFFF;
	display:flex;

	box-sizing:border-box;
	border-bottom:1rpx solid #EEEEEE
}
.item_l{
	font-weight:bold;
	color:#333333;
	font-size:28rpx;
	width:30%;
    line-height:85rpx;
	text-align:center;
}
.item_m{
	 line-height:85rpx;
		color:#999999;
		font-size:20rpx;
		width:40%;
		text-align:center;
}
.item_r{

		color:#999999;
    padding-top:28rpx;
		font-size:20rpx;
		width:30%;
		text-align:center;
    box-sizing:boder-box;
}
.get{
	background:blue;
	height:49vh;
}
</style>
