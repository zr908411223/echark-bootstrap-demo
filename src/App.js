import React from 'react';
import echarts from 'echarts';


class App extends React.Component {
  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }],
          color: ['teal']
      });
  }
  render () {
    return(
      <div>
        <div id='main' style={{width:'600px',height:'400px'}}></div>
      </div>
    )
  }
}

export default App;
