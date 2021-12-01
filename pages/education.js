import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React, {useEffect, useState} from 'react';

import HeaderText from '../comps/HeaderText';
import HelpfulResource from '../comps/HelpfulResource';
import Subhead from '../comps/SubheadText';
import EducationTab from '../comps/EducationTab';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

const PageCont = styled(motion.div)`
  display:flex;
  flex-direction:column;
  min-height:100vh;
  background-color:#EEF9FF;
`

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:50px;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  margin-top:80px;
`

const LinksRow = styled.div`
  display:flex;
  min-width:100vw;
  flex-wrap:wrap;
  justify-content:space-around;
  padding:10px;
`

const LinksGroup = styled.div`

`

const TabCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export default function Education(){

    //-------Loading screen-----------
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }, [])

  return (
    //<div className={styles.container}>
      
    loading ? 

    <LoadDiv>
      <PulseLoader 
      color={'#003274'} 
      loading={loading} 
      size={20}
      />
      </LoadDiv>

      : 
      
      <PageCont
      initial={{opacity:0}} 
      animate={{opacity:100, transition:{ease:"easeIn", duration:3, delay:0}}}
      >

    <HeaderCont>
      <HeaderText text ="What Goes Where?"></HeaderText>
    </HeaderCont>


    <TabCont>
      <EducationTab></EducationTab>
    </TabCont>


    <HeaderCont>
      <HeaderText text ="Links to Helpful Resource"></HeaderText>
    </HeaderCont>


    <LinksRow>
      <LinksGroup>
          <Subhead text="Search"></Subhead>
          <HelpfulResource href="https://recyclebc.ca/"></HelpfulResource>
          <HelpfulResource text="RCBC: Recycling FAQs" href="https://www.rcbc.ca/resources/faqs"></HelpfulResource>
          <HelpfulResource text="Vancouver Waste Wizard" href="https://vancouver.ca/home-property-development/waste-wizard.aspx"></HelpfulResource>
      </LinksGroup>

      <LinksGroup>
        <Subhead text="Articles"></Subhead>
        <HelpfulResource text="BC Hydro: 10 Things About Recycling" href="https://www.bchydro.com/news/conservation/2019/10-things-about-recycling.html"></HelpfulResource>
        <HelpfulResource text="RCBC: Fact Sheets and Case Studies" href="https://www.rcbc.ca/resources/additional-resources-links"></HelpfulResource>
        <HelpfulResource text="RCBC: What is Zero Waste?" href="https://www.rcbc.ca/resources/zero-waste"></HelpfulResource>
      </LinksGroup>

      <LinksGroup>
        <Subhead text="Events and Updates"></Subhead>
        <HelpfulResource text="October 2021 Waste Reduction Week" href="https://www.rcbc.ca/events/waste-reduction-week"></HelpfulResource>
        <HelpfulResource text="Metro Vancouver Performance" href="http://www.metrovancouver.org/dashboards/services/solid-waste/Pages/default.aspx"></HelpfulResource>
      </LinksGroup>

      <LinksGroup>
        <Subhead text="Games and Podcasts"></Subhead>
        <HelpfulResource text="The RCBC Recyclepedia Podcast" href="https://www.rcbc.ca/content/rcbc-recyclepedia-podcast"></HelpfulResource>
        <HelpfulResource text="ReCollect Waste Sorting Game" href="https://recollect.net/waste-sorting-game/"></HelpfulResource>
      </LinksGroup>

    </LinksRow>

    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>


      </PageCont>

    //</div>
  )
}
