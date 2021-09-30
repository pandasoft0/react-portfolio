import styled from "styled-components";
import {device} from '../../breakpoints'

export const TestimonialContainer = styled.section`
    margin-top: 5rem;
    position: relative;
    height: 68rem;
    margin-bottom: 8rem;

    @media ${device.mobileL} {
        margin: 0;
        width: 424px;
    }

    @media ${device.laptop} {
        height: 100%;
    }
`

export const LeftTestimonial = styled.div`
    position: absolute;
    top: 18rem;
    max-width: 20%;
    margin-left: 10rem;

    @media ${device.tablet} {
        top: 0;
        max-width: 100%;
        margin-left: 0;
        position: relative;
        text-align: center;
        
    }

    @media ${device.laptop} {
       
    }
`

export const LeftTestimonialHeading = styled.h1`
    font-size: 3.125rem;
    margin-bottom: 3rem;
`   

export const LeftTestimonialSub = styled.p`
    font-size: 1.6rem;
    
`

export const RightTestimonial = styled.div`
    /* background-color: red; */
    width: 60%;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;

    @media ${device.tablet} {
        position: relative;
        width: 100%;
        text-align: center;
        margin-top: 10rem;
    }
`


export const Testimonial1 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
    margin-bottom: 5rem;
    margin-right: 0;


 
    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        border-radius: 5rem;
        margin: 2rem;
    }
`
export const Testimonial2 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
    margin-left: 9rem;
    margin-bottom: 5rem;


    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        margin-left: 0;
    }

    @media ${device.tablet} {
        border-radius: 5rem;
        margin: 2rem;
    }
`
export const Testimonial3 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
   

    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        border-radius: 5rem;
        margin: 2rem;
    }
`

export const TestimonialImage = styled.img`

`

export const PersonCompany = styled.p`
    /* color: white; */
    font-size: 1rem;
`

export const PersonName = styled.p`
    font-size: 2rem;
`

export const RightTestimonialText = styled.p`
    font-size: 1.6rem;
    padding-top: 2rem;
`