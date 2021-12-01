import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import Image from 'next/image';
import loginImage from '../public/6583.png';
import SignupComp from '../comps/SignupComp';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

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

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export default function SignupTest() {

    //-------Loading screen-----------
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }, [])

  return (
    //<div className={styles.container}>
    loading ? 

    <LoadDiv>
      <PulseLoader 
      color={'#003274'} 
      loading={loading} 
      size={20}
      />
      </LoadDiv>

      : 

      <PageCont>

    <MidCont
    as={motion.div}  
    initial={{opacity:0}} 
    animate={{opacity:100, transition:{ease:"easeIn", duration:2, delay:0}}}
    >
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


