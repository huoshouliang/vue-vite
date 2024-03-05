<template>
  <el-button
    type="primary"
    size="large"
    icon="Refresh"
    circle
    @click="Refresh"
  />
  <el-button
    type="primary"
    size="large"
    icon="FullScreen"
    circle
    @click="fullscreen"
  />
  <el-button type="primary" size="large" icon="Setting" circle />
  <img
    :src="userstore.avatar"
    style="height: 35px; width: 35px; margin: 0 10px"
  />
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <span style="font-size: 18px">
        {{ userstore.username }}
      </span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">
          <span style="font-size: 18px">退出登陆</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import $bus from '@/bus.js'
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
let $router = useRouter()
let $route = useRoute()
const userstore = useUserStore()
console.log('bus', $bus, userstore)
//刷新
onMounted(() => {
  userstore.userinfo()
})
const Refresh = () => {
  $bus.emit('newTask', { car: 'Refresh' })
}
//全屏
const fullscreen = () => {
  // console.log(document.fullscreenElement)
  let full = document.fullscreenElement
  //dom对象的一个属性：判断是否全屏
  if (!full) {
    //全屏模式方法
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏模式方法
    document.exitFullscreen()
  }
}
const logout = () => {
  console.log('logout')
  userstore.userlogout()
  console.log($router)
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style lang="stylus" scoped></style>
