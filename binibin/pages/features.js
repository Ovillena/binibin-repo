import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'

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
      </PageCont>
    //</div>
  )
}


