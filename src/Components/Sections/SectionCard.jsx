/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from './Sections.module.css'
function SectionCard({title,content,image}) {
  return (
    <div className={style.Container}>
      <img src={image} alt="image" height="250px" />
      <h2>{title}</h2>
     <p>{content}</p>
    </div>
  )
}

export default SectionCard