import { createSlice } from '@reduxjs/toolkit'

export const allergieList = createSlice({
  name: 'Allergias',
  initialState: [],
  reducers: {
    
    addAllergie: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeAllergie: (state, action) => {
      const found = state.find( allergieList =>  allergieList === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

    updateAllergies: (state, action) => {
        return state = action.payload
    }
    

  }
})

export const { addAllergie, removeAllergie, updateAllergies } = allergieList.actions
export default allergieList.reducer