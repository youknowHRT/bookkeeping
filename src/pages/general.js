import React from 'react'
import Datahelper from '../store/datahelper' 
import Icon from '../components/icon'
import './general.scss'

export default function General(){
  let db =new Datahelper('accountBook')
  const localList=db.readData()
  const myAccountList=[]
  localList.map((item,index)=>{
    let dataMsg=db.dataConversion(item.createAt)
    let date=new Date(item.createAt).toLocaleDateString()
    let li =<li key={index}>
      <span className="iconWrap">
        <Icon name={item.tag.name}></Icon>
      </span>
      <span>{item.tag.value}</span>
      <span>{date}</span>
    </li>
    return myAccountList.push(li)
  })
  return <div className="general">
    <div className="general-head">全部收支</div>
    <div className="general-body">
      <ul className="general-body-list">
        {myAccountList}
      </ul>
    </div>
  </div>
}