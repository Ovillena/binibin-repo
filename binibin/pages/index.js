import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

import GuestNavBar from '../comps/GuestNavBar'

const TopRow = styled.div`

`


export default function Home() {
  return (
    <div className={styles.container}>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    </div>
  )
}
