import React,{useEffect, useState} from 'react'
import {Tabs} from 'antd'
import 'antd/dist/antd.css'
const {TabPane} =Tabs

export default function CountMoney(){
  const [key,setKey]=useState("1")
  // const moneyType=useState("")
  let [bookList,setBookList]=useState({
    moneyType: undefined,
    amount:0
  })
  useEffect(()=>{
    console.log('11-----------',bookList);
  })
  // let [moneyType,setMoneyType]=useState("")
  function xxx(key){
    setKey(key)
    let type = key==="1" ? "-" : "+"
    // console.log('当前的e的值----------'+e.target.textContent);
    setBookList({ ...bookList,moneyType:type})
  }
  return <div>
    <div className="switchAddOrMinus">
      <Tabs activeKey={key}  onTabClick={xxx}>
        <TabPane tab="支出" key="1" >
          <div>
            <span>其他</span>
            <span>餐饮</span>
            <span>交通</span>
            <span>购物</span>
          </div>
        </TabPane>
        <TabPane tab="收入" key="2">
        <div>
            <span>其他</span>
            <span>工资</span>
            <span>奖金</span>
            <span>理财</span>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <div className="note"></div>
    <div className="numberpad"></div>
  </div>
}