import styled from "styled-components";
import React from "react";
import {Button} from 'semantic-ui-react';


const ButtonCont = styled.div`
    display:flex;
`

const MyButton = ({

}) =>{
    return <ButtonCont>
        <Button color='red'>Red</Button>
    </ButtonCont>

}

export default MyButton;