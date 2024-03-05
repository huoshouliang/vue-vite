<template>
  <div class="logo">
    <img :src="setting.logo" alt="加载失败" />
    <h1 v-show="!icons.fold">{{ setting.title }}</h1>
  </div>
</template>
<script setup>
import userlayoutstore from '@/store/modules/setting'
import setting from '@/setting'
const icons = userlayoutstore()
</script>
<script>
export default {
  name: 'logo',
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base_menu_logo_height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: calc($base_menu_logo_height - 10px);
    height: calc($base_menu_logo_height - 10px);
  }
  p {
    font-size: $base_logo_title_fontsize;
    margin-left: 10px;
  }
}
</style>
