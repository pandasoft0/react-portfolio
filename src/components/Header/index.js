import React from 'react'
import {
    HeaderWrapper,
    HeaderMainText,
    HeaderBtn,
    HeaderImg,
    HeaderSVG,
} from './HeaderElements'

const Header = ({headerSVG}) => {
    return (
        <HeaderWrapper>
            <HeaderMainText>I build amazing websites you and your customers will love</HeaderMainText>
            <HeaderBtn>Get in touch</HeaderBtn>
            
            <HeaderImg>
                <HeaderSVG src={headerSVG}/>
            </HeaderImg>
        </HeaderWrapper>
    )
}

export default Header
