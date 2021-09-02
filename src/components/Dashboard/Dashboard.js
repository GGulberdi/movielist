import React from 'react'
import Widgets from './Widgets';
import MovieCard from './MovieCard';
import BarChart from "./BarChart";
import Doughnut2 from "./Doughnut2";
import RecentView from "./RecentView";
import '../../styles/dashboard.css'
import DoughnutChart from './DoughnutChart';



export default function Dashboard({apiBaseUrl}) {  
    return (
     
        <div className="dashboard-container">
            <div className="dashboard-row1"> 
                    <div className="dashboard-row1-col1">
                        <div className="widget-wrapper">
                           <Widgets apiBaseUrl={apiBaseUrl} />
                        </div>
                        <div className="moviecard-wrapper">
                          <MovieCard apiBaseUrl={apiBaseUrl}/>
                        </div>
                    </div>
                    <div className="dashboard-row1-col2">
                          <DoughnutChart apiBaseUrl={apiBaseUrl}/> 
                    </div> 
            </div>
            <div className="dashboard-row2">
                    <div className="barchart-wrapper">
                        <BarChart apiBaseUrl={apiBaseUrl}/>
                    </div>
                    <div className="doughnut2-wrapper">
                        <Doughnut2 apiBaseUrl={apiBaseUrl} />
                    </div>
            </div>
            <div className="dashboard-row3">
                <div className="recentview-wrapper">
                    <RecentView apiBaseUrl={apiBaseUrl} />
                </div>
                    
            </div>
        <br />
        <br />
     </div>
    )
}
