import Vue from 'vue'
//引用vue-router模块
import Router from 'vue-router'

import Home from '@/components/HomeComponent/Home'

//import Card from '@/components/CardComponent/Card'

//使用路由模块需要调用Vue.use()加载该模块
Vue.use(Router)

//导出路由对象
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
   
  ]
})
