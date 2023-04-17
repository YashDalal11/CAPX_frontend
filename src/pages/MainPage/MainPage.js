import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import style from './MainPage.module.css'
import Button from '../../components/Button/Button';
import InputForm from '../../components/InputForm/InputForm';
import { Select,MenuItem, } from '@mui/material';
import { findMatch } from '../../http/index'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setStartingPoint,setDestinationPoint,setGender } from '../../store/rideSlice';
import {setRides} from '../../store/availableRidesSlice'
import { setUserRideId } from '../../store/rideSlice';
const MainPage = () => { 
  const Dispatch = useDispatch(); 
  const {userCategory} = useSelector(state=>state.userType)
  const {_id} = useSelector(state=>state.auth.user) 
  const [startingPoint, setstartingPoint] = useState('');
  const [destinationPoint, setdestinationPoint] = useState('');
  const [gender,setgender] = useState("Male");

  const navigate = useNavigate();

  async function handleClick(){
    await Dispatch(setStartingPoint(startingPoint));
    await Dispatch(setDestinationPoint(destinationPoint));
    await Dispatch(setGender(gender));
    
    await findMatch({
        startingPoint,
        destinationPoint,
        gender,
        userCategory,
        _id,
        retry:"false"
      }).then(res=> {
        
          Dispatch(setRides(res.data.rides))
          Dispatch(setUserRideId(res.data.userRideId))
          console.log(res.data)
          console.log(res.data.rides)
          navigate('/availableRides');
        
      });
    
    
  }

  return (
    <div>
      <Card title="Enter Starting And Destination Point" logo="logo">
          <div className={style.wrapper}>
            <InputForm 
              name="Starting Point" 
              address={startingPoint}
              setAddress={setstartingPoint}
            />
            <InputForm 
              name="Destination Point"
              address={destinationPoint}
              setAddress={setdestinationPoint}
            />
            
            <div className={style.lowerWrapper}>
              <Select
                labelId="gender"
                id="gender"
                value={gender}
                label="gender"
                onChange={(e)=>setgender(e.target.value)}
                className={style.select}
                sx={{
                  color: "white",
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'White',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'White',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                      },
                      '.MuiSvgIcon-root ': {
                        fill: "white !important",
                      }
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"No Prefrence"}>No Prefrence</MenuItem>
              </Select>
              <Button text="find Ride" onClick={handleClick}/>
            </div>

          </div>

      </Card>
    </div>
    
  )

}

export default MainPage
