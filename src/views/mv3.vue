<template>
  <div>
    <div id="myChart3" class="myChart" ></div>

  </div>
</template>

<script>

import * as echarts from "echarts";

let jsonData;
// eslint-disable-next-line no-unused-vars
jsonData = require('/src/assets/hyj.json');
export default {

  name: "VideoType",
  mounted() {
    this.drawLine();

  },
  methods:{
    drawLine() {
      let myChart = echarts.init(document.getElementById('myChart3'))
      myChart.setOption({
        title: {
          left: 'center',
          text: '用户观看电影类型占比'
        },
        tooltip: {},
        xAxis: {
          data: jsonData.X_type
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: jsonData.Y_type,
          color: "#e63b15"
        }]
      })
    }

  }

}
</script>

<style scoped>
.myChart{
  height: 550px;
  width: 1250px;
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