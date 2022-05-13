import React from 'react'
import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Elements'

const NavLogedTrue = () => {

  const logout=() => {
    sessionStorage.removeItem('token')
    props.beallit({token: ""})}

  return (
    <Nav>
      <NavMenu>
        <NavLink to='/home' activeStyle>Home</NavLink>
        <NavLink to='/costumers' activeStyle>Costumers</NavLink>
        <NavLink to='/items' activeStyle>Items</NavLink>
      </NavMenu>
      <NavBtn onClick={logout}>
        <NavBtnLink to='/'>Log Out</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default NavLogedTrue