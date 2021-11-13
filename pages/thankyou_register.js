import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import MyButton from '../comps/Button';
import Subhead from '../comps/SubheadText';


const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`

const TopRow = styled.div`
  display:flex;
`

const TextCont = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Div = styled.div`
  
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
`

const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
`

export default function Home(){
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>


    <TextCont>

    <Div>
      <HeaderText text="Thanks for registering!"></HeaderText>
    </Div>

    <Div>
      <HeaderText text="We'll get back to your withing 24 hours"></HeaderText>
    </Div>

    <Div>
      <Subhead text="In the mean time, check out these articles" color="#598B2C"></Subhead>
    </Div>


    <ButtonCont>
      <MyButton routeTo="/" width="183px" height="57px" bgcolor="#FFC800" text="Learn More" routeTo="/education"></MyButton>
    </ButtonCont>

    </TextCont>
    
    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  )
}

