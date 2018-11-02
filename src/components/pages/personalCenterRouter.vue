<template>
  <div class="personalCenterRouter">
      <router-view></router-view>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'personalCenterRouter',
  data () {
    return {
      message:'这是personalCenterRouter路由过度'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>