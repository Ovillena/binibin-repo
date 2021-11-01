import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import HeroImage from '../comps/Hero'
import CircleIcon from '../comps/CircleImage';
import MyButton from '../comps/Button';


const PageCont = styled.div`

`

const TopRow = styled.div`
  display:flex;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`
const MissionCont = styled.div`

`

const ParagraphSec = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  padding:20px;
`
const Subhead = styled.h1`
  font-size:36px;
  color:#95AFBA;
`
const BodyText = styled.p`
  width:50%;
`
const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
`

export default function Home() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    
      <HeroImage></HeroImage>

    <HeaderCont>
      <HeaderText>Our Mission</HeaderText>
    </HeaderCont>

    <MissionCont>
      <CircleIcon></CircleIcon>
    </MissionCont>

    <ParagraphSec>
      <Subhead>Recycling Problems</Subhead>
      <BodyText>Many people don’t know what to recycle or people are throwing away things that are recyclable. People are not aware of how much garbage they are sending to the landfill when portions of it may be compostable or recyclable.</BodyText>
    </ParagraphSec>

    <ParagraphSec>
      <Subhead>You can make a difference</Subhead>
      <BodyText>We encourage schools to promote waste reduction awareness to their students by providing a visual tool to track the quantity and the breakdown of the waste produced by their schools.</BodyText>
    </ParagraphSec>

    <ButtonCont>
      <MyButton width="200px" height="65px" bgcolor="#FFC800" text="Learn More"></MyButton>
    </ButtonCont>

    
  <Footer></Footer>
      </PageCont>

    //</div>
  )
}
