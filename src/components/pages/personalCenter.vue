<template>
  <div class="personalCenter">
      <router-link to="/personalCenter/pay">支付</router-link>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'personalCenter',
  data () {
    return {
      message:'这是personalCenter个人中心'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>