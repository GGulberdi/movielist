import { setISODay } from "date-fns";
import React, { useState, useReducer, useEffect } from "react";
import "../../styles/table.css";
import "../../styles/trailers.css";

const apiKey = "e15d510497f0c76895f1c76ac17b08d4";
const url = "https://api.themoviedb.org/3/";

function Search() {
  const [title, setTitle] = useState("");
  const [imdb, setImdb] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [searchItemsImdb, setSeartchItemsImdb] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [movieId, setMovieId]=useState("");
  const [itemId, setItemId]=useState("");



  const [configData, setConfigData]=useState(null);
  const [baseImageURL, setBaseImageUrl]=useState(null);


console.log(baseImageURL,image)

  //search functions




useEffect(()=>{
  let imageUrl="".concat(url,'configuration?api_key=',apiKey);
  fetch(imageUrl)
  .then((result)=>{
    console.log(result)
    return result.json();
  })
  .then((data)=>{
    setBaseImageUrl(data.images.secure_base_url)
    setConfigData(data.images)
    console.log(data)
    runSearch('blue')
  })
  .catch((err)=>{
    console.log(err)
  })
},[searchValue])


// const getData = (e) => {
//   e.preventDefault();
//   fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=e15d510497f0c76895f1c76ac17b08d4&query=${searchValue}`
//   )
//     .then((data) => data.json())
//     .then((data) => {
//       // console.log(data);
//       setSeartchItemsImdb(data.results);
//       setMovieId(data.results.id)
//     });
// };

const runSearch=(keyword)=>{
  let searchUrl= "".concat(url, 'search/movie?api_key=', apiKey, '&query=', keyword);
  fetch(searchUrl)
  .then((result)=>{
    return result.json();
  })
  .then((data)=>{
    console.log(data)
    setImage(data.results[0].poster_path)
  })
  .catch((err)=>{
    console.log(err)
  })
}

  // const extraDataHandleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie/${movieId}?api_key=e15d510497f0c76895f1c76ac17b08d4`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setSeartchItemsImdb(data.results);
  //     });
  // };

  const searchHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

    return (
    <div>
      <div>
        <form
          className="add-trailer-form-container"
          type="submit"
          // onSubmit={searchHandleSubmit}
          onSubmit={runSearch}

        >
          <div className="add-trailer-item">
            <label>Search Movie from IMDB</label> <br />
            <input
              value={searchValue}
              type="text"
              onChange={searchHandleChange}
              name="movie"
              list="moviename"
            />
            <datalist onClick={()=>console.log('clicked')} id="moviename" >
              {searchItemsImdb.map((item) => (
                <option   key={item.id} value={item.title}>
                  {item.title}
                  {/* <img src={`https://api.themoviedb.org/t/p/w=50/${item.poster_path}`} alt ='poster'/> */}
                </option>
              ))}
            </datalist>
          </div>
        </form>
    <img src={`${baseImageURL}w50${image}`} alt='poster'/>
       </div>
    </div>
  );
}

export default Search;
