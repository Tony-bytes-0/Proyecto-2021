import { createSlice } from '@reduxjs/toolkit'

let initialValue = {}

export const loginController = createSlice({
  name: 'name',
  initialState: initialValue,
  reducers: {
    
    add: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    remove: (state, action) => {
      const found = state.find( loginController =>  loginController === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

  }
})

export const { add, remove } = loginController.actions
export default loginController.reducer