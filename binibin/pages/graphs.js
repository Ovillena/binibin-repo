import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import DoughnutChart from '../comps/GraphsPie';

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

const FeaturesCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`;

const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
`



export default function Dog() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
      <HeaderCont>
        <Header text="Features"></Header>
      </HeaderCont>
      <DoughnutChart></DoughnutChart>
      
      <Footer></Footer>
      </PageCont>
    //</div>
  )
}


