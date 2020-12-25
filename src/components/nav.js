import {Link} from 'react-router-dom'
import Icon from './icon'
import { useState } from 'react'
import './nav.scss'

 export default function Nav(){
   const addressList=["/countMoney","/general","/charts"]
   const navIcons=[{name:'money',value:'记账'},{name:'bookkeeping',value:'本月概况'},{name:'charts',value:'图表'}]
   const navList=[]
   const [clickIndex,setClickIndex]=useState(0)
   addressList.map((item,index)=>{
     let li = <li key={index} >
       <Link to={item}
        onClick={()=>navClickHandle(item)}
        className={clickIndex===index?"active":''}
       >
        <Icon name={navIcons[index].name} />
        {clickIndex===index?<span className={'showWord'}>
          {navIcons[index].value}
        </span>:null}
       </Link>
     </li>
     return navList.push(li)
   })
  function navClickHandle(item){
    let index=addressList.indexOf(item)
    setClickIndex(index)
  }
  return <div className="navWrapper">
    <ul>
      {navList}
    </ul>
  </div>
}