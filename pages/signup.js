import styled from 'styled-components';
import React from 'react';

import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import Image from 'next/image';
import loginImage from '../public/6583.png';
import SignupComp from '../comps/SignupComp';


const PageCont = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    min-height:100vh;
`

const MidCont = styled.div`
    display:flex;
    margin-top:100px;
    margin-bottom:60px;

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


    <MidCont>
      <LeftCont>
        <Header text="Register Enterprise"></Header>
        <SignupComp></SignupComp>
      </LeftCont>

      <RightCont>
        <Image src={loginImage} width={821} height={374}/>
      </RightCont>

    </MidCont>

    <FooterCont>
      <Footer></Footer>
    </FooterCont>

      </PageCont>
    //</div>
  )
}


