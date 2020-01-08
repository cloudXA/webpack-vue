// 导入vue-router包
import VueRouter from 'vue-router'

// 导入Account组件
import account from './main/account.vue'
import goodsList from './main/goodsList.vue'

// 导入account的俩个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'


// 手动安装VueRouter
// Vue.use(VueRouter)

// 设置路由
var router = new VueRouter({
    routes: [
        {
            path: '/account', 
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        {path: '/goodsList', component: goodsList}
    ]
})

// 把路由对象暴露出去
export default router