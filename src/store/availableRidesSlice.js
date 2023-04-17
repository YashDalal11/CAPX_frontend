import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    rides:'',
}

const availableRidesSlice = createSlice({
    name:'availableRide',
    initialState,
    reducers: {
      setRides(state,action){
        state.rides = action.payload
      }
    },
})

export const { setRides} = availableRidesSlice.actions
export default availableRidesSlice.reducer