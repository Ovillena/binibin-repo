// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import styled from 'styled-components';
// import Subhead from '../SubheadText';

// const data = {
//   labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
//   datasets: [
//     {
//       label: '# of Garbage',
//       data: [1, 19, 3, 5, 2, 15, 8],
//       fill: false,
//       backgroundColor: 'black',
//       borderColor: 'black',
//     },
//     {
//         label: '# of Recycles',
//         data: [10, 3, 3, 0, 2, 3, 15],
//         fill: false,
//         backgroundColor: '#3C64B1',
//         borderColor: '#3C64B1',
//       },
//       {
//         label: '# of Compost',
//         data: [5, 8, 3, 12, 2, 0, 8],
//         fill: false,
//         backgroundColor: '#3A7A1C',
//         borderColor: '#3A7A1C',
//       },
//   ],
// };

// const options = {
//   scales: {
//     x:{
//       grid:{
//         display:false
//       },
//     },
//     y: {
//       beginAtZero: true
//     }
//   }
// };

// const GraphCont = styled.div`
//   display:flex;
//   width:489px;
//   height:228px;
// `

// const GraphsSum = () => (
//   <>
//     <div className='header'>
//         <Subhead text="Summary" fontsize="24px"></Subhead>
//       <div className='links'>
//       </div>
//     </div>
//     <GraphCont>
//         <Line data={data} options={options} />
//     </GraphCont>
//   </>
// );

// export default GraphsSum;


import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

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
        '#000000'
      ],
      borderColor: [
        '#000000'
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

const GraphsSum = () => {
  const [chartData, setChartData] = useState(false)
  const [itemCount, setItemCount] = useState([]);
  const [itemDate, setItemDate] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  
  useEffect(()=>{
    
    const GetData = async()=>{
      let itemCG = [];
      let itemD = [];

      axios.get("https://binibin-server.herokuapp.com/api/entries")
      .then(res => {
        console.log(res.data);
        for(const dataObj of res.data){
          itemCG.push(parseInt(dataObj.total_items))
          // itemD.push(`${dataObj.month}/${dataObj.day}`)
          itemD.push(dataObj.entry_date)
          console.log(itemCG, itemD);

        }
        setChartData({
          //x axis
          labels:['11/01', '11/03', '11/16'],
          datasets: [
            {
              label:'# of Garbage',
              //y axis
              data: [5,44,1],
              fill:false,
              backgroundColor:[
                'black'
              ],
              borderColor:'black',
              borderWidth: 1,
              borderRadius:10
            },
            {
              label:'# of Compost',
              //y axis
              data:[4,2,13],
              fill:false,
              backgroundColor:[
                '#598B2C'
              ],
              borderColor:'#598B2C',
              borderWidth: 1,
              borderRadius:10
            },
            {
              label:'# of Recycles',
              //y axis
              data:  [5,22,27],
              backgroundColor:[
                '#3C64B1'
              ],
              borderColor:'#3C64B1',
              borderWidth: 1,
              borderRadius:10
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
    GetData();
  }, []);


  if (chartData){
  return(
  <>
    <div className='header'>
      <Subhead text="Summary" fontsize="24px"></Subhead>
    </div>
    <GraphCont>
    
    <Line data={chartData} options={{
      scales:{
        x:{
          grid:{
            display:false
          },
          ticks:{
            display:true,
            autoSkip:true,
            maxTicksLimit:7
          },
        },
        // y:{
        //   min:0,
        //   max:100
        // },
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

export default GraphsSum;