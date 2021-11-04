import React from "react";
import styled from "styled-components";
import router, { useRouter } from "next/router";

import { Icon } from "semantic-ui-react";

const IconCont = styled.div`

`

const IconComp = ({
    iconSymbol="users",
    bgcolor="teal",
    routeTo = "/"

}) => {
    return <IconCont >    
        <Icon circular inverted color={bgcolor} name={iconSymbol} size='huge' onClick={()=>router.push(routeTo)}/>
    </IconCont>

}

export default IconComp;