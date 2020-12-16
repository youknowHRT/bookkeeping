import {useState} from 'react'
import styled from 'styled-components'

const NumberWrapper=styled.div`
  .show{
    display:flex
  }
  .buttonWrap{
    border:1px solid red;
    button{
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      font-size: 20px;
    }
    .OK{
      height:192px;
      float:right
    }
  }
`
export default function NumberPad(){
  let [amount,setAmount]=useState("")
  function editNumber(e){
    let buttonContent =e.target.textContent
    console.log("🚀 ~ file: numberPad.js ~ line 27 ~ editNumber ~ buttonContent", buttonContent)
    if(buttonContent==="删除"){
      if (amount.length===0)return
      setAmount(amount=amount.substring(0,amount.length-1))
    }else if(buttonContent==="清零"){
      setAmount(amount="")
    }else if(buttonContent==='确认'){
      if(amount==="")return console.log('给我一个数字');
      console.log('记录一笔账');
    }else{
      setAmount(amount=amount.concat(buttonContent))
    }
  }
  return <NumberWrapper onClick={editNumber}>
    <div className="show">
      <div>金额</div>
      <div>{amount}</div>
    </div>
    <div className="buttonWrap">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="OK">确认</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>清零</button>
      <button>0</button>
      <button>.</button>
    </div>
  </NumberWrapper>
}