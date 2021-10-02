import React from 'react'
import {
    WorkWrapper,
    MockupWrapper,
    // Laptop,
    // Mobile,
    ProjectMenu,
    ProjectLink
} from './WorkElements'
import {projects} from './projects'

const Work = ({laptop, mobile, project}) => {
 
    // const [current, setCurrent] = useState()
    // const length = project.length;

    // const nextProject = () => {
    //     setCurrent(current === length -1 ? 0: length + 1)
    // }

    // const prevProject = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1 )
        
    // }

    // if (!Array.isArray(project) || project.length <= 0) {
    //     return null;
    //   }
    

    return (
        <WorkWrapper>
            <MockupWrapper>
                {/* <Laptop src={laptop}/>
                <Mobile src={mobile}/> */}
            </MockupWrapper>

            <ProjectMenu>
                {projects.map(item => (
                    
                    <>
                        <ProjectLink to='#'>{item.name}</ProjectLink>
                    </>
                ))}
                <ProjectLink to="#">Other Projects &rarr;</ProjectLink>
              
            </ProjectMenu>
        </WorkWrapper>
    )
}

export default Work
