import { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigator=useNavigate();


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
        navigator('/')
        window.location.reload();
   }
   

   

  return (



    <div className="navcontainer">
        <div className="logo">
          <h1>Resume Builder</h1>
        </div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
         { auth? <li><NavLink to="/resume">Resume</NavLink></li>:""}
          <li><NavLink to="/login">About</NavLink></li>
        </ul>
        {
          !auth ? <div className='login'>
            <NavLink to="/login">
            <button className='button'>Login</button>
            </NavLink>
          </div>:<div className='logout'>
        
            <button className='button' onClick={Logout}>Logout</button>
          
          </div>
        }
    </div>
  
  )
}

export default Navbar
