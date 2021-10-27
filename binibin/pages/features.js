import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar'
import FeaturesCard from '../comps/FeaturesCard';
import icon2 from '/public/icon_throw_away.png';

const PageCont = styled.div`
    flex:1;
`

const TopRow = styled.div`
  display:flex;
`

const FeaturesCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;


export default function Home() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
      <FeaturesCont>
        <FeaturesCard></FeaturesCard>
        <FeaturesCard src="/icon_throw_away.png" alt="throw away" h="Track" p="A visual tool to track the quantity and the breakdown of the waste produced the school"></FeaturesCard>
        <FeaturesCard src="/icon_combo_chart.png" alt="chart" h="Reduce" p="Increase awareness of the environment to encourage the appropriate disposal of waste"></FeaturesCard>
      </FeaturesCont>
      </PageCont>
    //</div>
  )
}


