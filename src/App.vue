<template>
    <div>
      <h1>这是App 组件</h1>

      <mt-button type="danger" icon="more" @click="show">default</mt-button>

      <mt-button type="danger" size="large" plain>default</mt-button>

      <mt-button type="danger" size="small" disabled>default</mt-button>

      <button type="button" class="mui-btn mui-btn-royal">
        royal盛大的
      </button>

      <!-- 小结： 一下路由，会嵌套在已经有的App.vue页面中 -->
      <router-link to="/account">account</router-link>
      <router-link to="/goodsList">goodsList</router-link>

      <router-view></router-view>
    </div>
</template>

<script>
// 按需导入toast组件

import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // 模拟获取列表的一个ajax请求
      // 在获取数据之前，立即弹出toast提示用户，正在加载数据
      this.show();
      setTimeout(() => {
        this.toastInstanse.close();
      },3000);
    },
    show() {
      // Toast("提示信息");
      this.toastInstanse = Toast({
        message: '这是消息',
        duration: -1,//如果是-1则弹出之后不消失
        postion: "top",
        iconClass: 'glyphicon glyphicon-heart',//实质图标的类
        className: "mytoast"//自定义Toast的样式，需要自己提供一个类名
      })
    }
  }
}
</script>