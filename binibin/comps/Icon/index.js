import React from "react";
import styled from "styled-components";

import { Icon } from "semantic-ui-react";

const IconCont = styled.div`

`

const IconComp = ({
    iconSymbol="users",
    bgcolor="teal"

}) => {
    return <IconCont>    
        <Icon circular inverted color={bgcolor} name={iconSymbol} size='huge' />
    </IconCont>

}

export default IconComp;