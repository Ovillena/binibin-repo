import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import Subhead from '../SubheadText';

const GraphCont = styled.div`
	display: inline-flex;
	height: 40vh;
	width: 80vw;
	max-height: 600px;
	max-width: 1075px;
`;

const GraphsSum = ({ datasets, xAxisLabels, chartData }) => {
	return (
		<>
			<div className='header'>
				<Subhead text='Summary' fontsize='24px'></Subhead>
			</div>
			<GraphCont>
				<Line
					data={{ labels: xAxisLabels, datasets }}
					options={{
						responsive: true,
						spanGaps: true,
						scales: {
							x: {
								grid: {
									display: false,
								},
								ticks: {
									// display: true,
									// autoSkip: true,
									// maxTicksLimit: 7,
								},
							},
							y: {
								min: 0,
								ticks: {
									callback: function (value, index, values) {
										return value + ' kg';
									},
								},
							},
						},
					}}
				/>
			</GraphCont>
		</>
	);
};

export default GraphsSum;
