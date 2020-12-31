import React from 'react'
import Datahelper from '../store/datahelper' 
import Icon from '../components/icon'
import './general.scss'
import Nav from '../components/nav'

export default function General(){
  let db =new Datahelper('accountBook')
  const localList=db.readData().reverse()
  const myAccountList=[]
  const totalMoneyOfTag=(type)=>{//按照moneyType计算支出和收入
    let value=localList.filter(item=>{
      return item.moneyType===type
    }).reduce((sum,i)=>{return sum+parseInt(i.amount)},0)
    return value
  }
  localList.map((item,index)=>{
    let date=new Date(item.createAt).toLocaleDateString()
    let amount=item.moneyType==="-"? -item.amount:item.amount
    let li =<li key={index}>
      <div className="iconWrapper">
        <Icon name={item.tag.name}></Icon>
        <span>{item.tag.value}</span>
      </div>
      <div className="moneyAndDate">
        <span className="moneyAndDate-money">￥{amount}</span>
        <span className="moneyAndDate-date">{date}</span>
      </div>
    </li>
    return myAccountList.push(li)
  })
  return <div className="general">
    <div className="general-head">
      <span>全部收支 |</span>
      <div className="general-head-block">
        <span className="general-head-block-word">收入</span>
        <span className="general-head-block-number">￥{totalMoneyOfTag("+")}</span>
      </div>
      <div className="general-head-block">
        <span className="general-head-block-word">支出</span>
        <span className="general-head-block-number">￥{totalMoneyOfTag("-")}</span>
      </div>
    </div>
    <div className="general-body">
      <ul className="general-body-list">
        {myAccountList}
      </ul>
    </div>
    <div className="general-nav">
      <Nav/>
    </div>
  </div>
}