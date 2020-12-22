import echarts from 'echarts'
import React,{useEffect} from 'react'
import styled from 'styled-components'

const width= document.documentElement.clientWidth
const height= document.documentElement.clientWidth*0.8
const DoughnutWrap=styled.div`
    
  `
export default function Doughnut(props){
  useEffect(()=>{
    console.log(props);
    let container=document.getElementById('doughnut')
    container.style = `width: ${width}px;height:${height}px`;
    var myChart = echarts.init(container);
    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: props.pureTagList.pureTagList
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: props.tagCost.tagCost
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  })
  
  return <DoughnutWrap id="doughnut"/>

}