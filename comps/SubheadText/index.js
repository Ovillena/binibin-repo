import styled from "styled-components";
import React from "react";


const SubheadCont = styled.div`
    margin:10px 10px 10px 0;
`

const Subheader = styled.h2`
    font-size:${props=>props.fontsize};
    color:${props=>props.color};
    font-family: 'Hind', sans-serif;
`

const Subhead = ({
    text="Our Mission",
    color="#0E73AA",
    fontsize="24px"

}) =>{

    return <SubheadCont>
        <Subheader color={color} fontsize={fontsize}>{text}</Subheader>
    </SubheadCont>
}

export default Subhead;