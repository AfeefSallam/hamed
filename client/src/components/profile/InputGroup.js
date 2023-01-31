import React from 'react'

function InputGroup(props, type ,name, onChangeHandler,error) {
  return (
    <div>
        <label>{props.label}</label>
        <input type={type}  name={name} onChange={onChangeHandler}/>
    </div>
  )
}

export default InputGroup