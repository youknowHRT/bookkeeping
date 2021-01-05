import {useEffect, useState} from 'react'
import Datahelper from '../store/datahelper'
import './numberPad.scss'

export default function NumberPad(props){
  let db =new Datahelper('accountBook')
  let [amount,setAmount]=useState("")
  useEffect(()=>{
    const buttons=document.querySelectorAll("div.buttonWrap>button")//获取的是node对象，不是数组
    for(let i=0;i<buttons.length;i++){//必须遍历button挨个添加点击事件，不然点到div上会打印全部的键盘字符
      buttons[i].onclick= function (e){
        let buttonContent =e.target.textContent
        if(buttonContent==="删除"){
          if (amount.length===0)return
          setAmount(amount=amount.substring(0,amount.length-1))
        }else if(buttonContent==="清零"){
          setAmount("")
        }else if(buttonContent==='确认'){
          if(amount==="0"||amount==="")return console.log('给我一个数字');
          console.log('记录一笔账');
          const newBookList={...props.value,amount}
          db.addData(newBookList)
          props.handleDefault()
          setAmount("")
        }else{
          if(amount.length<16)return setAmount(amount.concat(buttonContent))
        }
      }
    }
  })

  const buttonArr=['1','2','3','删除','4','5','6','确认','7','8','9','清零','0',"."]
  const buttons=[]
  buttonArr.map((item,index)=>{
    let button= <button key={index} className={item==='确认'?'OK':''}>{item}</button>
    return buttons.push(button)
  })
  return <div className="numberPad">
    <div className="show">
      <div className="show-string">金额</div>
      <div className="show-number">{amount}</div>
    </div>
    <div className="buttonWrap" >
      {buttons}
      {/* <button>1</button>
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
      <button>.</button> */}
    </div>
  </div>
}