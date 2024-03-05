<template>
  <!-- 路由组件出口位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import $bus from '@/bus.js'
const flag = ref(true)
$bus.on('newTask', (car) => {
  console.log(car)
  flag.value = false
  nextTick(() => {
    //等待下一次 DOM 更新刷新的工具方法
    flag.value = true
  })
})
</script>
<script>
export default {
  name: 'layout_Main',
}
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
