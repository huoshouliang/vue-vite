<template>
  <div class="box1">
    <div class="top">
      <p class="title">男女比例</p>
      <p class="bg"></p>
    </div>
    <div class="sex">
      <div class="men">
        <p>男士</p>
        <p style="font-size: 50px; height: 75px">男</p>
      </div>
      <div class="wumen">
        <p>女士</p>
        <p style="font-size: 50px; height: 75px">女</p>
      </div>
    </div>
    <div class="rate">
      <p>男士80%</p>
      <p>女士20%</p>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'
const charts = ref()
onMounted(() => {
  let myChart = echarts.init(charts.value)
  myChart.setOption({
    title: {
      // text: '男女比例',
      textStyle: {
        color: 'skyblue', //主标题颜色
      },
      left: '40%',
    },
    xAxis: { show: false, min: 0, max: 100 },
    yAxis: { show: false, type: 'category' },
    series: [
      {
        name: '男士',
        type: 'bar',
        data: [80],
        barWidth: 20,
        z: '100',
        itemStyle: {
          color: 'blue',
          borderRadius: 20,
        },
      },
      {
        name: '女士',
        type: 'bar',
        data: [100],
        barWidth: 20,
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 80,
      right: 80,
      top: 0,
      bottom: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.box1 {
  width: 100%;
  height: 100%;
  background-color: yellow;
  padding-left: 10px;
  .top {
    .title {
      color: white;
      font-size: 20px;
      padding-top: 10px;
      padding-left: 10px;
    }
    .bg {
      width: 68px;
      height: 6px;
      background-color: white;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  .sex {
    display: flex;
    justify-content: center;
    .men {
      color: white;
      width: 111px;
      height: 105px;
      margin: 10px 20px;
      background-color: blue;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .wumen {
      color: white;
      width: 111px;
      height: 105px;
      margin: 10px 20px;
      background-color: rgb(255, 0, 64);
      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .rate {
    padding: 0px 50px;
    display: flex;
    justify-content: space-around;
  }
  .charts {
    width: 100%;
    height: 60px;
  }
}
</style>
