import React from "react";
import styled from 'styled-components';
import Submit from "../SubmitBtn";
import InputPasswordComp from "../InputPassword";

const InputCont = styled.form`
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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


const LoginComp = ({
    width="400px",
    height="52px",
    placeholder="Email"


}) =>{

    return <InputCont onSubmit={''} method="post" action="dashboard">
        <InputText width={width} height={height} placeholder={placeholder}></InputText>
        <InputPasswordComp></InputPasswordComp>
        <Submit></Submit>
    </InputCont>
}

export default LoginComp;