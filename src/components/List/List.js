import React,{useMemo,useEffect,useState} from 'react'
import axios from 'axios'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
import {BsArrowUpDown } from "react-icons/bs";
import { BsFillEyeFill,BsPencilSquare,BsFillTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import Modal from 'react-modal';
import {COLUMNS} from './ListTableData'
import '../../styles/table.css'
import '../../styles/list.css' 
 

 Modal.setAppElement('#root'); 

export default function List({apiBaseUrl}) {
     
    
    const [data,setData]=useState([])
    

    const deleteTrailer=(trailerId)=>{
        axios
        .delete(`${apiBaseUrl}/trailers/${trailerId}`)
        .then((res) => {
            window.location.reload()
        })   
        .catch((err) => {
            console.log(err);
        });
       
    }

    useEffect(() => {
        axios
			.get(`${apiBaseUrl}/lists`)
			.then((res) => {
				setData(res.data.response);
            // console.log(res.data.response)

			})
			.catch((err) => {
				console.log(err);
			});
    }, [])
    

    const columns = useMemo(() => COLUMNS,[])
    const trailers = useMemo(() => data,[])
     
   

    useTable({
        columns:columns,
        data:trailers
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
    <div className="trailer-component-wrapper ">
       
        <div className="table-container">
            <h1 className="table-title">Lists</h1>
            <hr className="hr-table"/>
            <div className="table-show-search-wrapper" >
                <div className="table-show-bar">
                   <p>Show&nbsp;</p> <select  value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
                                    {
                                        [10,20,50].map(pageSize=>(
                                            <option key={pageSize} value={pageSize}>
                                                {pageSize}
                                            </option>
                                        ))
                                    } 
                                </select>&nbsp; <p>entries</p>
                </div>
            
                <div className="table-search-bar">
                    <p>Search:&nbsp;&nbsp;</p>
                    <input value={globalFilter || ''}
                    onChange={e=>setGlobalFilter(e.target.value)}
                    />
                </div>
            </div>
          
         <table {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroup)=>(
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                        {/* <th></th> */}
                                        {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            <div className="table-sort-icon-container">
                                                <div>{column.render('Header')}</div>
                                                <div className="table-sort-icon"><BsArrowUpDown/></div>
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
                                        <tr className="table-row-wrapper"  {...row.getRowProps()}>   
                                            {row.cells.map((cell)=>{
                                                return <td  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })}
                                            <td className="table-action-icons-wrapper">
                                                <Link  to={`/listdetails/${row.original._id}`}>
                                                    <BsFillEyeFill to={`/listdetails/${row.original._id}`} className="table-view-icon action-icons" />&nbsp; 
                                                </Link>
                                                <BsFillTrashFill className="table-delete-icon action-icons" onClick={()=>{deleteTrailer(row.original._id)}}/>
                                            </td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
        </table>
       <div className="table-button-container">
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button className="table-page-nav" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <div className="table-current-page">{pageIndex+1}</div>
            <button className="table-page-nav" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
       </div>
       
        
    </div>
</div> 
    )
}

