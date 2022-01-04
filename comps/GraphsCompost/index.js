import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import { getData } from '../../network';
import { useState, useEffect } from 'react';

const GraphCont = styled.div`
	display: flex;
	width: 489px;
	height: 228px;
`;

const GraphsCompost = (props) => {
	const [chartData, setChartData] = useState(false);

	useEffect(() => {
		let itemC = [];
		let itemD = [];

		getData(props.firstDay, props.today, 'compost')
			.then((res) => {
				// console.log(res.data);
				for (const dataObj of res.data) {
					itemC.push(parseInt(dataObj.total_items));
					itemD.push(dataObj.entry_date);
					// console.log(itemC, itemD);
				}
				setChartData({
					//x axis
					labels: itemD,
					datasets: [
						{
							label: 'Kg of Compost',
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
