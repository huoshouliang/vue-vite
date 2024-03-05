<template>
  <div class="layout_container">
    <div :class="{ fold: icons.fold }" class="layout_slider">
      <logo></logo>
      <el-scrollbar>
        <el-menu
          background-color="#483D8B"
          text-color="#ffffff"
          active-text-color="#00BFFF"
          mode="vertical"
          @select="handleSelect"
          :default-active="$route.path"
          unique-opened="true"
          style="border-right: 0"
          :collapse="icons.fold"
        >
          <!-- collapse 是否水平折叠收起菜单 -->
          <testmenu :menulist="userstore.menuRoutes"></testmenu>
          <!-- <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabber" :class="{ fold: icons.fold }">
      <!-- 顶部菜单 -->
      <tabber></tabber>
    </div>
    <div class="layout_main" :class="{ fold: icons.fold }">
      <!-- 主要内容 -->
      <Main></Main>
    </div>
  </div>
</template>

<script setup>
import Main from './main/index.vue'
import logo from '@/layout/logo.vue'
import testmenu from './menu/index.vue'
import tabber from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import userlayoutstore from '@/store/modules/setting'
import { useRoute } from 'vue-router'

const icons = userlayoutstore()
let userstore = useUserStore()

let $route = useRoute()
console.log(userstore, $route.path)
</script>
<script>
export default {
  name: 'layout',
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background: $base_menu_background;
  .layout_slider {
    width: $base_menu_width;
    height: calc(100vh - $base_menu_logo_height);
    transition: all 0.3s;
    &.fold {
      width: $base_menu_fold_width;
    }
  }
  .layout_tabber {
    position: fixed;
    width: calc(100% - $base_menu_width);
    height: $base_taber_height;
    background: $base_taber_background;
    top: 0px;
    left: $base_menu_width;
    color: $base_taber_text_color;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base_menu_fold_width);
      left: $base_menu_fold_width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base_menu_width);
    height: calc(100vh - $base_taber_height);
    background: white;;
    top: $base_taber_height;
    left: $base_menu_width;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base_menu_fold_width);
      left: $base_menu_fold_width;
    }
  }
}
</style>
