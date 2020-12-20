import React from 'react'
import styled from 'styled-components'
import '../assets/icon/iconfont.css'
const IconWrap=styled.div`
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`
export default function Icon(props){
  let name=' i-'+props.name
  return <IconWrap>
    {/* <sgv className="icon"><use xlinkHref={"#i-"+props.name}/></sgv> */}
    <i className={"iconfont"+name}></i>
  </IconWrap>
    

}