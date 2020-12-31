const defaultExpenseTags = [
  { name: 'food', value: '餐饮' },
  { name: 'shopping', value: '购物' },
  { name: 'house', value: '居住' },
  { name: 'transport', value: '交通' },
  { name: 'entertainment', value: '娱乐' },
  { name: 'medical', value: '医疗' },
]

const defaultIncomeTags = [
  { name: 'salary', value: '工资' },
  { name: 'part-time-job', value: '兼职' },
  { name: 'bonus', value: '奖金' },
  { name: 'reimbursement', value: '报销' },
  { name: 'cash-gift', value: '礼金' },
]

const foodTags = [
  { name: 'food', value: '餐饮', choose: true },
  { name: 'rice', value: '午餐/晚餐', choose: false },
  { name: 'takeOut', value: '外卖', choose: false },
  { name: 'vegetables', value: '买菜', choose: false },
  { name: 'snacks', value: '零食', choose: false },
  { name: 'barbecue', value: '小吃', choose: false },
  { name: 'drink', value: '饮料', choose: false },
]

const shoppingTags = [
  { name: 'shopping', value: '购物', choose: true },
  { name: 'necessary', value: '日用品', choose: false },
  { name: 'cloth', value: '衣服', choose: false },
  { name: 'digital', value: '数码', choose: false },
  { name: 'electricalGoods', value: '电器', choose: false },
  { name: 'furniture', value: '家具', choose: false },
  { name: 'cosmetic', value: '化妆品', choose: false },
]

const transportTags = [
  { name: 'transport', value: '交通', choose: true },
  { name: 'ship', value: '轮船', choose: false },
  { name: 'subway', value: '地铁', choose: false },
  { name: 'train', value: '火车', choose: false },
  { name: 'plane', value: '飞机', choose: false },
  { name: 'taxi', value: '出租车', choose: false },
]

const houseTags = [
  { name: 'house', value: '居住', choose: false },
  { name: 'phone', value: '话费网费', choose: false },
  { name: 'water', value: '水费', choose: false },
  { name: 'electric', value: '电费', choose: false },
  { name: 'fix', value: '维修', choose: false },
]

const entertainmentTags = [
  { name: 'entertainment', value: '娱乐', choose: false },
  { name: 'game', value: '游戏', choose: false },
  { name: 'movie', value: '电影', choose: false },
  { name: 'sports', value: '运动', choose: false },
  { name: 'travel', value: '旅游', choose: false },
]

const medicalTags = [
  { name: 'medical', value: '医疗', choose: false },
  { name: 'drug', value: '药品费', choose: false },
  { name: 'surgery', value: '手术费', choose: false },
]

export {
  defaultExpenseTags,
  defaultIncomeTags,
  foodTags,
  shoppingTags,
  transportTags,
  houseTags,
  entertainmentTags,
  medicalTags,
}
