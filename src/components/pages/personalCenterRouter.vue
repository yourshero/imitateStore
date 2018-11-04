<template>
  <div class="personalCenterRouter">
    {{message}}
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'personalCenterRouter',
  data () {
    return {
      message:'这是子路由'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>