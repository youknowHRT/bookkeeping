import React from 'react'
import dayjs from 'dayjs'
import Datahelper from '../store/datahelper'
import {dateFormatter} from '../store/dateFormatter'
import BarChart from '../components/charts/barChart'

export default function Charts(){
  let db = new Datahelper('accountBook')
  const localList =db.readData()
  const monthLastDay=dayjs().daysInMonth()
  const {year}=dateFormatter()
  const {month}=dateFormatter()
  // 接下来要获取每日花费
  const filterLocalList=localList.filter(item=>{
    let createYear=dayjs(item.createAt).format('YYYY')
    let createMonth=dayjs(item.createAt).format('MM')
    return createYear===year && createMonth===month
  })
  const expenseList=filterLocalList.filter(item=>{//月度支出
    return item.moneyType==="-"
  })
  console.log("🚀 ~ file: charts.js ~ line 23 ~ Charts ~ expenseList", expenseList)
  const incomeList=filterLocalList.filter(item=>{//月收入
    return item.moneyType==="+"
  })
  const totalAccount=()=>{//支出和花费的月度总额
    let expense=0
    let income=0
    for(let i=0;i<expenseList.length;i++){
      expense+=parseFloat(expenseList[i].amount)
    }
    for(let i=0;i<incomeList.length;i++){
      income+=parseFloat(incomeList[i].amount)
    }
    return {expense,income}
  }
  const arrAccount=()=>{
    const expenseArr=[]
    const incomeArr=[]
    const dayOfMonthX=[]
    // for(let i=0;i<monthLastDay;i++){//初始化
    //   expenseArr[i]=0
    //   incomeArr[i]=0
    //   dayOfMonthX[i]=i+1
    // }
    for(let i=0;i<monthLastDay;i++){//遍历每天的总支出
      dayOfMonthX[i]=i+1

      let eachDayCost=expenseList
      .filter(item=>{
        return parseInt(dayjs(item.createAt).format('DD'))===i
      })
      .map(item=>parseInt(item.amount))
      .reduce((i,j)=>{return i+j},0)
      expenseArr[i]=eachDayCost===0?'':eachDayCost

      let eachDayIncome=incomeList
      .filter(item=>{
        return parseInt(dayjs(item.createAt).format('DD'))===i
      })
      .map(item=>parseInt(item.amount))
      .reduce((i,j)=>{return i+j},0)
      incomeArr[i]=eachDayIncome===0?'':eachDayCost
    }
    return {expenseArr,incomeArr,dayOfMonthX}
  }
  console.log("🚀 ~ file: charts.js ~ line 53 ~ arrAccount ~ arrAccount", arrAccount())


  return <div>
    <h1>
      {/* 我是图表页面{filterLocalList} */}
    </h1>
    <div>
      <span>本月总支出{monthLastDay}</span>
      <div>图表</div>
      <BarChart value={arrAccount()}/>
    </div>
    <div>
      <span>本月分类占比</span>
      <div>图表</div>
    </div>
  </div>
}