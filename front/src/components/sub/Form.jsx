import React from 'react'
import Message from './Message'

const Form = (props) => {
  return (
    <form>
      <fieldset className={props.className}>
      <legend className='text-center'>{props.title} </legend>
      <Message message={props.message}/>
      {props.children}
      </fieldset>
    </form>
  )
}

export default Form