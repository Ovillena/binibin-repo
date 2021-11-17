import styled from "styled-components";
import React from "react";
import router, { useRouter } from "next/router";

const Cont = styled.div`
    display:flex;
`

const Link = styled.a`
    font-weight:bold;
    min-width:${props=>props.width};
    height:${props=>props.height};
    color:${props=>props.textcolor};
    &:hover {
        color:#2E6200;
        background-color: #F7FFF0;
      }
`


const HelpfulResource = ({
    width="200px",
    height="30px",
    text="Recycle BC: What Can I Recycle?",
    textcolor="#2E6200",
    href="#"

}) =>{
    return <Cont>
        <Link target="_blank" href={href} width={width} height={height} textcolor={textcolor}>{text}</Link>
    </Cont>

}

export default HelpfulResource;