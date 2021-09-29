import styled from "styled-components";
import { Link } from 'react-router-dom'

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
   
`

export const Mobile = styled.img`
    position: absolute;
    top: 10rem;
    right: 25rem;
    height: 50rem;
    border: none;
    z-index: 100;
`

export const ProjectMenu = styled.div`
    display: flex;
    justify-content: center;
`

export const ProjectLink = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 5rem;
`