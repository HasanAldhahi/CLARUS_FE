import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
export const Store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
