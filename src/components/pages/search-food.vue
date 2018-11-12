<template>
    <div class="search-food">
        <div class="back-home">
            <router-link :to="{path:'/home',query:{'cityName':city_name}}" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </div>
        <mt-search v-model="value" class="search-input" @keyup.native.capture="foodsearch($event)">
            <mt-cell v-for="(item,index) in list" :key='index' :district='item.district' :to="{path:'/home',params:'',query:{'cityName':item.name}}">
                <div class="store-img">
                    <img :src="index_img.url" alt="" v-for='(index_img,index) in item.photos' :key='index'>
                </div>
                <strong>{{item.name}}</strong>
                <span>{{item.address}}</span>
            </mt-cell>
        </mt-search>
        <!-- <section class="search-content">
                        <ul infinite-scroll-disabled="loading" infinite-scroll-distance="20">
                            <li v-for="(item,index) in list" :key='index'>
                                <h2>{{item.name}}</h2>
                                <span>{{item.address}}</span>
                            </li>
                        </ul>
                    </section> -->
    </div>
</template>

<!--mockjs应用页面-->
<script>
    import axios from 'axios' //局部引入
    import { Toast } from 'mint-ui';
    export default {
        name: 'user-address',
        data() {
            return {
                message: '地址',
                value: '',
                city_name: '选择',
                msg: '',
                list: {},
                timeoutId: 0,
                search_val: ''
            }
        },
        mounted() {
            if (this.$route.query.cityName) {
                this.city_name = this.$route.query.cityName;
            }
        },
        methods: {
            foodsearch: function(key_event) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    console.log(key_event.target.value);
                    this.search_val = key_event.target.value;
                    axios.get('https://restapi.amap.com/v3/place/text?', {
                        params: {
                            'keywords': this.search_val,
                            'output': 'json',
                            'extensions': 'all',
                            'city': this.city_name,
                            'key': '2cf9855d46b45a6c021b4abcde155840'
                        }
                    }).
                    then(res => {
                        Toast({
                        message: '加载完成',
                        position: 'bottom',
                        iconClass: 'icon icon-success',
                        duration: 1000
                        });
                        this.list = res.data.pois;
                        console.log(this.list)
                    }).catch(function(error) {
                        Toast({
                        message: '获取不到数据',
                        position: 'bottom',
                        duration: 1000
                        });
                        console.log("error init." + error)
                    });
                }, 500);
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            }
        }
    }
</script>

<style lang="less">
    .search-food {
        display: flex;
        align-items: center;
        padding: 15px;
        .back-home {
            display: flex;
            align-items: center;
            .mint-button {
                background-color: #fff;
                border: none;
                box-shadow:none;
                .mintui{
                    font-size: 24px;
                }
            }
            .mint-button--normal{
                padding: 0;
                padding-right: 15px;
                display: block;
            }
        }
        .search-input {
            height: inherit;
            width: 100%;
            font-size: 12px;
            .mint-search-list {
                padding: 0 15px;
                padding-top: 0;
                z-index: 10;
                top: 80px;
                .mint-cell-wrapper {
                    padding: 0;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-around;
                    text-align: left;
                    .mint-cell-value {
                        font-size: 12px;
                        width: 100%;
                        display: flex;
                        strong {
                            flex: 1;
                            font-weight: bold;
                            color:#333;
                        }
                        span {
                            flex: 1;
                            text-align: right;
                            font-size: 12px;
                        }
                        .store-img {
                            display: flex;
                            width: 30px;
                            height: 30px;
                            overflow: hidden;
                            margin-right: 10px;
                            img {
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .mint-cell-title {}
                }
            }
            .mint-searchbar {
                padding: 0;
                .mint-searchbar-inner {
                    background-color: #f2f2f2;
                    input {
                        background-color: #f2f2f2;
                    }
                }
                .mint-searchbar-cancel {
                    margin: 0;
                    text-align: center;
                    padding: 0 5px;
                    display: none;
                }
            }
        }
    }
    .search-content {
        ul {
            list-style: none;
            li {
                font-size: 12px;
            }
        }
    }
</style>
