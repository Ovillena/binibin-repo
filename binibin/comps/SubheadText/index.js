import styled from "styled-components";
import React from "react";


const SubheadCont = styled.div`
    
`

const Subheader = styled.h1`
    font-size:24px;
    color:#95AFBA;
`

const Subhead = ({
    text="Our Mission"

}) =>{

    return <SubheadCont>
        <Subheader>{text}</Subheader>
    </SubheadCont>
}

export default Subhead;