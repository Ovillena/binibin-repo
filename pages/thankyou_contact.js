import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import MyButton from '../comps/Button';


const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`

const TopRow = styled.div`
  display:flex;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1;
  text-align:center;
  padding-left:25%;
  padding-right:25%;
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

    <HeaderCont>
      <HeaderText text="Thanks for contacting us!
        We’ll get back to you within 24 hours"></HeaderText>
    </HeaderCont>


    <ButtonCont>
      <MyButton routeTo="/" width="200px" height="65px" bgcolor="#FFC800" text="Back Home"></MyButton>
    </ButtonCont>

    
    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  )
}

