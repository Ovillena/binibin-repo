import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import axios from 'axios';
import { useState, useEffect, useCallback, useRef } from 'react';
import { render } from 'react-dom';

const data = {
	labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
	datasets: [
		{
			label: '# of Garbage',
			data: [12, 19, 3, 5, 2, 3, 8],
			backgroundColor: ['#000000'],
			borderColor: ['#000000'],
			borderWidth: 1,
		},
	],
};

// const options = {
//   scales: {
//     x:{
//       grid:{
//         display:false
//       },
//     },
//     xAxes:[{
//     }],
//     // y:{
//     //   grid:{
//     //     display:false
//     //   },
//     // },
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//         },
//       },
//     ],
//   },
// };

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
	const [itemCount, setItemCount] = useState([]);
	const [itemDate, setItemDate] = useState([]);
	// const [isLoading, setLoading] = useState(true);
	const [graphDate, setGraphDate] = useState(false);

	//Variables outside useeffect
	let itemCG = [];
	let itemCR = [];
	let itemCC = [];
	let itemDG = [];
	let itemDR = [];
	let itemDC = [];
  
	//Converts the x-axis dates into miliseconds
	// let convertedDates = itemDC.map(date => new Date(date).setHours(0,0,0,0));
	// console.log(convertedDates)

	//let convertedDates = [];
	var convResult = [];

	let filterDates = [];
 
	useEffect(() => {
		const GetData = async () => {
			// let itemCG = [];
			// let itemCR = [];
			// let itemCC = [];
			// let itemDG = [];
			// let itemDR = [];
			// let itemDC = [];

			//---------------------GARBAGE-----------------
			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/garbage/${props.firstDay}/${props.today}`
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						itemCG.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						itemDG.push(dataObj.entry_date);
						// console.log("---------")
						// console.log(itemCG, itemDG);
						// for(const dataRec of res.data){
						//   itemCR.push(parseInt(dataRec.total_items))
						//   console.log(itemCR, itemD);
						// }
						// for(const dataComp of res.data){
						//   itemCC.push(parseInt(dataComp.total_items))
						//   console.log(itemCC, itemD);
						// }
					}

					setChartData({
						//x axis
						labels: itemDG,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: itemCG,
								fill: false,
								backgroundColor: ['black'],
								borderColor: `black`,
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of bags put in compost',
								//y axis
								data: itemCC,
								fill: false,
								backgroundColor: ['#598B2C'],
								borderColor: '#598B2C',
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of items recycled',
								//y axis
								data: itemCR,
								backgroundColor: ['#3C64B1'],
								borderColor: '#3C64B1',
								borderWidth: 4,
								borderRadius: 10,
							},
						],
					});
				});

			//------------------RECYCLE----------------------------

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/recycling/${props.firstDay}/${props.today}`
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						itemCR.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						itemDR.push(dataObj.entry_date);
						// console.log("---------")
						// console.log(itemCR, itemDG);
					}

					setChartData({
						//x axis
						labels: itemDR,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: itemCG,
								fill: false,
								backgroundColor: ['black'],
								borderColor: 'black',
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of bags put in compost',
								//y axis
								data: itemCC,
								fill: false,
								backgroundColor: ['#598B2C'],
								borderColor: '#598B2C',
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of items recycled',
								//y axis
								data: itemCR,
								backgroundColor: ['#3C64B1'],
								borderColor: '#3C64B1',
								borderWidth: 4,
								borderRadius: 10,
							},
						],
					});
				});

			//------------------COMPOST----------------------------

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/compost/${props.firstDay}/${props.today}`
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						itemCC.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						itemDC.push(dataObj.entry_date);
						// console.log("---------")
						// console.log(itemCC, itemDR);
					}

					//Converts the x-axis dates into miliseconds
					const convertedDates = itemDC.map(date => new Date(date).setHours(0,0,0,0));
					convResult = convertedDates
					console.log(convResult)

					// //Converts the x-axis dates into miliseconds
					// const convertedDates = itemDC.map(date => new Date(date).setHours(0,0,0,0));
					// console.log(convertedDates)

					// //Filter the start and end dates
					// const filterDates = convertedDates.filter(date => date >= start && date <= end)
					// myChart.config.data.labels = filterDates;
 
					//--------------------------COMPOST-------------------------------
					setChartData({
						//x axis
						//labels: filterDates,
						labels: itemDC,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: itemCG,
								fill: false,
								backgroundColor: ['black'],
								borderColor: 'black',
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of bags put in compost',
								//y axis
								data: itemCC,
								fill: false,
								backgroundColor: ['#598B2C'],
								borderColor: '#598B2C',
								borderWidth: 4,
								borderRadius: 10,
							},
							{
								label: '# of items recycled',
								//y axis
								data: itemCR,
								backgroundColor: ['#3C64B1'],
								borderColor: '#3C64B1',
								borderWidth: 4,
								borderRadius: 10,
							},
						],
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}; //End of GetData 
		GetData();
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

	// const filterDate = async () => {
	// 	//Converts the x-axis dates into miliseconds
	// 	const convertedDates = itemDC.map(date => new Date(date).setHours(0,0,0,0));
	// 	console.log(convertedDates)

	// 	//Convert start date to miliseconds
	// 	const start1 = new Date(document.getElementById('startDate').value);
	// 	const start = start1.setHours(0,0,0,0); 
	// 	console.log(start)
		
	// 	//Convert end date to miliseconds
	// 	const end1 = new Date(document.getElementById('endDate').value);
	// 	const end = end1.setHours(0,0,0,0); 
	// 	console.log(end)

	// 	const filterDates = convertedDates.filter(date => date >= start && date <= end)
	// 	console.log(filterDates)
	// }
 
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
								yAxes: [
									// {
									// 	ticks: {
									// 		beginAtZero: true,
									// 	},
									// },
								],
							},
						}}
					/>
				</GraphCont>
				<input type="date" id="startDate"></input>
				<input type="date" id="endDate"></input>
				{/* <ButtonDiv onClick={() => setGraphDate(true)}>Filter</ButtonDiv> */}
				<ButtonDiv onClick={() => setGraphDate(true)}>Filter</ButtonDiv>
				<ButtonDiv onClick={resetDate}>Reset</ButtonDiv>
				<button onClick={filterDate}>test</button>
			</>
		);
	}
	return <></>;
};

export default GraphsSum;
//<ButtonDiv onClick={()=>setDate(true)}>Filter</ButtonDiv>