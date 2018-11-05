<template>
  <div class="home">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
          <h-home></h-home>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
          <h-find></h-find>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
          <h-order></h-order>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container4">
          <h-my></h-my>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab-container1">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab-container2">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab-container3">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab-container4">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<!--mockjs应用页面-->
<script>
  import axios from 'axios' //局部引入
  import Find from './find'
  import Order from './order'
  import My from './personalCenter'
  import HomeContent from './homeContent'
  export default {
    name: 'home',
    data() {
      return {
        message: '这是home首页',
        active: 'tab-container1',
        selected: '',
        data1: {
          'a': 1,
          'a': 2,
          'a': 3,
          'a': 4
        }
      }
    },
    components: {
      'h-find':Find,
      'h-order':Order,
      'h-my':My,
      'h-home':HomeContent
    },
    mounted() {},
    methods: {
      handleClick: function() {
        this.$toast('Hello world!');
      }
    }
  }
</script>
<style lang="less" scoped>
  .home {
  }
</style>
