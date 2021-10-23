import React from 'react'
import { 
    TestimonialContainer,
    LeftTestimonial,
    LeftTestimonialHeading,
    LeftTestimonialSub,
    RightTestimonial, 
    TestimonialImage,
    PersonName,
    PersonCompany,
    RightTestimonialText,
    Testimonial1,
    Testimonial2,
    Testimonial3
} from './TestimonialElements'

const Testimonial = ({profile}) => {
    return (
        <TestimonialContainer>
            <LeftTestimonial>
                <LeftTestimonialHeading>What my clients are saying</LeftTestimonialHeading>
                <LeftTestimonialSub>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Illum tenetur labore velit porro explicabo ducimus ea molestiae 
                    hic neque fugiat corrupti distinctio eveniet ipsam omnis autem 
                </LeftTestimonialSub>
            </LeftTestimonial>

            <RightTestimonial>
                <Testimonial1>
                    <TestimonialImage src={profile} alt="testimonial profile image"/>
                    <PersonName>Person 1</PersonName>
                    <PersonCompany>Company 1</PersonCompany>
                    <RightTestimonialText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Illum tenetur labore velit porro explicabo ducimus ea molestiae 
                    </RightTestimonialText>
                </Testimonial1>

                <Testimonial2>
                    <TestimonialImage src={profile} alt="testimonial profile image"/>
                    <PersonName>Person 2</PersonName>
                    <PersonCompany>Company 2</PersonCompany>
                    <RightTestimonialText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Illum tenetur labore velit porro explicabo ducimus ea molestiae 
                    </RightTestimonialText>
                </Testimonial2>

                <Testimonial3>
                    <TestimonialImage src={profile} alt="testimonial profile image"/>
                    <PersonName>Person </PersonName>
                    <PersonCompany>Company 3</PersonCompany>
                    <RightTestimonialText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Illum tenetur labore velit porro explicabo ducimus ea molestiae 
                    </RightTestimonialText>
                </Testimonial3>
              
            </RightTestimonial>

        </TestimonialContainer>
    )
}

export default Testimonial
