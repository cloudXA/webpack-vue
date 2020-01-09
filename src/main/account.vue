<template>
    <div>
        <h1>这是Account组件</h1>
        
        <!-- url路径 -->
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    // lang启用scss或者less
    // style标签在.vue组件中定义的，都推荐scoped
    body {
        div {
            font-style: italic;
        }
    }
    
</style>