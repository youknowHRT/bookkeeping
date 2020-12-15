import React from "react";
import CountMoney from './pages/countMoney'
import General from './pages/general'
import Charts from './pages/charts'
import NoMatch from './pages/404'
import {
  PayCircleOutlined,
  AccountBookOutlined,
  LineChartOutlined
} from '@ant-design/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'
import './App.scss'

const Wrapper =styled.div`
  border: 1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column
`
const Main=styled.div`
  border:1px solid green;
  overflow:auto;
  flex:1
`
const Nav =styled.div`
  border: 1px solid blue;
  > ul {
    display:flex;
    >li{
      width:33.33%;
      text-align:center;
      font-size:40px;
    }
  }
`
export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/countMoney">
              <CountMoney />
            </Route>
            <Route path="/general">
              <General />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
            <Route path="/">
              <Redirect to="/countMoney"/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/countMoney"><PayCircleOutlined /></Link>
            </li>
            <li>
              <Link to="/general"><AccountBookOutlined /></Link>
            </li>
            <li>
              <Link to="/charts"><LineChartOutlined /></Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}


