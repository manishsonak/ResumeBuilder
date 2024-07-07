import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const json = await response.json();
      // console.log(json);

      console.log(json.success);
      if (json.success) {
        //save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        toast.success('Login Sucessfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigator("/resume");
        window.location.reload();
      } else {
        toast.error('Invalid Email and Password ', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('error occur', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="container">
      <div className="left">
        <img src={login} alt="" />
      </div>

      <div className="rights" style={{width:"50%"}}>
        <form className="form_main" onSubmit={handleSubmit}>
          <p className="heading">Login</p>
          <p>Unlock your world.</p>
          <div className="inputContainer">

          <label htmlFor="Email">Email: </label>
            <input
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              id="username"
              className="inputField"
              type="email"
            />
          </div>

          <div className="inputContainer">
          
            <label htmlFor="Password">Passowrd:</label>
            <input
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              id="password"
              className="inputField"
              type="password"
              />
          </div>

          <button id="button">Login</button>
          <div className="signupContainer">
            <p>Don&apos;t have any account?</p>
            <Link to="/signup">Create an Account</Link>
          </div>
        </form>
      </div>
<ToastContainer/>
    </div>
  );
};

export default Login;
