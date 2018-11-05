<template>
  <div class="homeContent">
    <div class="home-head">
        <div class="home-head-positon">
            <i class="el-icon-location postion-icon"></i>
            <span>空港十六区-12幢</span>
            <i class="mint-toast-icon mintui mintui-search"></i>
        </div>
        <div class="home-search">
            <div class="home-search-content">
                <i class="el-icon-search"></i>
                <span>搜索饿了么商家、商品名称</span>
            </div>
        </div>
    </div>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'homeContent',
  data () {
    return {
      message:'这是home页面'
    }
  },
  components:{
  },
  mounted(){
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
.homeContent{
  .home-head {
        color: #fff;
        .home-head-positon {
            height: 30px;
            line-height: 30px;
            display: flex;
            align-items: center;
            background-color: #0085ff;
            span {
                font-size: 16px;
                font-weight: bold;
                margin: 0 2px;
            }
            .postion-icon {
                font-size: 18px;
            }
            .arrow-icon {
                font-size: 12px;
            }
        }
        .home-search{
            height: 36px;
            line-height: 36px;
            margin-top: 5px;
.home-search-content{
    background-color: #fff;
    font-size: 16px;
 i{
                color:#999;
            }
            span{
                color:#999;
            }
}
           
        }
    }
}
</style>
