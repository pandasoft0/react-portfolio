import styled from "styled-components";
import {device} from '../../breakpoints'

export const HeaderWrapper = styled.section`
    padding: 2rem 5rem;  
    background-image: linear-gradient(to right, #33345A, #051937);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    border-radius: 0 0 2rem 2rem;



    @media ${device.mobileM} {
        height: 90vh;
    }


`

export const HeaderLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding-top: 5rem;
    }


     @media screen and (min-width: 768px) and (max-width: 1091px) {
        height: 100%;
        margin-top: -5rem;
    }


    @media ${device.tablet} {
        width: 120%;
        margin-top: 25%;
    }

    @media ${device.mobileL} {
       align-self: stretch;
       margin: 16rem 0;

    }

    @media ${device.mobileM} {
        margin: 5rem 0;
        height: 80%;
        padding-top: 5rem;
        padding-bottom: 5rem;
      
    }

    @media ${device.mobileS} {
        margin: 1rem 0;
        height: 90%;
        padding-top: 2rem ;
    }

    
`


export const HeaderMainText = styled.h1`
    font-size: 4.8rem;
    font-weight: 700;
    color: white;
    text-align: left;
    overflow: hidden;
    margin-bottom: 5rem;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 2rem;
        text-align: left;
        height: auto;
    }

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
        margin: 10rem 0;
    }

    @media ${device.mobileM} {
        display: block;
        color: white;
        font-size: 4.8rem;
        text-align: center;
        margin: 1rem 0;
    }

    @media screen and (min-width: 378px) and (max-width: 420px) {
        margin-top: -3rem;
    }
`

export const HeaderBtn = styled.button`
    align-self: flex-start;
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;
    /* margin-top: 5rem; */
    outline: none;
    white-space: nowrap;
    animation: pulsate 1s infinite;
   

    &:hover {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
    }


    @media ${device.tablet} {
        display: flex;
        align-self: center;
    }

    
    /* @media screen and (min-width: 378px) and (max-width: 420px) {
        margin-top: -3rem;
        margin-left: 8rem;
    }


    @media ${device.mobileL} {
        margin-left: 5rem;
    }

    @media ${device.mobileS} {
        margin-left: 2rem;
        margin-top: 2rem;
    } */


`

export const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8rem 0rem 6rem 8rem;


    @media ${device.tablet} {
        display: none;
    }


`

export const HeaderSVG = styled.img`
    background-size: cover;

`

