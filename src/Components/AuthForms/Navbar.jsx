import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigator=useNavigate();

    const reff=useRef();
    const reff2=useRef();
    const reff3=useRef();
    const reff4=useRef();

     const [auth,setauth]=useState(false);
    
   useEffect(() => {

    

    let login=localStorage.getItem('token')
    if(login){
        setauth(true)
    }else
    {
        setauth(false)
    }
    
   }, [auth,setauth])


   const Logout=()=>{
        localStorage.removeItem('token');
        useEffect();
        navigator('/')
   }
   

   

  return (



    <div className="navcontainer">

<div className="tab-container">
  <input type="radio" name="tab" id="tab1" className="tab tab--1" />
  <label ref={reff} className="tab_label" htmlFor="tab1">
    <Link onClick={()=>{reff.current.click()}} to="/" className='text-transform'>Home</Link>
  </label>
    
    {!auth? <div className="login">
    <input type="radio" name="tab" id="tab3" className="tab tab--3" />
 <label ref={reff3} className="tab_label" htmlFor="tab3">
 <Link onClick={()=>{reff3.current.click()}} to="/login" className='text-transform'>Login</Link>
 </label>

<input type="radio" name="tab" id="tab2" className="tab tab--2" />
 <label ref={reff2} className="tab_label" htmlFor="tab2">
 <Link onClick={()=>{reff2.current.click()}} to="/signup" className='text-transform'>Signup</Link>
 </label>
   </div>:<div className="logout">

<input type="radio" name="tab" id="tab3" className="tab tab--3" />
<label ref={reff4} className="tab_label" htmlFor="tab3">
<Link onClick={Logout} to="/" className='text-transform'>Logout</Link>
</label>
  </div>}
    {/* <div className="login">

 <input type="radio" name="tab" id="tab2" className="tab tab--2" />
  <label ref={reff2} className="tab_label" htmlFor="tab2">
  <Link onClick={()=>{reff2.current.click()}} to="/signup" className='text-transform'>Signup</Link>
  </label>

  <input type="radio" name="tab" id="tab3" className="tab tab--3" />
  <label ref={reff3} className="tab_label" htmlFor="tab3">
  <Link onClick={()=>{reff3.current.click()}} to="/login" className='text-transform'>Login</Link>
  </label>
    </div>

    <div className="logout">

  <input type="radio" name="tab" id="tab3" className="tab tab--3" />
  <label ref={reff4} className="tab_label" htmlFor="tab3">
  <Link onClick={()=>{reff4.current.click()}} to="/login" className='text-transform'>Logout</Link>
  </label>
    </div> */}


  <div className="indicator"></div>
</div>

    </div>
  
  )
}

export default Navbar
