import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CountMoney from './pages/countMoney';
import App from './App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if(document.documentElement.clientWidth>500){
  window.alert('请使用手机浏览，以保证显示效果')
  const img = window.document.createElement('img')
  img.src='bookkeeping.png'
  document.body.append(img)
  img.style.position='fixed'
  img.style.left='50%'
  img.style.top='50%'
  img.style.transform='translate(-50%,-50%)'
  img.style.boxShadow='0 0 5px rgb(0,0,0,0.3)'
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
