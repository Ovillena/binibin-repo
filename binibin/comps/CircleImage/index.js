import styled from "styled-components";
import React from "react";
import { Image } from 'semantic-ui-react';
import Header from '../../comps/HeaderText';


const Cont = styled.div`
    display:flex;
    flex:1;
    justify-content:space-around;
    flex-direction:row;
    padding:20px;
    flex-wrap:wrap;
`

const MissionCont = styled.div`
    width:273px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Heading = styled.h1`
    font-size:36px;
    color:#95AFBA;

`

const BodyText = styled.p`

`



const CircleIcon = ({

}) =>{

    return <Cont>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular/>
    </Cont>
}

export default CircleIcon;