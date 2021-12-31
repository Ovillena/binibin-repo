import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import axios from 'axios';
import { useState, useEffect } from 'react';
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

const GraphsSum = (props) => {
	const [chartData, setChartData] = useState(false);
	const [itemCount, setItemCount] = useState([]);
	const [itemDate, setItemDate] = useState([]);
	// const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const GetData = async () => {
			let itemCG = [];
			let itemCR = [];
			let itemCC = [];
			let itemDG = [];
			let itemDR = [];
			let itemDC = [];

			const token = window.localStorage.getItem("token")
    if (!token) {
      console.log("you need to login")
      return
    }

			axios
				.get(
					`http://localhost:8080/api/entries/garbage/${props.firstDay}/${props.today}`,
					{
						headers: {
							'Authorization': `Bearer ${token}`
						}
					}
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
					`http://localhost:8080/api/entries/recycling/${props.firstDay}/${props.today}`
					,
					{
						headers: {
							'Authorization': `Bearer ${token}`
						}
					}
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
					`http://localhost:8080/api/entries/compost/${props.firstDay}/${props.today}`,
					
					{
						headers: {
							'Authorization': `Bearer ${token}`
						}
					}
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

					setChartData({
						//x axis
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
		};
		GetData();
	}, []);

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
			</>
		);
	}
	return <></>;
};

export default GraphsSum;
