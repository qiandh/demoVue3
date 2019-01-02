<template>
  <div id="app">
    <div ref="main" style="width: 600px;height:400px;"
    @click='show'></div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            high:[],
            low:[]
        }
    },
  mounted() {
      
  },
  created () {
      this.$axios.get('101030100').then(res=>{
          console.log(res)
          this.$store.dispatch("a_getValue",res.data.data.forecast)
          this.high = this.$store.getters.getHigh;
          this.low = this.$store.getters.getLow;
          this.showEcharts();
      }).catch(err =>{
          alert("数据请求失败")
      })
  },
  methods: {
    showEcharts() {
      const myChart = this.$echarts.init(this.$refs.main);
      var option = {
        title: {
          text: "未来一周气温变化",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data:this.high,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气温",
            type: "line",
            data:this.low,
            markPoint: {
              data: [{ name: "周最低", type: "min" }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //查看仓库里面数据
    show(){
        console.log(this.$store.state.temperature)
        console.log(this.$store.getters.getHigh)
         console.log(this.$store.getters.getLow)
    }
  }
};
</script>
<style lang="scss">
</style>
