import { configureStore } from '@reduxjs/toolkit'
//Controladores de Sintomas
import activeSymptoms from './features/Symptoms/ActiveSymptoms'
import symptomList from './features/Symptoms/symptomList'
//Controladores de Examenes de Sangre
import activeEmatology from './features/ematology/activeEmatology'
import ematologyList from './features/ematology/ematologyList'
//Controladores de Examenes de laboratorio
import activeLabTests from './features/laboratory/activeLabTests'
import labTestList from './features/laboratory/labTests'
//Controladores de Radiografias
import activeRadiography from './features/radiography/activeRadiography'
import radiographyList from './features/radiography/radiographyList'

//controlador del estado Register/Test
import registerController from  './features/registerController/registerController' 

//Datos del usuario - entidad person
import userData from './features/userData/userData'

//Datos retornados por Get a person
//import userList from './features/userData/userList'

export default configureStore({
  reducer: {
    activeSymptoms, symptomList,
    activeEmatology, ematologyList,
    activeLabTests, labTestList,
    activeRadiography, radiographyList,
    
    userData,
    registerController
  }
})