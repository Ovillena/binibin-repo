import styled from "styled-components";
import React from "react";


const InputCont = styled.div`
    padding:10px;
`    

const InputText = styled.textarea.attrs(props => ({
    

}))
`
width:${props=>props.width};
height:${props=>props.height};
color: black;
font-size: 18px;
border: 5px solid #95AFBA;
border-radius: 10px;
padding:10px;
`

const MessageBoxComp = ({
    width="400px",
    height="52px",
    placeholder="placeholder",
    type="textarea"

}) =>{

    return <InputCont>
        <InputText width={width} height={height} placeholder={placeholder} type={type}></InputText>
    </InputCont>
}

export default MessageBoxComp;