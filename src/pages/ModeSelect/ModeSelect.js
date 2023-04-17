import React,{useState} from 'react'
import UserButton from '../../components/UserButton/UserButton'
import style from './ModeSelect.module.css'
import Card from '../../components/Card/Card'
import { useDispatch } from 'react-redux'
import {setUserTypeRideGiver,setUserTypeRideTaker} from '../../store/userTypeSlice'
const ModeSelect = ({next}) => {
    // const [userState,setUserState] = useState('');
    const Dispatch = useDispatch();
    const setRideTaker =()=>{
        // setUserState("rideTaker")
        Dispatch(setUserTypeRideTaker())
        next();
    }
    const setRideGiver =()=>{
        // setUserState("rideGiver")
        Dispatch(setUserTypeRideGiver())
        next();
    }
    return (
        <div className={style.cardWrapper}>
            <Card title="Choose your category" logo="logo">
                <div className={style.userButtonWrapper}>
                <UserButton onClick={setRideTaker} text={"Ride Taker"} logo="rideGiver" styles={{marginRight: "20px"}}/>
                <UserButton onClick={setRideGiver} text={"Ride Giver"} logo="rideGiver"/>
                </div>
            </Card>
        </div> 
    )
}

export default ModeSelect
