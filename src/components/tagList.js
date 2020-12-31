import React,{useState,useEffect} from 'react'
import Icon from './icon'
import { useHistory } from 'react-router-dom'
import './tagList.scss'
import LabelDatahelper from '../store/labelDatahelper'

export default function TagList(props) {
  const ldb=new LabelDatahelper('labelRecord')
  const expenseTagList=ldb.readData().flat().filter((item)=>item.choose===true)
  const history = useHistory()
  let iconChoosed = props.tagList?props.tagList:expenseTagList
  const [iconSelect,setIconSelect]=useState(0)//选中tag的index值
  const labelUsed = []
  function chooseTag(item) {
    let index=iconChoosed.indexOf(item)
    setIconSelect(index)
    props.handleTag(item)
  }

  useEffect(()=>{//tabs切换时同时设置默认tag
    setIconSelect(0)
  },[props.tagList])

  iconChoosed.map((item, index) => {
    let li =<li key={index} onClick={() => chooseTag(item)}>
        <div className={`iconWrapper ${iconSelect===index?"selected":""}`}  >
          <Icon name={item.name} />
        </div>
        <span>{item.value}</span>
      </li>
    
    return labelUsed.push(li)
  })

  return (
    <ul className="tagList">
      {labelUsed}
      {/* 这是为支出列表添加标签的 */}
      {props.ifPushAddTag ? (
        <li onClick={() => history.push('/totalLabel')}>
          <div className="iconWrapper" >
            <Icon name="addTag" />
          </div>
          <span>添加</span>
        </li>
      ) : null}
    </ul>
  )
}
