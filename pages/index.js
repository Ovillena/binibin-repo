import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import HeroComp from '../comps/HeroComp'
import CircleIcon from '../comps/CircleImage';
import MyButton from '../comps/Button';
import Subhead from '../comps/SubheadText';
import userNav from '../comps/UserNav';



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

const MissionCont = styled.div`
  width:273px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const MissionRow = styled.div`
  display:flex;
  flex:1;
  justify-content:space-around;
  flex-direction:row;
  padding:20px;
  flex-wrap:wrap;
`

const ParagraphSec = styled.div`
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  padding:20px;
`

const BodyText = styled.p`
  width:50%;
`
const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
`

export default function Home(){
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    
      <HeroComp></HeroComp>

    <HeaderCont>
      <HeaderText>Our Mission</HeaderText>
    </HeaderCont>


    <MissionRow>
      <MissionCont>
        <CircleIcon></CircleIcon>
        <Subhead text="Educate"></Subhead>
        <BodyText>Learn where your garbage should be going to lessen harmful impacts to the waste system.</BodyText>
      </MissionCont>

      <MissionCont>
        <CircleIcon></CircleIcon>
        <Subhead text="Track"></Subhead>
        <BodyText>Learn where your garbage should be going to lessen harmful impacts to the waste system.</BodyText>
      </MissionCont>

      <MissionCont>
        <CircleIcon></CircleIcon>
        <Subhead text="Reduce"></Subhead>
        <BodyText>Learn where your garbage should be going to lessen harmful impacts to the waste system.</BodyText>
      </MissionCont>

    </MissionRow>

    <ParagraphSec>
      <Subhead text="Recycling Problems"></Subhead>
      <BodyText>Many people don’t know what to recycle or people are throwing away things that are recyclable. People are not aware of how much garbage they are sending to the landfill when portions of it may be compostable or recyclable.</BodyText>
    </ParagraphSec>

    <ParagraphSec>
      <Subhead text="You can make a difference"></Subhead>
      <BodyText>We encourage schools to promote waste reduction awareness to their students by providing a visual tool to track the quantity and the breakdown of the waste produced by their schools.</BodyText>
    </ParagraphSec>

    <ButtonCont>
      <MyButton routeTo="education" width="200px" height="65px" bgcolor="#FFC800" text="Learn More"></MyButton>
    </ButtonCont>

    
    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  )
}
