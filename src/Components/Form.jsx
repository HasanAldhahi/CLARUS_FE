import React from "react";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";

function Form({ token }) {
  const { data, isLoading, isError } = useQuery("datalist", fetchDataFunction);
  const [selectedDataset, setSelectedDataset] = useState("");
  const [patientList, setPatientList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Functions for handling state changes
  // for saving the value of the field for the data set name
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

  // for the Button when u press and send the name of the dataset to the server
  const upload = async (event) => {
    // const todo = { selectedDataset };

    event.preventDefault();
    console.log(`/data/name`);
    const patientList = await fetch(
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
      // response = await response.json();
      console.log(response);
      if (response.ok) {
        response = response.json();
        console.log(response);
        setIsVisible(true);
      } else {
        console.log("There is an error with the response");
      }

      return response;
    });

    setPatientList(patientList);
  };

  // for final rendering the components

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
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
              {console.log("Hello token", token)}
              {console.log("hello data", data)}
              {Object.entries(data).map(([id, value]) => (
                <option key={id}>{value}</option>
              ))}
            </select>
            <button type="submit" value="Add Todo" onClick={upload}>
              Upload
            </button>
          </div>
        </form>
      </div>
      {isVisible && (
        <div>
          <h2>List of Names:</h2>
          <ul>
            {patientList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// for fetching the dataset names for the
async function fetchDataFunction() {
  try {
    const response = await fetch("http://127.0.0.1:5000//data/dataset_name");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetching data" + data);
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    throw new Error("Error fetching data: " + error.message);
  }
}

export default Form;
