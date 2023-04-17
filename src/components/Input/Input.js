import React from 'react'
import styles from './Input.module.css'
const Input = ({type,value,onChange,placeholder}) => {
  return (
    <>
        <input
        type={type}
        className={styles.Input}
        name="phone-number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
