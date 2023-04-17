import React,{useState} from 'react'
import ModeSelect from '../ModeSelect/ModeSelect';
import MainPage from '../MainPage/MainPage';
import style from './Main.module.css';

const Main = () => {
  const steps = {
    1: ModeSelect,
    2: MainPage,
  }
  const [stepNo,setStepNo] = useState(1);
  const Step = steps[stepNo];

  const onNext= ()=>{
    setStepNo(prev=>prev+1);
  }

  return (
    <div className={style.stepWrapper}>
      <Step next={onNext}/>
    </div>
  )
}

export default Main
