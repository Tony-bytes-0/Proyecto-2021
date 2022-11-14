import { configureStore } from '@reduxjs/toolkit'
import activeSymptoms from './features/Symptoms/ActiveSymptoms'

export default configureStore({
  reducer: {
    activeSymptoms},
})