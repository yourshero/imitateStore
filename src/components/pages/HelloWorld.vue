<template>
  <div class="hello">
    <p>HELLO WORLD</p>
    <div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>
    <ul>
    	<li v-for="(item,index) in datalist" :key='index'>
    		<h1>{{item.personName}}:<span>{{item.viewName}}</span></h1>
        <img v-bind:src="item.images" alt="">
    	</li>
    </ul>
  </div>
</template>
<!--mockjs应用页面-->
<script>
import axios from 'axios' //局部引入
export default {
  name: 'HelloWorld',
  data () {
    return {
      datalist:[],
      input: '',
      value1: null,
      value2: null
    }
  },
  mounted(){
  	this.showdata()
  },
  methods:{
  	showdata(){
//		import axios from 'axios'
  		axios.get('/user') //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
  		.then((res)=>{
  			//console.log(res.data.data)
        this.datalist = res.data.data
        console.log(this.datalist);
  		})
  		.catch((err)=>{
  			console.log('调用失败',err)
  		})
  	}
  }
}
</script>