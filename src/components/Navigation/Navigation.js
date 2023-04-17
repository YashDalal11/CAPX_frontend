import React from 'react'
import styles from './Navigation.module.css'
import {Link} from 'react-router-dom'
const Navigation = () => {
  const logoStyle={
    display:'flex',
    alignItems :'center',
    color:'#fff',
    textDecoration:'none',
    fontWeight:'bold',
    fontSize:'22px',
  }
  const logoText={
    marginLeft:'10px'
  }
  return (
    <nav className={styles.navWrapper}>
      <Link to="/" style={logoStyle}>
        <img src="/images/logo.png" alt="logo"/>
        <span style={logoText}>
          CAPX
        </span>
      </Link>
    </nav>
  )
}

export default Navigation
