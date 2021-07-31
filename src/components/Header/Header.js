import React, { useState, useEffect , useRef} from 'react';
import './header.css'
import logo from '../../images/logo.png'
import { GiHamburgerMenu, GiFiles } from "react-icons/gi";
import { RiPagesLine, RiLoginCircleLine, RiRecordMailLine, RiFileCodeLine, RiPantoneLine, RiContactsBookLine } from "react-icons/ri";
import { BsQuestionSquare,BsInfoSquare } from "react-icons/bs";
import { BsFillPersonPlusFill,BsFillEyeFill,BsFillHouseDoorFill,BsFillStarFill,BsChatFill,BsFillPeopleFill,BsCardList,BsFilm,BsChevronRight,BsChevronDown,BsEnvelope } from "react-icons/bs";
import {IoNotificationsOutline} from 'react-icons/io5'
import { Popover, Overlay, Button } from 'react-bootstrap';
export default function Header() {
 
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
  const[classname,setClassname]=useState('header-not-visible')
  const[categoryClassname,setCategoryClassname]=useState('dropdown-closed')
  const[trailerClassname,setTrailerClassname]=useState('dropdown-closed')
  const[pagesClassname,setPagesClassname]=useState('dropdown-closed')
  const[authenticationClassname,setAuthenticationClassname]=useState('dropdown-closed')
  const[extraClassname,setExtraClassname]=useState('dropdown-closed')
  const[categoryArrowRight,setCategoryArrowRight]=useState('category-icon-right open')
  const[categoryArrowDown,setCategoryArrowDown]=useState('category-icon-down close')
  const[trailerArrowRight,setTrailerArrowRight]=useState('trailer-icon-right open')
  const[trailerArrowDown,setTrailerArrowDown]=useState('trailer-icon-down close')
  const[pagesArrowRight,setPagesArrowRight]=useState('pages-icon-right open')
  const[pagesArrowDown,setPagesArrowDown]=useState('pages-icon-down close')
  const[faqArrowRight,setFaqArrowRight]=useState('faq-icon-right open')
  const[faqArrowDown,setFaqArrowDown]=useState('faq-icon-down close')
  const[faqClassname,setFaqClassname]=useState('dropdown-closed')
  const[authenticationArrowRight,setAuthenticationArrowRight]=useState('authentication-icon-right open')
  const[authenticationArrowDown,setAuthenticationArrowDown]=useState('authentication-icon-down close')
  const[extraArrowRight,setExtraArrowRight]=useState('extra-icon-right open')
  const[extraArrowDown,setExtraArrowDown]=useState('extra-icon-down close')
  const toggleMenu=()=>{
      setClassname('header-not-visible')
  }
  const toggleMenu2=()=>{
    setClassname('header-visible')
}
const openTrailerDropdown=()=>{
    setTrailerClassname('dropdown-open')
    setTrailerArrowRight('trailer-icon-down close')
    setTrailerArrowDown('trailer-icon-down open')
}
const closeTrailerDropdown=()=>{
    setTrailerClassname('dropdown-closed')
    setTrailerArrowRight('trailer-icon-down open')
    setTrailerArrowDown('trailer-icon-right close')
}
const openPagesDropdown=()=>{
    setPagesClassname('dropdown-open')
    setPagesArrowRight('pages-icon-down close')
    setPagesArrowDown('pages-icon-down open')
}
const closePagesDropdown=()=>{
    setPagesClassname('dropdown-closed')
    setPagesArrowRight('pages-icon-down open')
    setPagesArrowDown('pages-icon-right close')
}
const openAuthenticationDropdown=()=>{
    setAuthenticationClassname('dropdown-open')
    setAuthenticationArrowRight('authentication-icon-down close')
    setAuthenticationArrowDown('authentication-icon-down open')
}
const closeAuthenticationDropdown=()=>{
    setAuthenticationClassname('dropdown-closed')
    setAuthenticationArrowRight('authentication-icon-down open')
    setAuthenticationArrowDown('authentication-icon-right close')
}
const openExtraDropdown=()=>{
    setExtraClassname('dropdown-open')
    setExtraArrowRight('extra-icon-down close')
    setExtraArrowDown('extra-icon-down open')
}
const closeExtraDropdown=()=>{
    setExtraClassname('dropdown-closed')
    setExtraArrowRight('extra-icon-down open')
    setExtraArrowDown('extra-icon-right close')
}
const openCategoryDropdown=()=>{
    setCategoryClassname('dropdown-open')
    setCategoryArrowRight('category-icon-down close')
    setCategoryArrowDown('category-icon-down open')
  }
  const closeCategoryDropdown=()=>{
    setCategoryClassname('dropdown-closed') 
    setCategoryArrowRight('category-icon-down open')
    setCategoryArrowDown('category-icon-right close')
    
  }
  const openFaqDropdown=()=>{
    setFaqClassname('dropdown-open')
    setFaqArrowRight('faq-icon-down close')
    setFaqArrowDown('faq-icon-down open')
  }
  const closeFaqDropdown=()=>{
    setFaqClassname('dropdown-closed')
    setFaqArrowRight('faq-icon-down open')
    setFaqArrowDown('faq-icon-right close')
  }
    return (
        <div className="header-container">
            <div className={classname}>
                <div className="menu-container">
                    <div className="logo-image"><img src={logo} alt="logo"/></div>
                    <div className="streamit"><a className="streamit" href="/">ineTrail</a></div>
                    <div className="burgermenu" onClick={toggleMenu}><GiHamburgerMenu/></div>
                </div>
                <div className="menu-options">
                    <div className="menu-item"><a href="/dashboard"><BsFillHouseDoorFill/> Dashboard</a></div>
                    <div className="menu-item trailer">
                        <div> <BsFilm/> Trailer</div>
                       <div>
                         <BsChevronRight className={trailerArrowRight} onClick={openTrailerDropdown}/>
                         <BsChevronDown className={trailerArrowDown} onClick={closeTrailerDropdown}/>
                       </div>            
                    </div>
                    <div className={trailerClassname}>
                        <div className="dropdown-item"> <BsFillPersonPlusFill/> <a href="/addtrailer">Add Trailer</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/trailers">Trailer List</a></div>
                    </div> 
                    <div className="menu-item"><a href="/ratings"> <BsFillStarFill/> Rating</a></div>
                    <div className="menu-item"><a href="/commentlist"> <BsChatFill/> Comments</a></div>
                    <div className="menu-item"><a href="/userlist"> <BsFillPeopleFill/> User</a></div>
                    <div className="menu-item"> <RiContactsBookLine/> <a href="/messages">Messages</a></div>
                    <div className="menu-item category">
                       <div><BsCardList/> Category</div> 
                       <div>
                         <BsChevronRight className={categoryArrowRight} onClick={openCategoryDropdown}/>
                         <BsChevronDown className={categoryArrowDown} onClick={closeCategoryDropdown}/>
                       </div>
                    </div>
                    <div className={categoryClassname}>
                        <div className="dropdown-item"><BsFillPersonPlusFill/> <a href="/addcategory">Add Category</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/categories"> Category List</a></div>
                    </div>
                    
                    <div className="menu-item faq">
                        <div> <BsQuestionSquare/> Faq</div>
                       <div>
                         <BsChevronRight className={faqArrowRight} onClick={openFaqDropdown}/>
                         <BsChevronDown className={faqArrowDown} onClick={closeFaqDropdown}/>
                       </div>            
                    </div>
                    <div className={faqClassname}>
                        <div className="dropdown-item"> <BsFillPersonPlusFill/> <a href="/addfaq">Add FAQ</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/faqs">FAQ List</a></div>
                    </div>
                    <div className="menu-item pages">
                        <div> <GiFiles/> Pages </div>
                       <div>
                         <BsChevronRight className={pagesArrowRight} onClick={openPagesDropdown}/>
                         <BsChevronDown className={pagesArrowDown} onClick={closePagesDropdown}/>
                       </div>
       
                    </div> 
               
                      <div className={pagesClassname}>
                        <div className="dropdown-item"> <BsInfoSquare/> <a href="/about">About Us</a></div>
                        <div className="dropdown-item"> <BsInfoSquare/> <a href="/privacypolicy">Privacy Policy</a></div>
                        <div className="dropdown-item"> <BsInfoSquare/> <a href="/termsofuse">Terms of Use</a></div>
                        <div className="dropdown-item"> <BsInfoSquare/> <a href="/contactinfo">Contact Info</a></div>
                        
                      </div> 
         
               </div>
            </div>
            <div className="header-logo">
                <div className="menu" onClick={toggleMenu2}><GiHamburgerMenu/></div>
                <div><img src={logo} alt="logo"/></div>
                <div>ineTrail</div>
            </div>
           
            <div  className='header-left' style={{display:'flex', justifyContent:'space-between'}}>
            <div ref={ref}>
           <Button onClick={handleClick} style={{backgroundColor:'inherit', border:'none', margin:'auto',color:"white"}}><IoNotificationsOutline type='button' size ='30' style={{marginTop:'20px'}} onClick={handleClick}/></Button>
           <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{backgroundColor:'#181818'}}>
          <Popover.Title as="h3"  style={{backgroundColor:'#181818'}}>Your Notifications</Popover.Title>
          <Popover.Content style={{color:'white'}}>
            <ul>
                <li><strong>Holy guacamole!</strong> Check this info.</li>
                <li><strong>Holy guacamole!</strong> Check this info.</li>
                <li><strong>Holy guacamole!</strong> Check this info.</li>
                <li><strong>Holy guacamole!</strong> Check this info.</li>
                <li><strong>Holy guacamole!</strong> Check this info.</li>
            </ul>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
           <BsEnvelope size ='30'  style={{margin:'auto 20px'}}/>
            {/* <div>
                <input  className="search-bar" placeholder="Search"/>
            </div> */}
                      
                <img className="header-profile-img" src="https://i.postimg.cc/C13Ccsp0/christiana-rivers-O-XIv-Dy0pcs-unsplash.jpg" alt="pic" style={{marginRight:"15px"}}/>
            </div>
            
           
   
      
       </div>
    )
}
