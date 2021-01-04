import {useParams,useHistory} from 'react-router-dom'
import {useState} from 'react'
import Datahelper from '../store/datahelper'
import Icon from '../components/icon'
import dayjs from 'dayjs'
import './edit.scss'

export default function Edit(){
  const params=useParams()
  const history=useHistory()
  const db = new Datahelper('accountBook')
  const localList = db.readData()
  const getEditDate=localList.filter(item=>{return item.id===Number(params.id)})[0]
  console.log("🚀 ~ file: edit.js ~ line 13 ~ Edit ~ getEditDate", getEditDate)
  const [editDate,setEditDate]=useState(getEditDate)
  function year(){
    const allYears=[]
    const curYear=dayjs().year()
    let startYear=2018
    while(startYear<=curYear){
      allYears.push(startYear)
      startYear++
    }
    return allYears
  }
  function foo(){
    let xxx= document.getElementById('xxx')
    let index=xxx.selectedIndex
    let value =xxx.options[index].value
    console.log("🚀 ~ file: edit.js ~ line 30 ~ foo ~ value", value)
  }
let editTime=new Date(editDate.createAt)
let myYear=dayjs(editTime).year()
console.log("🚀 ~ file: edit.js ~ line 33 ~ Edit ~ myYear", myYear)





  return <div className="editPage">
    <div className="header">
      <div className="leftIconWrap" onClick={()=>{history.go(-1)}}>
        <Icon name="left"/>
      </div>
      <div className="iconWrapper">
        <Icon name={editDate.tag.name}/>
        <span>{editDate.tag.value}</span>
      </div>
    </div>
    <main>
      <ul>
        <li>
          <span className="editName">类型</span>
          <span>{editDate.moneyType==='-'?"支出":"收入"}</span>
        </li>
        <li>
          <span className="editName">金额</span>
          <input type="text" defaultValue={editDate.amount}/>
        </li>
        <li>
          <span className="editName">日期</span>
          <div className="dataPicker">
            <div className="year">
              <select  id="xxx" defaultValue={myYear} onChange={foo}>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
              <span>年</span>
            </div>
          </div>
        </li>
        <li>
          <span className="editName">备注</span>
        </li>
      </ul>
    </main>
  </div>
}