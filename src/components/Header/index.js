import React from 'react'
import {
    HeaderWrapper,
    HeaderLeftWrapper,
    HeaderMainText,
    HeaderBtn,
    HeaderImg,
    HeaderSVG,
} from './HeaderElements'

const Header = ({headerSVG}) => {
    return (
        <HeaderWrapper>
            <HeaderLeftWrapper>
                <HeaderMainText>I build amazing websites you and your customers will love</HeaderMainText>
                <HeaderBtn>Get in touch</HeaderBtn>
            </HeaderLeftWrapper>
           
            <HeaderImg>
                <HeaderSVG src={headerSVG}/>
            </HeaderImg>
        </HeaderWrapper>
    )
}

export default Header
