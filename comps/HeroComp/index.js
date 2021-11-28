import styled from 'styled-components';
import React from 'react';
import MyButton from '../Button';
import router, { useRouter } from "next/router";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background-image:url('/workers.jpeg');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    padding:10%;
    margin-bottom:30px;
`
const TitleCont = styled.div`
    flex:1;
`

const Title = styled.h1`
    color:#fff;
    font-family: 'Hind', sans-serif;
    font-size:72px;
    font-weight:500;
    text-align:center;
`

const ButtonCont = styled.div`
    display:flex;
    justify-content:center;
`

const HeroComp = ({})=>{

    return<Container>

        <TitleCont>
            <Title>See how your actions make an impact</Title>
            <ButtonCont>
            <MyButton width="180px" height="65px" bgcolor="#FFC800" hoverbg="#E5A500" textcolor="#000" text="Register" routeTo="signup"></MyButton>
            </ButtonCont>
        </TitleCont>
        
    </Container>    
  }
  
  export default HeroComp;