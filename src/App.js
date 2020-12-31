import React from "react";
import CountMoney from './pages/countMoney'
import General from './pages/general'
import Charts from './pages/charts'
import TotalLabel from './pages/totalLabel'
import NoMatch from './pages/404'
import Edit from './pages/edit'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'
import './App.scss'

const Wrapper =styled.div`
  height:100vh;
  display:flex;
  flex-direction:column
`
const Main=styled.div`
  overflow:auto;
  flex:1
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
            <Route exact path="/general" component={General}>
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
            <Route path="/totalLabel">
              <TotalLabel />
            </Route>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/">
              <Redirect to="/countMoney"/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        {/* <Nav /> */}
      </Wrapper>
    </Router>
  );
}


