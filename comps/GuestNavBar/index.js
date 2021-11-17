import styled from 'styled-components';
import { Image, Menu, Button} from 'semantic-ui-react';
import MyButton from '../Button';
import {Router, useRouter} from 'next/router';

import React from 'react';

const NavCont = styled.div`
    display:flex;
    min-width:200px;
    min-height:80px;
    background-color:#fff;
    box-shadow:0px 3px 30px grey; 
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    flex:1;
`

const LogoCont = styled.div`
    padding-left:30px;
`

const RightCont = styled.div`
    display:flex;
    align-items:center;
    jusfify-content:right;
`

const TextCont = styled.div`
    color:${props=>props.navColor};
    font-weight:bold;
    padding:10px;
    &:hover {
        background-color: #EEF9FF;
      }
`

const NavItems = styled.a`
    font-size:24px;
    padding:10px;
    cursor: pointer;
`


const GuestNavBar = ({
    router = useRouter(),
    navColor="#003274"

}) =>{


// if(){
    return <NavCont>
        <LogoCont>
            <Image src="/binibinlogo.png" alt="BiniBin Logo" width={135} height={35} 
            onClick={()=>router.push("/")}
            />
        </LogoCont>
        <RightCont>
            <NavItems>
                <TextCont onClick={()=>router.push("/aboutus")}>About us</TextCont>
            </NavItems>
            <NavItems>
                <TextCont onClick={()=>router.push("/education")} >How to sort</TextCont>
            </NavItems>
            <NavItems>
                <MyButton routeTo="/login"></MyButton>
            </NavItems>
        </RightCont>
    </NavCont>
}
// else {
    
//     return 
// }

export default GuestNavBar;