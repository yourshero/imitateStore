<template>
  <div class="find">
      {{message}}
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'find',
  data () {
    return {
      message:'这是find发现'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>