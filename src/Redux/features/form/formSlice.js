// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// Define the initial state and the slice using createSlice
// import { useDispatch, useSelector } from "react-redux";



const formSlice = createSlice({
  name: 'form',
  initialState: {
    dataList: [],
    status: 'idle',
    status_dataSet: "idle",
    error: null,
    patientList: [],
    dataSet: [],
    dataName: "",
  },

  reducers: {
    setPatient: (state, action) => {
      state.patientList = action.payload
    },
    setDataName: (state , action) => {
      state.dataName = action.payload
  }
},

  extraReducers: (builder) => {

    builder
    // for fetchin the form
      .addCase(fetchform.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dataList = action.payload;
      })
      .addCase(fetchform.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchform.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // for fetching the data set


  },
});
// Create an async thunk using createAsyncThunk
export const fetchform = createAsyncThunk('form/fetchform', async () => {
  
    return axios.get("http://127.0.0.1:5000/data/dataset_name")
    .then(res=>res.data);
});


export const  {setPatient, setDataName} =  formSlice.actions
export default formSlice.reducer
