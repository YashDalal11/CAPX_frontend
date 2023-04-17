import React from 'react'
import style from './UserButton.module.css'
const UserButton = ({onClick,text,logo,styles}) => {
  return (
    <button 
        className={style.button}
        onClick={onClick}
        style={styles}
    >
        <div className={style.userButtonText}>{text}</div>
        <div>
            <img className={style.img} src={`/images/${logo}.png`} alt={logo} />
        </div>
    </button>
  )
}

export default UserButton
