import React from 'react'
import styled from 'styled-components'
import '../assets/icon/iconfont.css'
const IconWrap=styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .iconfont{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    fill: currentColor;
  }
`
export default function Icon(props){
  let name=' i-'+props.name
  return <IconWrap className="iconWrap">
    {/* <sgv className="icon"><use xlinkHref={"#i-"+props.name}/></sgv> */}
    <i className={"iconfont"+name}></i>
  </IconWrap>
    

}