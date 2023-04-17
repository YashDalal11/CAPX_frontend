import React from 'react'
import styles from './Button.module.css'
const Button = ({text,onClick}) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {text}
        <img src="/images/right-arrow.png" alt="next" className={styles.rightArrow}/>
      </button>
    </>
  )
}

export default Button
