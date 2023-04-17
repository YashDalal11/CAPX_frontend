import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isAuth:false,
    user:null,
    otp:{
        phone:'',
        hash:'',
    }
 }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state,action) {
      const {user} = action.payload
      state.user = user
      state.isAuth = true
    },
    setOtp(state,action){
        const {phone,hash} = action.payload
        state.otp.phone = phone
        state.otp.hash = hash
    },
    setUserActivate(state){
      state.user.activated=true
    }
    
  },
})

export const { setAuth, setOtp,setUserActivate} = authSlice.actions
export default authSlice.reducer