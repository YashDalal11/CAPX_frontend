import React,{useState} from 'react'
import '../../../App.css'
import Card from '../../../components/Card/Card'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './StepName.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { setName } from '../../../store/activateSlice'
const StepName = ({onNext}) => {
  const [userName,setUserName] = useState(useSelector(state=>state.activate.name));
  const Dispatch = useDispatch();
  const handleOnChange = (e)=>{
      setUserName(e.target.value)
  }
  const handleOnClick = ()=>{
    Dispatch(setName(userName));
    onNext()
  }
  return (
    <div className='cardWrapper'>
      <Card title="What’s your full name?" logo="name">
        <Input
            type="name"
            value={userName}
            onChange={handleOnChange}
            placeholder="Your Name"
        />
        <p className={styles.text}>
        People use real names at CAPX :) 
        </p>
        <Button 
          text="Next"
          onClick={handleOnClick}
        />
      </Card>
    </div>
  )
}

export default StepName
