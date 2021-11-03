import styled from "styled-components";
import React from "react";


const HeaderCont = styled.div`

`

const Heading = styled.h1`
    font-size:48px;
    color:#95AFBA;
`

const Header = ({
    text="Our Mission"

}) =>{

    return <HeaderCont>
        <Heading>{text}</Heading>
    </HeaderCont>
}

export default Header;