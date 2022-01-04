import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import Subhead from '../SubheadText';

import axios from 'axios';
import { getData } from '../../network';
import { useState, useEffect } from 'react';

const GraphCont = styled.div`
	display: inline-flex;
	height: 40vh;
	width: 80vw;
	max-height: 600px;
	max-width: 1075px;
`;

const GraphsSum = (props) => {
	const [chartData, setChartData] = useState(false);

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
		});

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
