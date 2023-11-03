import cytoscape from "cytoscape";

const cy = cytoscape({
  container: document.getElementById("cy"), // Specify the DOM element where the graph will be rendered
  elements: [
    /* Your graph data goes here */
  ],
  style: [
    /* Your style rules go here */
  ],
});

cy.add({ data: { id: "node1" } }); // Add a node
cy.add({ data: { id: "edge1", source: "node1", target: "node2" } }); // Add an edge
cy.layout({ name: "circle" }).run();

cy.style()
  .selector("node")
  .style({
    "background-color": "blue",
    label: "data(label)",
  })
  .update();

cy.style()
  .selector("node")
  .style({
    "background-color": "blue",
    label: "data(label)",
  })
  .update();

const selectedNodes = cy.$("node:selected");
