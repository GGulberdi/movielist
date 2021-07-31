import React, {useState, useEffect} from 'react'
import './statuscard.css'
import { BsFillEyeFill,BsPencilSquare,BsFillTrashFill } from "react-icons/bs";


function StatusCard() {
// const [data, setData]  =useState({})



    return (
        <div className='status-card'>
            <div className='status-card-icon'>
                <i className='icon'><BsFillEyeFill/></i>
                <h4>75</h4>
                <span> View</span>
            </div>
            <div className='status-card-icon'>
                <i className='icon'><BsFillEyeFill/></i>
                <h4>75</h4>
                <span> Rated This App</span>
            </div><div className='status-card-icon'>
                <i className='icon'><BsFillEyeFill/></i>
                <h4>75</h4>
                <span> Downladed</span>
            </div><div className='status-card-icon'>
                <i className='icon'><BsFillEyeFill/></i>
                <h4>75</h4>
                <p> Visitors</p>
            </div>
            
        </div>
    )
}





export default StatusCard
