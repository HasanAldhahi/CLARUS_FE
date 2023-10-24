import React from "react";

function Upload() {
  return <div>Upload</div>;
}

// /data/dataset_name'
async function fetchDataFunction() {
  try {
    const response = await fetch("http://127.0.0.1:5000");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    throw new Error("Error fetching data: " + error.message);
  }
}

export default Upload;
