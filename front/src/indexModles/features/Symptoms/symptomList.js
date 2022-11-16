import { createSlice } from '@reduxjs/toolkit'

let symtompsList = ['Fiebre','Malestar','Etc','Dolor de Cabeza','Nauseas','Mareos','Tos','Tos Seca','Insomnio']

export const symptomList = createSlice({
  name: 'symtomList',
  initialState: symtompsList,
  reducers: {
    
    addSymptom: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeSymptom: (state, action) => {
      const found = state.find( symptom =>  symptom === action.payload)
      if (found){//si conseguiste el id en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
      
    }
  }
})

export const { addSymptom, removeSymptom} = symptomList.actions
export default symptomList.reducer