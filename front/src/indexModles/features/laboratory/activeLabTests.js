import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = []

export const activeLabTests = createSlice({
  name: 'activeLabTests',
  initialState:exampleObjects,
  reducers: {
    
    addActiveLabTest: (state, action) => {
      state.push({id:uuid(), body: action.payload})
    },

    removeActiveLabTest: (state, action) => {
      const found = state.find( labTest =>  labTest.body === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    }
  }
})

export const { addActiveLabTest, removeActiveLabTest } = activeLabTests.actions
export default activeLabTests.reducer