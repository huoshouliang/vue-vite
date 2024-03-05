<template>
  <el-icon :size="30" style="margin-right: 5px" @click="change">
    <component :is="icons.fold ? 'Expand' : 'Fold'"></component>
    &nbsp;
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 动态展示路由 -->
    <!-- <button @click="headler"></button> -->
    <el-breadcrumb-item
      v-for="item in $route.matched"
      :key="item"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示匹配路由的标题 -->
      <span style="margin: 0px 10px; color: black">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
    <!-- <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script setup>
// import { ref } from 'vue'
import userlayoutstore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
// const props = defineProps(['icons'])
const icons = userlayoutstore()
const $route = useRoute()
const change = () => {
  icons.fold = !icons.fold
  // alert('1234')
}
// const headler = () => {
//   console.log($route.matched);
// };
</script>

<style lang="stylus" scoped></style>
