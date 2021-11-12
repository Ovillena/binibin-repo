import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import Subhead from '../SubheadText';

const data = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '# of Garbage',
      data: [1, 19, 3, 5, 2, 15, 8],
      fill: false,
      backgroundColor: 'black',
      borderColor: 'black',
    },
    {
        label: '# of Recycles',
        data: [10, 3, 3, 0, 2, 3, 15],
        fill: false,
        backgroundColor: '#3C64B1',
        borderColor: '#3C64B1',
      },
      {
        label: '# of Compost',
        data: [5, 8, 3, 12, 2, 0, 8],
        fill: false,
        backgroundColor: '#3A7A1C',
        borderColor: '#3A7A1C',
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
    y: {
      beginAtZero: true
    }
  }
};

const GraphCont = styled.div`
  display:flex;
  width:489px;
  height:228px;
`

const GraphsSum = () => (
  <>
    <div className='header'>
        <Subhead text="Summary" fontsize="24px"></Subhead>
      <div className='links'>
      </div>
    </div>
    <GraphCont>
        <Line data={data} options={options} />
    </GraphCont>
  </>
);

export default GraphsSum;