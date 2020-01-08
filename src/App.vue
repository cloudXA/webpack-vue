<template>
    <div>
        <h1>这是APP组件</h1>

        
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>

        <router-view></router-view>
    </div>
</template>


<script>
// /**  下面这些起不到作用 */
export default {
    data() {
        // 注意：组件中的data必须是function
        return {
            msg: '模板msg中数据'
        };
    },
    methods: {
        show() {
            console.log('调用了login.vue中的show方法');
        }
    }
}
</script>

<style>
    
</style>

