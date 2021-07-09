import React from 'react'
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
 
      <div className=' contact-container'>
      <h1>Contact Us</h1>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  style={{width: '50%', margin:'auto', backgroundColor:'black', color:'white', border:'none'}} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" style={{width: '50%', margin:'auto', backgroundColor:'black', color:'white', border:'none'}}placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" style={{width: '50%', margin:'auto', backgroundColor:'black', color:'white' , border:'none'}} rows={5} />
  </Form.Group>
  <Button style={{width: '10%', backgroundColor:'red'}} type="submit">
    Submit
  </Button>
</Form>



</div>
    </div>
  )
}
