
import  { useState } from 'react';
import { useQuery } from 'react-query';
import Button from './Button';
import { useMutation, useQueryClient } from 'react-query';



// This component fetches data from the server

const Form = ({token}) => {

    // Query the Data 
<<<<<<< HEAD
     const { data, isLoading_, isError_ } = useQuery('myDataKey', fetchDataFunction);
     const [selectedDataset, setSelectedDataset] = useState(''); // To store the selected dataset
      const [isLoading, setIsLoading] = useState(false);
      const queryClient = useQueryClient();

    


=======
     const { data, isLoadingName, isErrorName} = useQuery('myDataKey', fetchDataName );
     const [selectedDataset, setSelectedDataset] = useState(''); // To store the selected dataset
        const { dataSet_upload , isLoadingData, isDataError } = useQuery('myDataKey', fetchDataSet);
>>>>>>> 5847536cdda6b9c30f97f10a378a7535e0963c58
    
  // Handler for dataset selection
  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

  console.log("thsi si the toke", token)
  // Handler for form submission (you can upload the selected dataset here)
<<<<<<< HEAD
   const HandleMutation = (dateObject) => {
    return useMutation(
      async () => {
        // Your mutation logic here, e.g., making an API request
             const response = await fetch(`${token}/data/patient_name`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add any necessary headers and data here
        // body: JSON.stringify(dateObject)
      });


        if (!response.ok) {
          throw new Error('Mutation failed');
        }

        // Invalidate and refetch related queries
        queryClient.invalidateQueries('yourQueryKey');

        // Return the updated data if needed
        return response.json();
      },
      {
        onSuccess: (data) => {
          // Handle success, if needed
          console.log('Mutation succeeded!', data);
        },
      }
    );
  };

   const mutation = HandleMutation({ dataset_name: 'selectedDataset' });


  console.log(data);
  if (isLoading_) {
    return <p>Loading...</p>;
  }

  if (isError_) {
    return <p>Error fetching data</p>;
  }

=======
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform the upload or other actions here
    // console.log('Selected Dataset:', selectedDataset);
  };
  if (isLoadingName) {
    return <p>Loading...</p>;
  }

  if (isErrorName) {
    return <p>Error fetching data</p>;
  }



  
async function fetchDataSet(selectedDataset) {

   try {
    const response = await fetch(`http://127.0.0.1:5000///${token}/data/patient_name`);
    
    if (!response.ok) {
      throw new Error('Dataset response was not ok');
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    throw new Error('Error fetching Dataset: ' + error.message);
  }

}

  

>>>>>>> 5847536cdda6b9c30f97f10a378a7535e0963c58

  return (
    <div>
       <div>
      <h2>Choose a Dataset to Upload</h2>
      <form >
        <div>
          <label htmlFor="chooseDataset">Select a Dataset:</label>
          <select id="chooseDataset" name="chooseDataset" onChange={handleDatasetChange} value={selectedDataset}>
            <option value="">Select a dataset</option>
<<<<<<< HEAD
            {console.log(data)}
            { Object.entries(data).map(([id, value]) => (
      
=======
            {console.log(Object.entries( data))}
            { Object.entries(data).map(([id, value]) => (
            
>>>>>>> 5847536cdda6b9c30f97f10a378a7535e0963c58
              <option key={id} >
                {value}
              </option>
            ))
          }
          </select>
        </div>
        <div>
<<<<<<< HEAD
           <Button text ={"Upload"}  onClick ={(e) => {
            e.preventDefault();
          mutation.mutate(); // Trigger the mutation
        }}
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? 'Loading...' : 'Cool Blue Button'} </Button>
=======
          <button onClick={upload(selectedDataset)} type="submit" disabled={!selectedDataset}>
            Upload
          </button>
>>>>>>> 5847536cdda6b9c30f97f10a378a7535e0963c58
        </div>
      </form>
    </div>
    </div>
  );
};



async function fetchDataName() {
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

// import React from 'react';
// import { useMutation } from 'react-query';
// import axios from 'axios';

// function postData(newData) {
//   return axios.post('/api/post-data', newData).then((response) => response.data);
// }



// function App() {
//   const [formData, setFormData] = React.useState({ title: '', body: '' });

//   const mutation = useMutation(postData);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     mutation.mutate(formData);
//   };

//   return (
//     <div className="App">
//       <h1>POST Data</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           />
//         </div>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <textarea
//             id="body"
//             name="body"
//             value={formData.body}
//             onChange={(e) => setFormData({ ...formData, body: e.target.value })}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {mutation.isError && <div>Error: {mutation.error.message}</div>}
//       {mutation.isSuccess && <div>Data successfully posted</div>}
//     </div>
//   );
// }

// export default App;


export default Form;
