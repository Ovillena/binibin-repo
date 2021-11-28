import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import GraphsGarbage from '../comps/GraphsGarbage';
import GraphsCompost from '../comps/GraphsCompost';
import RecycleBar from '../comps/GraphsRecycle';
import GraphsSum from '../comps/GraphsSum';

const PageCont = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const HeaderCont = styled.div`
	display: flex;
	justify-content: center;
`;

const FooterCont = styled.div`
	display: flex;
	align-items: flex-end;
	flex: 1;
	padding-top: 50px;
`;

const WeekCont = styled.div`
	display: flex;
	justify-content: center;
`;

const TopGraphs = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	flex-wrap: wrap;
`;

const GraphDiv = styled.div``;

const BottomGraphs = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	flex-wrap: wrap;
`;

const CardWrapper = styled.div`
	margin: 10px;
`;

export default function Graphs() {
	return (
		//<div className={styles.container}>
		<PageCont>
			<HeaderCont>
				<Header text='Waste Tracked for November'></Header>
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
	);
}
