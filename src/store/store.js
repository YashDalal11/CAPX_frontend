import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice'
import activate from './activateSlice'
import userType from './userTypeSlice'
import ride from './rideSlice'
import availableRide from './availableRidesSlice'
import partner from './partnerSlice'
export const store = configureStore({
  reducer: {
    auth,
    activate,
    userType,
    ride,
    availableRide,
    partner
  },
})