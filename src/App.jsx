import { useEffect, useState } from "react";
import Login from "./Components/AuthForms/Login";
import Navbar from "./Components/AuthForms/Navbar";
import Signup from "./Components/AuthForms/Signup";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
// import { Sections } from "./Components/Sections/Sections";

function App() {
  const [auth,setAuth]=useState(false);




  useEffect(() => {
  
      let isLogin=localStorage.getItem('token');
   

      if (isLogin) {
  
        setAuth(true);
      }
      else{
  
        setAuth(false);
      }
  },[auth,setAuth] )
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/login" element={!auth?<Login />:<Body/>}/>
          <Route path="/resume" element={ <Body/>}/>
          <Route path="/signup" element={ <Signup/>}/>
        </Routes>
        {/* {auth?null:<Sections/>} */}
        <Footer/>
      </Router>
    
    </>
  );
}

export default App;
