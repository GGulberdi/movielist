import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ratings.css'
// import ReactPlayer from "react-player";


export default function RatingDetails() {


    const { id } = useParams();
    const [data,setData]=useState([])
    const [users,setUsers]=useState([])
 useEffect(() => { 
     axios
     .get(`https://movieapp-server.herokuapp.com/trailers/${id}`)
     .then((res)=>{
         
         setData(res.data)
          })
            .catch((err) => {
        console.log(err); 
    });
 }, [])
 
 useEffect(() => { 
    axios
    .get(`https://movieapp-server.herokuapp.com/users`)
    .then((res)=>{
        
        setUsers(res.data.data)
         })
           .catch((err) => {
       console.log(err); 
   });
}, [])


    return (
        <div className="rating-detail-container">
            <h1> {data.title}</h1>
            <div>
                <h1>Users Ratings</h1>
                {users && users.map(user=>{
                    return <div className="user-rating-container">
                        <img src={user.mediaId.url} alt="user" style={{width:"70px",height:"70px",margin:"3px",borderRadius:"3px"}}/>
                        <p>{user.firstname}{' '}{user.lastname}</p>
                        <p>Rating:8</p>
                    </div>
                })}
            </div>
           




            <Link to="/ratings" className="submit-btn back-to-trailers-btn"><button className="submit-btn back-to-trailers-btn">Back to Rating List</button></Link>         
        </div>
    )
}
