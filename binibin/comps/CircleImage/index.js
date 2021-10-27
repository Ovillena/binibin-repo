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
        <MissionCont>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular/>
            <Heading>Educate</Heading>
            <BodyText>Learn where your garbage should be going to lessen harmful impacts to the waste system. </BodyText>
        </MissionCont>

        <MissionCont>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular/>
            <Heading>Track</Heading>
            <BodyText>A simple way for schools to track your garbage, compost, and recycling with a quick input system and clear graphs. </BodyText>
        </MissionCont>

        <MissionCont>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular/>
            <Heading>Reduce</Heading>
            <BodyText>Increase the awareness of waste management and recycling amongst their students.</BodyText>
        </MissionCont>

    </Cont>
}

export default CircleIcon;