<template>
    <div class="user-address">
        <mt-header title="选择收货地址">
            <router-link slot="left" :to="{name:'home',params:'',query:{'cityName':city_name}}">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <section class="search">
            <router-link to='/choose-address' class="address-name">
                {{city_name}}<span>▼</span>
            </router-link>
            <mt-search v-model="value" class="search-input" @keyup.native.capture="testsearch($event)">
                <mt-cell v-for="(item,index) in list" :key='index' :title="item.name" :value="item.address" :district='item.district' :to="{name:'home',params:'',query:{'cityName':item.name}}">
                </mt-cell>
            </mt-search>
        </section>
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
        beforeCreate() {
            console.log('beforeCreate')
        },
        created() {
            console.log('created');
        },
        beforeMount() {
        },
        mounted() {
            console.log('mounted');
            if (this.$route.query.cityName) {
                this.city_name = this.$route.query.cityName;
            }
        },
        methods: {
            testsearch: function(key_event) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    console.log(key_event.target.value);
                    this.search_val = key_event.target.value;
                    axios.get('https://restapi.amap.com/v3/assistant/inputtips?', {
                        params: {
                            'keywords': this.search_val,
                            'key': '2cf9855d46b45a6c021b4abcde155840'
                        }
                    }).
                    then(res => {
                        this.list = res.data.tips;
                        console.log(this.list)
                    }).catch(function(error) {
                        console.log("error init." + error)
                    });
                }, 1000);
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
    .user-address {
        .search {
            display: flex;
            align-items: center;
            padding: 15px;
            .address-name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                color: #333;
                display: block;
                height: 100%;
                min-width: 50px;
                position: relative;
                padding-right: 12px;
                span {
                    font-size: 12px;
                    position: absolute;
                    top: 2px;
                    right: 2px;
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
                    top: 110px;
                    .mint-cell-wrapper {
                        padding: 0;
                        box-sizing: border-box;
                        display: flex;
                        justify-content: space-around;
                        text-align: left;
                        .mint-cell-value {
                            font-size: 12px;
                            flex: 1;
                            justify-content: flex-end;
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
    }
</style>
