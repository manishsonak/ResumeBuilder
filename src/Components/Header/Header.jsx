import style from "./Header.module.css";
import logo from "../../assets/Resume.svg"

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
            <h1>A <span className={style.higlighted}>Resume</span> that stands out! Make your own resume. <span className={style.higlighted}>it&apos;s free</span></h1>
      </div>
      <div className={style.right}>
        <img src={logo} alt="Resume" width="500px" />
      </div>
    </div>
  )
}

export default Header
