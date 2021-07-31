
import React, {useState, useEffect} from 'react'
import { Bar, Line, Pie} from 'react-chartjs-2'
import axios from 'axios'

const DonutChart = ()=>{
const [chartData, setChartData]=useState({})
const [category, setCategory]=useState(['Horror', 'Comedy', 'Drama','Kids', 'Romantic' ])
const [allData, setAllData]=useState([])
const [thisMonth, setThisMonth]=useState([25])
const [lastMonth, setLastMonth]=useState([30])



const chart=()=>{

  setChartData({
    labels: ['Horror', 'Comedy', 'Drama','Kids', 'Romantic' ],
    datasets:[
      {
        label:'This Month',
        data: [25,10,15,9,12],
        backgroundColor:[
          'rgba(54,162,235,0.6)'
         ]
      },
     {
    label:'Last Month',
    data: [25,10,15,9,12],
    backgroundColor:[
      'rgba(255,99,132,0.6)'
 
    ]
  }
  ]

})
}

const options={
  // responsive:true,
  title:{text:'Categories', display:true},
  scales:{
    yAxes:[
      {
        ticks:{
          autoSkip:true,
        }, 
        gridLines:{
          display:false
        }
      }
    ]
  }
}

useEffect(()=>{
  // axios
  // .get('https://movieapp-server.herokuapp.com/categories')
  // .then((res) => {
  //          console.log(res.data)  
  //         //  setCategory(res.data)            
  //                   })
  // .catch((err) => {
  //   console.log(err);
  // });
chart()

},[])




return (
  <div className='chart'  style={{backgroundColor:'#181818'}}
  >
<Bar options={options} data={chartData} />  
</div>
)

}
export default DonutChart