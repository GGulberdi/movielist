import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import './pages.css'
import { Link } from 'react-router-dom';

import axios from 'axios';
// import { setUserSession } from './Utils/Common';

function Register(props) {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isActive, setisActive] = useState(true);

console.log(firstname, lastname, email, password, confirmPassword)

  // const username = useFormInput('');
  // const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
    const handleLogin = async(e) => {
      e.preventDefault()
      setError(null);
      setLoading(true);

      const newData = new FormData();
      
        newData.append('firstname', firstname);
        newData.append('lastname',  lastname);
        newData.append('email', email);
        newData.append('password', password);
        newData.append('isActive', isActive);
     
      await axios.post('https://movieapp-server.herokuapp.com/users',newData)
      .then(response => {
        setLoading(false);
        console.log(response)
        alert('you succesfully loged in')
        // setUserSession(response.data.token, response.data.user);
        // props.history.push('/dashboard');
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
    }

  return (
    <div className='form-main'>
      <h2>Register </h2>

      <div  style={{ marginTop: 10 }}>
        {/* <input className='enter-email' type="text" {...username} autoComplete="new-password" placeholder='Enter email' /> */}
        <input className='enter-firstname' type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder='Enter firstname' />
      </div>
      <div  style={{ marginTop: 10 }}>
        {/* <input className='enter-email' type="text" {...username} autoComplete="new-password" placeholder='Enter email' /> */}
        <input className='enter-lastname' type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder='Enter lastname' />
      </div>


      <div  style={{ marginTop: 10 }}>
        {/* <input className='enter-email' type="text" {...username} autoComplete="new-password" placeholder='Enter email' /> */}
        <input className='enter-email' type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
      </div>

      <div  style={{ marginTop: 10 }}>
        {/* <input className='enter-password' type="password" {...password} autoComplete="new-password" placeholder='Password'/> */}
        <input className='enter-password' type="password" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      </div>

      <div  style={{ marginTop: 10 }}>
        {/* <input className='enter-password' type="password" {...password} autoComplete="new-password" placeholder='Password'/> */}
        <input className='confirm-password' type="password" autoComplete="new-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
      </div>

      <div className='login-submit-remember'>
        <input type="button" onClick={handleLogin} value={loading ? 'Loading...' : 'Sign in'} /><br />
      <div>

          <input type="checkbox" id="remember-me" name="rememberMe" value="rememberMe" />
          <label for="rememberMe"> Remember Me</label><br />
        </div>
      </div>
      <div>
        <h5>Don't have am account? <Link style={{ color: 'red', scrollMarginBottom: '0' }} to='/'>Sign Up</Link></h5>
        <Link style={{ color: 'red', paddingTop: '0', marginTop: '0' }} to='/'>Forgot your password?</Link>

      </div>
    </div>
  );
}

// const useFormInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     const handleChange = e => {
//         setValue(e.target.value);
//     }
//     return {
//         value,
//         onChange: handleChange
//     }
// }

export default Register;


