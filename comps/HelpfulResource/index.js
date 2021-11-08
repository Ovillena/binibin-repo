import styled from "styled-components";
import React from "react";
import router, { useRouter } from "next/router";


const Cont = styled.div`
    display:flex;

`

const Link = styled.a`
    min-width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.bgcolor};
    color:${props=>props.textcolor};
    &:hover {
        color: green;
      }
`


const HelpfulResource = ({
    width="200px",
    height="50px",
    bgcolor="#598B2C",
    text="Recycle BC: What Can I Recycle?",
    textcolor="#2C5489",
    routeTo="/"

}) =>{
    return <Cont>
        <Link onClick={()=>router.push(routeTo)} width={width} height={height} textcolor={textcolor}>{text}</Link>
    </Cont>

}

export default HelpfulResource;