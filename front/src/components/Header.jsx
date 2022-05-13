import React from 'react'
import NavLogedFalse from './sub/navbar/NavLogedFalse'
import NavLogedTrue from './sub/navbar/NavLogedTrue'

const Header = () => {
let loged=true
  return (
    /*sessionStorage.getItem('token') != null*/loged ?
      <NavLogedTrue />
      :
      <NavLogedFalse />
  )
}

export default Header