import styled from "styled-components";
import React from "react";


const HeaderCont = styled.div`

`

const Heading = styled.h1`
    font-size:48px;
    color:#42B3F0;
    padding:30px;
`

const Header = ({
    text="Our Mission"

}) =>{

    return <HeaderCont>
        <Heading>{text}</Heading>
    </HeaderCont>
}

export default Header;