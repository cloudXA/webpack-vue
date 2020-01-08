// 如何在webpack构建的项目中，使用vue进行开发

// 在普通网页中使用vue
// 1. 通过script引入vue包
// 2.在index页面中，建立一个id为app的div容器
// 3.通过new vue得到一个vm的实例

// 在webpack中尝试使用vue

// ps:在webpack中，使用import Vue from 'vue'导入vue的构造函数,
// 但是功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的方式
import Vue from 'vue';

// 导入vue-router包
import VueRouter from 'vue-router'

// 手动安装VueRouter
Vue.use(VueRouter)


// 小结: main.js是为了减少HTML页面的二次请求的性能消耗，不同于直接请求，而是基于main.js
// 的方式，注入到写好的.vue组件中

// 导入boostrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入mui的样式表，和bootstrap的用法没有差别
import './mui/css/mui.css'

// 导入所有的mintui组件
// 导入mint-ui
// import MintUI from 'mint-ui'//把所有的组件都导入进来
// 这里可以省略mode_modules这一层目录
// import 'mint-ui/lib/style.css'
// 将mintUi安装到vue中
// Vue.use(MintUI)//把所有的组件注册为全局的组件

// 按需导入mint-ui组件
import { Button } from 'mint-ui'
// 使用Vue.component注册按钮组件
Vue.component(Button.name, Button)






// 等同于路径查找
// import Vue from '../node_modules/vue/dist/vue.js';
// 回顾
// 包的查找规则
// 1.找项目根目录中有没有node_modules的文件夹
// 2.在node_modules中根据包名，找对应的vue文件夹
// 3.在vue文件夹中，找一个叫package.json的包配置文件
// 4.在package.json文件中，查找一个main属性【main属性指定了这个包在加载时候的入口文件】

// var login = {
//     template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

// 1.导入login组件【和login.vue相关联🤔】
// import login from './login.vue';
import app from './App.vue'

// 被封装在了router，
// 导入account组件

// import account from './main/account.vue'
// import goodsList from './main/goodsList.vue'

// // 路由
// var router = new VueRouter({
//     routes: [
//         {path: '/account', component: account},
//         {path: '/goodsList', component: goodsList}
//     ]
// })
// 直接引入路由接口
import router from './router.js'

// 默认，webpack无法打包.vue,需要安装相依你的loader
// yarn add vue-loader vue-template-compiler -D
// 在配置文件中，新增loader配置项{test: /.\vue$/, use: 'vue-loader'}
// 和index.html中的id:app有关😉
// viewModel
var vm = new Vue({
    el: '#app',
    // data: {
    //     msg: 'msg输出的数据，msg:123'
    // },
    // components: {
    //     login
    // }
    // 引用了vue模块，使用vue提供的render函数
    render: function (createElements) {
        return createElements(app)
    },
    router

    // render: c => c(login)
})