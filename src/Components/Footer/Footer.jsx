import style from './Footer.module.css'
import logo from '../../assets/Logo.png'
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.container}>
     <div className={style.footerlinks}>
      <img src={logo} alt="Resume" width="100px" />
     </div>
     <div className={style.footerlinks}>
      <h3>Company</h3>
      <a>About Us</a>
      <a>Careers</a>
      <a>Contact Us</a>
     </div>
     <div className={style.footerlinks}>
      <h3>Further Information</h3>
      <a>Terms and Conditions</a>
      <a>Privacy Policy</a>
     </div>
     <div className={style.social}>
      <h3>Follow Us</h3>
     <a target='_blank' className={style.follow} href="https://www.facebook.com/profile.php?id=100025851462616"><i className="fa-brands fa-facebook"></i></a>
      <a target='_blank' className={style.follow} href="https://www.instagram.com/manish_sonak/"><i className="fa-brands fa-square-instagram"> </i></a>
     <a target='_blank' className={style.follow} href="https://www.linkedin.com/in/manish-sonak-26233129a/"><i className="fa-brands fa-linkedin"></i></a>

     </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright © 2024 by Manish | All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
