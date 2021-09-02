import axios from "axios";
import React,{useState, useEffect} from "react";
import { BsArrowLeft, BsArrowRight,BsFillEyeFill,BsLayers } from "react-icons/bs";


export default function MovieCard({apiBaseUrl}) {
const [imageIndex, setImageIndex]= useState(0);
const[movieCard, setMovieCard]=useState([]);




const handleRightSwipe = ()=> {
  imageIndex < movieCard.length-4
   ?setImageIndex(imageIndex + 1)
   :setImageIndex(0);
};

const handleLeftSwipe = ()=> {
  imageIndex === 0
  ?setImageIndex(movieCard.length-4)
  :setImageIndex(imageIndex - 1)
   
};

useEffect(()=>{
  axios
  .get(`${apiBaseUrl}/trailers?limit=15`)
  .then((res)=>{
    console.log(res.data.response)
    setMovieCard(res.data.response);
  })
  .catch((err)=>console.log(err));
},[]);

  return (
   <div className="movie-cards-wrapper">
        <div className="movie-card-header">
            <div className="movie-card-header-title">
              <h4>Top Rated Lists</h4> 
            </div>
            <div className="movie-card-header-button-container" >
              <div className="movie-card-header-buttons" onClick={handleLeftSwipe}>
                <button className="submit-button"><BsArrowLeft/> </button>
              </div>
              <div className="movie-card-header-buttons" onClick={handleRightSwipe}>
                <button className="submit-button"><BsArrowRight/> </button>
              </div>
            </div>
       </div>
      <div>
      <div className="movie-card-group"> 
          <div className="movie-item">
            <div className="movie-item-image-container">
                <img src={movieCard.length !==0 && movieCard[imageIndex].mediaUrl} alt="movie"/>
            </div>
            <div className="movie-item-info">
                <div className="movie-item-title">
                  <p>{`${movieCard.length !==0 && movieCard[imageIndex].title.slice(0,17)}...`}</p>
                </div>
                <div className="movie-item-genre">
                  <p>{movieCard.length !==0 && movieCard[imageIndex].genre.map(item=>item.name + " ")}</p>
                </div>
                <div className="movie-item-view">
                   <BsFillEyeFill className="movie-item-view-icon"/>
                   <p>245 views</p>
                </div> 
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item-image-container">
               <img src={movieCard.length !==0 && movieCard[imageIndex+1].mediaUrl} alt="movie"/>
               {/* <img src={movieCard.length !==0 && movieCard[imageIndex+1].mediaId.url} alt="movie"/> */}

            </div>
              
            <div className="movie-item-info">
                <div className="movie-item-title">
                  <p>{`${movieCard.length !==0 && movieCard[imageIndex+1].title.slice(0,17)}...`}</p>
                </div>
                <div className="movie-item-genre">
                  <p>{movieCard.length !==0 && movieCard[imageIndex+1].genre.map(item=>item.name + " ")}</p>
                </div>
                <div className="movie-item-view">
                   <BsFillEyeFill className="movie-item-view-icon"/>
                   <p>245 views</p>
                </div>
            </div>
         
          </div>
          <div className="movie-item">
            <div className="movie-item-image-container">
              <img src={movieCard.length !==0 && movieCard[imageIndex+2].mediaUrl} alt="movie"/>
            </div>
              
            <div className="movie-item-info"> 
                <div className="movie-item-title">
                  <p>{`${movieCard.length !==0 && movieCard[imageIndex+2].title.slice(0,17)}...`}</p>
                </div>
                <div className="movie-item-genre">
                  <p>{movieCard.length !==0 && movieCard[imageIndex+2].genre.map(item=>item.name + " ")}</p>
                </div>
                <div className="movie-item-view">
                   <BsFillEyeFill className="movie-item-view-icon"/>
                   <p>245 views</p>
                </div>
            </div>
          </div>
          <div className="movie-item">
             <div className="movie-item-image-container">
                <img src={movieCard.length !==0 && movieCard[imageIndex+3].mediaUrl} alt="movie"/>
              </div>
              <div className="movie-item-info">
                <div className="movie-item-title">
                  <p>{`${movieCard.length !==0 && movieCard[imageIndex+3].title.slice(0,17)}...`}</p>
                </div>
                <div className="movie-item-genre">
                  <p>{movieCard.length !==0 && movieCard[imageIndex+3].genre.map(item=>item.name + " ")}</p>
                </div>
                <div className="movie-item-view">
                   <BsFillEyeFill className="movie-item-view-icon"/>
                   <p>245 views</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
  );
}
