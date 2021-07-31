import React from 'react'
import './dashboard.css'
import DonutChart from './DonutChart'
import StatusCard from './StatusCard'
import TopCategories from './TopCategories'

export default function Dashboard() {
    return (
        <div>
<div >
    <StatusCard/>
</div>

        <div style={{width:"60%", height:'500px'}}>
        <DonutChart/>
         </div>
         <div>
         <TopCategories/>
         </div>
     </div>

    )
}
