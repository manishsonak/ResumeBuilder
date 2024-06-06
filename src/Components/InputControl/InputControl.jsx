/* eslint-disable react/prop-types */

import style from './InputContorl.module.css'
const InputControl = ({lable, ...props}) => {
  return (
    <div className={style.container}>
      {
        lable && <label>{lable} :</label>
      }
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl
