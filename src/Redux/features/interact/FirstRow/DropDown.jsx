import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { setPatientNumber } from "./patientSlice";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

import { fetchpatient } from "./patientSlice";

const DropDown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [patientData, setPatientData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(0);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.session);
  const {
    dataList,
    status,
    status_dataSet,
    error,
    patientList,

    dataSet,
    dataName,
  } = useSelector((state) => {
    return state.form;
  });

  const { patientDataList, selected_patient } = useSelector(
    (state) => state.patient
  );

  const handleSelectChange = (event) => {
    setSelectedPatient(event.target.value);
    const selectedIndex = event.target.options.selectedIndex;
    dispatch(
      setPatientNumber(
        event.target.options[selectedIndex].getAttribute("data-key")
      )
    );
    console.log(
      "the selectd patient number",
      event.target.options[selectedIndex].getAttribute("data-key")
    );

    setDropdownOpen(false); // Close the dropdown when an item is selected
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log(token, dataName);
    console.log("Hello this is Drop down");
    // setPatientData(

    console.log(patientData);
    const handleOutsideClick = (event) => {
      // Close the dropdown if the click is outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      {/* Trigger button */}
      {/* <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
      >
        Patient Options
      </button> */}
      {/* Dropdown content */}

      <AnimatePresence>
        {/* {isDropdownOpen && ( */}
        <motion.div
          initial={{ opacity: 0, y: -10, x: -30 }}
          animate={{ opacity: 1, y: 0, x: 60 }}
          exit={{ opacity: 0, y: -10, x: -30 }}
          transition={{ duration: 0.2 }}
          className="origin-top-right  right-0 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          {/* use the Selection component with other components like popovers etc. */}

          <select
            id="chooseDataset"
            name="chooseDataset"
            className=" px-4 py-2 text-sm text-gray-700  hover:bg-gray-300 border-2 border-red-200"
            value={selectedPatient}
            onChange={handleSelectChange}
          >
            {Object.entries(patientDataList[0]).map(([id, value]) => {
              return (
                <option
                  key={`${id}`}
                  data-key={`${id}`}
                  className=" text-sm text-gray-700 wd-30 hover:bg-gray-300 border-2 border-red-200"
                >
                  {`${patientList[id]} (In ${value[0]},  True label:${value[1]},Predicted label: ${value[2]}, GNNs prediction confidence: ${value[3]})`}
                </option>
              );
            })}
          </select>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
