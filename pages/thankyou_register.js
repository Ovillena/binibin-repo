import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React,{useEffect, useState} from 'react';

import HeaderText from '../comps/HeaderText';
import MyButton from '../comps/Button';
import Subhead from '../comps/SubheadText';
import EduImage from '../comps/EduImage';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

const PageCont = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`

const TextCont = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:200px;
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

const ImageDiv = styled.div`
  z-index:-1;
  display:flex;
  justify-content:center;
  align-items:center;
`

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

// background-image:url('/13095.png');
// background-size:cover;
// background-repeat: no-repeat;

export default function Register(){
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
      <MyButton routeTo="/" width="183px" height="57px" bgcolor="#2C5489" text="Learn More" hoverbg="#6193D6" routeTo="/education"></MyButton>
    </ButtonCont>

    </TextCont>

    <ImageDiv>
      <EduImage src="13095.png" width="1440px" height="682px"></EduImage>
    </ImageDiv>

    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>


      </PageCont>

    //</div>
  )
}

