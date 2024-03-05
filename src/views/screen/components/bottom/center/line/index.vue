<template>
  <div class="box1">
    <div class="top">
      <p class="title">未来30天游客量趋势图</p>
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
    title: {
      // text: '游客访问量趋势',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, //两侧不留白
      splitLine: {
        show: false, //分割线不要
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      splitLine: {
        show: false, //分割线不要
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
    },
    grid: {
      left: 40,
      right: 20,
      top: 10,
      bottom: 20,
    },
    series: [
      {
        type: 'line',
        data: [120, 240, 66, 99, 321, 890, 1200],
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'red', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'blue', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false} },
          },
        },
      },
    ],
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
    // margin-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
