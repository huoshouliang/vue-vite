<template>
  <div class="box4" ref="map"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'
import chinaJSON from './china.json'
const map = ref()
echarts.registerMap('china', chinaJSON)
onMounted(() => {
  let myChart = echarts.init(map.value)
  myChart.setOption({
    geo: {
      map: 'china', //中国地图
      roam: true,
      left: 50,
      top: 100,
      right: 100,
      bottom: 50,
      label: {
        show: true,
        color: 'white',
      },
      itemStyle: {
        areaColor: {
          //每一个区块的颜色
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#00FFFF', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'blue', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        //渐变
      },
      emphasis: {
        //地图高亮的效果
        label: { fontSize: 18 },
        itemStyle: { color: 'red' },
        focus: 'self',
      },
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines', //航线的系列
        data: [
          {
            coords: [
              [87.617733, 43.792818], //起点
              [121.509062, 25.044332], //重点
            ],
            lineStyle: {
              color: 'blue',
              width: 5,
              curveness: 0.2,
            },
          },
          {
            coords: [
              [121.509062, 25.044332], //重点
              [87.617733, 43.792818], //起点
            ],
            lineStyle: {
              color: 'blue',
              width: 5,
              curveness: 0.2,
            },
          },
        ],
        effect: {
          show: true,
          symbolSize: 20,
          symbol: 'arrow',
        },
      },
    ],
  })
})
</script>

<style lang="scss" scoped>
.box4 {
  width: 100%;
  height: 100%;
}
</style>
