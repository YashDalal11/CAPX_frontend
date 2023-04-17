import React,{useState} from 'react'
import '../../../App.css'
import Card from '../../../components/Card/Card'
import styles from './StepPhone.module.css' 
import Button from '../../../components/Button/Button'
import {useDispatch} from 'react-redux'
import {sendOtp} from '../../../http/index'
import { setOtp } from '../../../store/authSlice'
const StepPhone = ({onNext}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const Dispatch = useDispatch();

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  async function onClickNext(){
    const req = await sendOtp({phone:phoneNumber})  
    Dispatch(setOtp(req.data))
    // console.log(req.data)
    onNext()
  }
  return (
    <div className='cardWrapper'> 
      <Card title="Enter you phone number" logo="phone">
      <input
        type="tel"
        id="phone-number"
        className={styles.phoneNumberInput}
        name="phone-number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder='+91 9691 402317'
      />
      <Button text="Next" onClick={onClickNext} />
      <div className={styles.bottomText}>
      By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
      </div>
      </Card>
    </div>
  )
}

export default StepPhone
