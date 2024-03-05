<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">
        可预约总量
        <span>99999999</span>
        人
      </p>
    </div>
    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'
const rate = 0.85
const charts = ref()
const Pie = () => {
  //外层虚线圈数据
  let dataArr = []
  for (let i = 0; i < 150; i++) {
    if (i % 2 === 0) {
      dataArr.push({
        name: (i + 1).toString(),
        value: 50,
        itemStyle: {
          color: '#19A4BB',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)',
        },
      })
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: 100,
        itemStyle: {
          color: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: 'rgba(0,0,0,0)',
        },
      })
    }
  }
  return dataArr
}
onMounted(() => {
  let myChart = echarts.init(charts.value)
  myChart.setOption({
    // polar: {
    //   radius: ['75%', '80%'],
    //   center: ['50%', '50%'],
    // },
    title: {
      text: '',
      left: '42.5%',
    },
    tooltip: { show: false }, // 隐藏详细数据
    xAxis: {},
    yAxis: {},
    polar: {
      radius: [85, '100%'],
    },
    angleAxis: {
      max: 100,
      clockwise: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        type: 'liquidFill',
        name: 'Liquid Fill',
        data: [0.5, 0.4],
        color: ['rgba(6, 187, 112, 0.3)', 'rgba(11, 201, 199, 0.3)'],
        radius: '80%',
        outline: {
          // 水波图边框配置
          show: true, //隐藏轮廓
          borderDistance: 10, // 边框距离水波图的距离，默认为0，也可以理解为边框宽度
          itemStyle: {
            // show: true,
            // borderDistance: 0,
            // color: 'none', // 边框距离水波图以及边框的背景颜色颜色
            // borderWidth: 3, // 图例图形的描边
            borderColor: 'none', // 图例图形描边的颜色
            borderType: 'solid', // 图例图形描边线的类型可以是 'solid'（实线）、'dashed'（虚线）或 'dotted'（点线），默认为 'solid'
            // borderDashOffset: 10, // 图例图形描边虚线的位移量
            // shadowBlur: 2.5, // 图例的阴影模糊大小
            //   shadowColor: 'rgba(228, 2, 2, 1)', // 图例图形阴影颜色
            // shadowOffsetX: -1.5, // 图例图形阴影水平偏移量
            // shadowOffsetY: 1.5, // 图例图形阴影竖直偏移量
            //   opacity: 0.5,
          },
        },
        label: {
          formatter: '{a}\n{b}\nValue: {c}',
          fontSize: 28,
        },
        direction: 'left', //波浪方向
        backgroundStyle: {
          // 水波图背景颜色
          borderWidth: 5, //边框宽度
          // borderColor: '#5acef2', //描边
          color: 'blue', //填充样式
          // shadowColor: 'rgba(0, 0, 0, 0.4)',
          // shadowBlur: 20,
        },
        tooltip: {
          show: true,
        },
      },
      {
        // 外层虚线环
        type: 'pie',
        zlevel: 0,
        silent: true,
        radius: ['83%', '90%'],
        z: 1,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: Pie(),
      },
      {
        // 进度条环
        type: 'bar',
        roundCap: true,
        z: 2,
        showBackground: false,
        data: [rate * 100],
        coordinateSystem: 'polar',
        barWidth: 10, //大的占比环
        itemStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: '#19A4BB',
            },
            {
              offset: 1,
              color: '#22C7DA',
            },
          ]),
        },
      },
    ],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  })
})
let people = ref('215908人')
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: red;
  padding-left: 10px;
  .top {
    .title {
      padding-top: 10px;
      color: white;
      font-size: 20px;
      padding-left: 10px;
    }
    .bg {
      width: 68px;
      height: 6px;
      background-color: white;
      margin-top: 10px;
      margin-left: 10px;
    }
    .right {
      color: white;
      font-size: 20px;
      float: right;
      margin-right: 15px;
      span {
        color: yellow;
      }
    }
  }
  .number {
    margin: 30px 15px 0px 5px;
    display: flex;
    span {
      background-color: white;
      color: #000;
      flex: 1;
      text-align: center;
      line-height: 57px;
    }
  }
  .charts {
    margin-left: -10px;
    width: 100%;
    height: 210px;
  }
}
</style>
