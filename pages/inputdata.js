import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import GuestNavBar from '../comps/GuestNavBar'
import FeaturesCard from '../comps/FeaturesCard';
import icon2 from '/public/icon_throw_away.png';
import Header from '../comps/HeaderText';
import MyButton from '../comps/Button';
import Footer from '../comps/footer';
import InputTab from '../comps/Input';
import Garbages from '../comps/Garbage';
import Quick from '../comps/Quickaccess';
import UserNav from '../comps/UserNav';


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
  margin-top:30px;
`

const FeaturesCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-bottom:30px;
`;

const ButtonCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
`

export default function Home() {
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    const getItemList = async () => {
      await fetch("https://binibin-server.herokuapp.com/api/entries/items")
        .then((resp) =>  resp.json())
        .then((data) => setItemList(data))
        .catch((err) => console.log(err));
      // console.log(result);
    };
    getItemList();
  }, []);

  return (
    //<div className={styles.container}>
      <PageCont>
      <TopRow>
        <UserNav></UserNav>
      </TopRow>
      <HeaderCont>
        <Header text="Input Data"></Header>
      </HeaderCont>
      <FeaturesCont>
        <InputTab></InputTab>
      </FeaturesCont>
      <Footer></Footer>
      </PageCont>
    //</div>
  )
}

