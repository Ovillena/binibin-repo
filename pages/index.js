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

const MissionCont = styled.div`
  width: 273px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MissionRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
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
  width: 75;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FeaturesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Home() {
  // async function checkAuth(e) {
  //   e.preventDefault();
  //   console.log(e.target.username.value);
  //   const result = await axios({
  //     // `https://binibin-server.herokuapp.com/auth/login`,
  //     url: "http://localhost:8080/auth/login",
  //     withCredentials: true,
  //     method: "POST",
  //     body: {
  //       username: e.target.username.value,
  //       password: e.target.password.value,
  //     },
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     // headers: { "Content-Type": "application/json" },
  //   });

  //   console.log("--------------------------------------------");

  //   // get return url from query parameters or default to '/'
  //   // const returnUrl = router.query.returnUrl || "/";
  //   // router.push(returnUrl);
  // }

  axios
    .get("http://localhost:8080/auth/checkauth", { withCredentials: true })
    .then((res) => {
      console.log(res);
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

      <HeaderCont>
        <HeaderText>Our Mission</HeaderText>
      </HeaderCont>

      <MissionRow>
        <MissionCont>
          <EduImage src="image 46.png"></EduImage>
          <Subhead text="Educate"></Subhead>
          <BodyText>
            Learn where your garbage should be going to lessen harmful impacts
            to the waste system.
          </BodyText>
        </MissionCont>

        <MissionCont>
          <EduImage src="bar-graph.png"></EduImage>
          <Subhead text="Track"></Subhead>
          <BodyText>
            Learn where your garbage should be going to lessen harmful impacts
            to the waste system.
          </BodyText>
        </MissionCont>

        <MissionCont>
          <EduImage src="reducing.png"></EduImage>
          <Subhead text="Reduce"></Subhead>
          <BodyText>
            Learn where your garbage should be going to lessen harmful impacts
            to the waste system.
          </BodyText>
        </MissionCont>
      </MissionRow>

      <HeaderCont>
        <HeaderText text="Features"></HeaderText>
      </HeaderCont>

      <FeaturesCont>
        <FeaturesCard></FeaturesCard>
        <FeaturesCard
          src="/icon_throw_away.png"
          alt="throw away"
          h="Track"
          p="A visual tool to track the quantity and the breakdown of the waste produced the school"
        ></FeaturesCard>
        <FeaturesCard
          src="/icon_combo_chart.png"
          alt="chart"
          h="Reduce"
          p="Increase awareness of the environment to encourage the appropriate disposal of waste"
        ></FeaturesCard>
      </FeaturesCont>

      <ParagraphSec>
        <Subhead text="Recycling Problems"></Subhead>
        <BodyText>
          Many people don’t know what to recycle or people are throwing away
          things that are recyclable. People are not aware of how much garbage
          they are sending to the landfill when portions of it may be
          compostable or recyclable.
        </BodyText>
      </ParagraphSec>

      <ParagraphSec>
        <Subhead text="You can make a difference"></Subhead>
        <BodyText>
          We encourage schools to promote waste reduction awareness to their
          students by providing a visual tool to track the quantity and the
          breakdown of the waste produced by their schools.
        </BodyText>
      </ParagraphSec>

      <ButtonCont>
        <MyButton
          routeTo="education"
          width="200px"
          height="65px"
          bgcolor="#FFC800"
          text="Learn More"
        ></MyButton>
      </ButtonCont>

      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
    </PageCont>

    //</div>
  );
}
