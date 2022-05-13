import React from 'react'
import style from '../../util/style'
import {BsFillExclamationCircleFill as Exclamation} from 'react-icons/bs' 

const Message = (props) => {
  return (
    props.message!='' ?
    <p className='text-center' style={style.message}>
     <Exclamation/>{props.message}</p>
    :
    <p></p>
  )
}

export default Message