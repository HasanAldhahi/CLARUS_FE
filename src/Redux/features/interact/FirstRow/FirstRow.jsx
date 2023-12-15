import React, { useEffect } from "react";

import { useState } from "react";
import Patient from "./Patient";

function FirstRow() {
  const [showMore, setShowMore] = useState(true);

  const collapse = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`tile bg-teal-500 col-span-full ${
        showMore ? "h-64" : "h-12"
      }  flex `}
    >
      <div style={{ width: "5%" }} className="w-1/10 bg-gray-300">
        {/* <!-- Content for the 20% width window --> */}
        {showMore ? (
          <button className="p-4" onClick={collapse}>
            -
          </button>
        ) : (
          <button className="p-4" onClick={collapse}>
            +
          </button>
        )}
      </div>

      {/* <!-- 80% width window --> */}

      <div
        style={{ width: "95%" }}
        className={`w-4/5 bg-gray-500 ${showMore ? "visible" : "hidden"}`}
      >
        {/* <!-- Content for the 80% width window --> */}
        <Patient></Patient>
      </div>
    </div>
  );
}
export default FirstRow;
