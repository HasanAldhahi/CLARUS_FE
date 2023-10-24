import React from "react";

import { useQuery } from "react-query";

import Form from "./Form";

function Session() {
  const { data, isLoading, isError } = useQuery("tokens", fetchDataFunction);
  // console.log("Session", data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }
  return (
    <div>
      {console.log("thsi si the data i am passing from session to Form", data)}

      <Form token={data} />
    </div>
  );
}
async function fetchDataFunction() {
  try {
    const response = await fetch("http://127.0.0.1:5000");
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

export default Session;
