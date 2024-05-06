import React, { useEffect } from "react";

import DropDown from "./DropDown";
import { useSelector } from "react-redux";

function Patient() {
  const { dataName } = useSelector((state) => {
    console.log("this is for the dataname from the patient ");
    console.log(state.form);

    return state.form;
  });

  const { token } = useSelector((state) => state.session);

  // useEffect(() => {
  //   gnnfetch();
  // });
  return (
    <div className="p-5">
      <div className="flex ">
        {/* First 50% width window */}
        <div className="flex-1 h-[10rem] bg-gray-300">
          <h1>Selected Patient: </h1>
          {/* Content for the first window */}
          <DropDown />
        </div>
        {/* Second 50% width window */}
        <div className="flex-1 h-full bg-gray-700">
          {/* Content for the second window */}
        </div>
      </div>
    </div>
  );
}

export default Patient;
