import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Datahelper from '../store/datahelper'
import Icon from '../components/icon'
// import dayjs from 'dayjs'
import DatePicker from '../components/datePicker'
import './edit.scss'

export default function Edit() {
  const params = useParams()
  const history = useHistory()
  const db = new Datahelper('accountBook')
  const localList = db.readData()
  const getEditDate = localList.filter((item) => {
    return item.id === Number(params.id)
  })[0]
  const [editDate, setEditDate] = useState(getEditDate)

  function handleDate(newTime) {
    setEditDate(Object.assign(editDate, { createAt: newTime }))
  }
  function completeHandle(){
    console.log('编辑完成');
    const index =localList.findIndex(item=>{
      return item.id===Number(params.id)
    })
    Object.assign(localList[index],editDate)
    db.saveData(localList)
    history.go(-1)
  }
  function deleteHandle(){
    const confirmDelete=window.confirm("确认删除吗？")
    if(confirmDelete===true){
      db.removeData(Number(params.id))
    }else{return}
    history.go(-1)
  }

  return (
    <div className="editPage">
      <div className="header">
        <div
          className="leftIconWrap"
          onClick={() => {
            history.go(-1)
          }}
        >
          <Icon name="left" />
        </div>
        <div className="iconWrapper">
          <Icon name={editDate.tag.name} />
          <span>{editDate.tag.value}</span>
        </div>
      </div>
      <main>
        <ul>
          <li>
            <span className="editName">类型</span>
            <span className="editMsg">{editDate.moneyType === '-' ? '支出' : '收入'}</span>
          </li>
          <li>
            <span className="editName">金额</span>
            <input type="text" defaultValue={editDate.amount} />
          </li>
          <li>
            <span className="editName">日期</span>
            <DatePicker value={editDate} handleDate={handleDate} />
          </li>
          <li>
            <span className="editName">备注</span>
            <span className="editMsg">{editDate.note ? editDate.note : editDate.tag.value}</span>
          </li>
        </ul>
      </main>
      <footer>
          <button onClick={completeHandle}>编辑完成</button>
          <button onClick={deleteHandle}>删除</button>
        </footer>
    </div>
  )
}
