import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Address from '@/components/pages/user-address'
import ChosseAddress from '@/components/pages/choose-address'
import Find from '@/components/pages/find'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home', // 重定向
    }
    ,
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user-address',
      name: 'user-address',
      component: Address
    },
    {
      path: '/choose-address',
      name: 'choose-address',
      component: ChosseAddress
    },
    // {
    //   path: '/find',
    //   name: 'find',
    //   component: Find
    // }
    // {
    //   path: '/order',
    //   name: 'order',
    //   component: Order
    // },
    // {
    //   path: '/personalCenter',
    //   name: 'personalCenter',
    //   component: PersonalCenter,
    //   // children: [  //这里就是二级路由的配置
    //   //   {
    //   //     path: 'routerpay',
    //   //     name:'routerpay',
    //   //     component: Routerpay
    //   //   }
    //   //   ]
    //   },
    //   {
    //     path: '/personalCenter/pay',
    //     name: 'pay',
    //     component: Pay
    //   },
    ]
})
