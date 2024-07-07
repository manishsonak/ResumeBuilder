import { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    toast.info('Login Sucessfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

        localStorage.removeItem('token');
        navigator('/login')
        window.location.reload();
   }
   

   

  return (

<>

    <div className="navcontainer">
      
        <div className="logo">
          <h1>Resume Builder</h1>
        </div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
         { auth? <li><NavLink to="/resume">Resume</NavLink></li>:""}
          <li><NavLink to="/about">About</NavLink></li>
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
        <ToastContainer/>
</>
  
  )
}

export default Navbar
