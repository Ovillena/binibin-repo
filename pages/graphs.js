import styled from 'styled-components';
import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';


import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import GraphsGarbage from '../comps/GraphsGarbage';
import GraphsCompost from '../comps/GraphsCompost';
import RecycleBar from '../comps/GraphsRecycle';
import GraphsSum from '../comps/GraphsSum';

const PageCont = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`


const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`

const FooterCont = styled.div`
  display:flex;
  align-items:flex-end;
  flex:1;
  padding-top:50px;
`

const WeekCont = styled.div`
  display:flex;
  justify-content:center;
`

const TopGraphs = styled.div`
  display:flex;
  justify-content:space-around;
  padding:10px;
  flex-wrap:wrap;
`

const GraphDiv = styled.div`

`

const BottomGraphs = styled.div`
  display:flex;
  justify-content:space-around;
  padding:10px;
  flex-wrap:wrap;
`

const CardWrapper = styled.div`
  margin:10px;
`

const fakeData = [
  {
      entry_id: 1,
      item_name: "Can (200 mL)",
      item_count: 5,
      unit: "unit",
      waste_type: "recycling"
  },
  {
      entry_id: 2,
      item_name: "Garbage",
      item_count: 500,
      unit: "g",
      waste_type: "garbage"
  },
  {
      entry_id: 3,
      item_name: "Compost",
      item_count: 400,
      unit: "g",
      waste_type: "compost"
  },
  {
      entry_id: 4,
      item_name: "Milk Carton (1 L)",
      item_count: 2,
      unit: "unit",
      waste_type: "recycling"
  }
]

export default function Graphs() {

  // const [number, setNumber] = useState(fakeData);

  // useEffect(() => {
  //   const GetNumber = async()=>{
  //     const result = await axios.get("https://binibin-server.herokuapp.com/api/entries");
  //     console.log(result);
  //     //data from result will provide an array of films
  //     setNumber(result.data)
  //   }

  //   GetNumber();
  // }, [])
  return (
    //<div className={styles.container}>
      <PageCont>


      <HeaderCont>
        <Header text="Waste Tracked for November"></Header>
      </HeaderCont>

      {/* <WeekCont>
        <WeekOfComp onPrevInteract={()=>{

        }}
        onNextInteract={()=>{

        }}
        ></WeekOfComp>
      </WeekCont> */}

      {/* {
        number.map((o,i)=>(
          <CardWrapper key={i}>
          <GraphsGarbage item_count={o.item_count}/>
          </CardWrapper>
          )
        )
      } */}

      <TopGraphs>
        <GraphDiv>
          <GraphsGarbage></GraphsGarbage>
        </GraphDiv>
        <GraphDiv>
          <GraphsCompost></GraphsCompost>
        </GraphDiv>
      </TopGraphs>

      <BottomGraphs>
      <GraphDiv>
        <RecycleBar></RecycleBar>
      </GraphDiv>
      <GraphDiv>
        <GraphsSum></GraphsSum>
      </GraphDiv>
      </BottomGraphs>


      <FooterCont>
        <Footer></Footer>
      </FooterCont>

      </PageCont>
    //</div>
  )
}


