import React,{useEffect, useState} from 'react'
import NumberPad from '../components/numberPad'
import {Tabs,Input} from 'antd'
import {
  EditOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
const {TabPane} =Tabs

export default function CountMoney(){
  const [key,setKey]=useState("1")
  // const moneyType=useState("")
  let [bookList,setBookList]=useState({
    moneyType: "-",
    amount:0,
    note:undefined
  })
  useEffect(()=>{
    console.log('11-----------',bookList);
  })
  // let [moneyType,setMoneyType]=useState("")
  function handleTabs(key){
    setKey(key)
    let type = key==="1" ? "-" : "+"
    // console.log('当前的e的值----------'+e.target.textContent);
    setBookList({ ...bookList,moneyType:type})//注意此处...bookList
  }
  function handleInput(e){
    //此处需要函数节流
    let inputMsg=e.target.value
    setBookList({...bookList,note:inputMsg})
    console.log("🚀 ~ file: countMoney.js ~ line 30 ~ handleInput ~ setBookList", setBookList)
  }
  
  return <div>
    <div className="switchAddOrMinus">
      <Tabs activeKey={key}  onTabClick={handleTabs}>
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
    <div className="note">
      <Input prefix={<EditOutlined/>} placeholder="写点备注吧" onChange={handleInput}/>
    </div>
    <NumberPad />
  </div>
}