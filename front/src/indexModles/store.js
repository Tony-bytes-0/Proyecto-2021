import { configureStore } from '@reduxjs/toolkit'

//Controladores de Sintomas
import activeSymptoms from './features/Symptoms/ActiveSymptoms'
import symptomList from './features/Symptoms/symptomList'

//Controladores de Examenes de Sangre
import activeEmatology from './features/ematology/activeEmatology'
import ematologyList from './features/ematology/ematologyList'

export default configureStore({
  reducer: {
    activeSymptoms, symptomList,
    
    activeEmatology, ematologyList
  }
})