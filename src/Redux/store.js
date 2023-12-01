import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import sessionReducer from './features/session/sessionSlice'
import formReducer from './features/form/formReducer'


 const store = configureStore({
  reducer: {
   counter: counterReducer,
   session: sessionReducer,
   dataSetListNames: formReducer,
  },
})


export default store;

