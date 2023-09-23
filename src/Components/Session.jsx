import React from 'react';


import { useQueries } from '@tanstack/react-query';
import { useQuery } from 'react-query';

import Form from './Form';
import axios from 'axios';
import { QueryClient } from "react-query"


// const queryClient = new QueryClient()

// export default function Session() {
//   const [dataNameQuery, tokenQuery] = useQueries({
//     queries: [
//       {
//         queryKey: ['dataSetNames'],
//         queryFn: () =>
//           axios
//             .get('http://127.0.0.1:5000/')
//             .then((res) => res.data),
//       },

//       {
//         queryKey: ['users'],
//         queryFn: () =>
//           axios
//             .get('http://127.0.0.1:5000/data/dataset_name')
//             .then((res) => res.data),
//       },
//     ],
//   });

//   if (dataNameQuery.isLoading) return 'Loading Token...';
//   if (tokenQuery.isLoading) return 'Loading DatasetNames...';

//   if (dataNameQuery.error)
//     return 'An error has occurred: ' + dataNameQuery.error.message;

//   if (tokenQuery.error)
//     return 'An error has occurred: ' + tokenQuery.error.message;

//   return (
    
//     <></>
     
//   );
// }

function Session() {

    const { data, isLoading, isError } = useQuery('myDataKey', fetchDataFunction);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
    
      <Form/> 

    </div>
  );
}


async function fetchDataFunction() {
  try {
    const response = await fetch('http://127.0.0.1:5000');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    throw new Error('Error fetching data: ' + error.message);
  }
}


export default Session