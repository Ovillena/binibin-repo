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
    
  <Footer></Footer>
      </PageCont>

    //</div>
  )
}