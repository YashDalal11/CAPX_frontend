import React,{useState} from 'react'
import '../../../App.css'
import Card from '../../../components/Card/Card'
import styles from './StepOtp.module.css'
import Button from '../../../components/Button/Button'
import { useSelector } from 'react-redux';
import { verifyOtp } from '../../../http'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import Input from '../../../components/Input/Input'

const StepOtp = ({onNext}) => {
  const {phone,hash} = useSelector(state=>state.auth.otp);
  // console.log(`phone:${phone}, hash:${hash}`)
  const [otp, setOtp] = useState('');
  const Dispatch = useDispatch();

  function handleOtpChange(event) {
    setOtp(event.target.value);
  }
  async function onClickNext(){
    const req = await verifyOtp({
      hash,
      phone,
      otp
    })
    console.log(req.data)
    Dispatch(setAuth(req.data))
  }
  return (
    <div className='cardWrapper'> 
      <Card title="Enter the code we just texted you" logo="lock">
      <Input 
        type="tel"
        value={otp}
        onChange={handleOtpChange}
        placeholder='Enter Your Otp Here'
      />
      <div className={styles.resendText}>Didn’t receive? Tap to resend</div>
      <Button text="Next" onClick={onClickNext}/>
      </Card>
    </div>
  )
}

export default StepOtp
