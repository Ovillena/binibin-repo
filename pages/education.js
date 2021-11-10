import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import HelpfulResource from '../comps/HelpfulResource';
import Subhead from '../comps/SubheadText';
import EducationTab from '../comps/EducationTab';


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
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
`

const TopLinks = styled.div`
  display:flex;
  min-width:100vw;
  flex-wrap:wrap;
  justify-content:space-around;
  padding:10px;
`

const BotLinks = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  min-width:100vw;
  padding:10px;
`

const CatCont = styled.div`
  width:33.3%;
`

const TabCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`


export default function Education(){
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

    <HeaderCont>
      <HeaderText text ="What Goes Where?"></HeaderText>
    </HeaderCont>


    <TabCont>
      <EducationTab></EducationTab>
    </TabCont>


    <HeaderCont>
      <HeaderText text ="Links to Helpful Resource"></HeaderText>
    </HeaderCont>


    <TopLinks>
      <CatCont>
        <Subhead text="Search"></Subhead>
          <HelpfulResource></HelpfulResource>
          <HelpfulResource text="RCBC: Recycling FAQs"></HelpfulResource>
          <HelpfulResource text="Vancouver Waste Wizard"></HelpfulResource>
      </CatCont>

      <CatCont>
        <Subhead text="Articles"></Subhead>
          <HelpfulResource text="BC Hydro: 10 Things About Recycling"></HelpfulResource>
          <HelpfulResource text="RCBC: Fact Sheets and Case Studies"></HelpfulResource>
          <HelpfulResource text="RCBC: What is Zero Waste?"></HelpfulResource>
      </CatCont>

      <CatCont>
        <Subhead text="Updates"></Subhead>
          <HelpfulResource text="Metro Vancouver Performance"></HelpfulResource>
      </CatCont>
    </TopLinks>


    <BotLinks>
    <CatCont>
        <Subhead text="Games and Podcasts"></Subhead>
        <HelpfulResource text="The RCBC Recyclepedia Podcast"></HelpfulResource>
        <HelpfulResource text="ReCollect Waste Sorting Game"></HelpfulResource>
      </CatCont>

      <CatCont>
        <Subhead text="Events"></Subhead>
        <HelpfulResource text="October 2021 Waste Reduction Week"></HelpfulResource>
      </CatCont>
      
      <CatCont></CatCont>
    </BotLinks>


    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  )
}
