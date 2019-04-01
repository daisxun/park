<template>
  <div class="bg">

      <div class="bodys">
          <div class="paystyle">
            <span class="paystyleL">支付方式</span>
            <span class="paystyleR">微信</span>
          </div>
           <hr/>
          <div class="peyuser"> 迅远科技有限公司</div>
           <hr/>
          <div  :class="lineH" v-bind:style="{ height:  activeheight +'rpx' }">
            <div v-for="(list,index) in ticket" :key="index" >
              <peycouponlist v-bind:list="list"></peycouponlist>
            </div>
          </div>
          <hr/>
          <div class="peycoupon">
              <div class="couleft">优惠券</div>
              <div class="coumind">您有一张可用的优惠券</div>
              <div class="couright">

                <img src="/static/images/yellrow.png">
              </div>
          </div>
            <hr/>
          <div class="pecom">
            <span>总金额￥</span><span>{{count}}</span>
          </div>
      </div>
      <div class="btn">
        <div class="commoney">￥{{count}}</div>
        <div class="submoney"><span>已优惠 ￥0</span></div>
        <div class="paymoney">付款</div>
      </div>
      
  </div>
</template>

<script>
import peycouponlist from '@/components/peycouponlist'
export default {
  components: {
    peycouponlist
  },
  data () {
    return {
      lineH:"",
      activeheight:"",
       shows: false,
       count:0,
       ticket:[{ coupon:"50元停车券", deadline:"期限：一个月", moneys:"10.00",sum:"0"},
       { coupon:"100元停车券", deadline:"期限：三个月", moneys:"20.00",sum:"0"},
       { coupon:"200元停车券", deadline:"期限：四个月", moneys:"30.00",sum:"0"},
       { coupon:"500元停车券", deadline:"期限：五个月", moneys:"40.00",sum:"0"},
       { coupon:"600元停车券", deadline:"期限：四个月", moneys:"50.00",sum:"0"}]
    }
  },
  onLoad(d){
    if(d.id==undefined){
        return;
    }
    let tem=JSON.parse(d.id);
      this.ticket=tem.list
      this.count=tem.count
     if(this.ticket.length>4){
            this.lineH="peylist"
            this.activeheight=120*4;
             
      }else{
            this.activeheight="auto" 
        }  
  },
  computed:{

   },
   methods:{
      showpop:function(){
        console.log(123)
        // this.show=true
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
  position:relative;
}
.pop{
  position:absolute;
  background:#fff;
  height:100vh;
  width:100%;
}
.bodys{
  height:92vh;
  width:100%;
  
  padding:10rpx;
  box-sizing:border-box;
}
.paystyle,.peycoupon,.pecom{
  background:#fff;
  height:8vh;
  display:flex;
  line-height:8vh;
  padding-left:20rpx;
  padding-right:20rpx;
  box-sizing:border-box;
  font-size:28rpx;
  font-weight:bold;
}
.paystyleL{
  flex:1;
}
.paystyleR{
  flex:1;
  text-align:right;
  color:#FF9933
}
.peyuser{
  line-height:8vh;
  color:#333333;
  font-size:28rpx;
  font-weight:bold;
  background:#fff;
}
.peylist{
  overflow-y:scroll;
}
.couleft{
  width:30%;
  font-size:28rpx
}
.coumind{
    width:60%;
    text-align:right;
    color:#878787;
    font-weight:none;
    font-size:20rpx;
}
.couright{
    width:10%;
    padding-top:10rpx;
    box-sizing:border-box;
    padding-left:20rpx;
}
.couright img{
  height:35rpx;
  width:20rpx;
}
.pecom :first-child{
  width:70%;
  font-size:20rpx;
  font-weight:0;
  color:#878787;
  text-align:right
}
.pecom :last-child{
  width:30%;
  text-align:center;
}
.btn{
  box-sizing:border-box;
  height:8vh;
  width:100%;
  display:flex;
  line-height:8vh;
   color:#fff;
}
.commoney{
  width:45%;
  background:#434343;
  text-align:center;
}
.submoney{
  width:35%;
  background:#434343;
  font-size:18rpx;

}
.paymoney{
  width:20%;
  background:#22AC38;
  text-align:center;

}
hr{
  margin:0 auto;
  width:95%;
  height:4rpx;
  background:rgba(238,238,238,1);
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
    }

</style>
