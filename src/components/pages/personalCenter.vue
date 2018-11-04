<template>
  <div class="personalCenter">
      <router-link to='/personalCenter/pay'>{{message}}</router-link>
      <div class="child">
            
        </div>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'personalCenter',
  data () {
    return {
      message:'支付'
    }
  },
  mounted(){
    
  },
  methods:{

  }
}
</script>