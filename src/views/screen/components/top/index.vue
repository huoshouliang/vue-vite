<template>
  <div class="top">
    <div class="left">
      <span class="lftn" @click="gohome">首页</span>
    </div>
    <div class="center">
      <span>center</span>
    </div>
    <div class="right">
      <span class="lbtn">统计报告</span>
      <span class="time">当前时间:{{ time }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
let $router = useRouter()
const gohome = () => {
  $router.push('/home')
}
import moment from 'moment' //取时间
let time = ref(moment().format('YYYY-MM-DD:hh-mm-ss'))
let timer = ref(0)
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY-MM-DD:hh-mm-ss')
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .lbtn {
      margin: 0px 10px;
      float: left;
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: white;
      font-size: 18px;
    }
    .time {
      float: right;
      margin: 0px 10px;
      font-size: 20px;
    }
  }
  .left {
    flex: 1;
    .lftn {
      margin: 0px 10px;
      float: right;
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: white;
      font-size: 18px;
    }
  }
  .center {
    margin: 0px 10px;
    flex: 2;
    background-color: white;
    text-align: center;
  }
}
</style>
