import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    partner:''
}

const partnerSlice = createSlice({
    name: 'partner',
    initialState,
    reducers: {
      setPartner(state,action) {
        state.partner = action.payload
      },
      
      
    },
})

export const { setPartner } = partnerSlice.actions
export default partnerSlice.reducer