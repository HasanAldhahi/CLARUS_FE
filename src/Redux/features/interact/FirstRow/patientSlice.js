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
        state.status_dataSet = 'succeeded';
        state.patientDataList.push(action.payload);
      })
      .addCase(fetchpatient.pending, (state) => {
        state.status_dataSet = 'loading';
      })
      .addCase(fetchpatient.rejected, (state, action) => {
        state.status = 'failed';
        state.status_dataSet = action.error.message;
      })
      .addCase(fetchDataSet.fulfilled, (state, action) => {
        state.status_graph = 'succeeded';
        state.patientsGraphData = action.payload ; 
      })
  },
});
// export const fetchpatient = createAsyncThunk('patient/fetchpatient', async ({token, dataName, index, graph_id}) => {
//     return axios.get(`http://127.0.0.1:5000/${token}/patients/init?patient_id=${index}&graph_id=${graph_id}&dataset_name=${dataName}`)
//     .then(res=>res.data);
// });



export const fetchpatient = createAsyncThunk('patient/fetchpatient',  async ({token, dataName, graph_id, patientLength} ) => {  
    const dataSet = [];
    console.log("bitch", token, patientLength, graph_id)
    for (let patient_id = 0; patient_id < patientLength; patient_id++) {

 try {
  const response = await axios.get(
    `http://127.0.0.1:5000/${token}/patients/init?patient_id=${patient_id}&graph_id=${graph_id}&dataset_name=${dataName}`
    
  );

  dataSet.push(response.data);
} catch (error) {
  if (error.response && error.response.status === 404) {
    console.log(`Patient ${patient_id} not found`);
    // Handle 404 error gracefully
  } else {
    console.error(`Error fetching patient ${patient_id}:`, error);
  }
}
      
    }
    console.log("dataset for the graph", dataSet)

    return dataSet
   

    
});



// // Create an async thunk using createAsyncThunk
export const fetchDataSet = createAsyncThunk('form/fetchDataSet',  async ({token, patientLength, graph_id} ) => {  
    const dataSet = [];
    console.log("bitch", token, patientLength, graph_id)
    for (let patient_id = 0; patient_id <= patientLength; patient_id++) {

 try {
  const response = await axios.get(
    `http://127.0.0.1:5000/${token}/data/dataset/?patient_id=${patient_id}&graph_id=${graph_id}`
  );

  dataSet.push(response.data);
} catch (error) {
  if (error.response && error.response.status === 404) {
    console.log(`Patient ${patient_id} not found`);
    // Handle 404 error gracefully
  } else {
    console.error(`Error fetching patient ${patient_id}:`, error);
  }
}
      
    }
    console.log("dataset for the graph", dataSet)

    return dataSet
   

    
});
export const  {setPatient} =  patientSlice.actions
export default patientSlice.reducer














