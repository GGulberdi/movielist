import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
// import { handleInputChange } from 'react-select/src/utils';




export default function Contact() {
const [firstname, setFirstname]=useState('');
const [lastname, setLastname]=useState('');
const [email, setEmail]=useState('');
const [phoneNumber, setPhoneNumber]=useState('');
const [content, setContent]=useState('');
const [subject, setSubject]=useState('');
const [adminId, setAdminId]= useState('60e3f32b8413970015891836');






const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('clicked')

    const initialState = {
      firstname: '',
      lastname: '',
      phoneNumber: '',
      email: '',
      content: '',
      subject:''
    };
    
   
    const formData = new FormData()
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('phoneNumber', phoneNumber)
    formData.append('email', email)
    formData.append('content', content)
    formData.append('subject', subject)

    

    await axios.post('http://movieapp-server.herokuapp.com/messages', formData )
      .then((res) => {
        console.log(res)
        window.location.reload();
        
      })
      .catch((err) => console.log(err))

      const formDataNotifications = new FormData()
     

      formDataNotifications.append('userId', adminId)
      formDataNotifications.append('content', content)
      formDataNotifications.append('title', subject)

      await axios.post('http://movieapp-server.herokuapp.com/notifications', formDataNotifications )
      .then((res) => {
        console.log(res)
       
        
      })
      .catch((err) => console.log(err))
 
}





  return (
    <div>
      <Container style={{ width: '100%' , height:'100vh'}}>
        <Row>
          <Col className='contact-address' style={{ border: 'solid #181818', marginTop:'2vh', textAlign:'center' }} lg='4' >
            <IoLocationOutline size='100' /> <br />
            <h4 style={{ color: 'red' }}>Address</h4><br />
            <h5 style={{ padding: 0 }}>Brooklyn, New York</h5>
          </Col>
          <Col className='contact-anytimeCall' style={{ border: 'solid #181818',  marginTop:'2vh', textAlign:'center'}} lg='4'>
            <BiPhoneCall size='100' /><br />
            <h4 style={{ color: 'red' }}>Anytime Call</h4><br />
            <h5 style={{ padding: 0 }}>+01234585485</h5>
          </Col>
          <Col className='contact-emailUs' style={{ border: 'solid #181818', textAlign:'center' , marginTop:'2vh'}} lg='4'>
            <AiOutlineMail size='100' /><br />
            <h4 style={{ color: 'red' }}>Email Us</h4><br />
            <h5 style={{ padding: 0 }}>sinetrail2021@gmail.com</h5>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row > <h1 style={{ textAlign: 'center', width: '100%' }}>Contact Us</h1><br />
          <h6 style={{ textAlign: 'center', width: '100%' }}>Fill up this form to reach out stunning SineTrail team and click on send message</h6> </Row>
        <br />
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg='6'>
              <Form.Control type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} style={{backgroundColor:'black' , color:'white' ,margin: '0 auto 20px auto', border:" solid  #181818"}} placeholder="Your Name" required />
            </Col>
            <Col lg='6'>
              <Form.Control type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} style={{backgroundColor:'black' , color:'white' , margin: '0 auto 20px auto', border:" solid  #181818"}} placeholder="Last Name" required/>
            </Col>
          </Row>
          <Row className="g-2">
          <Col lg='6'>
              <Form.Control type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} style={{backgroundColor:'black' , color:'white' , margin: '0 auto 20px auto', border:" solid  #181818"}} placeholder="Phone Number" />
            </Col>
            <Col lg='6'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{ width: '100%', margin: '0 auto 20px auto', backgroundColor: 'black', color: 'white', border:" solid  #181818" }} placeholder="Enter email"  required/>
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
          <Col lg='12'>
              <Form.Control type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} style={{backgroundColor:'black' , color:'white' ,margin: '0 auto 20px auto', border:" solid  #181818"}} placeholder="Subject"  required/>
            </Col>
            </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder='Your Message' value={content} onChange={(e)=>setContent(e.target.value)} style={{ width: '100%', margin: '0 auto 20px auto', backgroundColor: 'black', color: 'white', border:" solid  #181818" }} as="textarea" rows={5} required/>
            </Form.Group>
            </Col>
          </Row>
          <Button style={{ width: '20%', backgroundColor: 'red' }} type="submit">
            Send Message
          </Button>
          </Form>
      </Container>
    </div>
  )
}
