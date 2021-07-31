import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import './faqs.css'

export default function FaqDetails() {
   
    const { id } = useParams();
    const [faq,setFaq]=useState([])
 useEffect(() => {
     axios
     .get(`https://movieapp-server.herokuapp.com/faqs/${id}`)
     .then((res)=>{
         setFaq(res.data)
     })
     .catch((err) => {
        console.log(err);
    });
 }, [])
    return (
        < div>
            <div className="player-wrapper">
                <ReactPlayer 
                    url={faq.faqUrl}
                    width="100%"
                    height="100%"
                    className="react-player"
                     controls={true}
                />
            </div>
            <div style={{marginLeft:"20px",marginRight:"20px"}}>
                <h1>{faq.title}&nbsp;&nbsp;
                            <span className="faq-detail-span">{faq.year}</span>&nbsp;&nbsp;
                            <span className="faq-detail-span">{faq.ageRestriction}+</span>&nbsp;&nbsp;
                            {faq.type==="movie" ? <span className="faq-detail-span">{faq.duration}</span>
                            : <span className="faq-detail-span">S{faq.seasonNumber} E{faq.episodeNumber}</span>
                            }                       
                </h1> 
                <p>{faq.description}</p> 
            </div>
           
            <div className="faqdetail-info-container">               
                <div> 
                    <h3>
                        Starring:{faq.cast && faq.cast.map((item,index)=><span className="faq-detail-span-item">&nbsp;{item}
                          {index < faq.cast.length-1 ? ', ': null}
                        </span>)} 
                    </h3>   
                    <h3>
                        Genre:{faq.genre && faq.genre.map((item,index)=><span className="faq-detail-span-item">&nbsp;{item}
                        {index < faq.genre.length-1 ? ', ': null}
                        </span>)} 
                    </h3> 
                    <h3>
                        Tags: {faq.tags && faq.tags.map((item,index)=><span className="faq-detail-span-item">&nbsp;{item}
                        {index < faq.tags.length-1 ? ', ': null}
                        </span>)}   
                    </h3> 
                    {faq.type==="show" ? 
                    <div>
                        <h3>
                            Episode Title:&nbsp;<span className="faq-detail-span-item">{faq.episodeTitle}</span>
                        </h3> 
                        <h3>
                            Total Number of Seasons:&nbsp;<span className="faq-detail-span-item">{faq.totalSeasons}</span>
                         </h3>
                    </div> 
                    
                  :null}
                  <div className="faqdetails-buttons-container">
                    <Link to="/faqs" className="submit-btn back-to-faqs-btn" ><button className="submit-btn back-to-faqs-btn"> Back to faq List</button></Link>  
                    {/* <button className="submit-btn edit-faqdetails-btn">Edit faq Details</button> */}
                  </div>      
                </div>
                <div>
                    <h3>Movie Image</h3>
                    <img src={faq.mediaId && faq.mediaId.url} style={{width:"300px",height:"300px"}} alt="faq-img"/>
                </div>
                <div>
                    <h3>Banner Image</h3>
                    <img src={faq.bannerId && faq.bannerId.url} style={{width:"300px",height:"300px"}} alt="banner-img"/>
                </div>      
                </div>         
        </div>
    )
}
