import Footer from '../comps/footer'

import styled from 'styled-components';
import React from 'react';


import HeaderText from '../comps/HeaderText';
import Subhead from '../comps/SubheadText';
import InputTextComp from '../comps/InputText';
import MyButton from '../comps/Button';
import MessageBoxComp from '../comps/MessageBox';
import Submit from '../comps/SubmitBtn';

const PageCont = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
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

const InputCont = styled.form`
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


    <HeaderCont>
        <div>
            <HeaderText text="Customer Support"></HeaderText>
        </div>
        <div>
            <Subhead text="Got a question? Contact Us" color="black" fontsize="18px"></Subhead>
        </div>
    </HeaderCont>

    <InputCont action="thankyou_contact">
        <InputTextComp placeholder="Name"></InputTextComp>
        <InputTextComp placeholder="Email"></InputTextComp>
        <MessageBoxComp placeholder="Enter your message" width="403px" height="202px" ></MessageBoxComp>
        <Submit></Submit>
    </InputCont>

    <FooterCont>
      <Footer></Footer>
    </FooterCont>

      </PageCont>

    //</div>
  )
}