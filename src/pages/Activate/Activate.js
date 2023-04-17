import React,{useState} from 'react'
import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
const Activate = () => {
  const steps ={
    1:StepName,
    2:StepAvatar
  }
  const [stepNo,setStepNo] = useState(1);
  const Step = steps[stepNo];

  const onNext = ()=>{
    setStepNo(prev=>prev+1)
  }
  return (
    <div>
      <Step onNext={onNext}/>
    </div>
    
  )
}

export default Activate
