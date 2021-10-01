import styled from "styled-components";
import {device} from '../../breakpoints'

export const TestimonialContainer = styled.section`
    margin-top: 15rem;
    position: relative;
    height: 68rem;
    margin-bottom: 8rem;

    @media ${device.tablet} {
        height : auto;
        margin-bottom: 15rem;
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
        padding: 2.5rem;
    }

    @media ${device.mobileM} {
        padding: 2.5rem;
    }

`

export const LeftTestimonialHeading = styled.h1`
    font-size: 3.125rem;
    margin-bottom: 3rem;
    color: #051937;
`   

export const LeftTestimonialSub = styled.p`
    font-size: 1.6rem;
    
`

export const RightTestimonial = styled.div`
    width: 60%;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;

    @media ${device.tablet} {
        position: relative;
        width: 100%;
        margin-top: 10rem;
    }
`


export const Testimonial1 = styled.figure`
    background-image: linear-gradient(to right, #33345A, #051937);
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    border-radius: 1.2rem;

 
    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        border-radius: 1.2rem;
    }
`
export const Testimonial2 = styled.figure`
    background-image: linear-gradient(to right, #33345A, #051937);
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    border-radius: 1.2rem;


    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        border-radius: 1.2rem;
    }
`
export const Testimonial3 = styled.figure`
    background-image: linear-gradient(to right, #33345A, #051937);
    padding: 2rem 2rem;
    border-radius: 1.2rem;

    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }

    @media ${device.tablet} {
        border-radius: 1.2rem;
    }
`

export const TestimonialImage = styled.img`
    height: 4rem;
    border-radius: 50%;
`

export const PersonCompany = styled.p`
    font-size: 1rem;
`

export const PersonName = styled.figcaption`
    font-size: 2rem;
`

export const RightTestimonialText = styled.blockquote`
    font-size: 1.6rem;
    font-weight: 100;
    padding-top: 2rem;
`