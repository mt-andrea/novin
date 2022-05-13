import React from 'react'
import { Nav, NavLink, NavMenu } from './Elements'

const NavLogedTrue = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to='/home' activeStyle>Home</NavLink>
        <NavLink to='/costumers' activeStyle>Costumers</NavLink>
        <NavLink to='/items' activeStyle>Items</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/'>Log Out</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default NavLogedTrue