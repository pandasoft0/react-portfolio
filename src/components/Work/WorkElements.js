import styled from "styled-components";
import { Link } from 'react-router-dom'
import {device} from '../../breakpoints'

export const WorkWrapper = styled.section`
    padding: 2rem 5rem;
    max-height: 90rem;

 
`

export const MockupWrapper = styled.div`
   position: relative;
   max-height: 80rem;
   padding: 0 0;

`

export const Laptop = styled.img`
    height: 60rem;
   
    @media ${device.tablet} {
      height: auto;
    }

    @media ${device.mobileL} {
        display: none;
    }
    
`

export const Mobile = styled.img`
    position: absolute;
    top: 10rem;
    right: 25rem;
    height: 50rem;
    border: none;
    z-index: 100;

    @media ${device.tablet} {
        top: 1rem;
        right: 5rem;
        /* height: auto; */
        transform: scale(0.5);
    
    }
`

export const ProjectMenu = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
`

export const ProjectLink = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 5rem;
`