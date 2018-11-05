<template>
  <div class="nav-bottom-tabs" @click="tabsClick($event)">
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/home" :class="active_id=='home'?'active':''" id="home">首页</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/find" :class="active_id=='find'?'active':''" id="find">发现</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/order" :class="active_id=='order'?'active':''" id="order">订单</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/personalCenter" :class="active_id=='personalCenter'?'active':''" id="personalCenter">我的</router-link></div></el-col>
    </el-row>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'nav-bottom-tabs',
  data () {
    return {
      message:'这是nav-bottom-tabs底部菜单切换',
      active_id:''
    }
  },
  mounted(){
  },
  methods:{
    tabsClick:function(target){
      console.log(target);
      this.active_id = target.target.id;
      console.log(this.active_id);
    }
  }
}
</script>
<style>
.nav-bottom-tabs{
  font-size: 14px;
  line-height: 60px;
  height: 60px;
  -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
  box-sizing: border-box;
  position: fixed;  
  bottom: 0; 
  width: 100%;
  padding: 0;
}
.nav-bottom-tabs a{
  
}
.nav-bottom-tabs .active{
  color:red;
}
</style>
