import style from './Section2.module.css';
import ResumeTemplate from '../../assets/resumeTemplets.png'
import { Link } from 'react-router-dom';
const Section2 = () => {
  return (
    <div className={style.leftRightContainer}>
        <div className={style.left}>
            <h2>
        Try Our CV Builder Now
            </h2>
            <p>
            Online tools such as CV builders and job search websites have become the new norm in modern-day career advancement. We all use technology to improve our communication, learning and productivity. Why should searching for a job and writing a resume be any different?
            </p>
            <button className={style.createbutton}><Link to="/login">Create Resume</Link></button>
        </div>
        <div className={style.right}>
          <img src={ResumeTemplate} alt=""/>
        </div>
    </div>
  )
}

export default Section2
