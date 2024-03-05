<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top">
        <Top></Top>
      </div>
      <div class="bottom">
        <div class="left">
          <tourist class="tourist"></tourist>
          <sex class="sex"></sex>
          <age class="age"></age>
        </div>
        <div class="center">
          <map_vue class="map"></map_vue>
          <line_vue class="line"></line_vue>
        </div>
        <div class="right">
          <rank class="rank"></rank>
          <year class="year"></year>
          <couter class="couter"></couter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Top from './components/top/index.vue'
import tourist from './components/bottom/left/tourist/index.vue'
import sex from './components/bottom/left/sex/index.vue'
import age from './components/bottom/left/age/index.vue'
import map_vue from './components/bottom/center/map/index.vue'
import line_vue from './components/bottom/center/line/index.vue'

import couter from './components/bottom/right/couter/index.vue'
import rank from './components/bottom/right/rank/index.vue'
import year from './components/bottom/right/year/index.vue'
const screen = ref()
const getScale = (w = 1920, h = 1080) => {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  background: url(./img/eadeed79a8c42018180632fd1294b457.jpeg) no-repeat;
  background-size: cover;
}
.screen {
  position: fixed;
  height: 1080px;
  width: 1920px;
  transform-origin: left top;
  background-color: aqua;
  left: 50%;
  top: 50%;
}
.top {
  width: 1920px;
  height: 100px;
  background-color: red;
}
.bottom {
  display: flex;
  width: 1920px;
  height: calc(1080px - 100px);
  background-color: orange;
  .right {
    flex: 1;
    margin: 10px;
    display: flex;
    flex-direction: column;
    .rank {
      flex: 1.3;
      // background-color: blue;
    }
    .year {
      flex: 1;
      margin-top: 10px;
      // background-color: yellow;
    }
    .couter {
      flex: 1;
      margin-top: 10px;
      // background-color: green;
    }
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 10px;
    .tourist {
      flex: 1.3;
      // background-color: blue;
    }
    .sex {
      flex: 1;
      margin-top: 10px;
      // background-color: yellow;
    }
    .age {
      flex: 1;
      margin-top: 10px;
      // background-color: green;
    }
  }
  .center {
    margin: 10px 0px;
    flex: 2;
    display: flex;
    flex-direction: column;
    .map {
      flex: 2.3 1 calc(2% - 10px);
      background-color: red;
    }
    .line {
      flex: 1;
      background-color: yellow;
      margin-top: 10px;
    }
  }
}
</style>
