<template>
  <div>
    <div id="myChart" class="myChart" ></div>

  </div>
</template>

<script>

import * as echarts from "echarts";

let jsonData;
jsonData = require('/src/assets/hyj.json');



export default {

  name: "Evaluation",
  mounted() {
    this.drawLine();

  },
  methods:{
    drawLine() {
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '用户对电影的评价情况'
        },
        xAxis: {
          name: '用户ID',
          type: 'category',
          boundaryGap: false,
          data: jsonData.x_user
        },
        yAxis: {
          name: '评价电影数',

          type: 'category',
          boundaryGap: false,
          data: jsonData.y_user1
        },

        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name: '用户评分:',
            type: 'line',
            symbol: 'none',
            data: jsonData.y_user,
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(60, 179, 113)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(238, 130, 238)'
                },
                {
                  offset: 1,
                  color: 'rgba(151,69,227,0.6)'
                }
              ])
            },
          }
        ]
      })
    }

  }

}
</script>

<style scoped>

.myChart{
  height: 520px;
  width: 1200px;
}

</style>