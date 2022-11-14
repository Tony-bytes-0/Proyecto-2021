import { createSlice } from '@reduxjs/toolkit'

const exampleObjects = [
  {id: "01", body: "fiebreEstatica", leve: false, moderado: false, severo: false},
  {id: "02", body: "tosEstatica", leve: false, moderado: false, severo: false},
]

export const activeSymptoms = createSlice({
  name: 'tasks',
  initialState:exampleObjects,
  reducers: {
    addSymptom: (state, action) => {
      state.push(action.payload)
      console.log(state, action)
    }
  }
})

export const {addSymptom} = activeSymptoms.actions
export default activeSymptoms.reducer

