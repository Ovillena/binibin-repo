import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

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
			backgroundColor: ['#3A7A1C'],
			borderColor: ['#3A7A1C'],
			borderWidth: 1,
			borderRadius: 10,
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
	display: flex;
	width: 489px;
	height: 228px;
`;

const GraphsCompost = (props) => {
	const [chartData, setChartData] = useState(false);
	const [itemCount, setItemCount] = useState([]);
	const [itemDate, setItemDate] = useState([]);
	// const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const GetData = async () => {
			let itemC = [];
			let itemD = [];

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/garbage/${props.firstDay}/${props.today}`
				)
				.then((res) => {
					console.log(res.data);
					for (const dataObj of res.data) {
						itemC.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						itemD.push(dataObj.entry_date);
						console.log(itemC, itemD);
					}
					setChartData({
						//x axis
						labels: itemD,
						datasets: [
							{
								label: '# of Compost',
								//y axis
								data: itemC,
								backgroundColor: ['#598B2C'],
								borderWidth: 1,
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
					<Subhead text='Compost' fontsize='24px'></Subhead>
				</div>
				<GraphCont>
					<Bar
						data={chartData}
						options={{
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
									{
										ticks: {
											beginAtZero: true,
										},
									},
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

export default GraphsCompost;
