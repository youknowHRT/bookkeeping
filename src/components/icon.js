import React from 'react'
import styled from 'styled-components'
import '../assets/icon/iconfont.css'
const IconWrap=styled.div`
  
`
export default function Icon(props){
  let name=' i-'+props.name
  return <IconWrap>
    {/* <sgv className="icon"><use xlinkHref={"#i-"+props.name}/></sgv> */}
    <i className={"iconfont"+name}></i>
  </IconWrap>
    

}