import React from 'react'
import {
    ServiceWrapper,
    ServiceHeading,
    ServiceGrid,
    ServiceTitle,
    ServiceLogo1,
    ServiceLogo2,
    ServiceLogo3,
    ServiceLogo4,
    ServiceMessage,
    Service1,
    Service2,
    Service3,
    Service4
} from './ServiceElements'
import {service1,service2,service3,service4} from './data'
import {MdDeveloperMode} from 'react-icons/md'
import {BsWindow} from 'react-icons/bs'
import {BiSupport, BiTestTube} from 'react-icons/bi'


const Servicess = () => {
    return (
        <ServiceWrapper>
            <ServiceHeading>Services I can provide</ServiceHeading>

        
            <ServiceGrid>
                <Service1>
                    <ServiceTitle>{service1.title}</ServiceTitle>
                    <ServiceLogo1>
                        <MdDeveloperMode />
                    </ServiceLogo1>
                    <ServiceMessage>{service1.text}</ServiceMessage>
                </Service1>

                <Service2>
                    <ServiceTitle>{service2.title}</ServiceTitle>
                    <ServiceLogo2>
                        <BsWindow />
                    </ServiceLogo2>
                    <ServiceMessage>{service2.text}</ServiceMessage>
                </Service2>

                <Service3>
                    <ServiceTitle>{service3.title}</ServiceTitle>
                    <ServiceLogo3>
                        <BiSupport />
                    </ServiceLogo3>
                    <ServiceMessage>{service3.text}</ServiceMessage>
                </Service3>

                <Service4>
                    <ServiceTitle>{service4.title}</ServiceTitle>
                    <ServiceLogo4>
                        <BiTestTube />
                    </ServiceLogo4>
                    <ServiceMessage>{service4.text}</ServiceMessage>
                </Service4>
             
            </ServiceGrid>
           

        </ServiceWrapper>
    )
}

export default Servicess
