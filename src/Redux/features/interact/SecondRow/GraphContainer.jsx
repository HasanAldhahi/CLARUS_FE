// // GraphContainer.js

// import React, { useEffect } from "react";
// import cytoscape from "cytoscape";

// const GraphContainer = ({ patientsGraphData }) => {
//   useEffect(() => {
//     // Create a new Cytoscape instance
//     const cy = cytoscape({
//       container: document.getElementById("cy"), // Provide the ID of the HTML element where you want to render the graph
//       elements: convertDataToCytoscapeElements(patientsGraphData),
//       style: [
//         {
//           selector: "node",
//           style: {
//             label: "data(label)",
//           },
//         },
//         {
//           selector: "edge",
//           style: {
//             label: "data(id)",
//           },
//         },
//       ],
//     });

//     // Cleanup on component unmount
//     return () => {
//       cy.destroy();
//     };
//   }, [patientsGraphData]);

//   // Function to convert your data to Cytoscape elements
//   const convertDataToCytoscapeElements = (data) => {
//     const elements = [];

//     // Loop through patient data
//     data.forEach((patientData, index) => {
//       // Add nodes
//       const nodes = patientData[0].data.map((node) => ({
//         data: {
//           id: node[1], // Assuming node[1] is the node ID
//           label: node[0], // Assuming node[0] is the label
//         },
//       }));

//       // Add edges
//       const edges = patientData[1].data.map((edge) => ({
//         data: {
//           source: edge[0], // Assuming edge[0] is the source node ID
//           target: edge[1], // Assuming edge[1] is the target node ID
//           id: edge[2], // Assuming edge[2] is the edge ID
//         },
//       }));

//       elements.push(...nodes, ...edges);
//     });

//     return elements;
//   };

//   return <div id="cy" style={{ height: "600px" }} />;
// };

// export default GraphContainer;
import React, { useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { useSelector } from "react-redux/es/hooks/useSelector";

const GraphContainer = () => {
  const { patientsGraphData, selected_patient } = useSelector((state) => {
    // console.log("the state of the graph", state);
    return state.patient;
  });
  useEffect(() => {
    console.log(
      "this is the data of the selected patient",

      selected_patient
    );
    console.log("array", patientsGraphData[selected_patient]);
    // Initialize your Cytoscape graph here
    // const cy = window.cy;
    // cy.add({
    //   nodes: [
    //     { data: { id: "node1", label: "Node 1" } },
    //     { data: { id: "node2", label: "Node 2" } },
    //     // Add more nodes as needed
    //   ],
    //   edges: [
    //     { data: { source: "node1", target: "node2" } },
    //     // Add more edges as needed
    //   ],
    // });
  }, []);

  return (
    <CytoscapeComponent
      containerID="cy"
      elements={[]}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default GraphContainer;
