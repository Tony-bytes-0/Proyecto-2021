import { createSlice } from '@reduxjs/toolkit'

const init = 'vacio'

export const userData = createSlice({
  name: 'userData',
  initialState:init,
  reducers: {
    
    addUserData: (state, action) => {
      return state = action.payload
    },

    clearData:(state, action ) => {
      return {
        "cedula":"",
        "name":"",
        "lastName":"",
        "gender":"",
        "cellphone":"",
        "emergencyNumber":"",
        "birthdate":"",
        "bloodType": "",
        "municipio":"",
        "parroquia":"",
        "sector":""
    }
    }
  }
})

export const { addUserData, clearData } = userData.actions
export default userData.reducer