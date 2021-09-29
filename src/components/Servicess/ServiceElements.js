import styled from "styled-components";

export const ServiceWrapper = styled.section`
    margin: 5rem;
    margin-bottom: 10rem;
`

export const ServiceHeading = styled.h1`
    font-size: 3.125rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #051937;
`

export const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 20rem);
    gap: 5rem;
`


export const Service1 = styled.div`
    padding: 7rem;
    border-radius: 1.5rem;
    /* background-color: #D1EEEB; */
    background-image: linear-gradient(to right bottom, #D1EEEB, #BEF6E4, rgba(0,0,0, .12));
    position: relative;
    box-shadow:  0.2rem 0.25rem rgba(0, 0, 0, 0.2);


    &:hover {
        transform: scale(1.1);
        transition: all .3s ease-in-out;
    }
`

export const ServiceLogo1 = styled.div`
    color: #051937;
    font-size: 5rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
`

export const Service2 = styled.div`
    padding: 7rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(to left bottom, #D1EEEB, #BEF6E4, rgba(0,0,0, .12));
    position: relative;
    box-shadow:  0.2rem 0.25rem rgba(0, 0, 0, 0.2);


    &:hover {
        transform: scale(1.1);
        transition: all .3s ease-in-out;
    }

`

export const ServiceLogo2 = styled.div`
    color: #051937;
    font-size: 5rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
`

export const Service3 = styled.div`
    padding: 7rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(to right top, #D1EEEB, #BEF6E4, rgba(0,0,0, .12));
    position: relative;
    box-shadow:  0.2rem 0.25rem rgba(0, 0, 0, 0.2);


    &:hover {
        transform: scale(1.1);
        transition: all .3s ease-in-out;
    }

`
export const ServiceLogo3 = styled.div`
    color: #051937;
    font-size: 5rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
`

export const Service4 = styled.div`
    padding: 7rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(to left top, #D1EEEB, #BEF6E4, rgba(0,0,0, .12));
    position: relative;
    box-shadow:  0.2rem 0.25rem rgba(0, 0, 0, 0.2);


    &:hover {
        transform: scale(1.1);
        transition: all .3s ease-in-out;
    }
`

export const ServiceLogo4 = styled.div`
    color: #051937;
    font-size: 5rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
`

export const ServiceTitle = styled.h1`
    font-size: 2rem;
    color: #051937;
    margin-bottom: 2rem;
`

export const ServiceMessage = styled.p`
    font-size: 1.6rem;
    color: #051937;
`