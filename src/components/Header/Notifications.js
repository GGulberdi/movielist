import React, {useState} from 'react'
import {Collapse,Button} from 'react-bootstrap'
import {BiPlusMedical} from 'react-icons/bi'

export default function Notifications() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='question-clickButton' style={{width:'60%', backgroundColor:'#181818', justifyContent:'space-between', display:'flex', margin:'auto', marginTop:'5vh'}}>
      <h3> Why do we use this website?</h3>
     
      <Button
      style={{backgroundColor:'#181818' ,border:'none'}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
         <BiPlusMedical size='40' style={{color:'red'}}/>
      </Button>
      
      </div>
      <Collapse in={open} >
        <div id="example-collapse-text" style={{width:'60%',margin:'auto'}}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}
