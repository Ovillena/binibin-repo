import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import Subhead from '../SubheadText';

const data = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '# of Composts',
      data: [12, 19, 3, 5, 2, 3, 8],
      backgroundColor: [
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
      ],
      borderColor: [
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
        '#3A7A1C',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x:{
      grid:{
        display:false
      },
    },
    yAxes: [
      {
        ticks: {
          beginAtZero:true,
        },
      },
    ],
  },
};

const GraphCont = styled.div`
  display:flex;
  width:489px;
  height:228px;
`

const CompostBar = () => (
  <>
    <div className='header'>
      <Subhead text="Compost" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
    <Bar data={data} options={options} />
    </GraphCont>
  </>
);

export default CompostBar;