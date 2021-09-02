import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../styles/comments.css'
// import ReactPlayer from "react-player";


export default function CommentDetails({apiBaseUrl}) {
 

    const { id } = useParams();
    const [data,setData]=useState([])
    const [firstname,setFirstName]=useState([])
    const [lastname,setLastName]=useState([])
   
    

    
 useEffect(() => {
     axios
     .get(`${apiBaseUrl}/comments/${id}`)
     .then((res)=>{
         console.log(res.data.data)
         setData(res.data.data)
         setFirstName(res.data.data.userId.firstname)
         setLastName(res.data.data.userId.lastname)
     })      
     .catch((err) => {
        console.log(err);
    });
 }, [])


 
    return (
        <div className="comment-detail-container">
         <div className="comment-detail-wrapper">
                {!data.isActive?
            <h2> Comment <span>{data.title}</span> created at <span>{data.createdAt && data.createdAt.slice(0,10)}</span> was blocked. Reason: <span>{data.reasonToBlock}</span></h2> 
            :null
            }
                <div>
                    <div className="comment-author-container">
                            <p>{firstname} {lastname}</p>
                    </div>
                        <h2>{data.title}</h2>
                        <p>{data.content}</p> 
                </div>
            
                    <Link to="/commentlist"><button className="submit-button back-to-trailers-btn"> Back to Comment List</button></Link>  
         </div>
     
        </div>
    )
}
