import React,{useState,useEffect} from 'react'
import { findMatch } from '../../http/index';
import { useSelector,useDispatch} from 'react-redux';
import RidersCard from '../../components/RidersCard/RidersCard';
import style from './AvailableRides.module.css'
import Button from '../../components/Button/Button';
import {setRides} from '../../store/availableRidesSlice'
import { setUserRideId } from '../../store/rideSlice';
import { useNavigate } from 'react-router-dom'
import { setPartner } from '../../store/partnerSlice';

const  AvailableRides = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const {startingPoint,destinationPoint,gender}= useSelector(state=>state.ride)
  const {userCategory} = useSelector(state=>state.userType)
  const {_id} = useSelector(state=>state.auth.user) 
  const { rides } = useSelector(state=>state.availableRide)

  console.log("rides")
  console.log(rides)
  
  const handleClick = async()=>{
    
    await findMatch({
        startingPoint,
        destinationPoint,
        gender,
        userCategory,
        _id,
        retry:"true"
      }).then(res=> {
        console.log("refresh")
        console.log(res)
        if(res.data.bookRideId){
          Dispatch(setPartner(res.data.partner))
          console.log("navigate")
          navigate('/startNow');
          return
        }else{
          Dispatch(setRides(res.data.rides))
        Dispatch(setUserRideId(res.data.userRideId))
        console.log(res.data)
        console.log(res.data.rides)
        navigate('/availableRides');
        }

        
        
      });
    
  }
  return (
    <>
    <div className={style.container}>
    {/* {rides.forEach(rideDetails=><RidersCard key={rideDetails.rideId} rideDetails={rideDetails}/>)} */}
    { rides.length===0?<p>No Rides</p>:
      rides.map((ride,index)=><RidersCard key={ride.rideID} rideDetails={ride}/>)
    }
    </div>
    <Button text="Refresh" onClick={handleClick} />
    </>
  )
}

export default AvailableRides
