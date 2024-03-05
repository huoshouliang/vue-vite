<template>
  <div id="app">
    <!-- <router-link to="/login">首页</router-link>
    <router-link to="/home">关于</router-link> -->
    <router-view></router-view>
  </div>
  <!-- <h1>1234756</h1>
  <el-button type="primary" size="default">我是 ElButton</el-button>
  <el-button type="primary" size="default" text>
    <user name="gengduo_shu"></user>自定义SVG图标
  </el-button> -->
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: '$color';
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
