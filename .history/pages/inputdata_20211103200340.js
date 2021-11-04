import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import FeaturesCard from '../comps/FeaturesCard';
import icon2 from '/public/icon_throw_away.png';
import Header from '../comps/HeaderText';
import MyButton from '../comps/Button';
import Footer from '../comps/footer';
import Garbages from '../comps/Garbage';

const PageCont = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`

const TopRow = styled.div`
  display:flex;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
  margin-top:30px;
`

const FeaturesCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-bottom:30px;
`;

const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
`

export default function Home() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
      <HeaderCont>
        <Header text="Input Data"></Header>
      </HeaderCont>
      <FeaturesCont>
        <Quick></Quick>
      </FeaturesCont>
      <Footer></Footer>
      </PageCont>
    //</div>
  )
}

