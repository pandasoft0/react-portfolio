import React from 'react'
import {
    NavWrapper,
    NavLogo,
    NavLogoImg,
    NavLogoText,
    NavMenu,
    NavLink,
    NavBtn,
    NavMobileMenu
} from './NavbarElements'
import {FaBars} from 'react-icons/fa'


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
            
            <NavMobileMenu>
                <FaBars />
            </NavMobileMenu>
      
        </NavWrapper>
    )
}

export default Navbar
