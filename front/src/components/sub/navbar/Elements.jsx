import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav
    `
    background: #BC00FF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index:10;
    margin:0;
`;
const NavLink = styled(Link)
    `
    color: #FC00FF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    padding: 10px 22px;
    &:hover{
        color: #fff;
    }
    &.active{
        color: #FF0003;
        background: #FC00FF;
        border-radius: 10% 10% 10% 10%;
        padding: 10px 22px;
        border: none;
        outline: none;
    }
`

const NavMenu = styled.div
    `
    display: flex;
    align-items: center;
    margin-right: -24px;
`;
const NavBtn = styled.nav
    `
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left:auto;
`;
const NavBtnLink = styled(Link)
    `
border-radius: 4px;
padding: 10px 22px;
background:#FF0043;
color:#fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #FF00C3;
    color:#fff;
}
`;
export {Nav, NavLink, NavBtn, NavBtnLink, NavMenu}