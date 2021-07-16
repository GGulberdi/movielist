import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contact.css'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";
// import Modal from 'react-modal';
// Modal.setAppElement('#root');

export default function SingleContact() {
    const { id } = useParams();

    
    const [data, setData] = useState({});
console.log(data.content)

  useEffect(() => {
        axios
            .get(`https://movieapp-server.herokuapp.com/messages/${id}`)
            .then((res) => {
                setData(res.data)          
                console.log(res.data)
                       })
            .catch((err) => {
                           console.log(err);
                       });
        
	}, [id]);

    
//   const deleteUser=(id)=>{
    
//       console.log(id)
//       axios
//       .delete(`https://movieapp-server.herokuapp.com/users/${id}`)
//       .then((res) => {
                     
//         window.location.reload()
//                  })
//       .catch((err) => {
//                      console.log(err);
//                  });

//   }



    return (
        <div className="single-user">
         <div className="single-user-items user-firstname">{data.firstname} {data.lastname}</div>
           <div className="single-user-items user-lastname">{data.email} </div>
           <div className="single-user-items user-country">{data.phoneNumber}</div>
           <div className="single-user-items user-date">{data.subject}</div>
           <div className="single-user-items user-date">{data.content}</div>
           {/* <div className="single-user-items user-date">{data.createdAt.slice(0,10)}</div> */}
           <div className="actions">
             </div>
             <div className="trailerdetails-buttons-container">
                    <Link to="/contact" className="submit-btn back-to-trailers-btn" ><button className="submit-btn back-to-trailers-btn"> Back to Contact List</button></Link>  
                  </div>      
     
        </div>
    )
}
