import React,{useState,useEffect} from 'react'
import Icon from './icon'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const TagListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  li {
    width: 25%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-size: 12px;
    margin-top:2em;
    .iconWrapper{
      height:4em;
      width:4em;
      border-radius:50%;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction:column;
      background: #f5f5f5;
      margin-bottom: 4px;
      &.selected {
        background: #ffda47;
      }
      .iconfont{
        font-size:3.3em;
      }
    }
  }
`
export default function TagList(props) {
  let history = useHistory()
  let iconChoosed = props.tagList
  const [iconSelect,setIconSelect]=useState(0)//选中tag的index值
  const labelUsed = []
  function chooseTag(item) {
    console.log(item);
    let index=iconChoosed.indexOf(item)
    setIconSelect(index)
    props.handleTag(item)
  }

  useEffect(()=>{//tabs切换时同时设置默认tag
    setIconSelect(0)
  },[props.tagList])

  iconChoosed.map((item, index) => {
    let div = (
      <li key={index} onClick={() => chooseTag(item)}>
        <div className={`iconWrapper ${iconSelect===index?"selected":""}`}  >
          <Icon name={item.name} />
        </div>
        <span>{item.value}</span>
      </li>
    )
    return labelUsed.push(div)
  })

  return (
    <TagListWrap>
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
    </TagListWrap>
  )
}
