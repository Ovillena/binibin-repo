import styled from "styled-components";
import React from "react";


const SubheadCont = styled.div`
    
`

const Subheader = styled.h1`
    font-size:${props=>props.fontsize};
    color:${props=>props.color};
`

const Subhead = ({
    text="Our Mission",
    color="#95AFBA",
    fontsize="36px"

}) =>{

    return <SubheadCont>
        <Subheader color={color} fontsize={fontsize}>{text}</Subheader>
    </SubheadCont>
}

export default Subhead;