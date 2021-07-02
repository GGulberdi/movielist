// import React,{useMemo,useEffect,useState} from 'react'
// import axios from 'axios'
// import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
// import { BsFileArrowDown,BsFileArrowUp,BsArrowUpDown } from "react-icons/bs";
// import { BsFillEyeFill,BsPencilSquare,BsFillTrashFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import ReactPlayer from "react-player";
// import Modal from 'react-modal';
// import {COLUMNS} from './Columns'
// import './table.css'



// export default function Trailers() {
    
    
//     const [data,setData]=useState([])
  
   
//         axios.put(`https://movieapp-server.herokuapp.com/trailers/${trailerId}`,updatedTrailer)
//         .then(res=>{
//             window.location.reload()
//         })
//         .catch(err=>{console.log(err)})
//     }


//     const editTrailer=async (trailerId)=>{
//        await  axios
//         .get(`https://movieapp-server.herokuapp.com/trailers/${trailerId}`)
//         .then((res) => {  
//             setModalPost(res.data);
//             setTitle(res.data.title)
//             setEpisodeTitle(res.data.episodeTitle)
//             setType(res.data.type)
//             setYear(res.data.year)
//             setDuration(res.data.duration)
//             setMediaUrl(res.data.mediaId.url)
//             setBannerUrl(res.data.bannerId.url)
//             setDescription(res.data.description)
//             setAgeRestriction(res.data.ageRestriction)
//             setTotalSeasons(res.data.totalSeasons)
//             setSeasonNumber(res.data.seasonNumber)
//             setEpisodeNumber(res.data.episodeNumber)
//             setTrailerUrl(res.data.trailerUrl)
//             setCast(res.data.cast)
//             setTags(res.data.tags)
//             setGenre(res.data.genre)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//             setModalIsOpen(true)
            
//     }



//     const deleteTrailer=(trailerId)=>{
//         axios
//         .delete(`https://movieapp-server.herokuapp.com/trailers/${trailerId}`)
//         .then((res) => {
//             window.location.reload()
//         })   
//         .catch((err) => {
//             console.log(err);
//         });
       
//     }


//     useEffect(() => {
//         axios
// 			.get('https://movieapp-server.herokuapp.com/trailers')
// 			.then((res) => {
// 				setData(res.data);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
//     }, [])

//     const columns = useMemo(() => COLUMNS,[])
//     const trailers = useMemo(() => data,[])
     
   

//     useTable({
//         columns:columns,
//         data:trailers
//     })
   
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         nextPage,
//         previousPage,
//         canNextPage,
//         canPreviousPage,
//         gotoPage,
//         pageCount,
//         setPageSize,
//         prepareRow,
//         state,
//         setGlobalFilter,
//     } = useTable({
//         columns,
//         data
//     },
//     useGlobalFilter,useSortBy,usePagination)
 
//     const { globalFilter,pageIndex,pageSize }=state


//     return (
//         <div>
             
//         <div className="trailerlist-container">
//             <h1 className="trailerlist-title">Trailer Lists</h1>
           
//             <hr className="hr-trailer"/>
//         <div className="search-show-bar-container" >
//             <div className="trailer-show-bar">
//                 Show&nbsp;  <select  value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
//                     {
//                         [10,20,50].map(pageSize=>(
//                             <option key={pageSize} value={pageSize}>
//                                 {pageSize}
//                             </option>
//                         ))
//                     } 
//             </select>&nbsp; entries

//             </div>
          
//             <div className="trailer-search-bar">
//                 Search:&nbsp;&nbsp;
//                 <input value={globalFilter || ''}
//                 onChange={e=>setGlobalFilter(e.target.value)}
//                 />
//             </div>
            

//         </div>
        
//         {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
//         <table {...getTableProps()}>
//             <thead>

//                 {
//                     headerGroups.map((headerGroup)=>(
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {/* <th></th> */}
//                             {headerGroup.headers.map((column)=>(
//                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                <div className="trailers-icon-container">
//                                    <div>{column.render('Header')}</div>
//                                    <div className="trailers-sort-icon"><BsArrowUpDown/></div>
//                                </div>
   
//                             </th> ))}
//                             <th>ACTION</th>
//                         </tr>
//                     ))
//                 }
//             </thead>

//             <tbody {...getTableBodyProps()}>
//                 {
//                     page.map(row=>{
//                         prepareRow(row)
//                         return(
//                             <tr  {...row.getRowProps()}>
                               
//                                 {row.cells.map((cell)=>{
//                                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                 })}
//                                 <td className="row-icon-container">
//                                     <Link  to={`/trailerdetails/${row.original._id}`}>
//                                        <BsFillEyeFill className="view-trailer-icon eyefill-icon" />&nbsp; 
//                                     </Link>
                                    
//                                     <BsPencilSquare className="edit-trailer-icon" onClick={()=>{editTrailer(row.original._id)}}/>&nbsp; 
//                                     <BsFillTrashFill className="delete-trailer-icon" onClick={()=>{deleteTrailer(row.original._id)}}/>
//                                 </td>
                        
                               
//                             </tr>
//                         )
//                     })
//                 }
              
//             </tbody>
            
//         </table>
        
//        <div className="trailer-button-container">
//             <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
//             <button className="trailer-page-nav" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
//             <div className="trailer-current-page">{pageIndex+1}</div>
//             <button className="trailer-page-nav" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
//             <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
//        </div>
       
        
//         </div>
//         </div> 
//     )
// }

