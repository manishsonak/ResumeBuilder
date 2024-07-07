import { useState } from 'react'
import './Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import signup from '../../assets/Signup.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    
    const navigator=useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            
       

        const response=await fetch('http://localhost:3000/auth/createuser',{
            method:'POST',
            mode: "cors",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:name,email:email,password:password})
        });
        const json=await response.json()
        // console.log(json);

        // console.log(json.success);
        if(json.success){
            //save the auth token and redirect
            // localStorage.setItem('token',json.authtoken);
            toast.success('Account Sucessfully created', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            navigator("/login");

        }
        else{
            toast.error(' User Already exist', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
        }
    } catch (error) {
        toast.error('Sorry! Account Not Created', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
    }
    }


  return (
    <div className="containers">
        <div className="left">
            <ToastContainer/>
            <img src={signup} alt="" />
        </div>

    <form className="form_main" onSubmit={handleSubmit}>
    <p className="heading">Create an Account</p>
    <p>Join for exclusive access!</p>
    <div className="inputContainer">
    <label htmlFor="username">Username: </label>
    <input placeholder="Username" required onChange={(e)=>{setname(e.target.value)}} value={name} id="username" className="inputField" type="text"/>
    </div>
    <div className="inputContainer">
    <label htmlFor="email">Email: </label>
    <input placeholder="Email" id="email" required onChange={(e)=>{setemail(e.target.value)}} value={email} className="inputField" type="email"/>
    </div>
    
<div className="inputContainer">
    <label htmlFor="password">Passowrd: </label>
    <input placeholder="Password" id="password" required minLength={5} onChange={(e)=>{setpassword(e.target.value)}} value={password} className="inputField" type="password"/>
</div>
              
           
<button id="button" type="submit">SignUp</button>
    <div className="signupContainer">
        <p>Do you have any account?</p>
        <Link to="/login">Login</Link>
    </div>
</form>
    </div>
  )
}

export default Signup
