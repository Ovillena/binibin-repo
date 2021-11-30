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
	min-height: 90vh;
`;

const HeaderCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
	justify-content: center;
	padding: 10px;
	flex-wrap: wrap;
	height: content;
	width: content;
	max-height: 600px;
`;

const GraphDiv = styled.div`
	height: content;
	width: content;
`;

const BottomGraphs = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	flex-wrap: wrap-reverse;
	max-width: 80vw;
	margin: 0 auto;
	gap: 2em 1em;
`;

const Subtitle = styled.h2`
	margin: 10px;
`;

export default function Graphs() {
	let todayObj = new Date();
	let firstDayObj = new Date(new Date().setDate(todayObj.getDate() - 30));

	const dateToYMD = (date) => {
		let yyyy = date.getFullYear();
		let mm = date.getMonth() + 1;
		let dd = date.getDate();
		return `${yyyy}-${mm}-${dd}`;
	};
	const firstDay = dateToYMD(firstDayObj);
	const today = dateToYMD(todayObj);
	let headerStr = `${firstDayObj.toLocaleString('default', {
		month: 'long',
	})} ${firstDayObj.getDate()} to ${todayObj.toLocaleString('default', { month: 'long' })} ${todayObj.getDate()}`;
	useEffect(() => {
		console.log('first day: ' + firstDay);
		console.log('today: ' + today);
	}, []);
	return (
		//<div className={styles.container}>
		<PageCont>
			<HeaderCont>
				<Header text='Your progress from'></Header>

				<Subtitle>{headerStr}</Subtitle>
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
					<GraphsSum today={today} firstDay={firstDay}></GraphsSum>
				</GraphDiv>
			</TopGraphs>

			<BottomGraphs>
				<GraphDiv>
					<GraphsCompost today={today} firstDay={firstDay}></GraphsCompost>
				</GraphDiv>
				<GraphDiv>
					<RecycleBar today={today} firstDay={firstDay}></RecycleBar>
				</GraphDiv>
				<GraphDiv>
					<GraphsGarbage today={today} firstDay={firstDay}></GraphsGarbage>
				</GraphDiv>
			</BottomGraphs>

			<FooterCont>
				<Footer></Footer>
			</FooterCont>
		</PageCont>
		//</div>
	);
}
