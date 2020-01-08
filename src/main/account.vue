<template>
    <div>
        <h1>这是 Account 组件</h1>

    <!-- 完成路由嵌套的方式 -->
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss" scope> 
    // 普通的style标签只支持普通的样式，如果要想启用scss或者less,需要为style元素
    // 设置lang属性
    // 只要咱们的style标签，是在.vue组件定义的，
    // 那么都为style开启scoped属性
    body {
        div {
            font-size: italic;
            color: red;
        }
    }
</style>