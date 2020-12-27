import {Link,useLocation} from 'react-router-dom'
import Icon from './icon'
import './nav.scss'

 export default function Nav(){
  const addressList=["/countMoney","/general","/charts"]
  const navIcons=[{name:'money',value:'记账'},{name:'bookkeeping',value:'本月概况'},{name:'charts',value:'图表'}]
  const navList=[]
  const locationName=useLocation().pathname
  addressList.map((item,index)=>{
    let li = <li key={index} >
      <Link to={item}
      className={locationName===item?"active":''}
      >
      <Icon name={navIcons[index].name} />
      {locationName===item?<span className={'showWord'}>
        {navIcons[index].value}
      </span>:null}
      </Link>
    </li>
    return navList.push(li)
  })
 
  return <div className="navWrapper">
    <ul>
      {navList}
    </ul>
  </div>
}