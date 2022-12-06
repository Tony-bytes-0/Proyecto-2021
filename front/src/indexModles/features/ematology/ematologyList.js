import { createSlice } from '@reduxjs/toolkit'

let ematologyListStatic = ['Hematologuia Completa','Prueba de alcochol','leucemias','linfomas','Hemostasia ','Trombosis ','Determinación de hemoglobina']

export const ematologyList = createSlice({
  name: 'ematologyList',
  initialState: ematologyListStatic,
  reducers: {
    
    addEmatology: (state, action) => {
      state.push(action.payload)//agregar el valor a la lista
    },

    removeEmatology: (state, action) => {
      const found = state.find( ematology =>  ematology === action.payload)
      if (found){//si conseguiste el NOMBRE en la lista, eleminar uno de ellos usando splice *
        state.splice(state.indexOf(found), 1)
      }
    },

    showList: (state, action) => {
        console.log( state )
    }
  }
})

export const { addEmatology, removeEmatology, showList} = ematologyList.actions
export default ematologyList.reducer