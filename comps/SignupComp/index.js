import React from "react";
import styled from 'styled-components';


const InputCont = styled.form`
    padding:10px;
`    

const InputText = styled.input.attrs(props => ({
    type:"text",

}))
`
    width:${props=>props.width};
    height:${props=>props.height};
    color: black;
    font-size: 18px;
    border: 5px solid #0E73AA;
    border-radius: 10px;
    padding:10px;
    margin:10px;
`

const SignupComp = ({
    width="400px",
    height="52px",
    placeholder="First Name"

}) =>{

    return <InputCont onSubmit={''} method="post">
        <InputText width={width} height={height} placeholder={placeholder}></InputText>
        <InputText width={width} height={height} placeholder={'Last Name'}></InputText>
        <InputText width={width} height={height} placeholder={'Email'}></InputText>
        <InputText width={width} height={height} placeholder={'Enterprise Name'}></InputText>
        
    </InputCont>
}

export default SignupComp;