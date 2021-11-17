import FooterComp from "../comps/footer";

import styled from "styled-components";
import React, { useState, useEffect } from "react";

import axios from "axios";

import GuestNavBar from "../comps/GuestNavBar";
import HeaderText from "../comps/HeaderText";
import HeroComp from "../comps/HeroComp";
import CircleImage from "../comps/CircleImage";
import MyButton from "../comps/Button";
import Subhead from "../comps/SubheadText";
import userNav from "../comps/UserNav";
import EduImage from "../comps/EduImage";
import FeaturesCard from "../comps/FeaturesCard";

const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eef9ff;
`;

const TopRow = styled.div`
  display: flex;
`;

const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const FooterCont = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const ParagraphSec = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

const BodyText = styled.p`
  font-size:18px;
  max-width:1000px;
`
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FeaturesCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`

const MultiColumn = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width:1000px) {
    margin:0;
  }
  margin: 0 5%;
  & ${BodyText} {
    max-width:500px;
  }
`

export default function Home() {
  const [user, setUser] = useState(null);

  axios
    .get(
      "https://binibin-server.herokuapp.com/auth/checkauth",
      // "http://localhost:8080/auth/checkauth",
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data);
      setUser(res.data.username);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    //<div className={styles.container}>
    <PageCont>
      <TopRow>
        <GuestNavBar></GuestNavBar>
      </TopRow>
    
      <HeroComp></HeroComp>

    <MultiColumn>
      <ParagraphSec>
        <Subhead text="About BiniBin"></Subhead>
        <BodyText>BiniBin provides a simple way for grade schools to track their garbage, compost, and recycling with a quick input system and dynamically generated graphs. </BodyText>
      </ParagraphSec>

      <ParagraphSec>
        <Subhead text="Benefits"></Subhead>
        <BodyText>Educate students and staff about recycling, see measurable statistics to track waste management, and earn revenue from transfer stations. </BodyText>
      </ParagraphSec>
    </MultiColumn>

    <MultiColumn>
      <ParagraphSec>
        <Subhead text="Our Goal"></Subhead>
        <BodyText>Our goal is to foster a generation that keeps the planet’s environment at the forefront of their minds by habit.</BodyText>
      </ParagraphSec>

      <ParagraphSec>
        <Subhead text="Our Mission"></Subhead>
        <BodyText>Our mission is to lessen the harmful impacts to the waste system by teaching and encouraging students how to appropriately dispose wastes.</BodyText>
      </ParagraphSec>
    </MultiColumn>

    <HeaderCont>
      <HeaderText text="Features"></HeaderText>
    </HeaderCont>

    <FeaturesCont>
        <FeaturesCard src="/input.png" alt="input" h="Input" p="Use a simple visual tool to input how much compost, recycling, and garbage is produced at school."></FeaturesCard>
        <FeaturesCard src="/bar-graph.png" alt="graph" h="Track" p="View a list of your inputted entries to track the breakdown of wastes produced at school."></FeaturesCard>
        <FeaturesCard src="/reducing.png" alt="reduce" h="Reduce" p="Read dynamically-generated graphs of each type of waste and make a plan to reduce your garbage."></FeaturesCard>
      </FeaturesCont>


    <ParagraphSec>
      <Subhead text="Recycling Problems"></Subhead>
      <BodyText>People are sorting their wastes incorrectly because they are unsure about what is recyclable/compostable. Consequently, things that could be recycled/composted end up in the landfill. Worse yet, things that could not be recycled/composted but are thrown into the recycling or compost bin will contaminate the entire waste collection truck. When the threshold (of about 10%) is exceeded, everything gets sent to the landfill. </BodyText>
    </ParagraphSec>

    <ParagraphSec>
      <Subhead text="You can make a difference"></Subhead>
      <BodyText>We encourage schools to help students develop an awareness of waste management, recycling, reduction by providing a visual tool to track the quantity and the breakdown of the waste produced by their schools.</BodyText>
    </ParagraphSec>

    <ButtonCont>
      <MyButton routeTo="education" width="260px" height="65px" bgcolor="#E5A500" hoverbg="#FFC800" textcolor="#000" text="Learn how to sort"></MyButton>
      <MyButton width="180px" height="65px" bgcolor="#E5A500" hoverbg="#FFC800" textcolor="#000" text="Register" routeTo="signup"></MyButton>
    </ButtonCont>

    
    <FooterCont>
      <FooterComp></FooterComp>
    </FooterCont> 


      </PageCont>

    //</div>
  );
}
