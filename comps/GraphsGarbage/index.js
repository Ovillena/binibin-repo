import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

import Subhead from '../SubheadText';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

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
  const [chartData, setChartData] = useState(false)
  const [itemCount, setItemCount] = useState([]);
  const [isLoading, setLoading] = useState(true);

  
  useEffect(()=>{
    
    const GetData = async()=>{
      setChartData({
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat', 'Sun'],
        datasets: [
          {
            label:'# of garbage',
            data: itemCount,
            backgroundColor:[
              'black'
            ],
            borderWidth: 1
          }
        ]
      });
    }
    GetData();

  
  }, []);

    axios.get("https://binibin-server.herokuapp.com/api/entries")
    .then(res => {
      console.log(res.data);
      setItemCount(res.data.item_count)
    })
    .catch(err => {
      console.log(err);
    });
  
  if (chartData){
  return(
  <>
    <div className='header'>
      <Subhead text="Garbage" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
    
    <Bar data={chartData} options={{
      scales:{
        yAxes:[
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
  }
  return(
    <></>
  )

};

export default GraphsGarbage;