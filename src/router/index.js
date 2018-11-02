import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import Home from '@/components/pages/home'
import Find from '@/components/pages/find'
import Order from '@/components/pages/order'
import PersonalCenter from '@/components/pages/personalCenter'
import PersonalCenterRouter from '@/components/pages/personalCenterRouter'
import Pay from '@/components/children/pay'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home', // 重定向
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: PersonalCenter
    },
    {
      path: '/personalCenterRouter',
      name: 'personalCenterRouter',
      component: PersonalCenterRouter,
      children: [  //这里就是二级路由的配置
        {
          path: '/personalCenter/pay',
          name: 'pay',
          component: Pay
        }]
    }
  ]
})
