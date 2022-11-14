import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/sliceCounter'

export default configureStore({
  reducer: {counterReducer},
})