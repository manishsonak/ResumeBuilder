
// import { useEffect, useState } from "react";
import resumeSvg from "../../assets/Resume.svg"
import { Sections } from "../Sections/Sections";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Header.module.css";

function Header() {

 return (
    <>
    <div className={styles.container}>
      <ToastContainer/>
      <div className={styles.left}>
        <p className={styles.heading}>
          BOOST YOUR CAREER CHASING
        </p>
        <h2>
          Land your dream job with already made
        </h2>
        <h2> <span>Eye Catchy Resumes.</span></h2>
        <p className={styles.heading}>
         Create Awesome Resumes With One Of Our Template In Just Few Seconds.
        </p>
        <Link to="/login"><button className={styles.btns}> Create Resume For Free </button></Link>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  <Sections/>
    </>
  );
}

export default Header;