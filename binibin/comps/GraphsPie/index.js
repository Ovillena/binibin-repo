import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

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

const PieCont = styled.div`
  display:flex;
  width:100px;
  height:100px;

`

const DoughnutChart = () => (
  <>
    <div className='header'>
      <Subhead text="Recyling Accuracy"></Subhead>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <PieCont>
    <Doughnut 
    data={data}
    width={100}
    height={100}
    options={{ maintainAspectRatio: false }}
    />
    </PieCont>
  </>
);

export default DoughnutChart;