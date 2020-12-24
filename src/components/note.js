import styled from 'styled-components'
import Icon from './icon'
const Inputwrap =styled.div`
  label{
    display: flex;
    align-items: center;
    padding: 4px 8px;
    font-size: 14px;
    border-top: 1px solid #f5f5f5;
    background: lighten(#f5f5f5, 4%);
    .icon {
      margin-right: 2px;
    }
    span {
      white-space: nowrap;
    }
    input {
      flex-grow: 1;
      margin-left: 8px;
      height: 32px;
      border: none;
      background: inherit;
    }
  }
`
export default function Input(props){

  return <Inputwrap>
    <label>
      <div className="icon">
        <Icon name="note"/>
      </div>
      <span>备注:</span>
      <input 
      placeholder="写点备注吧"
      type="text"
      value={props.value}
      onChange={props.handleInput}
      />
    </label>
  </Inputwrap>
}