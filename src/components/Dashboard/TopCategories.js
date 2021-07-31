import React,{useEffect, useState} from 'react'
import {Carousel} from 'react-bootstrap'

function TopCategories() {

    useEffect(()=>{

    })





    
    return (
        <div>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>           
        </div>
    )
}

export default TopCategories
