import React from 'react'
import Card from '../../components/Card/Card'
import '../../App.css'
import styles from './Home.module.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const onClickHandler=()=>{
    navigate('/authenticate');
  }
  return (
    <div className='cardWrapper'>
      <Card title="Welcome To CAPX" logo="logo">
        <p className={styles.cardText}>
        We’re working hard to get CAPX ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
        </p>
        <Button text="Get your username" onClick={onClickHandler} />
        <div className={styles.bottomText}>
          <div>Have an invite text?</div>
          <div className={styles.signIn}>Sign in</div>
        </div>
      </Card>
    </div>
  )
}

export default Home
