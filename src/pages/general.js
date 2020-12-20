import React from 'react'
import Datahelper from '../store/datahelper' 
import Icon from '../components/icon'

export default function General(){
  let db =new Datahelper('accountBook')
  const localList=db.readData()
  const myAccountList=[]
  localList.map((item,index)=>{
    let dataMsg=db.dataConversion(item.createAt)
    let li =<li key={index}>
      <span>
        <Icon name={item.tag.name}></Icon>
      </span>
      <span>{item.tag.value}</span>
      <span>{dataMsg.year}</span>
    </li>
    return myAccountList.push(li)
  })
  return <div>
    <span>全部收支</span>
    <ul>
      {myAccountList}
    </ul>
  </div>
}