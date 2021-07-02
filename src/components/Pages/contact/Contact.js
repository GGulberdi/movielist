import format from 'date-fns/esm/format/index'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Field from './Field.js'
import Button from './Button'


export default function Contact() {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [button, setButton] = useState();
  const [textareas, setTextAreas] = useState();

  return (
    <div className='container'>
      <div >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Text type='text' placeholder='name' />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </div>
    </div>
  )
}
