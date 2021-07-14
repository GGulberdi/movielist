import React, {useEffect, useState } from 'react'
import axios from 'axios'

import { Collapse, Button } from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'

export default function Notifications() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://movieapp-server.herokuapp.com/faqs')
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li  key={item.index} style={{listStyleType:'none'}}>
            <div className='question-clickButton' style={{ height: '100px', alignItems: 'center', width: '60%', margin: 'auto', marginTop: '3vh', backgroundColor: '#181818', justifyContent: 'space-between', display: 'flex' }}>  <h3 style={{ marginLeft: '1%' }}>
              {item.question}</h3>
              <Button
                style={{ backgroundColor: '#181818', border: 'none', marginRight: '.1%' }}
                onClick={() =>setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}>
                <BiPlusMedical size='30' style={{ color: 'white', backgroundColor: 'red' }} />
              </Button>
            </div>
            <Collapse in={open} >
              <div id="example-collapse-text" style={{ width: '60%', margin: 'auto' }}>
                {item.answer}
              </div>
            </Collapse>
          </li>
        ))}
      </ul>
    </div>
  );
}