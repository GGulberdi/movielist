import React, { useEffect, useState } from "react";
import axios from "axios";
import Widgets from './Widgets';
import MovieCard from './MovieCard';
// import BarChart from "./BarChart";
import Doughnut2 from "./Doughnut2";
import RecentView from "./RecentView";
import '../../styles/dashboard.css'
import { toDate } from "date-fns";

export default function Dashboard({apiBaseUrl}) { 
    const[users, setUsers] = useState('');
    const[todaysUsers, setTodaysUsers] = useState('');
    const[lists, setLists] = useState('');
    const[todaysLists, setTodaysLists] = useState('');
    // console.log(users)
    // console.log(lists)

    useEffect(() => {
        axios
          .get(`${apiBaseUrl}/users`)
          .then((res) => {
            setUsers(res.data.total);
            // console.log(res.data.response);
            var today = new Date();
            var yesterday = new Date(today.getTime() - (1000*60*60*24));
            // let filter = res.data.response.filter(item=>item.createdAt.getTime() >= fromDate.getTime(yesterday)&& item.createdAt.getTime()<=toDate.getTime(today))
            console.log(today);
            console.log(yesterday);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      useEffect(() => {
        axios.get(`${apiBaseUrl}/lists`)
        .then((res) => {
          setLists(res.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (    
        <div className="dashboard-container">
            <div className="dashboard-row1"> 
                    <div className="dashboard-row1-col1">
                        <div className="widget-wrapper">
                           <Widgets apiBaseUrl={apiBaseUrl} users={users} lists={lists}/>
                        </div>
                        <div className="moviecard-wrapper">
                          <MovieCard apiBaseUrl={apiBaseUrl}/>
                        </div>
                    </div>
                   
            </div>
            <div className="dashboard-row2">
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
