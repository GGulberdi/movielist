import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./trailers.css";
export default function AddTrailer() {
  const [showItems, setShowItems] = useState("trailer-not-visible");
  const [movieItems, setMovieItems] = useState("trailer-visible");
  const [image, setImage] = useState("");
  const [banner, setBanner] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [ageRestriction, setAgeRestriction] = useState("");
  const [totalSeasons, setTotalSeasons] = useState("");
  const [seasonNumber, setSeasonNumber] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [cast, setCast] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [altImage, setAltImage] = useState("");
  // const [altBanner, setAltBanner] = useState("");
  const [number, setNumber] = useState([1]);
  const [watchMovieTitle, setwatchMovieTitle] = useState("");
  const [watchMovieLink, setwatchMovieLink] = useState("");
  const [watchMovie, setWatchMovie] = useState([]);
  const [director, setDirector] = useState("");
  const [imdb, setImdb] = useState("");
  // const [addButton, setAddButton] = useState("Add");
  


  const history = useHistory();

  const addMore = () => {
    setNumber((number) => [...number, 1]);
  };
  const addSite = (e) => {
    e.preventDefault();
    setWatchMovie((watchMovie) => [
      ...watchMovie,
      { title: watchMovieTitle, link: watchMovieLink },
    ]);
    // setAddButton("Added")
  };

  useEffect(() => {
    console.log(watchMovie);
  }, [watchMovie]);

  useEffect(() => {
    axios
      .get("https://movieapp-server.herokuapp.com/categories")
      .then((res) => {
        setGenre(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectGenre = (e) => {
    if (!selectedGenres.includes(e.target.id)) {
      setSelectedGenres((selectedGenres) => [...selectedGenres, e.target.id]);
    } else {
      const index = selectedGenres.indexOf(e.target.id);
      setSelectedGenres(
        selectedGenres.filter((item) => selectedGenres.indexOf(item) !== index)
      );
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === "movie") {
      setShowItems("trailer-not-visible");
      setMovieItems("trailer-visible");
    } else if (e.target.value === "show") {
      setShowItems("trailer-visible");
      setMovieItems("trailer-not-visible");
    } else {
      setMovieItems("trailer-visible");
      setShowItems("trailer-not-visible");
    }
    setType(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("mediaId", image);
    formData.append("bannerId", banner);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("duration", duration);
    formData.append("ageRestriction", ageRestriction);
    formData.append("totalSeasons", totalSeasons);
    formData.append("year", year);
    formData.append("seasonNumber", seasonNumber);
    formData.append("episodeTitle", episodeTitle);
    formData.append("episodeNumber", episodeNumber);
    formData.append("trailerUrl", trailerUrl);
    formData.append("description", description);
    formData.append("director", director);
    formData.append("imdb", imdb);
    formData.append("cast", cast);
    formData.append("tags", tags);
    // formData.append("altImage", altImage);
    // formData.append("altBanner", altBanner);
    formData.append("genre", JSON.stringify(selectedGenres));
    formData.append("websiteId", JSON.stringify(watchMovie));

    await axios
      .post("http://movieapp-server.herokuapp.com/trailers", formData)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    history.push("/trailers");
  };

  const cancelUpload = (e) => {
    e.preventDefault();
    setImage("");
    setBanner("");
    setType("");
    setTitle("");
    setEpisodeTitle("");
    setYear("");
    setDuration("");
    setDescription("");
    setAgeRestriction("");
    setTotalSeasons("");
    setSeasonNumber("");
    setEpisodeNumber("");
    setTrailerUrl("");
    // setAltImage("");
    // setAltBanner("");
    setDirector("");
    setImdb("");
    
  };
  return (
    <div className="addtrailer-container">
       <div className="addtrailer-title-text">
          <h1>Add Trailer</h1>
        </div>
      <div className="add-website-container">
        <div className="addtrailer-website-text">
            <h4>Add a website to watch the whole movie... </h4>
        </div>
        <div className="add1">
                  {number.map((item)=>{
                    return <form onSubmit={addSite} className="add-website-form">
                            <input onChange={(e)=>setwatchMovieTitle(e.target.value)} placeholder="title of the website" className="add"/>
                            <input onChange={(e)=>setwatchMovieLink(e.target.value)}   placeholder="link" className="add"/>
                            <button className="add3" type="submit">Add</button>
                      </form>
                  })} 
        </div>
        <div>
               <button className="add2" onClick={addMore}>Add More Websites</button>
        </div>
        
      </div>

      <form className="addtrailer-form-container" onSubmit={handleSubmit}>
       
        <div className="addtrailer-category-quality">
          <div className="addtrailer-category addtrailer-item">
            <select className="addtrailer-item" onChange={handleChange}>
              <option value="">Trailer Type</option>
              <option value="movie">Movie</option>
              <option value="show">Show</option>
            </select>
          </div>
        </div>
        <div className="addtrailer-main">
          <div className="addtrailer-row1">
            <div className="addtrailer-column1">
              <div className="addtrailer-title addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Title</label>
                <input
                  // placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="addtrailer-description addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Description</label>
                <input
                  //placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="addtrailer-year addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Release Year</label>
                <input
                  // placeholder="Release Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Duration</label>
                <input
                  // placeholder="Duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Movie Image</label>
                <input
                  // placeholder="Movie Image"
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Movie Banner</label>
                <input
                  // placeholder="Movie Banner"
                  type="file"
                  onChange={(e) => {
                    setBanner(e.target.files[0]);
                  }}
                />
              </div>
              <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Age Restriction</label>
                  <input
                    // placeholder="Age Restriction"
                    value={ageRestriction}
                    onChange={(e) => setAgeRestriction(e.target.value)}
                  />
                </div>
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Genre</label>
              <div className="addtrailer-item genre" >
                  {genre.map((item) => {
                    return (
                      <div className="genre-input-container" onClick={(e) => selectGenre(e)}>
                        <input
                          type="checkbox"
                          name={item.name}
                          id={item._id}
                        />
                        <label  htmlFor={item.name}>{item.name}</label>
                      </div>
                    );
                  })}
                </div>
                
                
            </div>

            <div className="addtrailer-column2 addtrailer-item">
              <div className={showItems}>
              <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Trailer Url</label>
                  <input
                    // placeholder="Trailer Url"
                    value={trailerUrl}
                    onChange={(e) => setTrailerUrl(e.target.value)}
                  />
                </div>
                
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Cast</label>
                  <input
                    // placeholder="Cast"
                    value={cast}
                    onChange={(e) => setCast(e.target.value.split(","))}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Tags</label>
                  <input
                    // placeholder="Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value.split(","))}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Director</label>
                  <input
                    // placeholder="Director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Imdb</label>
                  <input
                    // placeholder="Imdb"
                    value={imdb}
                    onChange={(e) => setImdb(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Total Number of Seasons</label>
                  <input
                    // placeholder="Total Number of Seasons"
                    value={totalSeasons}
                    onChange={(e) => setTotalSeasons(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Season Number</label>
                  <input
                    // placeholder="Season Number"
                    value={seasonNumber}
                    onChange={(e) => setSeasonNumber(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Episode Title</label>
                  <input
                    // placeholder="Episode Title"
                    value={episodeTitle}
                    onChange={(e) => setEpisodeTitle(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
                <label style={{fontWeight:"bold", fontSize:"20px"}}>Episode Number</label>
                  <input
                    // placeholder="Episode Number"
                    value={episodeNumber}
                    onChange={(e) => setEpisodeNumber(e.target.value)}
                  />
                </div>
                <div>
                  {isLoading ? (
                    <p className="loading-text">
                      Uploading the show trailer...
                    </p>
                  ) : null}
                </div>
              </div>
              <div className={movieItems}>
               
                <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Trailer Url</label>
                  <input
                    // placeholder="Trailer Url"
                    value={trailerUrl}
                    onChange={(e) => setTrailerUrl(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Cast</label>
                  <input
                    // placeholder="Cast"
                    value={cast}
                    onChange={(e) => setCast(e.target.value.split(","))}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Tags</label>
                  <input
                    // placeholder="Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value.split(","))}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Director</label>
                  <input
                    // placeholder="Director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </div>
                <div className="addtrailer-duration addtrailer-item">
              <label style={{fontWeight:"bold", fontSize:"20px"}}>Imdb</label>
                  <input
                    // placeholder="Imdb"
                    value={imdb}
                    onChange={(e) => setImdb(e.target.value)}
                  />
                </div>
                <div>
                  {isLoading ? (
                    <p className="loading-text">
                      Uploading the movie trailer...
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addtrailer-buttons">
          <button className="addcategory-button submit-btn" type="submit">
            Submit
          </button>
          <button
            className="addcategory-button cancel-btn"
            onClick={cancelUpload}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
