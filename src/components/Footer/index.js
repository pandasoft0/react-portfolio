import React from 'react'
import {
    FooterWrapper,
    FooterImg,
    FooterText,
    FooterLinksWrapper,
    FooterLink,
    FooterMessage
} from './FooterElements'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = ({profile}) => {
    return (
        <FooterWrapper>
            <FooterImg src={profile}/>
            <FooterText to='#'>Pius Prince</FooterText>
            <FooterLinksWrapper>
                <FooterLink to="#github">
                    <FaGithub />
                </FooterLink>

                <FooterLink to="#linkedin">
                    <FaLinkedin />
                </FooterLink>

                <FooterLink to="#twitter">
                    <FaTwitter />
                </FooterLink>
            </FooterLinksWrapper>

            <FooterMessage>Built by Pius Prince &copy; by Pius Prince</FooterMessage>
        </FooterWrapper>
    )
}

export default Footer
