import styled from "styled-components"
import { Link } from 'react-router-dom'
import {device} from '../../breakpoints'


export const NavWrapper = styled.nav`
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, #33345A, #051937);
    
    @media ${device.tablet} {
        white-space: nowrap;
    }

    @media screen and (min-width: 425px) and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
    
    @media ${device.mobileL} {
     
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

    @media ${device.mobileL} {
    display: none;
}
`

export const NavMobileMenu = styled.div`
    display: none;

    @media ${device.mobileL} {
    display: block;
    position: sticky;
    top: 4rem;
    right: 0;
    color: white;
    font-size: 2rem;
}
`


