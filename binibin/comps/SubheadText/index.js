import styled from "styled-components";
import React from "react";


const SubheadCont = styled.div`
    
`

const Subheader = styled.h1`
    font-size:24px;
    color:${props=>props.color};
`

const Subhead = ({
    text="Our Mission",
    color="#95AFBA"

}) =>{

    return <SubheadCont>
        <Subheader color={color}>{text}</Subheader>
    </SubheadCont>
}

export default Subhead;