import styled from "styled-components";
import React from "react";
import { Image } from 'semantic-ui-react';

const Cont = styled.div`
    display:flex;
    flex:1;
    justify-content:space-around;
    flex-direction:row;
    padding:20px;
    flex-wrap:wrap;
`

const CircleIcon = ({

}) =>{

    return <Cont>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular/>
    </Cont>
}

export default CircleIcon;