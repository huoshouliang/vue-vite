<template>
  <div class="box">
    <div class="top">
      <p class="title">热门景区排行</p>
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
      //标题组件
      //主标题
      text: '景区排行',
      link: 'www.baidu.com',
      left: '50%',
      textStyle: {
        color: 'yellowgreen',
        fontSize: 20,
      },
      subtext: '各大景区排行', //子标题
      subtextStyle: {
        color: 'yellowgreen',
        fontSize: 16,
      },
    },
    xAxis: {
      axisTick: {
        show: false, // 不显示坐标轴刻度线
      },
      minorTick: {
        show: false, //是否显示次刻度线。
      },
      axisLabel: {
        show: false, // 不显示坐标轴上的文字
      },
      splitLine: {
        show: false, // 不显示网格线
      },
      axisLine: {
        show: false, // 不显示坐标轴线
      },
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false, // 不显示坐标轴刻度线
      },
      minorTick: {
        show: false, //是否显示次刻度线。
      },
      splitLine: {
        show: false, // 不显示网格线
      },
      axisLine: {
        show: false, // 不显示坐标轴线
      },
    },
    series: [
      {
        data: [120, 200, 150, 180, 170, 110, 130],
        type: 'bar',
        label: {
          show: true,
          // position: 'top',
        },
        itemStyle: {
          borderRadius: 20,
          color: function (data) {
            let arr = [
              'red',
              'orange',
              'yellowgreen',
              'green',
              'purple',
              'hotpink',
              'skyblue',
            ]
            console.log(data)
            return arr[data.dataIndex]
          },
        },
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderColor: '#000',
          borderWidth: 2,
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 80,
      right: 80,
      top: 0,
      bottom: 20,
    },
  })
})
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
    margin-top: 10px;
    width: 100%;
    height: 300px;
  }
}
</style>
