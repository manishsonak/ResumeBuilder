import style from './Body.module.css'
import { Download } from 'react-feather';
const Body = () => {

    const colors=["#ff6347","#00b7eb","#32cd32","#ffcc33","#20b2aa"];

  return (
   <div className={style.container}>
    <h3>Resume Builder</h3>
    <div className={style.toolbar}>
       <div className={style.colors}> 

       {
        colors.map((item)=>
            <span key={item} className={style.color} style={{backgroundColor:item}}></span>
        
        )
       }
       </div>
       <div className={style.button}>
        <button> Download <Download/></button>
       </div>
    </div>

   </div>
  )
}

export default Body
