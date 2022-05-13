import React from 'react'

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input className='form-control p-1' id={props.id} name={props.id} value={props.valu} onChange={props.change} type={props.type}/>
        
    </div>
  )
}

export default Input