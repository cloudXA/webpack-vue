<template>

    <!-- {/* 注意：在.vue的组件中，template中必须有且只有唯一的根元素进行包裹， */}
    {/* 一般都用div当做唯一的根元素 */} -->

    <div>

        <h1>这是APp组件 - {{msg}} </h1>

        <h3>我是h3</h3>

    </div>

</template>

<script>

    // {/* 注意：在.vue的组件中，通过是script标签来定义组件的行为层，需要使用es6中提供的 */}
    // {/* export default方式，导出一个vue实例对象 */}

    export default {

        data() {

            return {

                msg: '来自vue model中的问候'

            }
        }
    }
</script>

<style scoped>

    h1 {

        color: red;

    }
    
</style>