import dayjs from 'dayjs'
import { useState } from 'react/cjs/react.development'
import './datePicker.scss'
export default function DatePicker(props){
  let editTime=new Date(props.value.createAt)
  let myYear=dayjs(editTime).year()//获取本地数据的年
  let myMonth=dayjs(editTime).month()+1//获取本地数据的月
  let myDay=dayjs(editTime).date()//获取本地数据的日
  let [daysInMonth,setDaysInMonth]=useState(dayjs(editTime).daysInMonth())//每月天数初始化为传入日期天数
  const dayArr=Array.from({length:parseInt(daysInMonth)},(v,i)=>i+1) //获取每月的天数数组

  function year(){//获取年数组
    const year=[]
    const curYear=dayjs().year()
    let startYear=2018
    while(startYear<=curYear){
      year.push(startYear)
      startYear++
    }
    return year
  }
  const month=[1,2,3,4,5,6,7,8,9,10,11,12]
  function options(arr){//输入参数返回年，月，日的options
    const options=[]
    arr.map((item,index)=>{
      let option=<option value={item} key={index}>{beautify(item)}</option>
      return options.push(option)
    })
    return options
  }
  
  function foo(e){
    let index=e.target.selectedIndex
    let value =e.target.options[index].value
    let newTime
    let id=e.target.id
    if(id==='yearSelect'){
       newTime=dayjs(editTime).year(value).toISOString()
    }else if(id==="monthSelect"){
       newTime=dayjs(editTime).month(parseInt(value)-1).toISOString()
    }else{
       newTime=dayjs(editTime).date(value).toISOString()
    }
    props.handleDate(newTime)
    setDaysInMonth(dayjs(newTime).daysInMonth()) //重新设置日期数组
  }
  function beautify(e){
    return e<10? '0'+e.toString():e.toString()
  }

  return <div className="dataPicker">
    <div className="year">
      <select  id="yearSelect" defaultValue={myYear}  onChange={foo}>
        {options(year())}
      </select>
      <span>年</span>
    </div>
    <div className="month">
      <select  id="monthSelect" defaultValue={myMonth}  onChange={foo}>
        {options(month)}
      </select>
      <span>月</span>
    </div>
    <div className="day">
      <select  id="daySelect" defaultValue={myDay}  onChange={foo}>
        {options(dayArr)}
      </select>
      <span>日</span>
    </div>
  </div>
}