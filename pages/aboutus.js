import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import HeaderText from '../comps/HeaderText';
import CircleImage from '../comps/CircleImage';


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
  align-items:center;
  margin:50px;
`

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  margin-top:50px;
`

const ImageCont = styled.div`
  display:flex;
  justify-content:center;
`

export default function AboutUs(){
  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    

    <HeaderCont>
      <HeaderText text="Meet Our Team"></HeaderText>
    </HeaderCont>

    <ImageCont>
      <CircleImage></CircleImage>
      <CircleImage></CircleImage>
      <CircleImage></CircleImage>
    </ImageCont>

    <ImageCont>
      <CircleImage></CircleImage>
      <CircleImage></CircleImage>
      <CircleImage></CircleImage>
    </ImageCont>
    
    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  )
}
