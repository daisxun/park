<template>
  <div class="billbg">
  		<div class="tabs">
  			<ul class="tar_ul"  >
  				<li :class="{ actives:val.show }"  v-for="(val,index) in tabs" :key='index' @click="bindChange(val)">{{val.name}}</li>
  			</ul>
  		</div>
  		<div>
  			<div class="conter"  v-show="'A'==ids">
  				<div class="box" v-for="(val,index) in nopay" :key='index'>
  					<nopaybill  v-bind:nopay="val"></nopaybill>
  				</div>
  			</div>
  			<div class="conter"  v-show="'B'==ids">
  				<div class="box" v-for="(val,index) in pays" :key='index'>
  					<paybill v-bind:pay="val"></paybill>
  				</div>
  			</div>
  			<div class="conter"  v-show="'C'==ids">
  				<div class="box" v-for="(val,index) in revoke" :key='index'>
  					<revokebill v-bind:pay="val"></revokebill>
  				</div>
  			</div>
  		</div>
  </div>
</template>

<script>
import nopaybill from '@/components/nopaybill'
import paybill from '@/components/paybill'
import revokebill from '@/components/revokebill'
export default {
   components: {
	    nopaybill,paybill,revokebill
	  },
  data () {
    return {
    	ids:'C',
      tabs: [{id:'A',name:'未支付',show:true},
             {id:'B',name:'已完成',show:false},
             {id:'C',name:'已撤销',show:false}],
     nopay:[
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'},
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'},
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'}],
  	pays:[
	        {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'}],
    revoke:[
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'},
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12' ,money:'124.00'},
		    {plate:'粤123456',type:'泊车',address:'深圳市南山路1213号',time:'2018-1-1 t:12;12:12', money:'124.00'}]
		  }

   },
  methods:{
  	bindChange:function(e){
  		 for (var val in this.tabs){
  		 	if(this.tabs[val].id==e.id){
  		 		this.tabs[val].show=true;
  		 		this.ids=this.tabs[val].id
  		 	}else{
  		 		this.tabs[val].show=false
  		 	}
  		 }
  		
  	}
  }
}
</script>

<style scoped>
.billbg{
	background:#f3f3f3;
	width:100%;
	height:100vh;
}
.tabs{
	background:red;
	box-sizing:border-box;
}
.tar_ul{
	background:#BFBFBF;
	display:flex;
	color:#FFFFFF;
	line-height:80rpx;
	text-align:center;
	font-size:28rpx;
	box-sizing:border-box;
}
.tar_ul li{
	flex:1;
}
.actives{
	background:#F8A350;
}
.conter{
	margin-top:10rpx;
	height:90vh;
	overflow-y:scroll;

}
.box{
	padding:0 40rpx;
	padding-top:25rpx;
	box-sizing:border-box
}
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
</style>
