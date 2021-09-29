import React from 'react'
import {
    WorkWrapper,
    MockupWrapper,
    Laptop,
    Mobile,
    ProjectMenu,
    ProjectLink
} from './WorkElements'

const Work = ({laptop, mobile}) => {
    return (
        <WorkWrapper>
            <MockupWrapper>
                {/* <Laptop src={laptop}/>
                <Mobile src={mobile}/> */}
            </MockupWrapper>

            <ProjectMenu>
                <ProjectLink to="#">Project 1</ProjectLink>
                <ProjectLink to="#">Project 2</ProjectLink>
                <ProjectLink to="#">Project 3</ProjectLink>
                <ProjectLink to="#">Other Projects &rarr;</ProjectLink>
            </ProjectMenu>
        </WorkWrapper>
    )
}

export default Work
