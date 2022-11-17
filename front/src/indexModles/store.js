import { configureStore } from '@reduxjs/toolkit'
import activeSymptoms from './features/Symptoms/ActiveSymptoms'
import symptomList from './features/Symptoms/symptomList'

export default configureStore({
  reducer: {
    activeSymptoms,
    symptomList
  }
})