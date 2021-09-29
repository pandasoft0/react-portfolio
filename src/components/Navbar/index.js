import React from 'react'
import {
    NavWrapper,
    NavLogo,
    NavLogoImg,
    NavLogoText,
    NavMenu,
    NavLink,
    NavBtn
} from './NavbarElements'

const Navbar = ({profile}) => {
    return (
        <NavWrapper>
            <NavLogo>
                <NavLogoImg src={profile}/> 
                <NavLogoText>Pius Prince</NavLogoText>
            </NavLogo>
          
          <NavMenu>
              <NavLink>Home</NavLink>
              <NavLink>Projects</NavLink>
              <NavLink>Services</NavLink>
          </NavMenu>

            <NavBtn>Hire Me</NavBtn>
        
        </NavWrapper>
    )
}

export default Navbar
