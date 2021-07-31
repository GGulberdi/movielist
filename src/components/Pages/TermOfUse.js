import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";


 
Modal.setAppElement("#root");
export default function About() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(true);


  const handleSubmit = (id) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    axios
      .put(
        `http://localhost:5005/staticpage/${data._id}`,
      formData
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5005/staticpage/name/Terms of Use")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        setName(res.data.data.name);
        setContent(res.data.data.content);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cancelUpload = (e) => {
    e.preventDefault()
    setContent(data.content) 
}

  return (
    <div className="addcategory-container">
          <form className="addcategory-form-container" onSubmit={handleSubmit}>
                <div className="addcategory-title"><h1>{data.name}</h1></div>
                {/* <div className="addcategory-name addcategory-item">
                            <input className="addcategory-name-input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div> */}
                
                <div className="addcategory-description addcategory-item">
                            <textarea className="addcategory-description-input"  placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} />
                </div>
                {/* <div className="addcategory-status">
                    <h3>Status </h3>
                     <div className="addcategory-circle-container">
                        <select value={status} onChange={(e)=>{setStatus(e.target.value)}}> 
                          <option value="enable" className="addcategory-circle">Enable</option>
                          <option value="disable" className="addcategory-circle">Disable</option>
                        </select>
                    </div>
                </div> */}
                <div className="addcategory-buttons">
                        <button className="addcategory-button submit-btn" type="submit">Submit</button>
                        <button className="addcategory-button cancel-btn" onClick={cancelUpload}>Cancel</button>
                      </div>
          </form>
      </div>
  );
}
