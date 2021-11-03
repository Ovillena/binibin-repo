import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

import Subhead from '../SubheadText';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const GraphCont = styled.div`
  display:flex;
  width:489px;
  height:228px;

`

const PieChart = () => (
  <>
    <div className='header'>
      <Subhead text="Recyling Accuracy" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
      <Pie data={data} />
    </GraphCont>
  </>
);

export default PieChart;