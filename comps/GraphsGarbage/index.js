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

const GraphsGarbage = (props) => {
  const [chartData, setChartData] = useState(false)
  // const [isLoading, setLoading] = useState(true);

  useEffect(()=>{

    const token = window.localStorage.getItem("token")
    if (!token) {
      console.log("you need to login")
      return
    }

    const GetData = async()=>{
      let itemC = [];
      let itemD = [];

      axios
			.get(`http://localhost:8080/api/entries/garbage/${props.firstDay}/${props.today}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
			.then((res) => {
				// console.log(res.data);
				for (const dataObj of res.data) {
					itemC.push(parseInt(dataObj.total_items));
					// itemD.push(`${dataObj.month}/${dataObj.day}`)
					itemD.push(dataObj.entry_date);
					// console.log(itemC, itemD);
				}
				setChartData({
					//x axis
					labels: itemD,
					datasets: [
						{
							label: '# of garbage',
							//y axis
							data: itemC,
							backgroundColor: ['black'],
							borderWidth: 1,
							borderRadius: 10,
						},
					],
				});
			})
			.catch((err) => {
				console.log(err);
			});

      // setChartData({
      //   //x axis
      //   labels: itemD,
      //   datasets: [
      //     {
      //       label:'# of garbage',
      //       //y axis
      //       data: itemC,
      //       backgroundColor:[
      //         'black'
      //       ],
      //       borderWidth: 1
      //     }
      //   ]
      // });
    }
    GetData();
  }, []);

    // axios.get("http://localhost:8080/api/entries")
    // .then(res => {
    //   console.log(res.data);
    //   for(const dataObj of res.data){
    //     itemC.push(parseInt(dataObj.item_count))
    //     itemD.push(parseInt(dataObj.entry_date))
    //     console.log(itemC, itemD);
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });


  if (chartData){
  return(
  <>
    <div className='header'>
      <Subhead text="Garbage" fontsize="24px"></Subhead>
    </div>
    <GraphCont>

    <Bar data={chartData} options={{
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
        y:{
          min:0,

        },
        yAxes:[
          // {
          //   ticks:{
          //     beginAtZero:true
          //   },
          // }
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