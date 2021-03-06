import React, { useState }from 'react'
import { useHistory } from 'react-router-dom';
import './categories.css'
import axios from 'axios'

export default function AddCategory() {
    const [name,setName]=useState('')
    const [status,setStatus]=useState('')
    const [description,setDescription]=useState('')
    const [warningText,setWarningText]=useState('no-warning')
    const history = useHistory()

     

    const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post('https://movieapp-server.herokuapp.com/categories',{
        name, description, status})
          .then((res)=>{
            console.log(res.data)
          })
          .catch((err)=>console.log(err))
          setWarningText('warning')
    }
    
    const cancelUpload = (e) => {
        e.preventDefault()
        setName('')
        setDescription('')
        setWarningText('no-warning')
     
  }

    return (
      <div className="addcategory-container">
          <form className="addcategory-form-container" onSubmit={handleSubmit}>
                <div className="addcategory-title"><h1>Add Category</h1></div>
                <div className="addcategory-name addcategory-item">
                            <input className="addcategory-name-input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className={warningText}>A category with that name already exists.</div>
                <div className="addcategory-description addcategory-item">
                            <textarea className="addcategory-description-input"  placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
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
      
    )
    }


