<template>
  <div class="myChart">
    <div class="main">
      <div id="myChart2" class="column">
      </div>
    </div>
  </div>
</template>

<script>

import * as echarts from "echarts";

let jsonData;
// eslint-disable-next-line no-unused-vars
jsonData = require('/src/assets/hyj.json');
export default {

  name: "Distribution",
  mounted() {
    this.drawPie();
  },
  methods: {
    drawPie() {
      let myChart1 = echarts.init(document.getElementById('myChart2'));
      myChart1.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '10%',
          orient: 'vertical',
          left: 'left'
        },
        title:{
          text: '观影人员年龄分布情况',
          // subtext: 'Fake Data',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['30%', '90%'],
            avoidLabelOverlap: false,
            itemStyle: {
              // borderRadius: 0,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 10,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: jsonData.data
          }
        ]

      })
    }
  }

}
</script>

<style scoped>
/*这是整体框框的大小*/
.myChart {

  height: 100%;
  width: 100%;

}
.main {
  width: 100%;
  display: flex;
  margin: auto;
  background: #ffffff;

  /*上，左右都是10px（0.125rem）距离 下是0*/
  padding: 0.125rem 0.125rem 0;
}
.column {
  flex: 2;
  background-color: #ffffff;
  position: relative;
  height: 400px;
}
.el-header {
  background-color: #42b983;
  color: #333;
  line-height: 60px;
}
.listPage{
  padding: 10px 0;
}
.el-aside {
  color: #333;
}
</style>