# Bookkeeping 极简记账

## 一.技术站

基于React函数式组件构建的极简记账应用，对于React入门来说非常不错。

React：`useState`、`useEffect`

react-router-dom：`useParams`、`useHistory`、`useLocation`



## 二.运行方式

```
npm install
npm run start
```



## 三.效果图

<img src="https://gitee.com/youknowHRT/document/raw/master/imgs/bookkeeping-moneyCount.png" alt="记账页" style="zoom:80%;" /><img src="https://gitee.com/youknowHRT/document/raw/master/imgs/bookkeeping-general.png" alt="账单页" style="zoom:80%;" /><img src="https://gitee.com/youknowHRT/document/raw/master/imgs/bookkeeping-charts.png" alt="图标页" style="zoom:80%;" />

<img src="https://gitee.com/youknowHRT/document/raw/master/imgs/bookkeeping-label.png" alt="标签页" style="zoom:80%;" /><img src="https://gitee.com/youknowHRT/document/raw/master/imgs/bookkeeping-edit.png" alt="编辑页" style="zoom:80%;" />



## 四.项目介绍

1.使用`react-router-dom`导航页面，模式选择为`Hashrouter`

2.记账页由四个组件构成：

- tabs：切换支出和收入，确认账单金额为'+'或者'-'；点击标签确认账单的支出或者收入类别。

  点击添加标签可以打开标签总表。做这个组件遇到比较头疼的BUG就是tab切换时，数据的录入总是慢一拍。

  后来通过google，翻文档，问题出在useState不会自动合并更新对象，最后通过Object.assign()方法解决。

- note：编辑备注内容

- numberPad：金额输入。点击确认时代表所有信息都编辑完毕，储存到Local Storage

- 导航栏

3.账单页就是数据的展示，以及提供账单编辑页面入口

4.图表页是用百度的echarts做的，使用柱状图的legend同时控制支出和收入的展示。本来是考虑单独做个切换功能，不过自带的legend切换功能目前使着也还凑合，需要通过监听事件来控制饼状图的切换。

5.标签页可以选择要添加的标签，点击后会直接在记账页的支出标签栏显示；如果标签多了嫌碍眼也可以点击取消，相应的会在支出标签栏中删除。

6.编辑页主要的问题就是日期的修改。本来是用select和option做的，功能是做好了，但是奇丑无比，每月的日期多的时候31行，直接溢出屏幕，样式也不好修改。或者删除，用li来构建html。不过感觉做出来也是丑，懒癌瞬间发作，用antd的datePicker替代。虽说浪费了半天时间，不过了解了通过Array.from直接创建0-n自然数数组的方法，不用再傻傻的去循环。

## 五.待添加功能

- [ ] 1.编辑账单时的日期选择功能。目前是点击确认时直接生成本地时间，如果要修改只能通过edit页面。

- [ ] 2.账单页的月份数据切换功能。

- [ ] 3.图表页的月/年数据切换功能