import FooterComp from '../comps/footer'

import styled from 'styled-components';
import React from 'react';
import HeaderText from '../comps/HeaderText';
import Subhead from '../comps/SubheadText';
import CircleImage from '../comps/CircleImage';
import HelpfulResource from '../comps/HelpfulResource';


const PageCont = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
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

const Row = styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:30px;
`

const Member = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:10px 30px;
`

const MemberName = styled.h3`
  margin:0;
  max-width:140px;
  text-align:center;
`;

export default function AboutUs(){
  return (
    //<div className={styles.container}>
      <PageCont>


    <HeaderCont>
      <HeaderText text="Meet Our Team"></HeaderText>
    </HeaderCont>

    <Row>
      <Member>
        <CircleImage image="megan.jpg"/>
        <Subhead text="Megan Kuo"/>
        <MemberName>Project Manager, Developer</MemberName>
      </Member>
      <Member>
        <CircleImage image="lance.jpg"/>
        <Subhead text="Lance"/>
        <MemberName>Designer</MemberName>
      </Member>
      <Member>
        <CircleImage image="octavio.jpg"/>
        <Subhead text="Octavio Villena"/>
        <MemberName>Developer</MemberName>
      </Member>
    </Row>

    <Row>
      <Member>
        <CircleImage image="bonnie.jpg"/>
        <Subhead text="Bonnie Dam"/>
        <MemberName>Designer</MemberName>
      </Member>
      <Member>
        <CircleImage image="catherine.jpg"/>
        <Subhead text="Catherine Lam"/>
        <MemberName>Designer</MemberName>
      </Member>
      <Member>
        <CircleImage image="jojo.jpg"/>
        <Subhead text="Jo Jo Lam"/>
        <MemberName>Developer, Time Keeper</MemberName>
      </Member>
    </Row>

    <Row>
      <HelpfulResource text="Read Our Project Progress Report" href="https://catla.ca/binit/"></HelpfulResource>
    </Row>

    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont>


      </PageCont>

    //</div>
  )
}
