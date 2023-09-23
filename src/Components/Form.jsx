import { upload } from '@testing-library/user-event/dist/upload';
import  { useState } from 'react';
import { useQuery } from 'react-query';



// This component fetches data from the server

const Form = () => {

    // Query the Data 
     const { data, isLoading, isError } = useQuery('myDataKey', fetchDataFunction);
     const [selectedDataset, setSelectedDataset] = useState(''); // To store the selected dataset
    
  // Handler for dataset selection
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

  // Handler for form submission (you can upload the selected dataset here)
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform the upload or other actions here
    console.log('Selected Dataset:', selectedDataset);
  };

  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  let dataset_options = data.map((d, index) => (
              <option key={index} value={d}>
                {d}
              </option>
            ))

  return (
   
    <div>
       <div>
      <h2>Choose a Dataset to Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chooseDataset">Select a Dataset:</label>
          <select id="chooseDataset" name="chooseDataset" onChange={handleDatasetChange} value={selectedDataset}>
            <option value="">Select a dataset</option>
           { dataset_options.map((dataset) => (dataset))};

          </select>
        </div>
        <div>
          <button onClick={upload} type="submit" disabled={!selectedDataset}>
            Upload
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

async function fetchDataFunction() {
  try {
    const response = await fetch('http://127.0.0.1:5000//data/dataset_name');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    throw new Error('Error fetching data: ' + error.message);
  }
}

export default Form;
