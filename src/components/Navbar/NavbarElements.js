import styled from "styled-components"
import { Link } from 'react-router-dom'
import {device} from '../../breakpoints'


export const NavWrapper = styled.nav`
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #051937;
    /* white-space: nowrap; */
    
    @media ${device.mobileL} {
     
    }

    @media ${device.tablet} {
    
    }
`

export const NavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavLogoImg = styled.img`
    height: 4rem;
    /* width: 5rem; */
    border-radius: 50%;
    margin-right: 2rem;
`

export const NavLogoText = styled(Link)`
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
`

export const NavMenu = styled.div`
    /* background-color: red; */
    
@media ${device.mobileL} {
    display: none;
}
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    color: #fff;
    padding: 5rem;

    &:hover {
        color: #60ECBD;
    }
`

export const NavBtn = styled.button`
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;

    &:hover {
        transform: scale(1.1);
        transition: all .2s ease-out;
    }
`

