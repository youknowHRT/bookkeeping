import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Datahelper from '../store/datahelper'
import Icon from '../components/icon'
// import DatePicker from '../components/datePicker'
import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'
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
  let defaultTime=editDate.createAt  //根据传入id的数据获取的时间
  
  function amountHandle(e){//处理金额
    let amount=e.target.value
    setEditDate(Object.assign(editDate, {amount}))
  }
  function onChange(date) {//处理日期
    setEditDate(Object.assign(editDate, { createAt: date.toISOString() }))
  }
  function noteHandle(e){//处理note
    let note=e.target.value
    setEditDate(Object.assign(editDate, {note}))
  }
  function completeHandle(){//处理完成按钮
    console.log('编辑完成');
    const index =localList.findIndex(item=>{
      return item.id===Number(params.id)
    })
    Object.assign(localList[index],editDate)
    db.saveData(localList)
    history.go(-1)
  }
  function deleteHandle(){//处理删除按钮
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
            <input type="text"
              defaultValue={editDate.amount}
              onChange={amountHandle}
              maxLength="16"
            />
          </li>
          <li>
            <span className="editName">日期</span>
            <Space direction="vertical">
              <DatePicker 
                onChange={onChange} 
                defaultValue={moment(defaultTime)}
                size="large"
              />
            </Space>
            {/* <DatePicker value={editDate} handleDate={handleDate} /> */}
          </li>
          <li>
            <span className="editName">备注</span>
            <input type="text"
              defaultValue={editDate.note ? editDate.note : editDate.tag.value}
              onChange={noteHandle}
            />
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
