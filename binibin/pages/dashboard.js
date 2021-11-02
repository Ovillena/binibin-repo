import Footer from '../comps/footer'

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

    <HeaderCont>
      <HeaderText>Our Mission</HeaderText>
    </HeaderCont>

    <MissionCont>
      <CircleIcon></CircleIcon>
    </MissionCont>

    
  <Footer></Footer>
      </PageCont>

    //</div>
  )
}