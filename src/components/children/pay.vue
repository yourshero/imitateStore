<template>
  <div class="pay">
      {{message}}
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'pay',
  data () {
    return {
      message:'这是pay支付'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>