import React,{ useState} from 'react'
import NumberPad from '../components/numberPad'
import Tabs from '../components/tabs'
import Input from '../components/note'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Nav from '../components/nav'

const CountMoneyWrap=styled.div`
  height:100%;
  display:flex;
  justify-content: flex-start;
  flex-direction:column;
  .switchAddOrMinus{
    height:51%;
    // flex:1;
  }
  .note{
    height:6%;
  }
  .numberPadWrap{
    height:35%
  }
  .navWrap{
    height:8%
  }
`
export default function CountMoney(){//初始数据结构
  let [bookList,setBookList]=useState({
    id:"",
    moneyType: "-",
    amount:"",
    note:"",
    tag:{name:"food",value:"餐饮"},
    createAt:"",
  })

  function handleTabs(type,defaultTag){//保存moneyType
    setBookList(
      Object.assign(bookList,{moneyType:type,tag:defaultTag})//解决useState不会自动合并更新对象的问题！！！！！
    )
  }
  function handleTag(tag){//保存tag
    setBookList({...bookList,tag:tag})
  }
  function handleInput(e){//处理note
    //此处可能需要函数节流
    let inputMsg=e.target.value
    setBookList({...bookList,note:inputMsg})
  }
  function handleDefault(){//初始化数据
    setBookList({...bookList,note:""})
    console.log('...countmoney49',bookList);
    // setBookList(bookList={
    //   id:"",
    //   moneyType: "-",
    //   amount:"",
    //   note:"",
    //   tag:{name:"others",value:"其他"},
    //   createAt:"",
    // })
  }
  return <CountMoneyWrap>
    <div className="switchAddOrMinus">
      <Tabs tagName={handleTag} moneyType={handleTabs}/>
    </div>
    <div className="note">
      <Input  handleInput={handleInput} value={bookList.note}/>
    </div>
    <div className="numberPadWrap">
      <NumberPad  value={bookList} handleDefault={handleDefault}/>
    </div>
    <div className="navWrap">
      <Nav/>
    </div>
  </CountMoneyWrap>
}