<template>
    <div class="user-address">
        <mt-header title="选择收货地址">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <section class="search">
            <router-link to='/order' class="address-name">
                成都<span>▼</span>
            </router-link>
            <mt-search v-model="value" class="search-input"></mt-search>
        </section>
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
                value: ''
            }
        },
        mounted() {},
        methods: {}
    }
</script>
<style lang="less">
    .user-address {
        .search {
            display: flex;
            align-items: center;
            padding: 15px;
            .address-name {
                font-size: 12px;
                color: #333;
                display: block;
                height: 100%;
                min-width: 50px;
                span {
                    font-size: 12px;
                }
            }
            .search-input {
                height: inherit;
                width:100%;
                font-size: 12px;
               .mint-searchbar{
                 padding: 0;
                 .mint-searchbar-inner{
                 background-color:#f2f2f2;

                     input{
                     background-color:#f2f2f2;

                     }
                     
                 }
                 .mint-searchbar-cancel{
                         margin: 0;
                         text-align: center;
                         padding: 0 5px;
                     }
                }
            }
            
        }
        
    }
     
</style>
