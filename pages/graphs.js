import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import GraphsGarbage from '../comps/GraphsGarbage';
import GraphsCompost from '../comps/GraphsCompost';
import RecycleBar from '../comps/GraphsRecycle';
import GraphsSum from '../comps/GraphsSum';

import { motion } from 'framer-motion';
import PulseLoader from 'react-spinners/PulseLoader';
import { getAllData } from '@/network';

const PageCont = styled(motion.div)`
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
`;

const GraphDiv = styled(motion.div)`
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

const FilterWrapper = styled.div`
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

const LoadDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const ButtonDiv = styled.button`
	width: auto;
	height: auto;
`;

const colours = [
	'rgba(255, 99, 132, 0.7)',
	'rgba(54, 162, 235, 0.7)',
	'rgba(255, 206, 86, 0.7)',
	'rgba(75, 192, 192, 0.7)',
	'rgba(153, 102, 255, 0.7)',
	'rgba(255, 159, 64, 0.7)',
];

export default function Graphs() {
	let todayObj = new Date(new Date().toUTCString());
	let firstDayObj = new Date(new Date().setDate(todayObj.getDate() - 30));

	const dateToYMD = (date) => {
		let yyyy = date.getUTCFullYear();
		let mm = date.getUTCMonth() + 1;
		let dd = date.getUTCDate();
		return `${yyyy}-${mm}-${dd}`;
	};
	const firstDay = dateToYMD(firstDayObj);
	const today = dateToYMD(todayObj);
	let headerStr = `${firstDayObj.toLocaleString('default', {
		month: 'long',
	})} ${firstDayObj.getDate()} to ${todayObj.toLocaleString('default', {
		month: 'long',
	})} ${todayObj.getDate()}`;

	//-------Loading screen-----------
	const [loading, setLoading] = useState(true);

	//---------Getting graph data------------
	const [chartData, setChartData] = useState({});
	const [xAxisLabels, setXAxisLabels] = useState([]);
	const [datasets, setDatasets] = useState([]);

	const mockData = [
		{
			input_date: '12/12',
			item_name: 'compost',
			total_weight: 3,
		},
		{
			input_date: '12/12',
			item_name: 'coffee chaff',
			total_weight: 2,
		},
		{
			input_date: '12/12',
			item_name: 'single stream',
			total_weight: 2,
		},
		// {
		// 	input_date: '12/16',
		// 	item_name: 'compost',
		// 	total_weight: 2,
		// },
		{
			input_date: '12/16',
			item_name: 'single stream',
			total_weight: 2,
		},
		{
			input_date: '12/16',
			item_name: 'coffee chaff',
			total_weight: 5,
		},
		{
			input_date: '12/17',
			item_name: 'coffee chaff',
			total_weight: 4,
		},
		{
			input_date: '12/17',
			item_name: 'single stream',
			total_weight: 5,
		},
		{
			input_date: '12/17',
			item_name: 'compost',
			total_weight: 4,
		},
		{
			input_date: '12/18',
			item_name: 'new item',
			total_weight: 2,
		},
		{
			input_date: '12/19',
			item_name: 'single stream',
			total_weight: 5,
		},
		{
			input_date: '12/19',
			item_name: 'compost',
			total_weight: 4,
		},
		{
			input_date: '12/20',
			item_name: 'new item',
			total_weight: 2,
		},
	];

	async function loadChart(data) {
		const dates = [];
		const itemNames = [];
		const dataConfig = [];
		// set the x axis labels
		data.forEach((entry) => {
			if (!dates.includes(entry.input_date)) {
				dates.push(entry.input_date);
			}
		});
		// set the data values
		dates.forEach((date, i) => {
			console.log(date, i);
			data.forEach((entry, j) => {
				if (entry.input_date === date) {
					if (!itemNames.includes(entry.item_name)) {
						// add item name and first value if first time encountering item
						itemNames.push(entry.item_name);
						console.log('adding new item', itemNames.length - 1);
						let newData = [];
						newData[i] = entry.total_weight;
						dataConfig.push({
							label: entry.item_name,
							data: newData,
							borderColor: colours[itemNames.length - 1],
							backgroundColor: colours[itemNames.length - 1],
							borderWidth: 3,
							pointRadius: 4,
							pointHoverRadius: 6,
						});
					} else {
						// find obj with corresponding item name and push new value at array position matching date
						dataConfig.forEach((obj) => {
							if (obj.label === entry.item_name) {
								console.log('pushing new value to obj');
								obj.data[i] = entry.total_weight;
							}
						});
					}
				}
				// console.log(i, j, dataConfig);
			});
		});

		setXAxisLabels(dates);
		setDatasets(dataConfig);
	}

	useEffect(() => {
		console.log('first day: ' + firstDay);
		console.log('today: ' + today);
		loadChart(mockData);
		// getAllData().then((res) => loadChart(res.data));
		setLoading(false);
	}, []);

	return (
		//<div className={styles.container}>
		loading ? (
			<LoadDiv>
				<PulseLoader color={'#003274'} loading={loading} size={20} />
			</LoadDiv>
		) : (
			<PageCont
				initial={{ opacity: 0 }}
				animate={{ opacity: 100, transition: { ease: 'easeIn', duration: 3, delay: 0 } }}
			>
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
					<GraphDiv
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: { ease: 'easeIn', duration: 1, delay: 0.5 },
						}}
					>
						<GraphsSum
							today={today}
							firstDay={firstDay}
							xAxisLabels={xAxisLabels}
							datasets={datasets}
							chartData={chartData}
						></GraphsSum>
					</GraphDiv>
				</TopGraphs>

				<FilterWrapper>
					<input type='date' id='startDate'></input>
					<input type='date' id='endDate'></input>
					{/* <ButtonDiv onClick={() => setGraphDate(true)}>Filter</ButtonDiv> */}
					{/* <ButtonDiv onClick={filterDate}>Filter</ButtonDiv>
			<ButtonDiv onClick={resetDate}>Reset</ButtonDiv> */}
				</FilterWrapper>

				{/* <BottomGraphs>
					<GraphDiv
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: { ease: 'easeIn', duration: 1, delay: 1.5 },
						}}
					>
						<GraphsCompost today={today} firstDay={firstDay}></GraphsCompost>
					</GraphDiv>

					<GraphDiv
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: { ease: 'easeIn', duration: 1, delay: 2 },
						}}
					>
						<RecycleBar today={today} firstDay={firstDay}></RecycleBar>
					</GraphDiv>

					<GraphDiv
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: { ease: 'easeIn', duration: 1, delay: 1 },
						}}
					>
						<GraphsGarbage today={today} firstDay={firstDay}></GraphsGarbage>
					</GraphDiv>
				</BottomGraphs> */}

				<FooterCont>
					<Footer></Footer>
				</FooterCont>
			</PageCont>
		)
		//</div>
	);
}
