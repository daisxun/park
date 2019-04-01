<template>
  <div class="bg">

      <div class="bodys">
           <!-- 8vh -->
          <div class="peyuser"> 迅远科技有限公司</div>
           <hr/>
           <!-- 25vh  -->
          <div class="order">
              <div class="ordernum">
                  <span class="ordernumleft"> 付款订单</span>
                  <span class="ordernumright">100102121</span>
              </div>
              <div  class="ordernum">
                  <span class="ordernumleft">停车时长</span>
                  <span class="ordernumright">12:11:11</span>
              </div>
              <div  class="ordernum">
                  <span class="ordernumleft">停车场</span>
                  <span class="ordernumright">冯科日期</span>
              </div>
              <div  class="orderpay">
                <span class="orderpayleft">付款金额</span>
                <span class="orderpayright">￥123.40</span>
              </div>
          </div>
          <hr/>
          <!--  8vh  -->
          <!-- <div class="peycoupon">
              <div class="couleft">优惠券</div>
              <div class="coumind">您有一张可用的优惠券</div>
              <div class="couright">

                <img src="/static/images/yellrow.png">
              </div>
          </div>
            <hr/> -->
          <!--  8vh  -->
          <div class="pecom">
            <span>总金额￥</span><span>{{count}}</span>
          </div>
          <hr/>
          <!-- 17vh -->
          <div class="bayond">
              <div class="bayondtxt">余额</div>
              <div class="bayonddown">
                  <div class="bayonddownleft">
                      <div class="bayonddownleftup">
                          <span>预缴停车费余额</span><span>$4.00</span>
                      </div>
                      <div class="bayonddownleftdown">
                        <span>2019年4月30日到期</span>
                      </div>
                  </div>
                  <div class="bayonddownright">
                      <van-checkbox :value="true" @change="onChange"></van-checkbox>
                  </div>
              </div>
              <div class="hidemeg">
                    <span>当前余额不足，请微信支付，或者前往预缴停车费</span>
              </div>
          </div>
          <div class="payimg">
            <img src="/static/images/pay.png" alt="">
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

export default {

  data () {
    return {
      lineH:"",
      activeheight:"",
       shows: false,
       count:0
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
      },
      onChange:function(e){
        console.log(e)
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
/* 92vh */
.bodys{
  height:92vh;
  width:100%;
  
  padding:10rpx;
  box-sizing:border-box;
}
 /* 8vh */
.peycoupon,.pecom{
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
/* peyuser  8vh */
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
/* 余额  17*/
.bayond{
  height: 17vh;
  background: #f2f2f2;
  width: 100%;
  box-sizing: border-box;
}
.bayondtxt{
  background: white;
  font-size: 20rpx;
  color:#FF9933;
  box-sizing: border-box;
  padding-left: 30rpx;
  line-height:50rpx;

}
.bayonddown{
  /* height: 100%; */
  width: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
}
.bayonddownleft{
  background: white;
  width: 80%;
  padding-top: 15rpx;
  box-sizing: border-box;
}
.bayonddownleftup{
  background: white;
  font-size: 28rpx;
  color:#333333;
  box-sizing: border-box;
  padding-left: 30rpx;
  line-height: 50rpx;
}
.bayonddownleftdown{
  font-size: 20rpx;
  color:#989898;
  padding-left: 30rpx;
  line-height: 50rpx;
  background: white
}
.bayonddownright{
   background: white;
   width: 20%;
   padding: 25rpx 0 0 40rpx;
   box-sizing: border-box;;
}
.hidemeg{
    background: #f2f2f2;
    color:#333333;
    font-size: 20rpx;
    line-height: 30rpx;
    box-sizing: border-box;
    padding-left: 30rpx;
}

/* 图 */
.payimg{
  /* background: ; */
  height: 20vh;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2vh;
}
.payimg img{
  height: 200rpx;
  width: 100%;
}


/* 订单 25vh */
.order{
  background: white;
  height: 25vh;
}
.ordernum{
  background: white;
  display: flex;
}
.ordernumleft{
  background: white;
  width: 20%;
  color:#313131;
  font-size: 24rpx;
  font-weight: bolder;
  padding: 10rpx 20rpx;
  }
  .orderpayright{

  }
.ordernumright{
  background: white;
  width:80%;
  text-align: center;
  color:#999999;
  font-size: 24rpx;
  padding: 10rpx 20rpx;

}
.orderpay{
   /* background: green; */
   display: flex; 
   height: 100rpx;
}
.orderpayleft{
   background: white;
  width: 20%;
  color:#313131;
  font-size: 24rpx;
  font-weight: bolder;
  padding: 10rpx 20rpx; 
}
.orderpayright{
 width: 80%;
 /* background: blue; */
 text-align: center;

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

/* 8vh */
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
