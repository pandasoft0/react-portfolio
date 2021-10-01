import styled from "styled-components";
import {device} from '../../breakpoints'

export const HeaderWrapper = styled.section`
    padding: 2rem 5rem;  
    background-image: linear-gradient(to right, #33345A, #051937);
    display: flex;
    flex-direction: row;
    height: 100vh;

    @media ${device.mobileM} {
        height: 90vh;
    }

   

`

export const HeaderLeftWrapper = styled.div`
    width: 45%;

    @media ${device.tablet} {
        width: 100%;
        margin-top: 25%;
    }

    @media ${device.mobileL} {
       align-self: stretch;
       margin: 16rem 0;
       width: 100%;

    }

    @media ${device.mobileM} {
        margin: 5rem 0;
        height: 80%;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
/* 
    @media ${device.mobileS} {
        margin: 1rem 0;
        height: 100%;
        padding-top: 2rem ;
    } */

    @media only ${device.mobileL} and (min-width: 425px) {
        height: 100vh;
        color: red;
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

    
    @media ${device.laptop} {
        text-align: center;
    }
`

export const HeaderAltText = styled.h1`
    display: none;

    @media ${device.mobileL} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
        margin: 10rem 0;
    }

    @media ${device.mobileM} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
        margin: 1rem 0;
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

    @media ${device.laptop} {
        display: none;
    }

`

export const HeaderSVG = styled.img`
    width: 100%;

`

