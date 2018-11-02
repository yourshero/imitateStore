<template>
  <div class="order">
      {{message}}
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'order',
  data () {
    return {
      message:'这是order订单'
    }
  },
  mounted(){
  },
  methods:{

  }
}
</script>