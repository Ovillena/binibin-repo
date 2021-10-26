import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import MyButton from '../comps/Button';

const PageCont = styled.div`
    flex:1;
`

const TopRow = styled.div`
  display:flex;
`


export default function Home() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
      <MyButton></MyButton>
      </PageCont>
    //</div>
  )
}


