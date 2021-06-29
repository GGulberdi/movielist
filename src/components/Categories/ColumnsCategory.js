
export const COLUMNS = [

//   {
//       Header:"NO",
//       // accessor:d=>d.index,
//       // id:"row",
//       // Cell:({row})=>{
//       //     return<div>{row.index+1}</div>
//       // }
//   },
//   {
//       Header:"NAME",
//     //   accessor:"name"
//   },
  
//   {
//       Header:"MOVIE",
//     //   accessor:"movie",
//     //   Cell:({row})=>{
//     //      return row.original.movie.map(item=>item + ' ')
//     //   }
     
//   },
//   {
//       Header:"DESCRIPTION", 
//     //   accessor:"description",
//     //   Cell:({row})=>{
//     //       return <span>{row.original.description && row.original.description.slice(0,40)}...</span>  }
//   }
  

  
// ]

{
  Header:"NO",
  accessor:d=>d.index,
  id:"row",
  Cell:({row})=>{
      return<div>{row.index+1}</div>
  }
},
{
  Header:"NAME",
  accessor:"name"
},

{
  Header:"MOVIE",
  accessor:"count",
//   Cell:({row})=>{
//      return row.original.movie.map(item=>item + ' ')
//   }
 
},
{
  Header:"DESCRIPTION", 
  accessor:"description",
//   Cell:({row})=>{
//       return <span>{row.original.description && row.original.description.slice(0,40)}...</span>  }
}



]
