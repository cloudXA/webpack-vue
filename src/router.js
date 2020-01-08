import VueRouter from 'vue-router'

// 导入Account组件
import account from './main/account.vue'
import goodslist from './main/goodsList.vue'

// 导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            // 说明在/account路径下面还有login和register
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        },
        {path: '/goodslist', component: goodslist}
    ]
})

export default router