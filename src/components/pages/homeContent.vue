<template>
    <div class="homeContent">
        <div class="home-head">
            <router-link :to="{path:'/user-address',params:'',query:{'cityName':city_name}}">
               <div class="home-head-positon">
                <i class="el-icon-location postion-icon"></i>
                <span>{{city_name}}</span>
                <i class="mint-toast-icon mintui mintui-search"></i>
            </div>
            </router-link>
            <div class="home-search">
                <div class="home-search-content">
                    <i class="mint-toast-icon mintui mintui-search"></i>
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
        data() {
            return {
                message: '这是home页面',
                city_name:''
            }
        },
        components: {

        },
        mounted() {
            this.city_name = this.$route.query.cityName;
            console.log(this.$route)
        },
        methods: {
            choose_adress:function(){
                
            }
        }
    }
</script>
<style lang="less">
    .homeContent {
        background-color: #26a2ff;
        padding: 15px;
        .home-head {
            .home-head-positon {
                height: 30px;
            color: #fff;
                line-height: 30px;
                display: flex;
                align-items: center;
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
            .home-search {
                height: 36px;
                line-height: 36px;
                margin-top: 5px;
                .home-search-content {
                    background-color: #fff;
                    font-size: 16px;
                    display: flex;
                    justify-content: center;
                    i {
                        color: #999;
                    }
                    span {
                        color: #999;
                    }
                }
            }
        }
    }
</style>
