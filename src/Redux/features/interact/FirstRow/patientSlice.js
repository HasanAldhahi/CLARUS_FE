// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// Define the initial state and the slice using createSlice
// import { useDispatch, useSelector } from "react-redux";
const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patientDataList: [],
    patientsGraphData: [],
    status_dataSet: "idle",
    status_graph: "idle",
    error: null,

  },
  reducers: {
    setPatient: (state, action) => {
      state.dataList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    // for fetchin the patient
      .addCase(fetchpatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patientDataList.push(action.payload);
      })
      .addCase(fetchpatient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchpatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDataSet.fulfilled, (state, action) => {
        state.status_graph = 'succeeded';
        state.patientsGraphData.push(action.payload);
      })
  },
});
export const fetchpatient = createAsyncThunk('patient/fetchpatient', async ({token, dataName, index, graph_id}) => {
    return axios.get(`http://127.0.0.1:5000/${token}/patients/init?patient_id=${index}&graph_id=${graph_id}&dataset_name=${dataName}`)
    .then(res=>res.data);
});
// // Create an async thunk using createAsyncThunk
export const fetchDataSet = createAsyncThunk('form/fetchDataSet',  async ({token, patient_id, graph_id} ) => {
    return axios.get(`http://127.0.0.1:5000/${token}/data/dataset/?patient_id=${patient_id}&graph_id=${graph_id}`)
    .then(res=>res.data).catch(error => console.log("Error fetching patient", patient_id))
    
});
export const  {setPatient} =  patientSlice.actions
export default patientSlice.reducer














