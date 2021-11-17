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
    font-size:24px;
    font-weight:500;
    font-family: 'Hind', sans-serif;
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
    bgcolor="#2E6200",
    text="Login",
    textcolor="#F7FFF0",
    routeTo="/",
    hoverbg="#598B2C"

}) =>{
    return <ButtonCont>
        <ClickButton onClick={()=>router.push(routeTo)} width={width} height={height} bgcolor={bgcolor} textcolor={textcolor} hoverbg={hoverbg}>{text}</ClickButton>
    </ButtonCont>
}

export default MyButton;