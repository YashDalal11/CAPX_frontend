import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    userCategory:'',
 }

const userTypeSlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    setUserTypeRideGiver(state) {
      state.userCategory = 'Ride Giver'
    },
    setUserTypeRideTaker(state) {
      state.userCategory = 'Ride Taker'
    },
    
  },
})

export const { setUserTypeRideGiver, setUserTypeRideTaker } = userTypeSlice.actions
export default userTypeSlice.reducer