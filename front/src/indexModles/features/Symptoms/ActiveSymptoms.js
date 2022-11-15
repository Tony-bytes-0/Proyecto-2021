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
      //console.log(Object.values(action.payload))
    }
  }
})

export const {addSymptom} = activeSymptoms.actions
export default activeSymptoms.reducer

