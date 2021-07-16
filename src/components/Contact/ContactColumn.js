export const COLUMNS = [

    {
        Header: 'NO',
        accessor: 'id',
        Cell: ({ row }) => {
          return <p>{row.index + 1}</p>
        }
      },
    {
        Header:"NAME",
        accessor:"user",
        Cell:({row})=>{
            return <span>{row.original.firstname} {row.original.lastname}</span>  }
    
    },
    {
        Header:"EMAIL",
        accessor:"email",
        
    },
    {
        Header:"PHONE",
        accessor:"phoneNumber",
       
    },
    {
        Header:"SUBJECT",
        accessor:"subject",
       
    },
    {
        Header:"CONTENT",
        accessor:"content",
        Cell:({row})=>{
            return row.original.content.slice(0,40)
         }
       
    },
    {
        Header:"DATA",
        accessor:"createdAt",
         Cell:({row})=>{
            return row.original.createdAt.slice(0,10)
         }
    },
    
    
]

