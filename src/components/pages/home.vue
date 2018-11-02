<template>
  <div class="home">
      {{message}}
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入

export default {
  name: 'home',
  data () {
    return {
      message:'这是home首页'
    }
  },
  
  mounted(){
  },
  methods:{

  }
}
</script>