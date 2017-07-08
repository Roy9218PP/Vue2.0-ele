//import 是es6提供的模块加载的方法

//加载Vue模块相当于script引入vue.js
import Vue from 'vue'

//加载App.vue模块，把该模块导出的内容赋值给变量App.在webpack.config.js中设置忽略文件后缀
import App from '@/components/AppComponent/App'

//引入路由模块
import router from "@/router"

//引入css模块，需要安装loader：npm install style-loader css-loader --save-dev
import '@/assets/css/base.css'

new Vue({
  el: '#app',
  router,
  //把app组件渲染到挂载点
  render: h => h(App)
})
