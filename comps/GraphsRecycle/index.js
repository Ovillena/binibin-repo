import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import Subhead from '../SubheadText';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'black'],
  datasets: [
    {
      label: '# of Recycles',
      data: [12, 19, 3, 5, 2, 3, 15],
      backgroundColor: [
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
      ],
      borderColor: [
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
        '#3C64B1',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GraphCont = styled.div`
  display:flex;
  width:500px;
  height:500px;

`

const RecycleBar = () => (
  <>
    <div className='header'>
      <Subhead text="Recycle" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
    <Bar data={data} options={options} />
    </GraphCont>
  </>
);

export default RecycleBar;