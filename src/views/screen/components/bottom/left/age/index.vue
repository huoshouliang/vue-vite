<template>
  <div class="box1">
    <div class="top">
      <p class="title">年龄比例</p>
      <p class="bg"></p>
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
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      right: '20px',
      orient: 'vertical',
      textStyle: {
        color: 'white',
        fontSize: 18,
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        center: ['35%', '50%'], //中心
        radius: ['40%', '100%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: true,
          position: 'inside',
          color: 'white',
        },
        emphasis: {
          //高亮状态的扇区和标签样式。
          label: {
            show: true,
            fontSize: 40, //放大
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
    grid: {
      left: 100,
      right: 0,
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
  padding-top: 10px;
  padding-left: 10px;
  background-color: green;
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
  .charts {
    width: 100%;
    height: 230px;
    padding-bottom: 10px;
  }
}
</style>
