import Footer from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import IconComp from '../comps/Icon';
import Subhead from '../comps/SubheadText';


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

const TopIcons = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex:1;
`

const BotRow = styled.div`
    display:flex;
    justify-content:space-evenly;
`

const IconDiv = styled.div`
  text-align:center;
`

export default function Dashboard() {
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>

    <HeaderCont>
      <HeaderText text="User's Dashboard"></HeaderText>
    </HeaderCont>

    <TopIcons>
      <IconDiv>
        <IconComp iconSymbol='chart bar' routeTo="graphs"></IconComp>
        <Subhead text='View Graphs' fontsize='24px'></Subhead>
      </IconDiv>
      <IconDiv>
        <IconComp iconSymbol='calendar check outline' routeTo="inputdata"></IconComp>
        <Subhead text='Inputs' fontsize='24px'></Subhead>
      </IconDiv>
      <IconDiv>
        <IconComp iconSymbol='list' routeTo="pastentries"></IconComp>
        <Subhead text='List of Past Entries' fontsize='24px'></Subhead>
      </IconDiv>
    </TopIcons>

    <BotRow>
      <IconDiv>
        <IconComp iconSymbol='wrench' routeTo="accountsetting"></IconComp>
        <Subhead text='Account Settings' fontsize='24px'></Subhead>
      </IconDiv>
      <IconDiv>
        <IconComp iconSymbol='file text' routeTo="learnmore"></IconComp>
        <Subhead text='Learn More' fontsize='24px'></Subhead>
      </IconDiv>
      <IconDiv>
        <IconComp iconSymbol='headphones' routeTo="customerservice"></IconComp>
        <Subhead text='Customer Support' fontsize='24px'></Subhead>
      </IconDiv>

    </BotRow>  


    <FooterCont>
      <Footer></Footer>
    </FooterCont>    

      </PageCont>

    //</div>
  )
}