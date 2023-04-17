import React,{useState} from 'react'
import StepPhone from '../Steps/StepPhone/StepPhone'
import StepOtp from '../Steps/StepOtp/StepOtp'
const Authenticate = () => {
  const steps= {
    1:StepPhone,
    2:StepOtp,
  }
  const [stepNo,setStepNo] = useState(1)
  const Step = steps[stepNo]

  const onNext = ()=>{
    setStepNo(prev=>prev+1)
  }
  return (
    <div>
      <Step onNext={onNext}/>
    </div>
  )
}

export default Authenticate
