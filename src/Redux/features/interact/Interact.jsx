import React from "react";

import FirstRow from "./FirstRow/FirstRow";
import SecondRow from "./SecondRow/SecondRow";

// In this component we make the layers of the page usin cytoscape js
// and fetch the data from different slices and we make huge state for the
// fetch the data from the patient init using the patients list
// display the data as drop down menu
// structure the page as grid

function Interact() {
  return (
    <section className="text-gray-600 body-font py-8">
      <div className="container px-5 py-24 mx-auto">
        <div className="container m-auto grid grid-cols-12 grid-rows-12 md:grid-cols-5 lg:grid-cols-8 gap-4">
          <FirstRow />

          <div className="tile bg-amber-500 row-start-2 row-end-12 col-span-1 md:col-span-2 lg:col-span-8">
            <h1 className="tile-marker">
              <SecondRow />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interact;
