import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import sessionReducer from './features/session/sessionSlice'
import formReducer from './features/form/formSlice'
import  patientReducer from "./features/interact/FirstRow/patientSlice"


 const store = configureStore({
  reducer: {
   counter: counterReducer,
   session: sessionReducer,
   form: formReducer,
   patient: patientReducer,

  },
})


export default store;


