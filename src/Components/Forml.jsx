// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import Button from "./Button";
// import { useMutation, useQueryClient } from "react-query";

// // This component fetches data from the server

// const Form_ = ({ token }) => {
//   // Query the Data
//   const { data, isLoading_, isError_ } = useQuery("myDataKey", fetchDataName);
//   const [selectedDataset, setSelectedDataset] = useState(""); // To store the selected dataset
//   const [isLoading, setIsLoading] = useState(false);
//   const queryClient = useQueryClient();
//   // Handler for dataset selection
//   const handleDatasetChange = (event) => {
//     setSelectedDataset(event.target.value);
//   };

//   console.log("thsi si the toke", token);
//   // Handler for form submission (you can upload the selected dataset here)
//   //  const HandleMutation = (dateObject) => {
//   //   return useMutation(
//   //     async () => {
//   //       // Your mutation logic here, e.g., making an API request
//   //            const response = await fetch(`${token}/data/patient_name`, {
//   //       method: 'GET',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       // Add any necessary headers and data here
//   //       // body: JSON.stringify(dateObject)
//   //     });

//   //       if (!response.ok) {
//   //         throw new Error('Mutation failed');
//   //       }

//   //       // Invalidate and refetch related queries
//   //       queryClient.invalidateQueries('yourQueryKey');

//   //       // Return the updated data if needed
//   //       return response.json();
//   //     },
//   //     {
//   //       onSuccess: (data) => {
//   //         // Handle success, if needed
//   //         console.log('Mutation succeeded!', data);
//   //       },
//   //     }
//   //   );
//   // };

//   //  const mutation = HandleMutation({ dataset_name: 'selectedDataset' });

//   useEffect(() => {
//     // Run the effect when data is loaded
//     if (!isLoading_ && !isError_) {
//       // Do something with the fetched data
//       console.log(data);
//     }
//   }, [data, isError_, isLoading]);

//   return (
//     <div>
//       <div>
//         <h2>Choose a Dataset to Upload</h2>
//         <form>
//           <div>
//             <label htmlFor="chooseDataset">Select a Dataset:</label>
//             <select
//               id="chooseDataset"
//               name="chooseDataset"
//               onChange={handleDatasetChange}
//               value={selectedDataset}
//             >
//               <option value="">Select a dataset</option>
//               {console.log("Hello world", token)}
//               {console.log(data)}

//               {isLoading_ ? (
//                 <p>Loading data...</p>
//               ) : isError_ ? (
//                 <p>Error: {isError_.message}</p>
//               ) : (
//                 <div>
//                   {Object.entries(data).map(([id, value]) => (
//                     <option key={id}>{value}</option>
//                   ))}
//                 </div>
//               )}

//               {/* { data.map(([id, value]) => (

//               <option key={id} >
//                 {value}
//               </option>
//             ))
//           } */}
//             </select>
//           </div>
//           <div>
//             {/* <Button text ={"Upload"}  onClick ={(e) => {
//             e.preventDefault();
//           mutation.mutate(); // Trigger the mutation
//         }}
//         disabled={mutation.isLoading}
//       >
//         {mutation.isLoading ? 'Loading...' : 'Cool Blue Button'} </Button> */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// async function fetchDataName() {
//   try {
//     const response = await fetch("http://127.0.0.1:5000//data/dataset_name");

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("Hello here is the data that i waant to fetch ");
//     console.log(data);
//     return data;
//   } catch (error) {
//     // Handle any errors that occurred during the fetch
//     throw new Error("Error fetching data: " + error.message);
//   }
// }

// export default Form_;
