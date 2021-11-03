import styled from "styled-components";
import React from "react";


const InputCont = styled.div`
    padding:10px;
`    

const InputPassword = styled.input.attrs(props => ({
    type:"Password",
    placeholder:"Password",

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

const InputPasswordComp = ({
    width="400px",
    height="52px"

}) =>{

    return <InputCont>
        <InputPassword width={width} height={height}></InputPassword>
    </InputCont>
}

export default InputPasswordComp;