import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './commentsTable.css'
// import ReactPlayer from "react-player";


export default function CommentDetails() {


    const { id } = useParams();
    const [data,setData]=useState([])
    const [firstname,setFirstName]=useState([])
    const [lastname,setLastName]=useState([])
    const [mediaId,setMediaId]=useState([])
    

    
 useEffect(() => {
     axios
     .get(`https://movieapp-server.herokuapp.com/comments/${id}`)
     .then((res)=>{
         console.log(res.data.data)
         setData(res.data.data)
         setFirstName(res.data.data.userId.firstname)
         setLastName(res.data.data.userId.lastname)
         setMediaId(res.data.data.userId.mediaId)
     })      
     .catch((err) => {
        console.log(err);
    });
 }, [])



    return (
        <div className="comment-detail-container">
        {!data.isActive?
       <h2> Comment <span style={{color:'red'}}>{data.title}</span> created at <span style={{color:'red'}}>{data.createdAt && data.createdAt.slice(0,10)}</span> was blocked. Reason: <span style={{color:'red'}}>{data.reasonToBlock}</span></h2> 
       :null
    }

           <div>
               <div className="comment-author-container">
                    <img src={mediaId.url} alt="author" style={{width:"150px",height:"150px",borderRadius:"4px"}}/>
                    <p>{firstname} {lastname}</p>
               </div>
                <h2>{data.title}</h2>
                <p>{data.content}</p> 
           </div>
     
            <Link to="/commentlist"><button className="submit-btn back-to-trailers-btn"> Back to Comment List</button></Link>  

                
        </div>
    )
}
