<template>
  <div id="app">
    <el-container>
      <el-main>
    <router-view/>
      </el-main>
    <el-footer>
<NavBottomTabs></NavBottomTabs>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
import NavBottomTabs from './components/common/nav-bottom-tabs'
export default {
  name: 'App',
  components:{
      NavBottomTabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin:0;
  padding: 0;
}
.el-footer{
  position: fixed;  
  bottom: 0; 
  width: 100%;
  line-height: 60px;
  font-size: 12px;
}
</style>
