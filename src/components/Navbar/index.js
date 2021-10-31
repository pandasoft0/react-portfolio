import React from 'react'
import {
    NavWrapper,
    NavLogo,
    NavLogoImgWrapper,
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
                <NavLogoImgWrapper>
                    <NavLogoImg src={profile} alt="profile image"/> 
                </NavLogoImgWrapper>
                <NavLogoText to='#'>Pius Prince</NavLogoText>
            </NavLogo>
          
          <NavMenu>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/projects'>Projects</NavLink>
              <NavLink to='/services'>Services</NavLink>
    
          </NavMenu>

            <NavBtn>Hire Me</NavBtn>
            
            <NavMobileMenu>
                <FaBars />
            </NavMobileMenu>
      
        </NavWrapper>
    )
}

export default Navbar
