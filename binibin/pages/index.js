import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import HeroImage from '../comps/Hero'
import Side from '../comps/Side'


const PageCont = styled.div`
    flex:1;
`

const TopRow = styled.div`
  display:flex;
`
const Container = styled.div`
display:flex;
flex-direction:column;
`

export default function Home() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    
    <HeroImage></HeroImage>
  <Footer></Footer>
  {/* <Side></Side> */}
      </PageCont>
    //</div>
  )
}