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
    <mt-tabbar v-model="active" class="tabbar">
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
        city_name:'',
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
    mounted() {
      // 获取当前经纬度坐标
      this.getPosition().then(result => {
        // 返回结果示例：
        // {latitude: 30.318030999999998, longitude: 120.05561639999999}
        // 一般小数点后只取六位，所以用以下代码搞定
        let queryData = {
          longtitude: String(result.longitude).match(/\d+\.\d{0,6}/)[0],
          latitude: String(result.latitude).match(/\d+\.\d{0,6}/)[0],
          channelType: '00'
        }
        console.log(queryData)
        // 以下放置获取坐标后你要执行的代码:

        // ...
      }).catch(err => {
        console.log(err)
      })

    },
    methods: {
      handleClick: function() {
        this.$toast('Hello world!');
      },
      //开启地理位置
      getPosition:function() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let data = {
          latitude: latitude,
          longitude: longitude
        }
        resolve(data)
      }, function () {
        reject(arguments)
      })
    } else {
      reject('你的浏览器不支持当前地理位置信息获取')
    }
  })
}
    }
  }
</script>
<style lang="less">
  .home {
    .tabbar{
      height: 50px;
      line-height: 50px;
      font-size: 12px;
    }
  }
</style>
