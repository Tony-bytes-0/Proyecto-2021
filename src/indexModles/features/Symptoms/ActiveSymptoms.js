import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid}  from 'uuid'

const exampleObjects = [
  {id: "01", body: "fiebreEstatica"},
  {id: "02", body: "tosEstatica"},
]

export const activeSymptoms = createSlice({
  name: 'tasks',
  initialState:exampleObjects,
  reducers: {
    
    addSymptom: (state, action) => {
      state.push({id:uuid(), body: action.payload})
    },

    removeSymptom: (state, action) => {
      const found = state.find( symptom =>  symptom.id === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    }
  }
})

export const { addSymptom, removeSymptom} = activeSymptoms.actions
export default activeSymptoms.reducer

