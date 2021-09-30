import styled from "styled-components";
import { Link } from 'react-router-dom';
import {device} from '../../breakpoints'

export const FooterWrapper = styled.footer`
    background-color: #23252F;
    padding: 5rem;
    margin: 0;
  
    @media ${device.tablet} {
  
    }

    
    @media ${device.mobileS} {
        width: 42rem;
    }

`

export const FooterImg = styled.img`

`

export const FooterText = styled(Link)`
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
`

export const FooterLinksWrapper = styled.div`
    margin-top: 1.5rem; 
`

export const FooterLink = styled(Link)`
    padding-right: 2rem;
    font-size: 2rem;
    color: #60ECBD;

    &:hover {
        color: yellow;
    }
`