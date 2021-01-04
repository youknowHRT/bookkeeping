import React,{ useState} from 'react'
import {useHistory} from 'react-router-dom'
import Icon from '../components/icon'
import './totalLabel.scss'
import LabelDatahelper from '../store/labelDatahelper'

export default function TotalLabel(){
  const history=useHistory()
  let ldb =new LabelDatahelper('labelRecord')
  // const category =['餐饮','购物','交通','居住','娱乐','医疗']
  const [category]=useState(ldb.readData())
  // const category =[foodTags,shoppingTags,transportTags,houseTags,entertainmentTags,medicalTags]
  // const category =ldb.readData()
  const filterChoosed=category.flat().filter((item)=> item.choose===true)
  const [tagAllChoose,setTagAllChoose]=useState(filterChoosed)
  const categoryList=[]
  category.map((item,index)=>{
    let list=<div className="sort" key={index}>
      <div className="sort-name">
        {item[0].value}
      </div>
      <ul className="sort-lists">
        {categoryItem(item)}
      </ul>
    </div> 
    return categoryList.push(list)
  })
  function categoryItem(list){//子组件，渲染分类标签列表
    const categoryUl=[]
    list.map((item,index)=>{
      let li =<li key={index}
      className={parseInt(tagAllChoose.indexOf(item))>=0?"active":""}
      onClick={()=>handleClick(item)}
      >
        <Icon name={item.name} />
        <span className="iconValue">{item.value}</span>
      </li>
      return categoryUl.push(li)
    })
    return categoryUl
  }

  function handleClick(item){//处理图标选择与保存
    item.choose=!item.choose
    const newFilterChoosed=category.flat().filter((item)=> item.choose===true)
    setTagAllChoose(newFilterChoosed)
    ldb.saveData(category)
  }

  function handleLeftIcon(){//处理路由
    history.go(-1)
  }
  return <div className="totalLabel">
    <div className="totalLabel-header">
      <div onClick={handleLeftIcon}>
        <Icon name="left" /> {/* 无法直接给icon添加点击事件 */}
      </div>
      <span>添加支出类别</span>
      {/* <span className="confirm">完成</span> */}
    </div>
    <div className="totalLabel-body">
      {categoryList}
    </div>
  </div>
}