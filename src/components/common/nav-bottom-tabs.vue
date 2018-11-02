<template>
  <div class="nav-bottom-tabs">
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/home">首页</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/find">发现</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/order">订单</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link to="/personalCenter">我的</router-link></div></el-col>
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
      message:'这是nav-bottom-tabs底部菜单切换'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>
<style>
.nav-bottom-tabs{
  
}
</style>
