import styled from "styled-components";
import React from "react";


const ButtonCont = styled.div`
    display:flex;

`

const ClickButton = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.bgcolor};
    color:${props=>props.textcolor};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    box-shadow:0px 4px 4px grey; 
`

const MyButton = ({
    width="193px",
    height="64px",
    bgcolor="#598B2C",
    text="Login",
    textcolor="black"

}) =>{
    return <ButtonCont>
        <ClickButton onClick={()=>{}} width="150px" height="50px" bgcolor="#598B2C" textcolor="white">Login</ClickButton>
    </ButtonCont>

}

export default MyButton;