<template>
    <div class="homeContent-wrap">
        <div :class="['homeContent',{isFixed:searchBarFixed}]">
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
        <!-- 补高度 -->
        <div class="auto_fixed_fake" :style="{display: auto_fixed ? 'block':'none'}"></div>
        <!-- 服务列表 -->
        <section class="slide1" style="min-height:150px">
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
        <!-- super VIP -->
        <section class="superVIP">
            <mt-cell title="超级会员">
                <span class="hb">▪ 每月领20元红包</span><span>立即开通></span>
                <img slot="icon" src="@/assets/vip.png">
            </mt-cell>
        </section>
        <!-- 活动1 -->
        <section class="activity">
            <div class="activity1">
                <strong class="activity1-name">品质套餐</strong>
                <p>搭配齐全吃得好</p>
                <span class="activity1-buy">立即抢购></span>
                <img src="@/assets/food1.png" alt="">
            </div>
            <div class="activity2">
                <strong class="activity2-name">限量抢购</strong>
                <p>超值美味9.9元起</p>
                <span class="activity2-buy-people"><span>817人</span>人正在抢></span>
                <img src="@/assets/food2.png" alt="">
            </div>
        </section>
        <!-- slide2 -->
        <section class="silde2">
            <mt-swipe :auto="0">
                <mt-swipe-item><img src="@/assets/slide2-1.png" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="@/assets/slide2-2.png" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="@/assets/slide2-3.png" alt=""></mt-swipe-item>
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
                city_name: '前往定位',
                searchBarFixed: false,
                auto_fixed: false
            }
        },
        components: {},
        mounted() {
            if (this.$route.query.cityName) {
                this.city_name = this.$route.query.cityName;
            }
            console.log(this.$route)
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            choose_adress: function() {},
            handleScroll: function() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                var offsetTop = document.querySelector('.homeContent').offsetTop
                console.log(offsetTop)
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true;
                    this.auto_fixed = true;
                } else {
                    this.searchBarFixed = false;
                    this.auto_fixed = false;
                }
            }
        },
        destroyed() {
            console.log('取消监听事件不然要报错');
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
<style lang="less">
    .homeContent-wrap {
        height: 100%;
        .auto_fixed_fake {
            height: 101px;
            width: 100%;
        }
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
        .isFixed {
            position: fixed;
            background-color: #26a2ff;
            padding: 15px;
            top: 0;
            z-index: 999;
            width: 100%;
            box-sizing: border-box;
        }
        .silde2 {
            padding: 0 10px;
            margin-top: 4px;
            .mint-swipe {
                .mint-swipe-items-wrap {
                    min-height: 100px;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
                .mint-swipe-indicators {
                    bottom: 0.3125rem;
                    .mint-swipe-indicator {
                        border-radius: 0;
                        opacity: 0.2;
                        width: 0.3125rem;
                        height: 0.0625rem;
                    }
                    .is-active {
                        background-color: #00a6ff;
                    }
                }
            }
        }
        .activity {
            display: flex;
            padding: 0 10px;
            min-height: 150px;
            justify-content: space-between;
            margin-top: 5px;
            height: 500px;
            .activity1 {
                width: 46.5%;
                font-size: 12px;
                text-align: left;
                padding-left: 10px;
                padding-top: 10px;
                background-color: #f4f4f4;
                position: relative;
                img {
                    width: 120px;
                    height: 80px;
                    position: absolute;
                    bottom: 0;
                    right: 5px;
                }
                .activity1-name {
                    font-size: 16px;
                }
                p {
                    padding: 0;
                    margin: 6px 0;
                }
                .activity1-buy {
                    font-weight: 700;
                    color: #af8260;
                }
            }
            .activity2 {
                padding-top: 10px;
                background-color: #f4f4f4;
                width: 46.5%;
                padding-left: 10px;
                font-size: 12px;
                text-align: left;
                position: relative;
                img {
                    width: 120px;
                    height: 80px;
                    position: absolute;
                    bottom: 0;
                    right: 5px;
                }
                .activity2-name {
                    color: #e81919;
                    font-size: 16px;
                }
                p {
                    padding: 0;
                    margin: 0;
                    margin: 6px 0;
                }
                .activity2-buy-people {
                    font-weight: 700;
                    span {
                        color: #e81919;
                    }
                }
            }
        }
        .superVIP {
            padding: 0 10px;
            .mint-cell {
                border-radius: 3px;
                min-height: 40px;
                position: relative;
            }
            .mint-cell-wrapper {
                background-color: #ffefc4;
                background-image: none;
                .mint-cell-title {
                    text-align: left;
                    .mint-cell-text {
                        font-weight: 700;
                        font-size: 14px;
                        color: #644f1b;
                    }
                    img {
                        width: 16px;
                        height: 16px;
                    }
                }
                .mint-cell-value {
                    .hb {
                        position: absolute;
                        top: 15px;
                        left: 90px;
                    }
                    span {
                        color: #644f1b;
                        font-size: 12px;
                    }
                }
            }
        }
        .slide1 {
            .mint-swipe {
                overflow: visible;
                height: 150px;
            }
            .mint-swipe-items-wrap {}
            .mint-swipe-item {
                div {}
            }
            a {
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
                bottom: 10px;
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
