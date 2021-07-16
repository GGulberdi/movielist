import React,{useMemo,useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
import { BsFileArrowDown,BsFileArrowUp,BsArrowUpDown } from "react-icons/bs";
import { BsFillEyeFill,BsPencilSquare,BsFillTrashFill } from "react-icons/bs";
import Modal from 'react-modal';
import {COLUMNS} from './ContactColumn'
import './contactTable.css'
// import ReactImage from "react-image";



Modal.setAppElement('#root');
export default function Users() {
    
   
    const [data,setData]=useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalPost,setModalPost]=useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [subject,setSubject]=useState('');
    const [content,setContent]=useState("");
    const [image, setImage]=useState("")
console.log(image)
  
  
    const handleSubmit=(userId)=>{
        const updatedUser={
            firstname,
            lastname,
             email,
           
        }
        axios.put(`https://movieapp-server.herokuapp.com/users/${userId}`,updatedUser)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>{console.log(err)})
      
    }

    
    const editUser=async (userId)=>{
      await  axios
       .get(`https://movieapp-server.herokuapp.com/users/${userId}`)
       .then((res) => {  
           setModalPost(res.data);
           setFirstname(res.data.firstname)
           setLastname(res.data.lastname)
           setEmail(res.data.email)
 
       
       })
       .catch((err) => {
           console.log(err);
       });
    
           setModalIsOpen(true)
    
       
   }

    const viewContactDetail=(userId)=>{
        console.log(userId)
    }

    const deleteContact=(contactId)=>{
      console.log(contactId)
        axios
        .delete(`https://movieapp-server.herokuapp.com/messages/${contactId}`)
        .then((res) => {
          window.location.reload()
        })   
        .catch((err) => {
            console.log(err);
        });
      }


    useEffect(() => {
        axios
			.get('https://movieapp-server.herokuapp.com/messages')
			.then((res) => {
				setData(res.data.response);
			})
			.catch((err) => {
				console.log(err);
			});
    }, [])

    const columns = useMemo(() => COLUMNS,[])
    const contact = useMemo(() => data,[])
 
     
   

    useTable({
        columns:columns,
        data:contact
    })
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    },
    useGlobalFilter,useSortBy,usePagination)
 
    const { globalFilter,pageIndex,pageSize }=state



    return (
        <div>

<div>
            <Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						top: 35,
						backgroundColor: 'rgba(211, 211, 211, 0.60)',
                        marginTop:"30px"
                
                        
					},
					content: {
						padding: 2,
						height: 500,
                        marginTop:"10px",
                        backgroundColor: '#181818',
                        border:"none",
                        width:"95%",
                        margin:"auto",
                        paddingTop:"2%"
                        
                        
					},
				}}
			>
				<div className="modal-container">
                        <p className="close-modal-x" onClick={() => setModalIsOpen(false)}>X</p>
                        <form onSubmit={(e)=>{e.preventDefault();handleSubmit(modalPost._id)}} className="modal-form">
                            <div className="modal-column-one">
                                              
                               
                            </div>
                            <div className="modal-column-two">
                                <div>
                                    <div className="modal-title-container form-item">
                                         {/* <img src={mediaId.url}/> */}
                                         <label>Profile</label>
                                        <input type='file' onChange={(e)=>{console.log(e.target.file[0])}}/>
                                    </div>
                                    <div className="modal-description-container form-item">
                                        <label>Firstname</label>
                                        <textarea value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                                    </div>
                                    <div className="modal-description-container form-item">
                                        <label>Lastname</label>
                                        <textarea value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
                                    </div>
                                    <div className="modal-group-container">
                                        <div className="modal-type-container form-item">
                                            <label>Status</label>
                                            {/* <select value={isActive} onChange={(e)=>{setIsActive(e.target.value)}}>
                                
                                                <option value='true'>Active</option>
                                                <option value='false'>Block</option>
                                            </select>
                                            <input value={isActive} onChange={(e)=>{setIsActive(e.target.value)}}/> */}
                                        </div>
                                        <div className="modal-year-container form-item">
                                            <label>Email</label>
                                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="modal-group-container">
                                        <div className="modal-duration-container form-item">
                                            {/* <label>Country</label>
                                            <input value={country} onChange={(e)=>{setCountry(e.target.value)}}/> */}
                                         </div>                                    
                                        <div className="modal-age-container form-item">
                                            <label>Join Date</label>
                                            {/* <input value={createdAt} onChange={(e)=>{setCreatedAt(e.target.value)}}/> */}
                                        </div>
                                    </div>
                                    {/* <div>
                                            {type === 'show' 
                                    ? 
                                    <div> */}
                                        {/* <div className="modal-group-container">
                                            <div className="modal-edpisodetitle-container form-item">
                                                <label>Episode Title</label>
                                                <input value={episodeTitle} onChange={(e)=>{setEpisodeTitle(e.target.value)}}/> 
                                            </div>
                                            <div className="modal-episodenumber-container form-item">
                                                <label>Episode Number</label>
                                                <input value={episodeNumber} onChange={(e)=>{setEpisodeNumber(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="modal-group-container">
                                            <div className="modal-totalseasons-container form-item">
                                                <label>Total Seasons</label>
                                                <input value={totalSeasons} onChange={(e)=>{setTotalSeasons(e.target.value)}}/>
                                            </div>
                                            <div className="modal-seasonnumber-container form-item">
                                                <label>Season Number</label>
                                                <input value={seasonNumber} onChange={(e)=>{setSeasonNumber(e.target.value)}}/>
                                            </div>
                                            
                                        </div> */}
                                    {/* </div>
                                    :null} */}
                                    
                                {/* </div> */}
                                   
                                </div>
                               <div className="trailer-update-button-container" >
                                  <button className="trailer-update-button submit-btn" type="submit">Submit</button>
                               </div>
                                
                            </div>
              
                        </form>
              
                </div>
			</Modal>
        </div>
        
        <div className="userlist-container">
            <h1 className="userlist-title">Contacts</h1>
           
            <hr className="hr-user"/>
        <div className="search-show-bar-container" >
            <div className="user-show-bar">
                Show&nbsp;  <select  value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                    {
                        [10,20,50].map(pageSize=>(
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))
                    } 
            </select>&nbsp; entries

            </div>
          
            <div className="user-search-bar">
                Search:&nbsp;&nbsp;
                <input value={globalFilter || ''}
                onChange={e=>setGlobalFilter(e.target.value)}
                />
            </div>
            

        </div>
        
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <table {...getTableProps()}>
            <thead>

                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {/* <th></th> */}
                            {headerGroup.headers.map((column)=>(
                           <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                               <div className="users-icon-container">
                                   <div>{column.render('Header')}</div>
                                   <div className="users-sort-icon"><BsArrowUpDown/></div>
                               </div>
   
                            </th> ))}
                            <th>ACTION</th>
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    page.map(row=>{
                        prepareRow(row)
                        return(
                            <tr  {...row.getRowProps()}>
                               
                                {row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                                <td className="row-icon-container">
                                <Link to={`/singlecontact/${row.original._id}`}>
                                <BsFillEyeFill className="view-user-icon" />&nbsp; 
                                 </Link>
                               
                                    <BsPencilSquare className="edit-user-icon" onClick={()=>{editUser(row.original._id)}}/>&nbsp; 
                                    <BsFillTrashFill className="delete-user-icon" onClick={()=>{deleteContact(row.original._id)}}/>
                                </td>
                        
                               
                            </tr>
                        )
                    })
                }
              
            </tbody>
            
        </table>
        
       <div className="user-button-container">
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button className="user-page-nav" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <div className="user-current-page">{pageIndex+1}</div>
            <button className="user-page-nav" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
       </div>
       
        
        </div>
        </div> 
    )
}

