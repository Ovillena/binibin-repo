import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import PieChart from '../comps/GraphsPie';
import GarbageBar from '../comps/GraphsGarbage';
import CompostBar from '../comps/GraphsCompost';
import RecycleBar from '../comps/GraphsRecycle';
import Subhead from '../comps/SubheadText';
import WeekOfComp from '../comps/GraphsWeek';

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

const FooterCont = styled.div`
  display:flex;
  align-items:flex-end;
`

const WeekCont = styled.div`
  display:flex;
  justify-content:center;
`

const TopGraphs = styled.div`
  display:flex;
  justify-content:space-around;
  padding:10px;
  flex-wrap:wrap;
`

const GraphDiv = styled.div`

`

const BottomGraphs = styled.div`
  display:flex;
  justify-content:space-around;
  padding:10px;
  flex-wrap:wrap;
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

      <WeekCont>
        <WeekOfComp></WeekOfComp>
      </WeekCont>
      
      <TopGraphs>
        <GraphDiv>
          <GarbageBar></GarbageBar>
        </GraphDiv>
        <GraphDiv>
          <CompostBar></CompostBar>
        </GraphDiv>
      </TopGraphs>

      <BottomGraphs>
      <GraphDiv>
        <RecycleBar></RecycleBar>
      </GraphDiv>
      <GraphDiv>
        <PieChart></PieChart>
      </GraphDiv>
      </BottomGraphs>

      <FooterCont>
        <Footer></Footer>
      </FooterCont>

      </PageCont>
    //</div>
  )
}


