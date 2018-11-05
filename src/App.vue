<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavBottomTabs from './components/common/nav-bottom-tabs'
export default {
  name: 'App',
  components:{
      NavBottomTabs
  },
    methods: {
      handleClick: function() {
   this.$toast('Hello world!');
  }
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
}
body{
  margin:0;
  padding: 0;
}
a{
  text-decoration: none;
}

/* .el-footer{
  position: fixed;  
  bottom: 0; 
  width: 100%;
  font-size: 14px;
  padding: 0;
} */
</style>
