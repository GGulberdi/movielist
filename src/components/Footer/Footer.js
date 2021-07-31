import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    const today = new Date().getFullYear();
    const [data,setData]=useState([])
    const [name,setName]=useState([])
    const [copyright,setCopyright]=useState([])
    useEffect(() => {
        axios
			.get('https://movieapp-server.herokuapp.com/companyprofile')
			.then((res) => {
				setData(res.data.response[0]);
                setName(res.data.response[0].name)
                setCopyright(res.data.response[0].copyright)
                
			})
			.catch((err) => {
				console.log(err);
			});
    }, [])

 
    return ( 
        <div className='footer-main' style={{ height: "40px", backgroundColor: "#141414", color: "white" }}>
            <div className='footer-left'>
                <Link to='/privacypolicy' className="footer-item">Privacy Policy</Link> &nbsp;
                <Link to="/termsofuse" className="footer-item" >Term of Use</Link>
                <Link to="/about" className="footer-item" >About Us</Link>
                <Link to="/contactinfo" className="footer-item">Contact</Link>
            </div> 
            <div className='footer-right'>
                <p>Copyright {today} <span>{name}</span> {copyright}</p>
            </div>

        </div>
    )
}