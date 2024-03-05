<template>
  <template v-for="item in menulist" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="item.meta.hidden">
      <el-menu-item v-if="!item.children" :index="item.path" @click="goroute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          &nbsp;
          <span style="font-size: 18px">{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <!-- 有子路由且只有一个 -->
      <el-menu-item v-if="item.children[0].meta.hidden" :index="item.path">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          &nbsp;
          <span style="font-size: 18px">{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且多于一个 -->
    <template v-if="item.children && item.children.length &gt; 1">
      <el-sub-menu :index="item.path" v-if="item.meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span style="font-size: 18px">{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <testmenu :menulist="item.children"></testmenu>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </template>
  <!-- <div>{{ menulist }}</div> -->
</template>

<script setup>
// import { ref } from 'Vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps(['menulist'])
const goroute = (vc) => {
  console.log('goroute', vc)
  router.push(vc.index)
}
// const test = ref('123456')
</script>
<script>
export default {
  name: 'testmenu',
}
</script>
<style scoped lang="scss"></style>
