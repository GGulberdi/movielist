import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './message.css'
import { Link, useParams } from 'react-router-dom';


export default function SingleMessage() {
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

    return (
        <div className="main">
            <h1>{data.firstname} {data.lastname}</h1>
            <div className="content">
                <p><span style={{color:"#E20E02"}}>Email:</span> {data.email}</p>
            </div>
            <div className="content">
                <p><span style={{color:"#E20E02"}}>Phone Number:</span>  {data.phoneNumber ? data.phoneNumber : 'No phone number'}</p>
            </div>
            <div className="content">
                <p><span style={{color:"#E20E02"}}>Subject:</span> {data.subject}</p>
            </div>
            <div className="content">
                <p><span style={{color:"#E20E02"}}>Message:</span> {data.content}</p>
            </div>
            <div className="button-back-to-message">
                <Link to="/messages"  ><button> Back to Message List</button></Link>
             
            </div>    
                  
        </div>
    )
}
