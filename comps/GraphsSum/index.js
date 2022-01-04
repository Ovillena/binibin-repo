import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Subhead from '../SubheadText';

import { getData } from '../../network';
import { useState, useEffect } from 'react';

const GraphCont = styled.div`
	display: inline-flex;
	height: 40vh;
	width: 80vw;
	max-height: 600px;
	max-width: 1075px;
`;

const ButtonDiv = styled.button`
	width:auto;
	height:auto;
`

const GraphsSum = (props) => {
	const [chartData, setChartData] = useState(false);

	const [graphDate, setGraphDate] = useState(false);

	var convResult = [];

	useEffect(() => {
		let garbageCountArr = [];
		let recyclingCountArr = [];
		let compostCountArr = [];
		let garbageDateArr = [];
		let recyclingDateArr = [];
		let compostDateArr = [];

		async function getAllData(startDate, endDate) {
			await getData(startDate, endDate, 'garbage').then((res) => {
				for (const dataObj of res.data) {
					garbageCountArr.push(parseInt(dataObj.total_items));
					garbageDateArr.push(dataObj.entry_date);
				}
			});
			await getData(startDate, endDate, 'recycling').then((res) => {
				for (const dataObj of res.data) {
					recyclingCountArr.push(parseInt(dataObj.total_items));
					recyclingDateArr.push(dataObj.entry_date);
				}
			});
			await getData(startDate, endDate, 'compost').then((res) => {
				for (const dataObj of res.data) {
					compostCountArr.push(parseInt(dataObj.total_items));
					compostDateArr.push(dataObj.entry_date);
				}
			});
		}

		getAllData(props.firstDay, props.today).then(() => {
			setChartData({
				//x axis
				labels: garbageDateArr,
				datasets: [
					{
						label: '# of bags thrown in garbage',
						//y axis
						data: garbageCountArr,
						fill: false,
						backgroundColor: 'black',
						borderColor: `black`,
						borderWidth: 4,
						borderRadius: 10,
					},
					{
						label: '# of bags put in compost',
						//y axis
						data: compostCountArr,
						fill: false,
						backgroundColor: ['#598B2C'],
						borderColor: '#598B2C',
						borderWidth: 4,
						borderRadius: 10,
					},
					{
						label: '# of items recycled',
						//y axis
						data: recyclingCountArr,
						backgroundColor: ['#3C64B1'],
						borderColor: '#3C64B1',
						borderWidth: 4,
						borderRadius: 10,
					},
				],
			});
			const convertedDates = garbageDateArr.map(date => new Date(date).setHours(0,0,0,0));
					convResult = convertedDates
					console.log(convResult)
		});

	}, []);


	const filterDate = async () => {

		//Convert start date to miliseconds
		const start1 = new Date(document.getElementById('startDate').value);
		const start = start1.setHours(0,0,0,0);
		console.log(start)

		//Convert end date to miliseconds
		const end1 = new Date(document.getElementById('endDate').value);
		const end = end1.setHours(0,0,0,0);
		console.log(end)

		// filterDates = convertedDates.filter(date => date >= start && date <= end)
		// console.log(filterDates)
		console.log(convResult)
	}

	useEffect(() => {
		// //Convert start date to miliseconds
		// 	const start1 = new Date(document.getElementById('startDate').value);
		// 	const start = start1.setHours(0,0,0,0);
		// 	console.log(start)

		// 	//Convert end date to miliseconds
		// 	const end1 = new Date(document.getElementById('endDate').value);
		// 	const end = end1.setHours(0,0,0,0);
		// 	console.log(end)
			console.log(graphDate);
		},[graphDate]);

		//----------------DATE RANGE FILTER-----------------------

		//const convertedDates = GraphsSum.setChartData.itemDC.map(date => new Date(date).setHours(0,0,0,0));
		//console.log(convertedDates)

		// const filterDate = async() => {
		// 	//Convert start date to miliseconds
		// 	const start1 = new Date(document.getElementById('startDate').value);
		// 	const start = start1.setHours(0,0,0,0);
		// 	console.log(start)

		// 	//Convert end date to miliseconds
		// 	const end1 = new Date(document.getElementById('endDate').value);
		// 	const end = end1.setHours(0,0,0,0);
		// 	console.log(end)

		// 	//const filterDates = convertedDates.filter(date => date >= start && date <= end)
		// 	//myChart.config.data.labels = filterDates;

		// 	//-------------check position--------
		// 	// const startArray = convertedDates.indexOf(filterDates[0]);
		// 	// const endArray = convertedDates.indexOf(filterDates[0]);
		// 	// console.log(startArray)
		// 	// myChart.update();
		// }

		//const filterDate = () => setGraphDate()

		//-------
		const resetDate = async() => {
			console.log('resetdate')
		}


	if (chartData) {
		return (
			<>
				<div className='header'>
					<Subhead text='Summary' fontsize='24px'></Subhead>
				</div>
				<GraphCont>
					<Line
						data={chartData}
						options={{
							responsive: true,
							scales: {
								x: {
									grid: {
										display: false,
									},
									ticks: {
										display: true,
										autoSkip: true,
										maxTicksLimit: 7,
									},
								},
								y: {
									min: 0,
								},
							},
						}}
					/>
				</GraphCont>
				<input type="date" id="startDate"></input>
				<input type="date" id="endDate"></input>
				{/* <ButtonDiv onClick={() => setGraphDate(true)}>Filter</ButtonDiv> */}
				<ButtonDiv onClick={filterDate}>Filter</ButtonDiv>
				<ButtonDiv onClick={resetDate}>Reset</ButtonDiv>
			</>
		);
	}
	return <></>;
};

export default GraphsSum;
