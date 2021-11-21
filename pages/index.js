import FooterComp from "../comps/footer";

import styled from "styled-components";
import React, { useState, useEffect } from "react";

import axios from "axios";


import HeaderText from "../comps/HeaderText";
import HeroComp from "../comps/HeroComp";
import CircleImage from "../comps/CircleImage";
import MyButton from "../comps/Button";
import Subhead from "../comps/SubheadText";

import EduImage from "../comps/EduImage";
import FeaturesCard from "../comps/FeaturesCard";

const PageCont = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #eef9ff;
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
    margin: 0;
  }
  margin: 0 5%;
  & ${BodyText} {
    max-width:500px;
  }
`

export default function Home() {
  const [user, setUser] = useState(null);

  // axios
  //   .get(
  //     "https://binibin-server.herokuapp.com/auth/checkauth",
  //     // "http://localhost:8080/auth/checkauth",
  //     { withCredentials: true }
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //     setUser(res.data.username);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    //<div className={styles.container}>
    <PageCont>


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
  // if (user) {
  //   return (
  //     //<div className={styles.container}>
  //     <PageCont>
  //       <TopRow>
  //         <UserNav displayName={user}></UserNav>
  //       </TopRow>

  //       <HeroComp></HeroComp>

  //       <HeaderCont>
  //         <HeaderText>Our Mission</HeaderText>
  //       </HeaderCont>

  //       <MissionRow>
  //         <MissionCont>
  //           <EduImage src="image 46.png"></EduImage>
  //           <Subhead text="Educate"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>

  //         <MissionCont>
  //           <EduImage src="bar-graph.png"></EduImage>
  //           <Subhead text="Track"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>

  //         <MissionCont>
  //           <EduImage src="reducing.png"></EduImage>
  //           <Subhead text="Reduce"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>
  //       </MissionRow>

  //       <HeaderCont>
  //         <HeaderText text="Features"></HeaderText>
  //       </HeaderCont>

  //       <FeaturesCont>
  //         <FeaturesCard></FeaturesCard>
  //         <FeaturesCard
  //           src="/icon_throw_away.png"
  //           alt="throw away"
  //           h="Track"
  //           p="A visual tool to track the quantity and the breakdown of the waste produced the school"
  //         ></FeaturesCard>
  //         <FeaturesCard
  //           src="/icon_combo_chart.png"
  //           alt="chart"
  //           h="Reduce"
  //           p="Increase awareness of the environment to encourage the appropriate disposal of waste"
  //         ></FeaturesCard>
  //       </FeaturesCont>

  //       <ParagraphSec>
  //         <Subhead text="Recycling Problems"></Subhead>
  //         <BodyText>
  //           Many people don’t know what to recycle or people are throwing away
  //           things that are recyclable. People are not aware of how much garbage
  //           they are sending to the landfill when portions of it may be
  //           compostable or recyclable.
  //         </BodyText>
  //       </ParagraphSec>

  //       <ParagraphSec>
  //         <Subhead text="You can make a difference"></Subhead>
  //         <BodyText>
  //           We encourage schools to promote waste reduction awareness to their
  //           students by providing a visual tool to track the quantity and the
  //           breakdown of the waste produced by their schools.
  //         </BodyText>
  //       </ParagraphSec>

  //       <ButtonCont>
  //         <MyButton
  //           routeTo="education"
  //           width="200px"
  //           height="65px"
  //           bgcolor="#FFC800"
  //           text="Learn More"
  //         ></MyButton>
  //       </ButtonCont>

  //       <FooterCont>
  //         <FooterComp></FooterComp>
  //       </FooterCont>
  //     </PageCont>

  //     //</div>
  //   );
  // } else {
  //   return (
  //     //<div className={styles.container}>
  //     <PageCont>
  //       <TopRow>
  //         <GuestNavBar></GuestNavBar>
  //       </TopRow>

  //       <HeroComp></HeroComp>

  //       <HeaderCont>
  //         <HeaderText>Our Mission</HeaderText>
  //       </HeaderCont>

  //       <MissionRow>
  //         <MissionCont>
  //           <EduImage src="image 46.png"></EduImage>
  //           <Subhead text="Educate"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>

  //         <MissionCont>
  //           <EduImage src="bar-graph.png"></EduImage>
  //           <Subhead text="Track"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>

  //         <MissionCont>
  //           <EduImage src="reducing.png"></EduImage>
  //           <Subhead text="Reduce"></Subhead>
  //           <BodyText>
  //             Learn where your garbage should be going to lessen harmful impacts
  //             to the waste system.
  //           </BodyText>
  //         </MissionCont>
  //       </MissionRow>

  //       <HeaderCont>
  //         <HeaderText text="Features"></HeaderText>
  //       </HeaderCont>

  //       <FeaturesCont>
  //         <FeaturesCard></FeaturesCard>
  //         <FeaturesCard
  //           src="/icon_throw_away.png"
  //           alt="throw away"
  //           h="Track"
  //           p="A visual tool to track the quantity and the breakdown of the waste produced the school"
  //         ></FeaturesCard>
  //         <FeaturesCard
  //           src="/icon_combo_chart.png"
  //           alt="chart"
  //           h="Reduce"
  //           p="Increase awareness of the environment to encourage the appropriate disposal of waste"
  //         ></FeaturesCard>
  //       </FeaturesCont>

  //       <ParagraphSec>
  //         <Subhead text="Recycling Problems"></Subhead>
  //         <BodyText>
  //           Many people don’t know what to recycle or people are throwing away
  //           things that are recyclable. People are not aware of how much garbage
  //           they are sending to the landfill when portions of it may be
  //           compostable or recyclable.
  //         </BodyText>
  //       </ParagraphSec>

  //       <ParagraphSec>
  //         <Subhead text="You can make a difference"></Subhead>
  //         <BodyText>
  //           We encourage schools to promote waste reduction awareness to their
  //           students by providing a visual tool to track the quantity and the
  //           breakdown of the waste produced by their schools.
  //         </BodyText>
  //       </ParagraphSec>

  //       <ButtonCont>
  //         <MyButton
  //           routeTo="education"
  //           width="200px"
  //           height="65px"
  //           bgcolor="#FFC800"
  //           text="Learn More"
  //         ></MyButton>
  //       </ButtonCont>

  //       <FooterCont>
  //         <FooterComp></FooterComp>
  //       </FooterCont>
  //     </PageCont>

  //     //</div>
  //   );
  // }
}
