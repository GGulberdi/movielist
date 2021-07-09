// https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api

import React, { useState , useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import './pages.css'
import { Link } from 'react-router-dom';

import axios from 'axios';
// import { setUserSession } from './Utils/Common';

const loginData={

    email:'sinetrail2021@gmail.com',
    password:'#Sinetrail2021',
    role:'admin'
}


function Login(props) {
    const [isLogged, setIsLogged] = useState(false);
     const [password , setPassword]=useState('');
     const [email, setEmail]= useState('');
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState('');
console.log(email)
console.log(auth)

useEffect(()=>{

    const config={
        headers:{
            Authorization:'Bearer' + localStorage.getItem('token')

        }
    }
     axios.get('https://movieapp-server.herokuapp.com/users', config)
.then(response => {
    setData(response.data.data)
    localStorage.setItem('token', response.token)
    // console.log(data)
})
.catch(error => {
  setIsLogged(false);
  if (error.response.status === 401) setError(error.response.data.message);
  else setError("Something went wrong. Please try again later.");
});// handle button click of login form
},[])




const handleSignin= (e)=>{
    e.preventDefault()
   setIsLogged(true);

// console.log(data)
    // let data1=data.length;
    for (let i=0; i<data.length; i++){
        if(data.email===email && data.password===password && data.role==='admin'){
            setAuth('logged In')
        }else {setAuth('wrong username or password')}
   }
   setPassword('');
   setEmail('');
    //   setIsLogged(false);
//  props.history.push('/dashboard');
//  alert('you are succesfully logged in')
  
}

    
    return (
        <div className='form-main'>
            <h2>Sign in </h2>
            <form type='submit'>
            <div className='enter-email'>
                {/* <input className='enter-email' type="text" {...username} autoComplete="new-password" placeholder='Enter email' /> */}
                <input className='enter-email' type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)} autoComplete="new-password" placeholder='Enter email' />
            </div>
            <div style={{ marginTop: 10 }}>
                {/* <input className='enter-password' type="password" {...password} autoComplete="new-password" placeholder='Password'/> */}
                <input className='enter-password' type="password"  value ={password}  onChange={(e)=>setPassword(e.target.value)} autoComplete="new-password" placeholder='Password'/>

            </div>
            
            <input   type='button' onClick={handleSignin} value={isLogged ? 'Loading...' : 'Sign in'} /><br />
</form>
            <div  className='login-submit-remember'>
            <div>
            <input type="checkbox" id="remember-me" name="rememberMe" value="rememberMe" />
            <label for="rememberMe"> Remember Me</label><br />
            </div>
            </div>
            <div>
                <h5>Don't have am account? <Link style={{ color:'red', scrollMarginBottom:'0'}} to='/'>Sign Up</Link></h5>
                <Link  style={{ color:'red', paddingTop:'0', marginTop:'0'}} to='/'>Forgot your password?</Link>

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

export default Login;




// useEffect(()=>{

// })


//utils/Common.js

// // return the user data from the session storage
// export const getUser = () => {
//   const userStr = sessionStorage.getItem('user');
//   if (userStr) return JSON.parse(userStr);
//   else return null;
// }

// // return the token from the session storage
// export const getToken = () => {
//   return sessionStorage.getItem('token') || null;
// }

// // remove the token and user from the session storage
// export const removeUserSession = () => {
//   sessionStorage.removeItem('token');
//   sessionStorage.removeItem('user');
// }

// // set the token and user from the session storage
// export const setUserSession = (token, user) => {
//   sessionStorage.setItem('token', token);
//   sessionStorage.setItem('user', JSON.stringify(user));
// }

//dashboard

// import React from 'react';
// import { getUser, removeUserSession } from './Utils/Common';

// function Dashboard(props) {
//   const user = getUser();

//   // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
//     props.history.push('/login');
//   }

//   return (
//     <div>
//       Welcome {user.name}!<br /><br />
//       <input type="button" onClick={handleLogout} value="Logout" />
//     </div>
//   );
// }

// export default Dashboard;


// privateRoute.js

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { getToken } from './Common';

// // handle the private routes
// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
//     />
//   )
// }

// export default PrivateRoute;

// //publicRoate.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { getToken } from './Common';

// // handle the public routes
// function PublicRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
//     />
//   )
// }

// export default PublicRoute;

//app.js
// ..
// ...
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
// ...
// ...
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <PublicRoute path="/login" component={Login} />
//       <PrivateRoute path="/dashboard" component={Dashboard} />
//     </Switch>
// ...
// ....
// export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
// import axios from 'axios';

// import Login from './Login';
// import Dashboard from './Dashboard';
// import Home from './Home';

// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
// import { getToken, removeUserSession, setUserSession } from './Utils/Common';

// function App() {
//   const [authLoading, setAuthLoading] = useState(true);

//   useEffect(() => {
//     const token = getToken();
//     if (!token) {
//       return;
//     }

//     axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
//       setUserSession(response.data.token, response.data.user);
//       setAuthLoading(false);
//     }).catch(error => {
//       removeUserSession();
//       setAuthLoading(false);
//     });
//   }, []);

//   if (authLoading && getToken()) {
//     return <div className="content">Checking Authentication...</div>
//   }

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//             <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
//             <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
//           </div>
//           <div className="content">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <PublicRoute path="/login" component={Login} />
//               <PrivateRoute path="/dashboard" component={Dashboard} />
//             </Switch>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



