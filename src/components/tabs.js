import React, { useState } from 'react'
import TagList from './tagList'
import {defaultExpenseTags,defaultIncomeTags} from '../store/iconList'
import styled from 'styled-components'

const TabsWrap =styled.div`
  .tabBar{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    padding:4px 4px 0 4px;
    background:#ffda47;
    >span{
      display:flex;
      justify-content:center;
      align-items:center;
      position: relative;
      margin: 0 15px;
      padding:24px 0 8px;
      &.selected::after{
        content:'';
        position:absolute;
        height:1px;
        background:black;
        left:-40%;
        bottom:0;
        width:180%
      }
    }
  }
  .tabBar-taglist{
    flex:1
  }
`
export default function Tabs(props) {
  const [navBarType,setNavBarType]=useState(true)
  const [expenseTagList,setExpenseTagList]=useState(defaultExpenseTags)//获取支出图标列表
  const [incomeTagList,setIncomeTagList]=useState(defaultIncomeTags)//获取收入图标列表
  function navbarHandle(e) {//获取moneyType
    let value = e==="-"?true:false
    setNavBarType(value)//选择tag列表
    const defaultTag=value===true?expenseTagList[0]:incomeTagList[0] //切换tag列表时设置默认tag
    props.moneyType(e,defaultTag)
  }
  function handleTag(tag){//获取tag
    props.tagName(tag)
  }
  
  return (
    <TabsWrap>
      <div className="tabBar">
        <span onClick={()=>navbarHandle("-")} className={navBarType?"selected":""}>支出</span>
        <span onClick={()=>navbarHandle("+")} className={!navBarType?"selected":""}>收入</span>
      </div>
      <div className="tabBar-taglist">
        {navBarType? (
          <TagList tagList={expenseTagList} handleTag={handleTag} ifPushAddTag/>
        ) : (
          <TagList tagList={incomeTagList} handleTag={handleTag}/>
        )}
      </div>
    </TabsWrap>
  )
}
