import React,{useState} from 'react'
import style from './StartNow.module.css'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setDestinationPointCoordinates, setRideStarted, setStartingPointCoordinates } from '../../store/rideSlice'
const StartNow = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch()
  const {partner} = useSelector(state=>state.partner)
  const {startingPoint,destinationPoint} = useSelector(state=>state.ride)
  const API_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  // const [coordinates,setCoordinate] = useState('')
  const handleClick = async()=>{
    console.log("Ride Started")
    Dispatch(setRideStarted())
    await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${startingPoint}.json?access_token=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const coordinates = data.features[0].center;
      console.log("coordinates")
      console.log(coordinates)
      // setCoordinate(c)
      // return coordinates// [longitude, latitude]
      Dispatch(setStartingPointCoordinates(coordinates))
    })
    .catch(error => console.error(error));
    // const spC = await convertPlaceToCordinates(startingPoint)
    // console.log("click")
    // console.log(coordinates)
    await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${destinationPoint}.json?access_token=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const coordinates = data.features[0].center;
      console.log("coordinates")
      console.log(coordinates)
      // setCoordinate(c)
      // return coordinates// [longitude, latitude]
      Dispatch(setDestinationPointCoordinates(coordinates))
    })
    // const dpC = await convertPlaceToCordinates(destinationPoint)
    
    navigate('/rideRoute')
  }
 
  
  return (
    <div className={style.container}>
    <Card title="Booked Ride" logo="logo">
      <div className={style.StartCard}>
      <div className={style.info}>
          <div>{`Partner :- ${partner.name}`}</div>
        </div>
        <div className={style.info}>
          <div>{`Phone :- ${partner.phone}`}</div>
        </div>
        <div className={style.info}>
          <div>{`Starting Point :- ${startingPoint}`}</div>
        </div>
        <div className={style.info}>
          <div>{`Destination Point :- ${destinationPoint}`}</div>
        </div>
        
        <Button text="Start Ride" onClick={handleClick} />
      </div>
    </Card>
    </div>
  )
}

export default StartNow
