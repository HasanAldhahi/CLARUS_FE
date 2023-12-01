// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// Define the initial state and the slice using createSlice


const formSlice = createSlice({
  name: 'form',
  initialState: {
    dataList: [],
    status: 'idle',
    error: null,
    patientList: [],
  },
  reducers: {
    setPatient:
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchform.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchform.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchform.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Create an async thunk using createAsyncThunk
export const fetchform = createAsyncThunk('form/fetchform', async () => {
    return axios.get("http://127.0.0.1:5000//data/dataset_name")
    .then(res=>res.data);
});





export default formSlice.reducer
