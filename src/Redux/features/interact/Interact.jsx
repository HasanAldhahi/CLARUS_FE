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
          {/* 
        
          <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
            <h1 className="tile-marker">THREE</h1>
          </div>
          <div className="tile bg-lime-600 lg:col-start-4 lg:col-span-2">
            <h1 className="tile-marker">FOUR</h1>
          </div>
          <div className="tile bg-green-600">
            <h1 className="tile-marker">FIVE</h1>
          </div>
          <div className="tile bg-emerald-500">
            <h1 className="tile-marker">SIX</h1>
          </div>
          <div className="tile bg-teal-500">
            <h1 className="tile-marker">SEVEN</h1>
          </div>
          <div className="tile bg-purple-500">
            <h1 className="tile-marker">EIGHT</h1>
          </div>
          <div className="tile bg-pink-500 row-start-5 md:col-span-full">
            <h1 className="tile-marker">NINE</h1>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Interact;
