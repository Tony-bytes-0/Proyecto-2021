import { createSlice } from '@reduxjs/toolkit'

const init = 'vacio'

export const userData = createSlice({
  name: 'userData',
  initialState:init,
  reducers: {
    
    addUserData: (state, action) => {
      return state = action.payload
    },

    returnUserData:(state, action ) => {
      return state
    }
  }
})

export const { addUserData, returnUserData } = userData.actions
export default userData.reducer