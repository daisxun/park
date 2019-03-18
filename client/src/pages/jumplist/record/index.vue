<template>
  <div class="bg">
   	<div class="nav">
   		<ul >
   			<li >筛选 <img class="corner" src="/static/images/corner.png"></li>
   			<li v-on:click="page('A')">停车记录</li>
   			<li v-on:click="page('B')">欠费记录</li>
   			<li v-on:click="page('C')">违章记录</li>
   		</ul>
   	</div>
   	<div class="body">
   		<div v-show="viw =='A'">
   			<parkrecord v-bind:park="park" ></parkrecord>
   		</div>
   		<div v-show="viw =='B'">
   			<debtrecord v-bind:debt="debt"></debtrecord>
   		</div>
   		<div v-show="viw =='C'">
   			<rulerecord v-bind:rule="rule"></rulerecord>
   		</div>
   	</div>
  </div>
</template>

<script>
import parkrecord from '@/components/parkrecord'
import debtrecord from '@/components/debtrecord'
import rulerecord from '@/components/rulerecord'
import store from './store'
import { mapState } from 'vuex'

export default {
  components: {
    parkrecord,debtrecord,rulerecord
  },
  data () {
    return {
      viw: 'A',

    }
  },
  computed:{
     park(){
        return store.state.park
     },
     debt(){
        return store.state.debt
     },
     rule(){
        return store.state.rule
     },
  },
  methods:{
  	page:function(e){
  			this.viw=e
  	},
    deletepark:function(e){
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
}
ul{
	display:flex;
	color:#fff;
	background:#F8A350;
}
.corner {
	width: 20rpx;                
	height: 20rpx;
	display:inline-block;

	}
li{
	border-left:1rpx solid #B87635;
	border-right:1rpx solid #B87635;
	width:25%;
	color:#fff;
	line-height:7vh;
	font-size:28rpx;
	text-align:center;
}
ul :first-child{
	border-left:0;
}
ul :last-child{
	border-left:0;
}
.nav{
	height:7vh;
	background:blue;
}
.body{
	height:90vh;
	width:100%;
	margin-top:10rpx;
	box-sizing:border-box;
	padding:0 40rpx;
	overflow:scroll;
}
</style>
