import React,{ useState } from 'react'
import dayjs from 'dayjs'
import Datahelper from '../store/datahelper'
import { dateFormatter } from '../store/dateFormatter'
import BarChart from '../components/charts/barChart'
import Doughnut from '../components/charts/doughnut'
import Nav from '../components/nav'
import './charts.scss'

export default function Charts() {
  let db = new Datahelper('accountBook')
  const localList = db.readData()
  const monthLastDay = dayjs().daysInMonth()
  const { year } = dateFormatter()
  const { month } = dateFormatter()
  // 接下来要获取每日花费
  const filterLocalList = localList.filter((item) => {
    let createYear = dayjs(item.createAt).format('YYYY')
    let createMonth = dayjs(item.createAt).format('MM')
    return createYear === year && createMonth === month
  })
  const expenseList = filterLocalList.filter((item) => {
    //月度支出
    return item.moneyType === '-'
  })
  const incomeList = filterLocalList.filter((item) => {
    //月收入
    return item.moneyType === '+'
  })
  const totalAccountByType = (e) => {
    //支出和花费的月度总额
    let accountList = e === '-' ? expenseList : incomeList
    let totalAccountByType=0
    for (let i = 0; i < accountList.length; i++) {
      totalAccountByType += parseFloat(accountList[i].amount)
    }
    return totalAccountByType
  }
  const arrAccount = () => {
    //这块数据是用于柱状图的
    const expenseArr = []
    const incomeArr = []
    const dayOfMonthX = []

    for (let i = 0; i < monthLastDay; i++) {
      //遍历每天的总支出
      dayOfMonthX[i] = i + 1

      let eachDayCost = expenseList
        .filter((item) => {
          return parseInt(dayjs(item.createAt).format('DD')) === i+1
        })
        .map((item) => parseInt(item.amount))
        .reduce((i, j) => {
          return i + j
        }, 0)
      expenseArr[i] = eachDayCost === 0 ? '' : eachDayCost

      let eachDayIncome = incomeList
        .filter((item) => {
          return parseInt(dayjs(item.createAt).format('DD')) === i+1
        })
        .map((item) => parseInt(item.amount))
        .reduce((i, j) => {
          return i + j
        }, 0)
      incomeArr[i] = eachDayIncome === 0 ? '' : eachDayIncome
    }
    return { expenseArr, incomeArr, dayOfMonthX }
  }

  const eachTagCost = (e) => {
    //这块数据是用于甜甜圈图表的
    //获取所有的tag
    let accountList = e === '-' ? expenseList : incomeList
    const tagCost = []
    let value = 0
    let name = ''
    let totalValueByType=totalAccountByType(e)//拿到收入或者支出的总值
    let allSameTypeTags = accountList.map((item) => {
      return item.tag.value
    })
    const pureTagList = [...new Set(allSameTypeTags)] //allSameTypeTags就是我们获取的tag集合并且已经去重
    for (let i = 0; i < pureTagList.length; i++) {
      let arr = accountList.filter((item) => {
        return item.tag.value === pureTagList[i]
      })
      value=arr.reduce((x, y) => x + parseInt(y.amount), 0)//拿到每项的总值
      let percentValue=(value/totalValueByType*100).toFixed(2)

      name = percentValue.toString()+'%-'+pureTagList[i]
      tagCost.push({ value, name })
    }

    return { tagCost, pureTagList }
  }

  const [controller, setController] = useState(false)
  function controllerHandle(moneyType) {
    //用于bar和pie图表支出和收入的数据联动
    moneyType === '+' ? setController(true) : setController(false)
  }

  return (
    <div className="chart">
      <span>{dayjs().month()+1}月总支出</span>
      <div className="chart-bar">
        <BarChart value={arrAccount()} controller={controllerHandle} />
      </div>
      <div className="chart-doughnut">
        {controller === false ? (
          <Doughnut pureTagList={eachTagCost('-')}/>
        ) : (
          <Doughnut pureTagList={eachTagCost('+')}/>
        )}
      </div>
      <div className="navWrap">
        <Nav/>
      </div>
    </div>
  )
}
