import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    startingPoint:'',
    startingPointCoordinates:'',
    destinationPoint:'',
    destinationPointCoordinates:'',
    gender:'',
    userRideId:'',
    rideStarted:''
}

const rideSlice = createSlice({
    name: 'ride',
    initialState,
    reducers: {
      setStartingPoint(state,action) {
        // console.log(action.payload)
        state.startingPoint = action.payload
      },
      setDestinationPoint(state,action) {
        // console.log(action.payload)
        state.destinationPoint = action.payload
      },
      setGender(state,action) {
        // console.log(action.payload)
        state.gender = action.payload
      },
      setUserRideId(state,action){
        state.userRideId = action.payload
      },
      setRideStarted(state){
        state.rideStarted = "true"
      },
      setStartingPointCoordinates(state,action){
        console.log("spc")
        console.log(action.payload)
        state.startingPointCoordinates=action.payload;
      },
      setDestinationPointCoordinates(state,action){
        console.log("dpc")
        console.log(action.payload)
        state.destinationPointCoordinates=action.payload;
      }
      
    },
  })


export const { setStartingPoint,setDestinationPoint,setGender,setUserRideId,setRideStarted,setStartingPointCoordinates,setDestinationPointCoordinates } = rideSlice.actions
export default rideSlice.reducer