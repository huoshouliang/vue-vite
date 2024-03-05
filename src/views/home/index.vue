<template>
  <div><h1>一级路由展示登录成功</h1></div>
  <!-- <layout /> -->
</template>
<script setup>
// import layout from '@/layout/index.vue'
import { onMounted } from 'vue'
import useuserstore from '@/store/modules/user'
let userstore = useuserstore()
onMounted(() => {
  userstore.userinfo()
})
</script>
<style></style>
