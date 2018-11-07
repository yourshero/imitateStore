<template>
    <div class="homeContent-wrap">
        <div class="homeContent">
            <div class="home-head">
                <router-link :to="{path:'/user-address',params:'',query:{'cityName':city_name}}">
                    <div class="home-head-positon">
                        <i class="el-icon-location postion-icon"></i>
                        <span>{{city_name}}</span>
                        <i class="mint-toast-icon mintui mintui-search"></i>
                    </div>
                </router-link>
                <router-link :to="{path:'/search-food',params:'',query:{'cityName':city_name}}">
                    <div class="home-search">
                        <div class="home-search-content">
                            <i class="mint-toast-icon mintui mintui-search"></i>
                            <span>搜索饿了么商家、商品名称</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <section class="slide1" style="height:120px">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>1</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>2</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>3</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>4</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>5</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>6</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>7</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>8</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>9</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>10</span>
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>1</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>2</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>3</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>4</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>5</span>
                    </a>
                    <a href="#">
                        <div class="slide-img-wh">
                            <img src="../../assets/slide1.png" alt="">
                        </div>
                        <span>6</span>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </section>
    </div>
</template>
<!--mockjs应用页面-->
<script>
    import axios from 'axios' //局部引入
    export default {
        name: 'homeContent-wrap',
        data() {
            return {
                message: '这是home页面',
                city_name: '前往定位'
            }
        },
        components: {},
        mounted() {
            if (this.$route.query.cityName) {
                this.city_name = this.$route.query.cityName;
            }
            console.log(this.$route)
        },
        methods: {
            choose_adress: function() {}
        }
    }
</script>
<style lang="less">
    .homeContent-wrap {
        height: 100%;
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
        .slide1 {
            .mint-swipe {
                overflow: visible;
            }
            .mint-swipe-items-wrap {}
            .mint-swipe-item {
                display: flex;
                flex-wrap: wrap;
                div {}
            }
            a {
                text-align: center;
                float: left;
                width: 20%;
                .slide-img-wh {
                    height: 38px;
                    width: 38px;
                    margin: 0 auto;
                    img {
                        width: 100%;
                    }
                }
                span {
                    font-size: 12px;
                    margin-top: 5px;
                    display: block;
                }
                img {
                    display: block;
                    margin: 0 auto;
                    width: 100%;
                }
            }
            .mint-swipe-indicators {
                bottom: -7px;
                .mint-swipe-indicator {
                    border-radius: 0;
                    opacity: 0.2;
                    width: 10px;
                    height: 2px;
                }
                .mint-swipe-indicator.is-active {
                    background-color: #00a6ff;
                }
            }
        }
    }
</style>
