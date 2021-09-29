import styled from "styled-components";

export const TestimonialContainer = styled.section`
    margin-top: 5rem;
    position: relative;
    height: 68rem;
    margin-bottom: 8rem;
`

export const LeftTestimonial = styled.div`
    position: absolute;
    top: 18rem;
    max-width: 20vw;
    margin-left: 10rem;
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
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
`


export const Testimonial1 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
    margin-bottom: 5rem;
    height: 33.33%;
    margin-right: 0;
 
    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }
`
export const Testimonial2 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
    margin-left: 9rem;
    margin-bottom: 5rem;
    height: 33.33%;

    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
    }
`
export const Testimonial3 = styled.div`
    background-color: #051937;
    padding: 2rem 2rem;
    height: 18rem;

    &:hover {
        transform: translateX(-0.5%);
        transition: all .2s;
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