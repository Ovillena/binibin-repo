import styled from "styled-components";
import React from "react";


const InputCont = styled.div`
    padding:10px;
`    

const InputText = styled.input.attrs(props => ({
    type:"text",
    placeholder:"Username"

}))
`
width:${props=>props.width};
height:${props=>props.height};
color: palevioletred;
font-size: 18px;
border: 5px solid #95AFBA;
border-radius: 10px;
padding:10px;

`

const InputTextComp = ({
    width="400px",
    height="52px",
    

}) =>{

    return <InputCont>
        <InputText width={width} height={height}></InputText>
    </InputCont>
}

export default InputTextComp;