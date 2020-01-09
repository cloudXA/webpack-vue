import Vue from 'vue'
// 导入vue-router包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入mui的样式表 和bootstrap用法没有差别
import './lib/mui/css/mui.min.css'

// 按需导入mint-ui组件
import { Button } from 'mint-ui'
// 使用Vue.comment注册按钮组件
Vue.component(Button.name, Button)

// 导入app组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})