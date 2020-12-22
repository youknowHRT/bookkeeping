import echarts from 'echarts'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

const width= document.documentElement.clientWidth
const height= document.documentElement.clientWidth*0.8
const BarchartWrap=styled.div`
    
  `
export default function BarChart(props){
  useEffect(()=>{
    let container=document.getElementById('barChart')
    container.style = `width: ${width}px;height:${height}px`;
    var myChart = echarts.init(container);
    // 指定图表的配置项和数据
    var option = {
        // title: {
        //     text: 'ECharts 入门示例',
        //     top:20
        // },
        tooltip: {},
        legend: {
            data:['支出','收入'],
            selected:{
              '支出':true,
              '收入':false
            }
        },
        grid: {
          x: 15,
          y: 40,
          x2: 20,
          y2: 30,
          borderWidth: 1
        },
        xAxis: {
          type:'category',
          data: props.value.dayOfMonthX,
          splitLine: {
            show: true,
            lineStyle: {
                color: ['#F5F4F9'],
            }
          },
          axisLine: {//坐标线
            lineStyle: {
                type: 'solid',
                color: '#F5F4F9',//轴线的颜色
                width: '1',//坐标线的宽度
            }
          },
          // axisTick: {//刻度
          //   show: false//不显示刻度线
          // },
          axisLabel: {
            interval: 1,
            textStyle: {
                color: '#000',//坐标值的具体的颜色
                fontSize: 12,
            }
          },
        },
        yAxis: {
          splitLine:{show: false},
          axisLine: {//线
              show: false
          },
          axisTick: {//刻度
              show: false
          },
          axisLabel: {
              show: false
          },
        },
        series: [{
            name: '支出',
            type: 'bar',
            data: props.value.expenseArr,
            itemStyle: {
              normal: {
                  barBorderRadius: [20, 10, 0, 0],
                  color: '#FD6B71',//设置柱子颜色
                  label: {
                      show: true,//柱子上显示值
                      position: 'top',//值在柱子上方显示
                      textStyle: {
                          color: '#FD6B71',//值得颜色

                      }
                  }
              }
          },
          barWidth: 5//设置柱子宽度，单位为px
        },
        {
          name: '收入',
          type: 'bar',
          data: props.value.incomeArr,
          itemStyle: {
            normal: {
                barBorderRadius: [20, 10, 0, 0],
                color: '#FD6B71',//设置柱子颜色
                label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                        color: '#FD6B71',//值得颜色

                    }
                }
            }
        },
        barWidth: 5//设置柱子宽度，单位为px
      }
    ]
    };
    myChart.on("legendselectchanged",function(e){
      // console.log(e);
      
      for(var index = 0;index < option.legend.data.length;index++){
          if ( e.name == option.legend.data[index]){
            option.legend.selected[e.name] = true; //如果选中，则显示折线
          }else{
            option.legend.selected[option.legend.data[index]] = false; // 将状态设置为未选中
          }
      }
      e.name==="收入"?props.controller("+"):props.controller("-")
      myChart.setOption(option);
  })
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  })
  
  return <BarchartWrap id="barChart"/>

}