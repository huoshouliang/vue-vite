<template>
  <div class="tabber">
    <div class="tabber-left">
      <breadcrumb></breadcrumb>
    </div>
    <div class="tabber-right">
      <setting></setting>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from './breadcrumb/index.vue'
import setting from './setting/index.vue'
</script>

<style lang="scss" scoped>
.tabber {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: $base_taber_background;
  color: black;
  .tabber-left {
    display: flex;
    margin-left: 20px;
    align-items: center;
  }
  .tabber-right {
    display: flex;
    margin-left: 20px;
    align-items: center;
  }
}
</style>
