import echarts from 'echarts'
import React,{useEffect} from 'react'
import styled from 'styled-components'
export default function BarChart(props){
  const width= document.documentElement.clientWidth
  const height= document.documentElement.clientWidth*0.8
  const BarchartWrap=styled.div`
    height:${height}px;
    width:${width}px;
  `
  useEffect(()=>{
    var myChart = echarts.init(document.getElementById('barChart'));
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
        },{
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
      }]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  })
  
  return <BarchartWrap id="barChart"/>

}