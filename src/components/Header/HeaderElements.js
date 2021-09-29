import styled from "styled-components";

export const HeaderWrapper = styled.section`
    max-height: 100%;
    padding: 2rem 5rem;    
    background-color: #051937;     
    /* display: flex;                                                                                                                                                                         : ; */
`

export const HeaderMainText = styled.p`
    font-size: 4.8rem;
    font-weight: 700;
    color: white;
    display: flex;
    flex-wrap: wrap;
    margin-top: 18.4rem;
    width: 55rem;
    margin-bottom: 5rem;
`

export const HeaderBtn = styled.button`
    padding: 1rem 5rem;
    cursor: pointer;
    background-color: #60ECBD;
    border-radius: 1rem;
    border: 0 solid;

    &:hover {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }

    &:focus {
        outline: none;
        animation: pulsate 1s infinite;
    }
`

export const HeaderImg = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -38rem;
    margin-bottom: 10rem;
    /* flex-direction: column; */
`

export const HeaderSVG = styled.img`
    
`

