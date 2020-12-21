import Icon from './icon'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const TagListWrap=styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  .iconWrap{
    border:1px solid red;
    width:25%;
  }
`
export default function TagList(props){
  let history=useHistory()
  let iconChoosed=props.tagList
  const labelUsed =[]
  function chooseTag(item){
    console.log("🚀 ~ file: taglist.js ~ line 18 ~ chooseTag ~ item", item)
    props.handleTag(item)
  }
  iconChoosed.map((item,index)=>{
    let div= <div className="iconWrap" key={index} onClick={()=>chooseTag(item)}>
      <Icon name={item.name}/>
      <li>{item.value}</li>
    </div>
    return labelUsed.push(div)
  })

  return <TagListWrap>
    {labelUsed}
    {/* 这是为支出列表添加标签的 */}
    {props.ifPushAddTag===true?<div className="iconWrap" onClick={()=>history.push('/totalLabel')}>
      <Icon name="addTag"/>
      <li>添加</li>
    </div>:null}
  </TagListWrap>
}