import React from 'react'
import { Nav, NavBtn, NavBtnLink } from './Elements'

const NavLogedFalse = () => {
  return (
    <Nav>
      <NavBtn>
        <NavBtnLink to='/registration'>Registration</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default NavLogedFalse