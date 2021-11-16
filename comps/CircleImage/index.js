import styled from "styled-components";
import React from "react";
import { Image } from 'semantic-ui-react';

const Cont = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    padding:20px;
    flex-wrap:wrap;
`

const CircleImage = ({
    image="https://react.semantic-ui.com/images/wireframe/square-image.png"
}) =>{

    return <Cont>
        <Image src={image} size='small' circular/>
    </Cont>
}

export default CircleImage;