<template>
  <div class="billbg">
  		<div class="tabs">
  			<ul class="tar_ul"  >
  				<li :class="{ actives:val.show }"  v-for="(val,index) in tabs" :key='index' @click="bindChange(val)">{{val.name}}</li>
  			</ul>
  		</div>
  		<div>
  			<div class="conter"  v-show="'A'==ids">
  				<div class="box" v-for="(val,index) in relgroup" :key='index'>
  					{{val}}
  				</div>
  			</div>
  			<div class="conter"  v-show="'B'==ids">
  				<div class="box" v-for="(val,index) in nulgroup" :key='index'>
  					  				DSD
  				</div>
  			</div>
  		</div>
  </div>
</template>

<script>

export default {

  data () {
    return {
    	ids:'A',
      tabs: [{id:'A',name:'已关联',show:true},
             {id:'B',name:'未关联',show:false}],
      relgroup:["风和日丽车场",'深圳南山西丽平山一路车场','风和日丽车场','深圳南山西丽平山一路车场',"风和日丽车场",'深圳南山西丽平山一路车场','风和日丽车场','深圳南山西丽平山一路车场',"风和日丽车场",'深圳南山西丽平山一路车场','风和日丽车场','深圳南山西丽平山一路车场',"风和日丽车场",'深圳南山西丽平山一路车场','风和日丽车场','深圳南山西丽平山一路车场',"风和日丽车场",'深圳南山西丽平山一路车场','风和日丽车场','深圳南山西丽平山一路车场'],
      nulgroup:["风1111111场",'深圳33333333333333车场','风4444车场','深圳333333车场']
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
	margin: 10rpx  20rpx;

}
.box{
	padding:0 40rpx;
	box-sizing:border-box;
	background:#fff;
	line-height:80rpx;
	color:#919191;
	font-size:36rpx
}

::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
</style>
