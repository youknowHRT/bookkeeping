import echarts from 'echarts'
import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'


const width= document.documentElement.clientWidth
const height= document.documentElement.clientWidth*0.7
export default function Doughnut(props){
  useEffect(()=>{
    let container=document.getElementById('doughnut')
    container.style = `width: ${width}px;height:${height}px`;
    var myChart = echarts.init(container);
    // 指定图表的配置项和数据
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '75%'],
          label: {
            show: true,
            position: 'center',
          },
          itemStyle: {
              normal:{
                  label:{
                      show:true,
                      textStyle:{color:'#3c4858',fontSize:"14"},
                      formatter:function(val){   
                          return val.name.split("-").join("\n");}
                  },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                  //线条颜色
              },//基本样式
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                  textColor:'#000'
              }//鼠标放在各个区域的样式
          },
          data: props.tagCost.tagCost,
          color:['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0',"#503EFF","#733DFF","#966EFF"],
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  })
  
  return <div id="doughnut" style={{height:'272px'}}/>

}