import React, { useEffect } from "react";

import { useState } from "react";
import GraphContainer from "./GraphContainer";

function SecondRow() {
  const [showMore, setShowMore] = useState(true);

  const collapse = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`tile bg-teal-500 col-span-full ${
        showMore ? "h-[50rem]" : "h-12"
      }  flex `}
    >
      <div style={{ width: "3%" }} className="w-1/10 bg-gray-300">
        {/* <!-- Content for the 20% width window --> */}
        {showMore ? (
          <button className="p-2 m-auto border-4" onClick={collapse}>
            -
          </button>
        ) : (
          <button className="p-2 m-auto border-4 " onClick={collapse}>
            +
          </button>
        )}
      </div>

      {/* <!-- 80% width window --> */}

      <div
        style={{ width: "97%" }}
        className={`w-4/5 bg-gray-500 ${showMore ? "visible" : "hidden"}`}
      >
        {/* <!-- Content for the 80% width window --> */}
        <GraphContainer />
      </div>
    </div>
  );
}
export default SecondRow;
