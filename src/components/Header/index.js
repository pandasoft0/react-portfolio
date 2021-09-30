import React from 'react'
import {
    HeaderWrapper,
    HeaderLeftWrapper,
    HeaderMainText,
    HeaderAltText,
    HeaderBtn,
    HeaderImg,
    HeaderSVG,
} from './HeaderElements'

const Header = ({headerSVG}) => {
    return (
        <HeaderWrapper>
            <HeaderLeftWrapper>
                <HeaderMainText>I build amazing websites you and your customers will love</HeaderMainText>
                <HeaderAltText>Building websites for you with love</HeaderAltText>
                <HeaderBtn>Get in touch</HeaderBtn>
            </HeaderLeftWrapper>
           
            <HeaderImg>
                <HeaderSVG src={headerSVG}/>
            </HeaderImg>
        </HeaderWrapper>
    )
}

export default Header
