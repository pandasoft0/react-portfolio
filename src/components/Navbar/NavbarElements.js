import styled from "styled-components"
import { Link } from 'react-router-dom'
import {device} from '../../breakpoints'


export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, #33345A, #051937);
    padding: 2rem 2rem;
    
    /* @media ${device.tablet} {
        white-space: nowrap;
    } */

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
    white-space: nowrap;
   
`
export const NavLogoImgWrapper= styled.div`
    height: 5rem;
    width: 5rem;
`


export const NavLogoImg = styled.img`
    height: 100%;
    width: 100%;
    /* width: 5rem; */
    border-radius: 50%;
    margin-right: 2rem;
`

export const NavLogoText = styled(Link)`
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
    padding-left: 2rem;
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-evenly;

   
    
@media ${device.tablet} {
    display: none;
}
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    color: #fff;
    padding: 0 2rem;
    white-space: nowrap;

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
    white-space: nowrap;

    &:hover {
        transform: scale(1.1);
        transition: all .2s ease-out;
    }

    @media ${device.tablet} {
    display: none;
}
`

export const NavMobileMenu = styled.div`
    display: none;

    @media ${device.tablet} {
    display: block;
    position: sticky;
    top: 4rem;
    right: 0;
    color: white;
    font-size: 2rem;
}
`


