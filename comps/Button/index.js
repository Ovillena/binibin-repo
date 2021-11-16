import styled from "styled-components";
import React from "react";
import router, { useRouter } from "next/router";


const ButtonCont = styled.div`
    display:flex;
    margin:10px;
    
`

const ClickButton = styled.button`
    width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.bgcolor};
    color:${props=>props.textcolor};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    box-shadow:0px 4px 4px grey; 
    border:none;
    cursor: pointer;
    &:hover {
        background-color:${props=>props.hoverbg};
      }
`

const MyButton = ({
    width="150px",
    height="50px",
    bgcolor="#FFC800",
    text="Login",
    textcolor="white",
    routeTo="/",
    hoverbg="#598B2C"

}) =>{
    return <ButtonCont>
        <ClickButton onClick={()=>router.push(routeTo)} width={width} height={height} bgcolor={bgcolor} textcolor={textcolor} hoverbg={hoverbg}>{text}</ClickButton>
    </ButtonCont>
}

export default MyButton;