import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import PieChart from '../comps/GraphsPie';
import GarbageBar from '../comps/GraphsGarbage';
import CompostBar from '../comps/GraphsCompost';
import RecycleBar from '../comps/GraphsRecycle';

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

export default function Graphs() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

      <HeaderCont>
        <Header text="Waste Tracked for November"></Header>
      </HeaderCont>

      <PieChart></PieChart>

      <GarbageBar></GarbageBar>

      <CompostBar></CompostBar>

      <RecycleBar></RecycleBar>

      <Footer></Footer>
      </PageCont>
    //</div>
  )
}


