import React,{useEffect} from 'react'
import echarts from 'echarts'
export default function TotalLabel(){
  const width= document.documentElement.clientWidth
  const height= document.documentElement.clientWidth*0.7
  useEffect(()=>{
    let container=document.getElementById('main')
    container.style = `width: ${width}px;height:${height}px`;
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量5']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量5',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }],
        
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  })

  return <div>
    <h1>icon列表正在开发中</h1>
    <div id="main"></div>
    {/* <div id="main" style={{width: '600px',height:'400px'}}></div> */}
  </div>
}