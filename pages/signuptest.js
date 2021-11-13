import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import MyButton from '../comps/Button';
import Footer from '../comps/footer';
import InputPasswordComp from '../comps/InputPassword';
import InputTextComp from '../comps/InputText';
import Image from 'next/image';
import loginImage from '../public/login_image.png';
import SignupComp from '../comps/SignupComp';

const PageCont = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    min-height:100vh;
`

const TopRow = styled.div`
    display:flex;
    flex:1;
`
const MidCont = styled.div`
    display:flex;
    height:500px;

`

const LeftCont = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    justify-content:center;
    align-items:center;
`

const RightCont = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  margin-top:50px;
`


export default function SignupTest() {
  return (
    //<div className={styles.container}>
      <PageCont>

      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

    <MidCont>
      <LeftCont>
        <Header text="Sign Up"></Header>
        <SignupComp></SignupComp>
      </LeftCont>

      <RightCont>
        <Image src={loginImage} width={500} height={300}/>
      </RightCont>

    </MidCont>

    <FooterCont>
      <Footer></Footer>
    </FooterCont>

      </PageCont>
    //</div>
  )
}


