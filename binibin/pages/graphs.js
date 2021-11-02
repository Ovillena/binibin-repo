import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import DoughnutChart from '../comps/GraphsPie';
import GarbageBar from '../comps/GraphsGarbage';

const PageCont = styled.div`
    flex:1;
`

const TopRow = styled.div`
  display:flex;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`

export default function Dog() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

      <HeaderCont>
        <Header text="Waste Tracked for November"></Header>
      </HeaderCont>

      <DoughnutChart></DoughnutChart>

      <GarbageBar></GarbageBar>

      
      <Footer></Footer>
      </PageCont>
    //</div>
  )
}


