import styled from 'styled-components';
import { Image, Menu, Button} from 'semantic-ui-react';
import MyButton from '../Button';
import {Router, useRouter} from 'next/router';

import React from 'react';

const NavCont = styled.div`
    display:flex;
    min-width:200px;
    height:130px;
    background-color:#97BCD0;
    box-shadow:0px 3px 30px grey; 
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    flex:1;
    padding:50px;
`

const LogoCont = styled.div`
    padding-left:30px;
    flex:1;
`

const TextCont = styled.div`
    color:white;
    font-weight:bold;
`

const NavItems = styled.a`
    font-size:24px;
    padding:10px;
`


const GuestNavBar = ({
    router = useRouter()

}) =>{


// if(){
    return <NavCont>
        <LogoCont>
            <Image src="/binibinlogo.png" alt="BiniBin Logo" width={204} height={52} 
            onClick={()=>router.push("/")}
            />
        </LogoCont>
        <NavItems>
            <TextCont onClick={()=>router.push("/aboutus")}>About Us</TextCont>
        </NavItems>
        <NavItems>
            <TextCont onClick={()=>router.push("/features")}>Features</TextCont>
        </NavItems>
        <NavItems>
            <TextCont onClick={()=>router.push("/education")} >Learn More</TextCont>
        </NavItems>
        <NavItems>
            <MyButton routeTo="/login"></MyButton>
        </NavItems>

    </NavCont>
}
// else {
    
//     return 
// }

export default GuestNavBar;