import React from 'react'
import NavLogedFalse from './sub/navbar/NavLogedFalse'
import NavLogedTrue from './sub/navbar/NavLogedTrue'

const Header = () => {

  return (
    sessionStorage.getItem('token') != null ?
      <NavLogedTrue />
      :
      <NavLogedFalse />
  )
}

export default Header