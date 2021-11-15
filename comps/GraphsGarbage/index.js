import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import axios from 'axios';
import { useState, useEffect } from 'react';

const data = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '# of Garbage',
      data: [12, 19, 3, 5, 2, 3, 8],
      backgroundColor: [
        '#000000',
        '#000000',       
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
      ],
      borderColor: [
        '#000000',
        '#000000',       
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
      ],
      borderWidth: 1,
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
  display:flex;
  width:489px;
  height:228px;
`

const GraphsGarbage = () => {
  const [chartData, setChartData] = useState({})
  const [itemCount, setItemCount] = useState([]);
  
  const chart = () => {
    //let ItemC = [];

    axios.get("https://binibin-server.herokuapp.com/api/entries")
    .then(res => {
      console.log(res);
      setItemCount(res.item_count)
      // for(const dataObj of res.data.data){
      //   ItemC.push(parseInt(dataObj.item_count));
      // }
    })
    .catch(err => {
      console.log(err);
    });
    // console.log(ItemC);

    //Idk how to fix this.. TypeError: Cannot read properties of undefined (reading 'map')
    setChartData({
      labels: ['mon', 'tues', 'wed'],
      datasets: [
        {
          label:'# of garbage',
          data: itemCount,
          backgroundColor:[
            'rgba(75, 192, 192, 0.6)'
          ],
          borderWidth: 4
        }
      ]
    });
  }

  useEffect(() => {
    chart();
  }, [])
  
  return(
  <>
    <div className='header'>
      <Subhead text="Garbage" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
    
    <Bar data={chartData} options={{
      scales:{
        y:[
          {
            ticks:{
              beginAtZero:true
            },
          }
        ]
      }
    }} />

    </GraphCont>
  </>
  )
};

export default GraphsGarbage;