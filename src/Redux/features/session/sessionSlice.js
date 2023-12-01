// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// Define the initial state and the slice using createSlice
const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSession.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSession.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Create an async thunk using createAsyncThunk
export const fetchSession = createAsyncThunk('session/fetchSession', async () => {
    return axios.get("http://127.0.0.1:5000")
    .then(res=>res.data);
});

export default sessionSlice.reducer
