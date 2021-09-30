import styled from "styled-components";
import {device} from '../../breakpoints'

export const HeaderWrapper = styled.section`
    padding: 2rem 5rem;  
    background-image: linear-gradient(to right, #33345A, #051937);
    /* background-color: #051937;    */
    display: flex;
    flex-direction: row;

`

export const HeaderLeftWrapper = styled.div`
    width: 45%;

    @media ${device.tablet} {
        width: 100%;
    }

    @media ${device.mobileL} {
       align-self: stretch;
    }
`


export const HeaderMainText = styled.h1`
    font-size: 4.8rem;
    font-weight: 700;
    color: white;
    text-align: left;
    margin-top: 10rem;

    
    @media ${device.tablet} {
        text-align: center;
    }

    @media ${device.mobileL} {
      display: none;
    }
`

export const HeaderAltText = styled.h1`
    display: none;

    @media ${device.mobileL} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
    }
`

export const HeaderBtn = styled.button`
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;
    margin-top: 5rem;
    outline: none;
    animation: pulsate 1s infinite;
   

    &:hover {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }


    @media ${device.tablet} {
        margin-left: 40%;
    }


    @media ${device.laptop} {
        white-space: nowrap;
    }

    
    @media ${device.mobileL} {
        margin-left: 5rem;
    }

`

export const HeaderImg = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8rem 0rem 6rem 8rem;
    width: 50%;

    @media ${device.tablet} {
        display: none;
    }

`

export const HeaderSVG = styled.img`
    width: 100%;

`

