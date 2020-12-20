export default class Datahelper {
  constructor(dataKey) {
    this.dataKey = dataKey
    // this.primaryKey = primaryKey
  }

  readData() {
    //根据键值读取本地数据
    let strData = localStorage.getItem(this.dataKey)
    //把json数据转为js对象，并且赋值给arrData
    let arrData = []
    if (strData != null) arrData = JSON.parse(strData)
    return arrData
  }

  saveData(arrData) {
    //接收一个数组并专为json
    let strData = JSON.stringify(arrData)
    //存储到本地
    localStorage.setItem(this.dataKey, strData)
  }

  addData(receivedObj) {
    //读取本地数据转为数组
    let arrData = this.readData()
    //接收数据内容，
    // let obj={content:conStr}
    let obj = receivedObj
    //将内容封装到对象，并生成id
    let newId =arrData.length > 0 ? arrData[arrData.length - 1].id + 1 : 1
    obj.id = newId
    obj.createAt=new Date()
    //将对象加入数组
    arrData.push(obj)
    //将数组转为字符串，保存到本地
    this.saveData(arrData)
    return newId
  }

  removeData(id) {
    //读取本地数据
    let arrDate = this.readData()
    //根据ID寻找要删除的内容
    let index = arrDate.findIndex((ele) => {
      return ele.id === id
    })
    //调用splice方法删除找出的对象
    if (index > -1) {
      arrDate.splice(index, 1)
      this.saveData(arrDate)
      return true
    }
    //将数组转为字符串，保存到本地
    return false
    //返回boolean值表示删除结果
  }
  dataConversion(getTime){
  let week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
  let time=new Date(getTime)
  let year =time.getFullYear()
  let month =time.getMonth()+1
  let day =time.getDate()
  let dayNumber=time.getDay()//获取星期数字
  let weekDay=week[dayNumber]  //获取星期$
  let hours =time.getHours()
  let minute =time.getMinutes()
  return {year,month,day,weekDay,hours,minute}
  }
}
