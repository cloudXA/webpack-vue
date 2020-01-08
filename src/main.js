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

// 导入account组件

// 路由嵌套情况下，被封装
// import account from './main/account.vue'
// import goodsList from './main/goodsList.vue'

// // 路由
// var router = new VueRouter({
//     routes: [
//         {path: '/account', component: account},
//         {path: '/goodsList', component: goodsList}
//     ]
// })


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