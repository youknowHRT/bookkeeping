import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {
  PayCircleOutlined,
  AccountBookOutlined,
  LineChartOutlined
} from '@ant-design/icons'

const NavWrapper =styled.div`
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  font-size:12px;
  > ul {
    display:flex;
    >li{
      width:33.33%;
      text-align:center;
      >a{
        display:flex;
        flex-direction:column;
        .navIcon{
          font-size:3em
        }
      }
    }
  }
`
 export default function Nav(){
  return <NavWrapper>
    <ul>
      <li>
        <Link to="/countMoney"><PayCircleOutlined className="navIcon"/>记账</Link>
      </li>
      <li>
        <Link to="/general"><AccountBookOutlined className="navIcon"/>本月概况</Link>
      </li>
      <li>
        <Link to="/charts"><LineChartOutlined className="navIcon"/>图表</Link>
      </li>
  </ul>
  </NavWrapper>
}