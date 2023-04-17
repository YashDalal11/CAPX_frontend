import React,{useState} from 'react'
import '../../../App.css'
import Card from '../../../components/Card/Card'
import styles from './StepAvatar.module.css'
import Button from '../../../components/Button/Button'
import { useSelector , useDispatch} from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import { activate } from '../../../http'
import { setUserActivate } from '../../../store/authSlice'
const StepAvatar = () => {
  const Dispatch = useDispatch();
  const {name,avatar} = useSelector(state=>state.activate)
  const [image,setImage] = useState('/images/avatar.png')

  const handleOnClick=async ()=>{
    try{
      await activate({name ,avatar})
    }catch(err){
      console.log(err)
      return
    }
    Dispatch(setUserActivate())
  }
  const captureImage=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
      setImage(reader.result);
      Dispatch(setAvatar(reader.result))
    }
  }
  return (
    <div className='cardWrapper'>
      <Card title={`Okay, ${name}!`} logo="monkey">
        <p className={styles.text}>
        How's this photo? 
        </p>
        <div className={styles.avatarWrapper}>
          <img 
            className={styles.avatar}
            src={image} 
            alt="avatar" />
        </div>
        <div>
          <input
            onChange={captureImage}
            id="avatarInput"
            type="file"
            className={styles.avatarInput}
          />
          <label 
            className={styles.avatarLabel}
            htmlFor='avatarInput'
          >
            Choose a different photo
          </label>

        </div>
        <Button 
          text="Next"
          onClick={handleOnClick}
        />
      </Card>
    </div>
  )
}

export default StepAvatar
