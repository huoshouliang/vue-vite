<template>
  <!-- <div> -->
  <svg style="height: 30px; width: 30px; padding: 5px">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
  <!-- <el-button type="primary" size="default" :icon="Edit">zhuyao</el-button> -->
  <!-- </div> -->
</template>
<script setup>
// import request from '@/utils/request'
// import { onMounted } from 'vue'
// onMounted(() => {
//   request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111',
//     },
//   })
// })
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: 'black',
  },
})
</script>
<style scoped></style>
