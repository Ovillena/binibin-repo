import Footer from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import Subhead from '../comps/SubheadText';
import InputTextComp from '../comps/InputText';
import MyButton from '../comps/Button';
import MessageBoxComp from '../comps/MessageBox';

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
  flex-direction:column;
  padding:20px;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
`

const InputCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:10px;
    padding-bottom:10%;
`


export default function CustomerService() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

    <HeaderCont>
        <div>
            <HeaderText text="Customer Support"></HeaderText>
        </div>
        <div>
            <Subhead text="Got a question? Contact Us" color="black" fontsize="18px"></Subhead>
        </div>
    </HeaderCont>

    <InputCont>
        <InputTextComp placeholder="Name"></InputTextComp>
        <InputTextComp placeholder="Email"></InputTextComp>
        <MessageBoxComp placeholder="Enter your message" width="403px" height="202px" ></MessageBoxComp>
        <MyButton text="Submit" bgcolor="#95AFBA"></MyButton>
    </InputCont>

    <FooterCont>
      <Footer></Footer>
    </FooterCont>    

      </PageCont>

    //</div>
  )
}