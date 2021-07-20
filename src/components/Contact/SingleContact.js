import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contact.css'
import { Link, useParams } from 'react-router-dom';


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

    return (
        <div className="main">
            <h1>{data.firstname} {data.lastname}</h1>
            <div className="content">
                <label>Email</label>
                <input type='text' value={data.email} />
            </div>
            <div className="content">
                <label>Phone</label>
                <input type='text' value={data.phoneNumber} />
            </div>
            <div className="content">
                <label>Subject</label>
                <input type='text' value={data.subject} />
            </div>
            <div className="content">
                <label>Message</label>
                <input type='textarea'  value={data.content} />
            </div>
            <div className="button">
                <Link to="/contact"  ><button> Back to Contact List</button></Link>
            </div>          
        </div>
    )
}
