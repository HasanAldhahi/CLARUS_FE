import React from "react";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { fetchform } from "./formSlice";
import { fetchDataSet } from "../interact/FirstRow/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPatient, setDataName } from "./formSlice";
import { redirect } from "react-router-dom";
import { fetchpatient } from "../interact/FirstRow/patientSlice";

import { useNavigate } from "react-router-dom";

// YourReactComponent.js

// ########################################################################################################################
// # [0.] Component start ==================================================================
// ########################################################################################################################
function Form({ token }) {
  const dispatch = useDispatch();
  const {
    dataList,
    status,
    status_dataSet,
    error,
    patientList,
    dataSet,
    dataName,
  } = useSelector((state) => {
    return state.form;
  });

  const { patientDataList, patientsGraphData } = useSelector((state) => {
    return state.patient;
  });

  //   These useState are only needed here and the actual patientList will be in the Form JS

  // ########################################################################################################################
  // # [2.] Variables   ==================================================================
  // ########################################################################################################################
  const [isLoadingPatient, setLoadingPatient] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState("");
  const [List, setList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [redirectStatus, setRedirect] = useState(false);
  const navigate = useNavigate();

  // Functions for handling state changes
  // for saving the value of the field for the data set name

  // ########################################################################################################################
  // # [3.] Auxiliary Functions   ==================================================================
  // ########################################################################################################################
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
    dispatch(setDataName(event.target.value));
  };

  const upload = async (event) => {
    // const todo = { selectedDataset };
    event.preventDefault();

    setLoadingPatient(true);

    // for the Button when u press and send the name of the dataset to the server
    // The trigger to fetch:
    // 1. patient list

    const List = await fetch(
      `http://127.0.0.1:5000/${token}/data/patient_name`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: selectedDataset }),
      }
    ).then((response) => {
      // Access and use the response data here
      if (response.ok) {
        response = response.json();
        setIsVisible(true);
        console.log("list finished spinner off");
        setLoadingPatient(false);
      } else {
        console.log("There is an error with the response");
      }
      return response;
    });

    console.log("gnn mode here start");
    // 2.  GNN model
    fetch(`http://127.0.0.1:5000/${token}/gnn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataset_name: dataName }),
    }).then((response) => {
      // Access and use the response data here
      if (response.ok) {
        response = response.json();
      } else {
        console.log("There is an error with the gnn response");
      }
      return response;
    });

    //3. Patient Data in Patient List to be displayed in the form

    dispatch(setPatient(List));
    console.log(patientList);
    // 4. Graph Knowledge of the patient
    // this is for the drop down menu

    for (let index = 0; index < patientList.length; index++) {
      dispatch(fetchpatient({ token, dataName, index, graph_id: 0 }));
    }
    // patientList.forEach((el, index) =>
    //   dispatch(fetchpatient(token, dataName, index, 0))
    // );
    // console.log("loading patient list", patientList);
    // console.log(patientList);

    // pick the zero patient to get its data and display its data as graph.
    for (let index = 0; index < 457; index++) {
      dispatch(fetchDataSet({ token, patient_id: index, graph_id: 0 }));
    }
    console.log("this is from the graph data of patient ", patientsGraphData);

    // setRedirect(true);
  };

  // ########################################################################################################################
  // # [5.] useEffect Hook   ==================================================================
  // ########################################################################################################################

  useEffect(() => {
    dispatch(fetchform());
  }, []);

  useEffect(() => {
    if (redirectStatus == true) {
      navigate("/Interact");
      setRedirect(false);
    }
  }, [redirectStatus]);

  // ########################################################################################################################
  // # [6.] Rendering the Form Component  ==================================================================
  // ########################################################################################################################

  if (status === "loading") {
    return (
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
    );
  }

  if (status === "failed") {
    return (
      <>
        <p>Error</p>
      </>
    );
  }
  return (
    <div>
      <div>
        <h2>Choose a Dataset to Upload</h2>
        <form onSubmit={handleDatasetChange}>
          <div>
            <label htmlFor="chooseDataset">Select a Dataset:</label>
            <select
              id="chooseDataset"
              name="chooseDataset"
              value={selectedDataset}
              onChange={handleDatasetChange}
            >
              <option value="">Select a dataset</option>
              {console.log("This is the data list ", dataList)}
              {console.log("hello this is the patient List", patientList)}
              {console.log("This is the Dataset", dataSet)}

              {Object.entries(dataList).map(([id, value]) => (
                <option key={id}>{value}</option>
              ))}
            </select>
            <button type="submit" value="Add Todo" onClick={upload}>
              <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
                Upload
              </li>
            </button>
          </div>
        </form>
        {/* Spinning Loader begins */}
        <div>
          {isLoadingPatient && (
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
            ></div>
          )}
        </div>
        {/* Spinning loaer ends */}
      </div>
    </div>
  );
}
export default Form;
//
