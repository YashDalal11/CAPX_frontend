import React from 'react'
import style from './RidersCard.module.css'
import Button from '../Button/Button'
import { useSelector , useDispatch} from 'react-redux'
import {setPartner} from '../../store/partnerSlice'
import {bookRide} from '../../http/index'
import { useNavigate } from 'react-router-dom'

const RidersCard = ({rideDetails}) => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const {user} =useSelector(state=>state.auth)
  const {userCategory} =useSelector(state=>state.userType)
  const {partner} = useSelector(state=>state.partner)
  const {userRideId} = useSelector(state=>state.ride)
  let rideGiverUserId
  let rideGiverRideId
  let rideTakerUserId
  let rideTakerRideId

  if(userCategory==="Ride Giver"){
    rideGiverUserId = user._id
    rideGiverRideId = userRideId
    rideTakerUserId = rideDetails.user._id
    rideTakerRideId = rideDetails.rideID
  }
  else{
    rideGiverUserId = rideDetails.user._id
    rideGiverRideId = rideDetails.rideID
    rideTakerUserId = user._id
    rideTakerRideId = userRideId
  }

  const url = process.env.REACT_APP_API_URL
    const handleClick=async()=>{
      Dispatch(setPartner(rideDetails.user))
      
      await bookRide({
        rideGiverUserId,
        rideGiverRideId,
        rideTakerUserId,
        rideTakerRideId
      }).then(res=> {
        console.log(res)
        navigate('/startNow');
      })
    }
    // console.log("rideDetails")
    // console.log(rideDetails)
  return (
    
    <div className={style.card}>
      <img src={`${url}${rideDetails.user.avatar}`} alt="Profile" className={style.profile}/>
      <h2>{rideDetails.user.name}</h2>
      <p>{rideDetails.user.phone}</p>
      <Button text="Book Now" onClick={handleClick} />
    </div>
    
  )
}

export default RidersCard
