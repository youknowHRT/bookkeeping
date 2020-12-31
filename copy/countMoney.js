import React,{ useState} from 'react'
import TagList from '../components/tagList'
import NumberPad from '../components/numberPad'
import {Tabs,Input} from 'antd'
import {
  EditOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import {defaultExpenseTags,defaultIncomeTags} from '../store/iconList'
// import Icon from '../components/icon'
const {TabPane} =Tabs

const CountMoneyWrap=styled.div`
  .switchAddOrMinus .ant-tabs-nav-wrap{
    background-color:#FFDA47;
    color:black
}
`
export default function CountMoney(){
  const [key,setKey]=useState("1")
  let [bookList,setBookList]=useState({
    id:"",
    moneyType: "-",
    amount:0,
    note:"",
    tag:{name:"others",value:"其他"},
    createAt:"",
  })
  let [expenseTagList,setExpenseTagList]=useState(defaultExpenseTags)//获取支出图标列表
  let [incomeTagList,setIncomeTagList]=useState(defaultIncomeTags)//获取收入图标列表
  
  function handleTabs(key){//判断+/-类型
    setKey(key)
    let type = key==="1" ? "-" : "+"
    setBookList({ ...bookList,moneyType:type})//注意此处...bookList
  }
  function handleTag(tag){
    setBookList({...bookList,tag:tag})
  }
  function handleInput(e){//处理金额输入
    //此处需要函数节流
    let inputMsg=e.target.value
    setBookList({...bookList,note:inputMsg})
  }
    function handleDefault(){
      setBookList(bookList={
      id:"",
      moneyType: "-",
      amount:"",
      note:"",
      tag:{name:"others",value:"其他"},
      createAt:"",
    })
  }
  return <CountMoneyWrap>
    <div className="switchAddOrMinus">
      <Tabs activeKey={key}  onTabClick={handleTabs} centered >
        <TabPane tab="支出" key="1">
          <TagList tagList={expenseTagList} ifPushAddTag={true} handleTag={handleTag}/>
        </TabPane>
        <TabPane tab="收入" key="2">
          <TagList tagList={incomeTagList} handleTag={handleTag}/>
        </TabPane>
      </Tabs>
    </div>
    <div className="note">
      <Input prefix={<EditOutlined/>} placeholder="写点备注吧" onChange={handleInput} value={bookList.note}/>
    </div>
    <NumberPad value={bookList} handleDefault={handleDefault}/>
  </CountMoneyWrap>
}