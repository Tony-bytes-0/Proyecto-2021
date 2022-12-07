import { createSlice } from '@reduxjs/toolkit'

let labTestStatic = ['Análisis de orina.','Analisis de eces','Análisis de cálculos renales','Cultivo de esputo','Hemostasia ','Trombosis ','Determinación de hemoglobina']

export const labTestList = createSlice({
  name: 'labTestList',
  initialState: labTestStatic,
  reducers: {
    
    addLabTest: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeLabTest: (state, action) => {
      const found = state.find( labTest =>  labTest === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

    showList: (state, action) => {
        console.log( state )
    }
  }
})

export const { addLabTest, removeLabTest, showList} = labTestList.actions
export default labTestList.reducer