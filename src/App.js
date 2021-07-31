import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Users from './components/Users/Users'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments'
import Ratings from './components/Ratings/Ratings';
import Categories from './components/Categories/Categories';
import AddCategory from './components/Categories/AddCategory';
import Trailers from './components/Trailers/Trailers';
import AddTrailer from './components/Trailers/AddTrailer';
import TrailerDetails from './components/Trailers/TrailerDetails';
import Message from './components/Messages/Message';
import SingleMessage from './components/Messages/SingleMessage';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Privacy from './components/Pages/Privacy';
import TermOfUse from './components/Pages/TermOfUse';
import ContactInfo from './components/Pages/ContactInfo';
// import Pages from './components/Pages/Pages';
import Login from './components/Pages/Login';
// import ExtraPages from './components/Pages/ExtraPages';
import Confirm from './components/Pages/Confirm';
import About from './components/Pages/About';
import Faqs from './components/Faqs/Faqs';
import AddFaq from './components/Faqs/AddFaq';
import FaqDetails from './components/Faqs/FaqDetails';
import CommentDetails from './components/Comments/CommentDetails';
import RatingDetails from './components/Ratings/RatingDetails';
// import Notifications from './components/Header/Notifications';



function App() {

  const [users, setUsers] = useState([]);
  const [comments,setComments]=useState([]);
  const [trailers, setTrailers] = useState([]);
  
  return (
    <div className="app">
		<Router>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/addcategory" component={AddCategory}/>
				<Route exact path="/addtrailer" component={AddTrailer}/>	
				<Route
				  exact path="/userlist"
				  render={() => <Users users={users} />}
				/>
				<Route
				  exact path="/commentlist"
				  render={() => <Comments comments={comments}/>}
				/>
				<Route
				  exact path="/commentdetails/:id"
				  render={() => <CommentDetails />}
				/>
				<Route
				  exact path="/ratings"
				  render={() => <Ratings/>}
				/>
				<Route
				  exact path="/ratingdetails/:id"
				  render={() => <RatingDetails />}
				/>
				<Route
				  exact path="/categories" 
				  render={() => <Categories/>}
				/>
				<Route
				  exact path="/trailers"
				  render={() => <Trailers trailers={trailers}/>}
				/>
				<Route
				  exact path="/trailerdetails/:id"
				  render={() => <TrailerDetails />}
				/>
				<Route
				  exact path="/messages"
				  render={() => <Message />}
				/>
				<Route
				  exact path="/singlemessage/:id"
				  render={() => <SingleMessage />}
				/>
				<Route
				  exact path="/privacypolicy"
				  render={() => <Privacy />}
				/>
				<Route
				  exact path="/termsofuse"
				  render={() => <TermOfUse />}
				/>
				<Route
				  exact path="/contactinfo"
				  render={() => <ContactInfo />}
				/>
				<Route
				  exact path="/login"
				  render={() => <Login />}
				/>
				
				<Route
				  exact path="/confirm"
				  render={() => <Confirm />}
				/>
				
				<Route
				  exact path="/about"
				  render={() => <About />}
				/>
				<Route
				  exact path="/faqs"
				  render={() => <Faqs />}
				/>
				<Route
				  exact path="/addfaq"
				  render={() => <AddFaq />}
				/>
				{/* <Route
				  exact path="/notifications"
				  render={() => <Notifications />}
				/>
				 */}


				
		
			</Switch>
			<Footer/>
		</Router>
    </div>
  );
}

export default App; 


