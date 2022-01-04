import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import axios from 'axios';
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
		const GetData = async () => {
			let garbageCountArr = [];
			let recyclingCountArr = [];
			let compostCountArr = [];
			let garbageDateArr = [];
			let recyclingDateArr = [];
			let compostDateArr = [];

			const token = window.localStorage.getItem('token');
			if (!token) {
				console.log('you need to login');
				return;
			}

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/garbage/${props.firstDay}/${props.today}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						garbageCountArr.push(parseInt(dataObj.total_items));
						garbageDateArr.push(dataObj.entry_date);

					}

					setChartData({
						//x axis
						labels: garbageDateArr,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: garbageCountArr,
								fill: false,
								backgroundColor: ['black'],
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

			//------------------RECYCLE----------------------------

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/recycling/${props.firstDay}/${props.today}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						recyclingCountArr.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						recyclingDateArr.push(dataObj.entry_date);
						// console.log("---------")
						// console.log(recyclingCountArr, garbageDateArr);
					}

					setChartData({
						//x axis
						labels: recyclingDateArr,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: garbageCountArr,
								fill: false,
								backgroundColor: ['black'],
								borderColor: 'black',
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

			//------------------COMPOST----------------------------

			axios
				.get(
					`https://binibin-server.herokuapp.com/api/entries/compost/${props.firstDay}/${props.today}`,

					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((res) => {
					// console.log(res.data);
					for (const dataObj of res.data) {
						compostCountArr.push(parseInt(dataObj.total_items));
						// itemD.push(`${dataObj.month}/${dataObj.day}`)
						compostDateArr.push(dataObj.entry_date);
						// console.log("---------")
						// console.log(compostCountArr, recyclingDateArr);
					}

					setChartData({
						//x axis
						labels: compostDateArr,
						datasets: [
							{
								label: '# of bags thrown in garbage',
								//y axis
								data: garbageCountArr,
								fill: false,
								backgroundColor: ['black'],
								borderColor: 'black',
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
