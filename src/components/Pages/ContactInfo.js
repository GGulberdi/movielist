import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai' 
import './pages.css'

export default function ContactInfo() {
    const [data,setData]=useState([])
    const [name,setName]=useState([])
    const [address,setAddress]=useState([])
    const [email,setEmail]=useState([])
    const [phone,setPhone]=useState([])
    const [copyright,setCopyright]=useState([])
    const [id,setId]=useState([])
    const [logo,setLogo]=useState([])
    const [socialMedia,setSocialMedia]=useState([])
   

    useEffect(() => {
        axios
			.get('https://movieapp-server.herokuapp.com/companyprofile')
			.then((res) => {
				setData(res.data.response[0]);
                setAddress(res.data.response[0].address)
                setEmail(res.data.response[0].email)
                setPhone(res.data.response[0].phone)
                setCopyright(res.data.response[0].copyright)
                setLogo(res.data.response[0].logo)
                setName(res.data.response[0].name)
                setId(res.data.response[0]._id)
			})
			.catch((err) => {
				console.log(err);
			});
    }, [])



    const handleSubmit=()=>{
       
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("copyright", copyright);
        formData.append("logo", logo);
        formData.append("alt",name );
       
        axios.put(`https://movieapp-server.herokuapp.com/companyprofile/${id}`,formData)
        .then(res=>{
            window.location.reload()
       

        })
        .catch(err=>{console.log(err)})
    }

    return (
        <div className="all-contact-container">
            {/* <div className="contactinfo-container">
                <div className="contactinfo-item">
                    <IoLocationOutline size='20' />
                    <h4>Address:</h4>&nbsp;
                    <h5>{address}</h5>
                </div>
                
                <div className="contactinfo-item">
                    <BiPhoneCall size='20' />
                    <h4>Phone Number:</h4>&nbsp;
                    <h5>{phone}</h5>
                </div>
                <div className="contactinfo-item">
                    <AiOutlineMail size='20' />
                    <h4>Email:</h4>&nbsp;
                    <h5>{email}</h5>
                </div>
                <div className="contactinfo-item">
                    <h4>Logo:</h4>&nbsp;
                    <img src={logo.url} alt="logo" style={{width:"100px",height:"100px"}}/>
                </div>
           </div> */}
           <div className="contact-form-container">
               <form className="contactinfo-form" onSubmit={(e)=>{e.preventDefault();handleSubmit()}} >
                   <h2>Update the details...</h2>
                   <div className="contactinfo-row">
                        <div className="row-item">
                            <label>Name</label>&nbsp; 
                            <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="row-item">
                            <label>Address</label>&nbsp; 
                            <input value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </div>
                   </div>
                  <div className="contactinfo-row">
                       <div className="row-item">
                            <label>Phone Number</label>&nbsp; 
                            <input value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                        </div>
                        <div className="row-item">
                            <label>Email</label>&nbsp; 
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                  </div>
                  <div className="contactinfo-row">
                        <div className="row-item">
                            <label>Copyright Text</label>&nbsp; 
                            <input value={copyright} onChange={(e)=>{setCopyright(e.target.value)}}/>
                        </div>
                        <div className="row-item">
                            <label>Logo</label>&nbsp; 
                            <input type="file" onChange={(e)=>{setLogo(e.target.files[0])}}/>
                        </div>
                   </div>
                  <div className="row-item-button">
                     <button type="submit" className="submit-btn contactinfo-submit-btn">Submit</button>
                  </div>
                   
               </form>
           </div>
        </div>
        
    )
}
