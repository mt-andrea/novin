import React from 'react'
import style from '../../../util/style'

const FormButtons = (props) => {
  return (
    <div className='d-flex flex-row justify-content-around'>
      <button className='form-control btn m-3' style={style.btnPrim} onClick={props.onClickPrim} type={props.typePrim}>{props.titlePrim}</button> 
      <button className='form-control btn m-3' style={style.btnSec} type={props.typeSec} onClick={props.onClickSec}>{props.titleSec}</button>
      {props.titleDel!="" ? 
      <button className='form-control btn m-3' style={style.btnDel} type={props.typeDel} onClick={props.onClickDel}><i class="bi bi-trash"></i> {props.titleDel} <i class="bi bi-trash"></i></button>: <span></span>}
      </div>
  )
}

export default FormButtons